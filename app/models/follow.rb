# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  followee_id :bigint           not null
#  follower_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Follow < ApplicationRecord
    validates :followee_id, presence: true, uniqueness: { scope: :follower_id }

    belongs_to :followee,
        foreign_key: :followee_id,
        class_name: :User
    
    belongs_to :user,
        foreign_key: :follower_id,
        class_name: :User
end
