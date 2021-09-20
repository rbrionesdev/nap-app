class Api::ThingsController < ApplicationController
  before_action :set_model, only: [:show, :destroy]
  
    def index
      model = Model.all
      render json: model
    end
  
    def show
      render json: @model
    end
  
    def create
      @model = Model.new(model_params)
  
      if @patient.save
        render json: @model
      else
        render json: {error: @model.errors}, status: 422
      end
    end

    def destroy
      @model.destroy
      render json: @model
    end
  
    private
      def set_model
        @model = Model.find(params[:id])
      end
  
      def model_params
        params.require(:model).permit(:attribute)
      end
end
