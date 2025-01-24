class Task < ApplicationRecord
  belongs_to :user
  belongs_to :subject
  has_one_attached :img
  
end
