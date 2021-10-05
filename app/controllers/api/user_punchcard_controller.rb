class Api::UserPunchcardController < ApplicationController
  before_action :set_user_punchcard, only: [:show, :update, :destroy]
  before_action :set_user

  def index
    user_punchcard = User_punchcard.all
    render json: user_punchcard
  end

  def show
    render json: @user_punchcard
  end

  def create
    @user_punchcard = User_punchcard.new(user_punchcard_params)

    if @patient.save
      render json: @user_punchcard
    else
      render json: {error: @user_punchcard.errors}, status: 422
    end
  end

  def destroy
    @user_punchcard.destroy
    render json: @user_punchcard
  end

  private

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_user_punchcard
      @user_punchcard = User_punchcard.find(params[:id])
    end

    def user_punchcard_params
      params.require(:user_punchcard).permit(:expiration_date, :current_punches, :user_id, :punchcard_id)
    end
end
