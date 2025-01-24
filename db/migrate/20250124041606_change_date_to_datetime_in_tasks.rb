class ChangeDateToDatetimeInTasks < ActiveRecord::Migration[7.2]
  def change
    change_column :tasks, :date, :datetime
  end
end
