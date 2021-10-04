class CreateUserPunchcards < ActiveRecord::Migration[6.1]
  def change
    create_table :user_punchcards do |t|
      t.integer :current_punches
      t.string :expiration_date
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :punchcard, null: false, foreign_key: true

      t.timestamps
    end
  end
end
