class Day < ApplicationRecord
  validates :teacher_name, :clock_in_time, presence: true
end
