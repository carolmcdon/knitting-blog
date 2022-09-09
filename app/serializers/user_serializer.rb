class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :password, :profile_image, :about
  has_many :posts
  has_many :comments
  has_many :commented_on_posts, through: :comments, source: :post
end
