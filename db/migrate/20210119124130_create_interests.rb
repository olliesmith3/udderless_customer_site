class CreateInterests < ActiveRecord::Migration[6.0]
  def change
    create_table :interests do |t|
      t.string :first_name
      t.string :postcode
      t.string :email
      t.string :tel

      t.timestamps
    end
  end
end
