class Punchcard < ApplicationRecord
  belongs_to :restaurant
  has_many :users, through: :user_punchcards
  has_many :rewards

end
