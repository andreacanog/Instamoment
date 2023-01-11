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
            # puts "comment saved #{@comment}"
            # debugger
            return render json: @comment
            # render :show
            # render 'api/comments/show'
            # render json: { message: "You did it!" }
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
    
        if @comment&.update(comment_params)
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
        # puts "comment_params: #{params}"
        params.require(:comment).permit(:post_id, :user_id, :body)
    end

end 