class CreateFeatures < ActiveRecord::Migration[7.1]
  def change
    create_table :features do |t|
      t.string :event_type, default: 'feature', null: false

      t.string :external_id, null: false
      t.decimal :magnitude, null: false
      t.string :place, null: false
      t.string :time, null: false
      t.boolean :tsunami, null: false
      t.string :mag_type, null: false
      t.string :title, null: false

      t.geometry :coordinates, geographic: true, null: false

      t.string :external_link, null: false

      t.timestamps

      t.index :external_id, unique: true
    end
  end
end
