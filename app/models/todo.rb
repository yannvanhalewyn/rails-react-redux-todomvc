class Todo < ActiveRecord::Base
  validates_presence_of :title
  validates :title, length: {minimum: 1}
end
