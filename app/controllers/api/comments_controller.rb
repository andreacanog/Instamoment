class Api::CommentsController < ApplicationController 

    # def show 
    #     @comment = Comment.find_by(id: params[:id])
    #     render :show
    # end


    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            # render :show
            # puts "inside save"
            return render json: @comment
        else
            puts "inside else"
            puts @comment.errors.full_messages
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])

        if @comment&.update(comment_params)
            render :show
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment&.destroy
            render json: { comment: nil }
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def comment_params
        puts "params: #{params}";
        params.require(:comment).permit(:post_id, :user_id, :body)
    end

end 