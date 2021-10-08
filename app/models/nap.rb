class Nap < ApplicationRecord
  has_many :nap_times, dependent: :destroy
  has_many :users, through: :nap_times
end
