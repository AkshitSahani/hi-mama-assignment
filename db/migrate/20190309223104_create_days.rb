class CreateDays < ActiveRecord::Migration[5.1]
  def change
    create_table :days do |t|
      t.string :teacher_name
      t.string :clock_in_time
      t.string :clock_out_time
      t.string :time_worked

      t.timestamps
    end
  end
end
