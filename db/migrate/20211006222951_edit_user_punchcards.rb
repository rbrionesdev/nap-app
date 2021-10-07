class EditUserPunchcards < ActiveRecord::Migration[6.1]
  
  
  change_table :user_punchcards do |t|
    t.remove :current_punches
    t.integer :current_points
  end

end
