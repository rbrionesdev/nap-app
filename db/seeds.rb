# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

User.destroy_all
Nap.destroy_all

user = User.create( name:Faker::Name.neutral_first_name, email:'person1@email.com', password:'123456', average_nap_time:2.5)
user5 = User.create( name:Faker::Name.neutral_first_name, email:'person2@email.com', password:'123456', average_nap_time:6)
user2 = User.create( name:Faker::Name.neutral_first_name, email:'person3@email.com', password:'123456', average_nap_time:3)
user3 = User.create( name:Faker::Name.neutral_first_name, email:'person4@email.com', password:'123456', average_nap_time:8)
user4 = User.create( name:Faker::Name.neutral_first_name, email:'person5@email.com', password:'123456', average_nap_time:7.2)
user6 = User.create( name:Faker::Name.neutral_first_name, email:'person6@email.com', password:'123456', average_nap_time:9.4)

n1 = Nap.create(title:'Afternoon Nap', duration:2, description:'A nap in the afternoon. A "catnap."', date:'10/10/2021', hour:'15:30')
n2 = Nap.create(title:'Morning Nap', duration:1, description:'A nap in the morning. You did not sleep well last night', date:'10/13/2021', hour:'09:00')
n3 = Nap.create(title:'Evening Nap', duration:3, description:'When you have stayed up too late and have work in the morning', date:'10/14/2021', hour:'23:00')

nt1 = NapTime.create(user_id:user.id, nap_id:n1.id)
nt2 = NapTime.create(user_id:user.id, nap_id:n2.id)
nt3 = NapTime.create(user_id:user3.id, nap_id:n3.id)
nt4 = NapTime.create(user_id:user4.id, nap_id:n1.id)
nt5 = NapTime.create(user_id:user5.id, nap_id:n2.id)
nt6 = NapTime.create(user_id:user6.id, nap_id:n3.id)

puts "Users: #{User.all.length}"
puts "Naps: #{Nap.all.length}"
puts "Nap times #{NapTime.all.length}"
