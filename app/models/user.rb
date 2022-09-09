class User < ApplicationRecord
  has_many :posts
  has_many :comments
  has_many :commented_on_posts, through: :comments, source: :post
  # has_many :posts, through: :comments 

  has_secure_password

end
