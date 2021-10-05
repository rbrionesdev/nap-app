# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

# UserPunchcard.destroy_all
# Reward.destroy_all
# Punchcard.destroy_all
# Restaurant.destroy_all
# User.destroy_all

# account_types = ['business', 'customer']

# 10.times do
     # user = User.create( name:'jimmy', email:'badfa@alsdf.com', password:'123456')
#   10.times do 
     user = User.first
    rest = user.restaurants.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:user.id)
#     5.times do 
#       punch = rest.punchcards.create(total_punches:[rand(10)], restaurant_id:rest.id, description:Faker::Restaurant.description )
#       5.times do
#         reward = punch.rewards.create(name:Faker::Name.name, description:Faker::Restaurant.description, punchcard_id:punch.id, cost:[rand(10)])
#       end
#       5.times do
#         user_punch = user.user_punchcards.create(current_punches:[rand(10)], user_id:user.id, punchcard_id:punch.id, expiration_date:Faker::Date.between(from: '2021-09-23', to: '2021-12-25'))
#       end
#     end
#   # end
# end


puts User.all.length
puts Restaurant.all.length
puts Reward.all.length
