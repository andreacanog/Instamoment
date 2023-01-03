json.user do
  json.extract! @user, :id, :username, :email, :bio, :name, :created_at, :updated_at
end