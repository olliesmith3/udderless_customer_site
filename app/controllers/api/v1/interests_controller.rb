class Api::V1::InterestsController < ApplicationController
  def index
    render json: Interest.all
  end

  def create
    interest = Interest.create(interest_params)
    render json: interest
  end

  private

  def interest_params
    params.require(:interest).permit(:first_name, :postcode, :email, :tel)
  end
end