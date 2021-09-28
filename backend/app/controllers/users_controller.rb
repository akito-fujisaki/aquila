class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = fetch_user
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render status: :ok
    else
      render :save_errors, status: :unprocessable_entity
    end
  end

  def update
    @user = fetch_user

    if @user.update(user_params)
      render status: :ok
    else
      render :save_errors, status: :unprocessable_entity
    end
  end

  def destroy
    fetch_user.destroy!
    head :ok
  end

  private

  def user_params
    params.require(:user).permit(:name, :email_address)
  end

  def fetch_user
    User.find(params[:id])
  end
end
