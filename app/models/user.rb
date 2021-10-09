# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :nap_times, dependent: :destroy
  has_many :naps, through: :nap_times

  def self.users_by_average
    select('name, average_nap_time, id')
    .from('users')
    .where('average_nap_time IS NOT null')
    .order('average_nap_time DESC')
  end

  
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include DeviseTokenAuth::Concerns::User
  
end
