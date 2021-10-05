class Api::RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :update, :destroy]

  def index
    restaurants = Restaurant.all
    render json: restaurants
  end

  def show
    render json: @restaurant
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)

    if @restaurant.save
      render json: @restaurant
    else
      render json: {error: @restaurant.errors}, status: 422
    end
  end

  def update
    @appointment.update(restaurant_params)
  end

  def destroy
    @restaurant.destroy
    render json: @restaurant
  end

  private
  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :city, :zip, :phone_number, :user_id)
  end
end
