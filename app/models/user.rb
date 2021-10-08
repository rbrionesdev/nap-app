# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :nap_times, dependent: :destroy
  has_many :naps, through: :nap_times
  
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include DeviseTokenAuth::Concerns::User
  
end
