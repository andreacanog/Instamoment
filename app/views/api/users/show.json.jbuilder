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

end