class Subject < ApplicationRecord
  #validates :validate_schedule, presence: true

  #validates :color, format: { with: /\A#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\z/ }
  private
  #def validate_schedule
  #  return if schedule.is_a?(Hash) &&
   #           schedule.values.all? do |hours|
    #            hours.is_a?(Array) &&
     #           hours.all? { |time| time.match?(/\A\d{1,2}:\d{2}-\d{1,2}:\d{2}\z/) }
      #        end
  
    #errors.add(:schedule,
     # "debe ser un Hash con días como claves y horas como arreglos en el formato 'HH:MM-HH:MM'")
  #end
end
