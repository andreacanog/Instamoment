json.user do
  json.extract! @user, :id, :username, :name, :bio, :created_at, :updated_at

  # json.user do
  #   json.extract! @user, :id, :username, :name
  #   json.profilePictureUrl url_for(@user.profile_picture) if @user.profile_picture.attached?
  # end
  json.profilePictureUrl @user.profile_picture.url 
  
  json.posts @user.posts do |post|
      json.set! post.id do  
        json.extract! post, :id, :user_id, :title
        json.photoUrl post.photo.url
      end
  end 

  json.followers @user.followers do |follower|
      json.set! follower.id do  
        json.extract! follower, :id, :username
        json.profile_picture_url follower.profile_picture.url
      end
  end 

  json.followees @user.followees do |followee|
      json.set! followee.id do  
        json.extract! followee, :id, :username
        json.profile_picture_url followee.profile_picture.url
      end
  end 

end