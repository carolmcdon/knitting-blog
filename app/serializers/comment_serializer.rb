class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_content, :comment_date, :user_id, :post_id
  has_one :user
  has_one :post
end
