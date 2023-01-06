json.user do
  json.extract! @user, :id, :username, :name, :bio, :name, :created_at, :updated_at
end