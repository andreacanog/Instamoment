json.user do
  json.extract! @user, :id, :username, :name, :bio, :created_at, :updated_at
end