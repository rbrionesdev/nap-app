class Api::UserController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show, :destroy]


  def index
    render json: User.all
  end

  def show
    render json: @user
  end 

  def update
    if(@user.update(user_params))
      render json: @user
    else
      render json: @user.errors, status 422
    end
  end

  def destroy
    @user.destroy
    render json: @user
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email)
  end


end






