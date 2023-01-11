json.extract! @post, :id, :user_id, :title
json.photoUrl @post.photo.url
json.extract! @post.user, :username