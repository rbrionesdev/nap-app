class CreateNaps < ActiveRecord::Migration[6.1]
  def change
    create_table :naps do |t|
      t.float :duration
      t.string :title
      t.text :description
      t.datetime :date

      t.timestamps
    end
  end
end
