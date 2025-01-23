class CreateSubjects < ActiveRecord::Migration[7.2]
  def change
    create_table :subjects do |t|
      t.string :name
      t.string :color
      t.string :teacher
      t.json :schedule

      t.timestamps
    end
  end
end
