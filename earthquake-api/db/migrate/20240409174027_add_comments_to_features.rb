class AddCommentsToFeatures < ActiveRecord::Migration[7.1]
  def change
    add_column :comments, :body, :text
    add_reference :comments, :feature, null: false, foreign_key: true
  end
end
