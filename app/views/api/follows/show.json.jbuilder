json.follow do 
    json.extract! @follow, :id, :follower_id, :followee_id
end
