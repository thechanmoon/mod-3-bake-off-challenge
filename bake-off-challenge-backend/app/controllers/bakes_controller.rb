class BakesController < ApplicationController
  def index
    @bakes = Bake.all
    render json: @bakes
  end
end