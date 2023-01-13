class Api::PostsController < ApplicationController 
    wrap_parameters include: Post.attribute_names + [:photo]

    def index 

        current_followes = current_user.followees.pluck("followee_id")
        current_followes << current_user.id
        @posts = Post.where(user_id: current_followes).order(created_at: :desc)

        
        # @posts = Post.where(user_id: params[:user_id])
        render :index
    end

    def show 
        @post = Post.find(params[:id])
        @user = @post.user
        render :show
    end

    def create
        @post = Post.new(post_params)

        @post.user_id = current_user.id
        @user = current_user
        if @post.save!
          render :show
        else
          render json: @post.errors.full_messages, status: 422
        end
    end
    

    def update
        @post = Post.find(params[:id])
        @user = @post.user
        if @post&.update(post_params)
            render :show
        else
            render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @post = Post.find(params[:id])
        if @post&.destroy
            head :no_content
        else
            render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :title, :photo)
    end

end
