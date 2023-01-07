json.user do
  json.extract! @user, :id, :username, :name, :bio, :created_at, :updated_at
end
  # json.user do
  #   json.extract! @user, :id, :username, :name
  #   json.profilePictureUrl url_for(@user.profile_picture) if @user.profile_picture.attached?
  # end

  json.posts do 
    @user.posts.each do |post|
      json.set! post.id do  
        json.extract! post, :id, :user_id, :title
        json.photoUrl post.photo.url
      end
    end 
  end

