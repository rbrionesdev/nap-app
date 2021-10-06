class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show, :destroy]


  def index
    render json: User.all
  end

  def show
    render json: @user
  end 

  def update
    if(current_user.update(user_params))
      render json: current_user
    else
      render json: current_user.errors, status: 422
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
    params.require(:user).permit(:name, :account_type, :email, :password)
  end

end
