class Bake < ApplicationRecord
  validates :name, presence: true
  validates :image_url, presence: true
  
  def total_score
    self.ratings.sum(:score)
  end
end
