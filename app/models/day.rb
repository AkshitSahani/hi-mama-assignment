class Day < ApplicationRecord
  NAME_REGEX = /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/

  before_save { self.teacher_name = teacher_name.downcase }

  validates :teacher_name, :clock_in_time, presence: true
  validate :name_is_valid
  # validates :teacher_name, format: {with: NAME_REGEX, :multiline => true, message: 'needs to be of a correct format'}

  def name_is_valid
    if teacher_name != ''
      teacher_name_split = teacher_name.split(' ')
      valid = true
      teacher_name_split.each { |name|
        if name.length < 2
          valid = false
        end
      }
      if teacher_name.split(' ').length < 2
        errors[:base] << 'Please enter your full name (min two words)'
      elsif !valid
        errors[:base] << 'Each name must be at least two characters'
      elsif !NAME_REGEX.match(teacher_name)
        errors[:base] << 'Please enter a valid name'
      elsif teacher_name.length > 30
        errors.add(:teacher_name, 'cannot be longer than 30 letters')
      end
    end
  end

end
