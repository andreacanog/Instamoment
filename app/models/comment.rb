# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  post_id    :bigint           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :user_id, :post_id, :body, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post
end
