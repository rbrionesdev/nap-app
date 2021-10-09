class CreateNaps < ActiveRecord::Migration[6.1]
  def change
    create_table :naps do |t|
      t.float :duration
      t.string :title
      t.text :description
      t.string :date
      t.string :hour

      t.timestamps
    end
  end
end
