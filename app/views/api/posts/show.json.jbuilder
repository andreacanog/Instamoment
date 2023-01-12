json.extract! @post, :id, :user_id, :title
json.photoUrl @post.photo.url
json.extract! @post.user, :username

json.user do
    json.extract! @user, :id, :username, :name
    json.profilePictureUrl @user.profile_picture.url #if @user.profile_picture.attached?
end