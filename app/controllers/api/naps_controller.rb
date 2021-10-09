class Api::NapsController < ApplicationController
  before_action :set_nap, only: [:show, :destroy, :update]

  def index
    naps = Nap.all 
    render json: naps
  end

  def show
    render json: @nap
  end

  def create
    @nap = Nap.new(nap_params)

    if @nap.save
      render json: @nap
    else
      render json: {error: @nap.errors}, status: 422
    end
  end

  def destroy
    @nap.destroy
    render json: @nap
  end

  def feed
    render json: Nap.feed
  end

  private
  def set_nap
    @nap = Nap.find(params[:id])
  end

  def nap_params
    params.require(:nap).permit(:title, :duration, :description, :date)
  end
end
