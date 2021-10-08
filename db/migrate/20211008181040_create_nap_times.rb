class CreateNapTimes < ActiveRecord::Migration[6.1]
  def change
    create_table :nap_times do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :nap, null: false, foreign_key: true

      t.timestamps
    end
  end
end
