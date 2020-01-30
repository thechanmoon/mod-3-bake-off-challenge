class RatingsController < ApplicationController
  before_action :authorized, only: :create
  
  def create
    byebug
    # look up user with auth token
    rating = @user.ratings.create(rating_params)
    if rating.valid?
      render json: { message: "👍" }
    else
      render json: { errors: rating.errors.full_messages }, status: 400
    end
  end

  private

  def rating_params
    params.permit(:bake_id, :score)
  end

end