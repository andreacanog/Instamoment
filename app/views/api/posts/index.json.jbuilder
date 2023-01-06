@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :user_id, :title
        # json.imageUrls post.images.map { |file| file.url }
        json.photoUrl post.photo.url
        # json.photoUrl post.photo.url
        # json.post_user post.user
        json.extract! post.user, :username
    end
end