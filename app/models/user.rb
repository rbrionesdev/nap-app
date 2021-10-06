# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :punchcards, through: :user_punchcards
  has_many :restaurants
  
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include DeviseTokenAuth::Concerns::User
  
end
