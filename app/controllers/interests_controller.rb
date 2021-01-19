class InterestsController < ApplicationController
  def new
    @interest = Interest.new
  end

  def create
    @interest = Interest.new(interest_params)

    if @interest.save
      redirect_to interest_path(@interest.id)
    else
      render 'new'
    end
  end

  def show
    @interest = Interest.find(params[:id])
  end

  private

  def interest_params
    params.require(:interest).permit(:first_name, :postcode, :email, :tel)
  end
end
