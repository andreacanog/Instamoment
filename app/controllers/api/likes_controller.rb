class Api::LikesController < ApplicationController
    before_action :require_logged_in

    def create
        @like = Like.new(like_params)

        @like.user_id = current_user.id

        if @like.save
            render :show
        else
            render json: { errors: @like.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @like = Like.find_by(id: params[:id])

        if @like&.update (like_params)
            render :show
        else
            render json: { errors: @like.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like&.destroy
            render json: { like: nil }
        else
            render json: { errors: @like.errors.full_messages }, status: :unprocessable_entity
        end

    end

    private
    def like_params
        params.require(:like).permit(:post_id, :user_id)
    end
end