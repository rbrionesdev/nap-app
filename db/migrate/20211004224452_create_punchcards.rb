class CreatePunchcards < ActiveRecord::Migration[6.1]
  def change
    create_table :punchcards do |t|
      t.integer :total_punches
      t.text :description
      t.string :logo
      t.belongs_to :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
