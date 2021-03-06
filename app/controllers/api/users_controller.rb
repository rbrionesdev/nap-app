class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_page
  before_action :set_user, only: [:show, :destroy]


  def index
    render json: User.all
  end

  def show
    render json: @userDeviseTokenAuth::RegistrationsController
  end 

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: {errors: user.errors}, status: 422
    end
  end

  def update
    if(current_user.update(user_params))
      render json: current_user
    else
      render json: current_user.errors, status: 422
    end
  end

  def destroy
    @current_user.destroy
    # render json: @current_user
    redirect_to(new_user_session_path)
  end

  def leaderboard
    render json: {users: User.users_by_average.page(@page), total_pages: User.users_by_average.page(@page).total_pages}
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

  def set_page
    @page = params[:page] || 1
  end

end
