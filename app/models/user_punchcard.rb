class UserPunchcard < ApplicationRecord
  belongs_to :user
  belongs_to :punchcard
end
