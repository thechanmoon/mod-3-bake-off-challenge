# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bake.destroy_all

Bake.create(
  name: "Pie",
  description: "the best",
  image_url: "image here",
  rating: 5
)

# t.string :name
# t.string :description
# t.string :image_url
# t.integer :rating