class Api::FollowsController < ApplicationController
    wrap_parameters include: Follow.attribute_names + ['followeeId', 'followerId']

    before_action :require_logged_in

    def create
        @follow = Follow.new(follow_params)

        @follow.follower_id = current_user.id
        if @follow.save!
            render :show
        else
            render json: { errors: @follow.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @follow = Follow.find_by(follower_id: current_user.id, followee_id: params[:id])
        
        if @follow&.destroy
            render json: { follow: nil }
        else
            render json: { errors: @follow.errors.full_messages }, status: :unprocessable_entity
        end

    end

    private
    def follow_params
        params.require(:follow).permit(:followee_id, :follower_id)
    end
end