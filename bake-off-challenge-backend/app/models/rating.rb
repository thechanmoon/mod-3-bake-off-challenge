class Rating < ApplicationRecord
  belongs_to :user
  belongs_to :bake

  before_validation :cast_score

  validates :score, inclusion: { in: "0".."10" }
  validates :user, uniqueness: { scope: :bake }


  def cast_score
    byebug
    self.score = score.to_i
  end
end
