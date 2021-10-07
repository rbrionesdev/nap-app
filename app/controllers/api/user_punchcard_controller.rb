class Api::UserPunchcardController < ApplicationController
  before_action :set_user
  before_action :set_userPunchcard, only: [:show, :update, :destroy]

  def index
    user_punchcards = @user.userPunchcards.all
    render json: user_punchcards
  end

  def show
    render json: @UserPunchcard
  end

  def create
    @user_punchcard = User_punchcard.new(user_punchcard_params)

    if @userPunchcard.save
      render json: @userPunchcard
    else
      render json: {error: @userPunchcard.errors}, status: 422
    end
  end

  def destroy
    @userPunchcard.destroy
    render json: @userPunchcard
  end

  private

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_userPunchcard
      @userPunchcard = UserPunchcard.find(params[:id])
    end

    def userPunchcard_params
      params.require(:userPunchcard).permit(:expiration_date, :current_points, :user_id, :punchcard_id)
    end
end
