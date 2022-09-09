class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :post_title
      t.string :post_content
      t.string :post_image1
      t.string :post_image2
      t.string :post_image3post_date
      t.string :materials
      t.belongs_to :user, null: false, foreign_key: true 

      t.timestamps
    end
  end
end
