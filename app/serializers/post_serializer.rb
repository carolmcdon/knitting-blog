class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :materials, :post_title, :post_content, :post_image1, :post_date
  belongs_to :user
  has_many :comments
  has_many :users, through: :comments 
end
