class CreateTasks < ActiveRecord::Migration[7.2]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.references :user, null: false, foreign_key: true
      t.references :subject, null: false, foreign_key: true
      t.date :date
      t.timestamps
    end
  end
end
