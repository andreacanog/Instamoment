json.extract! @comment, :id, :user_id, :post_id, :body

json.user do
    json.extract! @comment.user, :id, :username, :name
end

json.set! @comment.id do 
    json.extract! @comment, :id, :user_id, :body
    json.extract! @comment.user, :username        

end