class EditPunchcardModel < ActiveRecord::Migration[6.1]

  change_table :punchcards do |t|
    t.remove :total_punches
    t.integer :total_points
  end
end
