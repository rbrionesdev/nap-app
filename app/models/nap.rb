class Nap < ApplicationRecord
  has_many :nap_times, dependent: :destroy
  has_many :users, through: :nap_times

  def self.feed
    select('n.title, u.name, n.duration, n.date, n.description, u.id AS user_id, n.id, n.created_at, nt.created_at AS nap_scheduled')
    .from('naps AS n')
    .joins('INNER JOIN nap_times AS nt ON nt.nap_id = n.id
    INNER JOIN users AS u ON u.id=nt.user_id')
    .order('n.date')
  end
end
