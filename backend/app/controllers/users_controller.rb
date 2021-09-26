class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      head :ok
    else
      render 'save_errors', status: :unprocessable_entity
    end
  end

  def update; end

  def delete; end

  private

  def user_params
    params.require(:user).permit(:name, :email_address)
  end
end
