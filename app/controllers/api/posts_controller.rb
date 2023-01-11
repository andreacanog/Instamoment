class Api::PostsController < ApplicationController 
    wrap_parameters include: Post.attribute_names + [:photo]

    def index 
        @posts = Post.all 
        render :index
    end

    def show 
        @post = Post.find(params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if @post.save!
          render json: { message: "You did it!" }
        else
          render json: @post.errors.full_messages, status: 422
        end
    end
    

    def update 
        @post = Post.find(params[:id])

        if @post&.update(post_params)
            render :show
        else
            render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @post = Post.find(params[:id])
        if @post&.destroy
            render json: { post: nil }
        else
            render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def post_params
        params.require(:post).permit(:title, :photo)
    end

end
