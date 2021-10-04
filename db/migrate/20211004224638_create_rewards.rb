class CreateRewards < ActiveRecord::Migration[6.1]
  def change
    create_table :rewards do |t|
      t.string :name
      t.string :description
      t.string :cost
      t.belongs_to :punchcard, null: false, foreign_key: true

      t.timestamps
    end
  end
end
