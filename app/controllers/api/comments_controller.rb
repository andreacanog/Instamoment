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
        if @comment.save
            return render json: @comment
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @comment = Comment.find_by(id: comment_params[:comment_id])
        updated_comment = {id: comment_params[:comment_id], body: comment_params[:body], post_id: comment_params[:post_id], user_id: comment_params[:user_id]}

        if @comment&.update(updated_comment)
            return render json: @comment
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # def destroy
    #     @comment = Comment.find_by(id: params[:id])
    #     if @comment&.destroy
    #         render json: { comment: nil }
    #     else
    #         render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
    #     end
    # end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.delete()
    end

    private
    def comment_params
        puts "comment_params: #{params}"
        params.require(:comment).permit(:post_id, :user_id, :body, :comment_id)
    end

end 