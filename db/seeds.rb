# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

User.destroy_all

user = User.create( name:'business1', email:'business1@email.com', password:'123456')
user5 = User.create( name:'business2', email:'business2@email.com', password:'123456')
user2 = User.create( name:'business3', email:'business3@email.com', password:'123456')
user3 = User.create( name:'customer1', email:'customer1@email.com', password:'123456')
user4 = User.create( name:'customer2', email:'customer2@email.com', password:'123456')
user6 = User.create( name:'customer3', email:'customer3@email.com', password:'123456')

puts User.all.length
