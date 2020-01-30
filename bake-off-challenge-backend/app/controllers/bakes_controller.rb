class BakesController < ApplicationController
  before_action :authorize, only: :rate

  def index
    bakes = Bake.all
    render json: bakes
  end

  def show
    bake = Bake.find(params[:id])
    if bake
      render json: bake
    else
      render json: { error: "Not found!" }, status: 404
    end
  end

  def create
    bake = Bake.create(create_bake_params)
    if bake.valid?
      render json: bake
    else
      render json: { errors: bake.errors.full_messages }, status: 403
    end
  end

  def rate
    bake = Bake.update(rating: params[:rating])
    if bake.valid?
      render json: bake
    else
      render json: { errors: bake.errors.full_messages }, status: 403
    end
  end

  private

  def authorize
    byebug
  end

  def create_bake_params
    params.permit(:name, :image_url, :description)
  end
end