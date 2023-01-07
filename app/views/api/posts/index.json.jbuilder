@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :user_id, :title
        json.photoUrl post.photo.url
        json.extract! post.user, :username
    end
end