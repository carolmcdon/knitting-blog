class RemoveColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :post_image2, :string
    remove_column :posts, :post_image3, :string
  end
end
