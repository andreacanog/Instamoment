json.post do 
    json.extract! @post, :id, :user_id, :title
    json.photoUrl @post.photo.url
    json.extract! @post.user, :username
    json.userProfilePic @post.user.profile_picture.url

    json.likes @post.likes.count
    json.commentCount @post.comments.count
    
    if @post.likers.include?(current_user)
        json.liked true
        json.ownLikeId @post.likes.find_by(user_id: current_user.id).id
    else
        json.liked false
    end

    json.comments do
            @post.comments.each do |comment|
                json.set! comment.id do
                    json.extract! comment, :id, :post_id, :user_id, :body
                    json.user do
                        json.extract! comment.user, :id, :username, :name
                    end
                end
            end
    end

    json.user do
        json.extract! @user, :id, :username, :name
        json.profilePictureUrl @user.profile_picture.url #if @user.profile_picture.attached?
    end
end