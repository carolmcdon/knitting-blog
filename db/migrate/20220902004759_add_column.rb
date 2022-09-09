class AddColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :post_date, :string
  end
end
