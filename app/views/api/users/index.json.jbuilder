@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :username, :name, :created_at, :post_ids, :followee_ids, :follower_ids
        json.profile_picture_url user.profile_picture.url
        # json.profile_picture_url "http://localhost:3000/static/media/baybridge.803ace97d00338843cfc.jpg"
        
        json.followers user.followers do |follower|
            json.extract! follower, :id, :username
            json.profile_picture_url follower.profile_picture.url
        end 

        json.followees user.followees do |followee|
            json.extract! followee, :id, :username
            json.profile_picture_url followee.profile_picture.url
        end 
    end
end