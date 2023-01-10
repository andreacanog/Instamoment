# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  title      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :user_id, presence: true
    validate ensure_photo

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :likes,
        foreign_key: :post_id,
        class_name: :Like,
        dependent: :destroy
    
    has_many :likers,
        through: :likes,
        source: :user
    
    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment,
        dependent: :destroy
    
    has_many :commenters,
        through: :comments,
        source: :user

    has_one_attached :photo


    def ensure_photo
        unless self.photo.attached?
          errors.add(:photo, "must be attached")
        end
    end
       
end
