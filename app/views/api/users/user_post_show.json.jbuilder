json.user do
  json.extract! @user, :id, :username, :name, :bio, :created_at, :updated_at, :followee_ids, :follower_ids, :post_ids
end
  json.user do
    json.extract! @user, :id, :username, :name
  #   json.profilePictureUrl url_for(@user.profile_picture) if @user.profile_picture.attached?
    json.profilePictureUrl @user.profile_picture.url #if @user.profile_picture.attached?
  end

  json.posts do 
    @user.posts.each do |post|
      json.set! post.id do  
        json.extract! post, :id, :user_id, :title
        json.photoUrl post.photo.url
        # json.likesCount post.likes.count
        json.commentsCount post.comments.length
        # json.likedByCurrentUser post.likes.find_by(user_id: current_user.id) ? true : false
        json.comments do
          post.comments.each do |comment|
            json.set! comment.id do
              json.extract! comment, :id, :post_id, :user_id, :body
              json.user do
                json.extract! comment.user, :id, :username, :name
                # json.profilePictureUrl url_for(comment.user.profile_picture) if comment.user.profile_picture.attached?
              end
            end
          end
        end
      end
    end 
  end

