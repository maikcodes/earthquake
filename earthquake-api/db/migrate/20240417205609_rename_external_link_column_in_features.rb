class RenameExternalLinkColumnInFeatures < ActiveRecord::Migration[7.1]
  def change
    rename_column :features, :external_link, :external_url
  end
end
