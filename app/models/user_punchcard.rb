class UserPunchcard < ApplicationRecord
  belongs_to :user
  belongs_to :punchcard

  def punchcard_show

    select('up.punchcard_id AS punchcard_id, p.restaurant_id AS restaurant_id, r.name AS restaurant_name, up.current_points, p.total_points')
    .from('user_punchcards AS up')
    .joins('INNER JOIN punchcards AS p ON up.punchcard_id = p.id
    INNER JOIN restaurants AS r ON p.restaurant_id = r.id')
    .where('up.id = ?', userpunchcard_id)
  end

end
