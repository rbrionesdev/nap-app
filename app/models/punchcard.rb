class Punchcard < ApplicationRecord
  belongs_to :restaurant
  has_many :users, through: :user_punchcards
  has_many :rewards

  def punchcards_byuser
    # SELECT u.id AS user_id, u.name AS user_name, u.email, up.id, up.punchcard_id AS user_punchcards_id, p.description AS punch_descrip, p.restaurant_id, r.name AS restaurant_name
    # FROM users AS u
    # INNER JOIN user_punchcards AS up ON up.user_id = u.id
    # INNER JOIN punchcards AS p ON up.punchcard_id = p.id
    # INNER JOIN restaurants AS r ON p.restaurant_id = r.id
    # WHERE u.id = 109

    select('u.id AS user_id, u.name AS user_name, u.email, up.id, up.punchcard_id AS user_punchcards_id, p.description AS punch_descrip, p.restaurant_id, r.name AS restaurant_name')
    .from('users AS u')
    .joins('INNER JOIN user_punchcards AS up ON up.user_id = u.id
     INNER JOIN punchcards AS p ON up.punchcard_id = p.id
     INNER JOIN restaurants AS r ON p.restaurant_id = r.id')
     .where('u.id = ?')
     
  end

end
