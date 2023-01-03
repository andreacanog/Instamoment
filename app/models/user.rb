# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  bio             :string
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password

  validates :username, 
    uniqueness: true, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  has_many :posts,
      foreign_key: :user_id,
      class_name: :Post,
      dependent: :destroy
  
  has_many :comments,
      foreign_key: :user_id,
      class_name: :Comment,
      dependent: :destroy
  
  has_many :likes,
      foreign_key: :user_id,
      class_name: :Like,
      dependent: :destroy
  
  has_many :followers,
      foreign_key: :follower_id,
      class_name: :Follow,
      dependent: :destroy

  has_many :followed_users,
      through: :follows,
      source: :followed_user
  
  has_many :followees, 
      foreign_key: :followee_id, 
      class_name: :Follow,
      dependent: :destroy

  has_many :following_users,
      through: :followees,
      source: :follower


  before_validation :ensure_session_token

  def self.find_by_credentials(credential, password)
    field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
    user = User.find_by(field => credential)
    user&.authenticate(password)
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
