class Task < ApplicationRecord
  belongs_to :user
  belongs_to :subject
  has_one_attached :img
  

  validates :title, presence: true
  validates :subject_id, presence: true

  validate :date_cannot_be_in_the_past 

  def date_cannot_be_in_the_past
    if date.present? && date < Date.today
      errors.add(:date, "can't be in the past")
    end
  end
  
end
