class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']

    def index 
      if params[:type] == "query"
        @users = User.where("username LIKE ?", params[:query])

      elsif (params[:type] == "suggestions")
          currentUserFollowees = current_user.followees.pluck("followee_id")
          currentUserFollowees.push(current_user.id)
          @users = User.where.not(id: currentUserFollowees).limit(5)

      else
        @users = User.all
      end

      render :index
    end
  
    def create
      @user = User.new(user_params)
  
      if @user.save
        login!(@user)
        render 'api/users/show'
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
      @user = User.find(params[:id])
      render 'api/users/user_post_show'
    end
  
    private
  
    def user_params
    
      params.require(:user).permit(:email, :username, :password, :name)
    end
end
  