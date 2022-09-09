class RenameColumnInPost < ActiveRecord::Migration[6.1]
  def change
    rename_column :posts, :post_image3post_date, :post_image3
  end
end
