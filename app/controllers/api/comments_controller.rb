class Api::CommentsController < ApplicationController 

    def show 
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def index
        if (params[:post_id])
            @comments = Comment.where(post_id: params[:post_id])
        else  
            @comments = Comment.all
        end
        render :index
    end


    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id

        if @comment.save!
            render 'api/comments/show_comment_post'
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
    
        if @comment&.update(comment_params)
            render 'api/comments/show_comment_post'
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment&.destroy
            render 'api/comments/show_comment_post'
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # def destroy
    #     @comment = Comment.find(params[:id])
    #     @comment.delete()
    # end

    private
    def comment_params
        params.require(:comment).permit(:post_id, :user_id, :body)
    end

end 