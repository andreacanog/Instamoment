# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

ApplicationRecord.transaction do 
    puts 'Destroying tables...'
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Post.destroy_all

    puts 'Resetting primary keys...'
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts 'Creating users...'
    # Create one user with an easy to remember username, email, and password:
    User.create!({
      username: 'Demo-lition', 
      name: 'Demo User',
      email: 'demo@user.io', 
      password: 'password'
    })

    cutepets = User.create!({username: 'cutepets', name: 'Love for pets', email: 'cutepets@gmail.com', password: 'ilovepets'})
    appacademy = User.create!({username: 'appacademy', name: 'App Academy', email: 'admisions@appacademy.com', password: 'appacademyforver'})
    sflocations = User.create!({username: 'sflocations', name: 'SF Pictures', email: 'sfpics@gmail.com', password: 'sfbestcity'})
    valenciaciudad = User.create!({username: 'valenciaciudad', name: 'Valencia', email: 'valencia@gmail.com', password: 'valenciaisbetterthansf'})
    fcbarcelona = User.create!({username: 'fcbarcelona', name: 'FC Barcelona', email: 'fcbarcelona@gmail.com', password: 'bestteamever'})
    stevejobs = User.create!({username: 'stevejobs', name: 'Steve Jobs', email: 'stevejobs@gmail.com', password: 'appleisbetterthansamsung'})
    zarastore = User.create!(username: 'zarastore', name: 'Zara Store', email: 'zaraclothes@gmail.com', password: 'zaraclothes')

   
    post_2 = Post.create!(user_id: stevejobs.id, title: 'I am the real Steve Jobs! She wishes she was me!')
    post_2.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/steve-jobs-real.jpg'), filename: 'steve-jobs-real.jpg.jpg')
    

    post_4 = Post.create!(user_id: cutepets.id, title: 'Making friends with a butterfly')
    post_4.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/cat-butterfly.jpg'), filename: 'cat-butterfly.jpg')
    post_5 = Post.create!(user_id: cutepets.id, title: 'To the window, to the wall. To my comfy bed, I crawl. Down this big long hall. Ahh sleep, sleep sleep, sleep sleep.')
    post_5.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/cat-sleeping.jpg'), filename: 'cat-sleeping.jpg')
    post_6 = Post.create!(user_id: cutepets.id, title: 'Being purr-fect ain’t easy. But I’m working on it. #cutecat #lovecats #catloversclub #catsofig #dog #animal #kittycat #petstagram #instacats #catphoto #catsofinsta #dogsofinstagram #ilovemycat #catslover #katze #catscatscats #instagood #blackcat #katzen #catsofworld #chat #catsoftheworld #caturday #photooftheday #photography #ilovecats #day #nature #art #catphotography')
    post_6.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/cat-sunglasses.jpg'), filename: 'cat-sunglasses.jpg')
    post_8 = Post.create!(user_id: cutepets.id, title: 'Warning: Cuteness overload.')
    post_8.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/dog-flower.jpg'), filename: 'dog-flower.jpg')
    post_9 = Post.create!(user_id: cutepets.id, title: 'Tired of studying! I need a break from it, I need to go out and have fun!')
    post_9.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/dog-studying.jpg'), filename: 'dog-studying.jpg')
    post_10 = Post.create!(user_id: cutepets.id, title: 'I am a VIP: Very Important Puppy. #dogs #dogsofinstagram #dog #dogstagram #puppy #doglover #dogoftheday #instadog #doglovers #doglife #pets #love #puppylove #puppies #pet #puppiesofinstagram #dogsofinsta #cute #instagram #of #petsofinstagram #dogslife #doggo #animals #ilovemydog #cats #doglove #petstagram #dogphotography #cutedogs')
    post_10.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/yellow-dog.jpg'), filename: 'yellow-dog.jpg')
    

    post_13 = Post.create!(user_id: sflocations.id, title: 'What a beautiful day in San Francisco! Have you ever taken a ride in the SF trolley? #sanfrancisco #california')
    post_13.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/golde-hour.jpg'), filename: 'golde-hour.jpg')
    post_14 = Post.create!(user_id: sflocations.id, title: 'The Golden Gate Bridge is one of the most iconic bridges in the world. Have you ever been to San Francisco? Comment below what is your favorite thing of SF. #sanfrancisco #california')
    post_14.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/golden-gate.jpg'), filename: 'golden-gate.jpg')
    post_16 = Post.create!(user_id: sflocations.id, title: 'Oct 2022 SF Cohort having a great time ice skating in Union Square. There were a few falls but everyone had a great time. #bestcohortever #sanfrancisco #california')
    post_16.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/ice-skating.jpg'), filename: 'ice-skating.jpg')
    post_19 = Post.create!(user_id: sflocations.id, title: 'Once upon a time in San Francisco #sfdowntown #cali #photooftheday #westcoast')
    post_19.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/sf-downtown.jpg'), filename: 'sf-downtown.jpg')
    post_20 = Post.create!(user_id: sflocations.id, title: 'The Painted Ladies in San Francisco have a unique symbolism. They are symbolic of the famous California Gold Rush. With so much money coming into the city, San Francisco builders wanted to show off their newfound wealth with these grand homes.')
    post_20.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/sf-houses.jpg'), filename: 'sf-houses.jpg')
    post_21 = Post.create!(user_id: sflocations.id, title: 'Is this real? #LombardStreet #SanFrancisco #California')
    post_21.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/sf-street.jpg'), filename: 'sf-street.jpg')
    
    # post_26 = Post.create!(user_id: fcbarcelona.id, title: 'Best soccer team of all times! #barca #a #barcelona #messi #bar #fcbarcelona #football #laliga #fcb #soccer #championsleague #campnou #futbol #fifa #blaugrana #spain #viscabarca #forcabarca #mare #for #barcafans #abar')
    # post_26.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/teaching.jpg'), filename: 'teaching.jpg')
    
    
    post_27 = Post.create!(user_id: zarastore.id, title: 'Have you come to our new store in Union Square? Everything will be 70% off #sales #zara')
    post_27.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/zarastore.jpg'), filename: 'zarastore.jpg')
    # post_28 = Post.create!(user_id: zarastore.id, title: 'New winter 22/23 collection #zara #fashion #style #zarawoman #love #fashionblogger #instagram #zaraoutfit #outfit #instagood #moda #follow #fashionstyle #zarasale #model')
    # post_28.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/zara.jpg'), filename: 'zara.jpg')


    post_1 = Post.create!(user_id: appacademy.id, title: 'What do think guys? Does she look like Steve Jobs? I think she does!')
    post_1.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/bill-gates.jpg'), filename: 'bill-gates.jpg')
    post_22 = Post.create!(user_id: appacademy.id, title: 'Students were getting ready for the full stack project, and waiting for Diego, who decided to meet with them right before everyone was going to leave for the holidays. Thankfully the lecture was really informative/helpful for them, and for that reason, he was forgiven!   #appacademy #sf #sanfrancisco #california')
    post_22.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/studing.jpg'), filename: 'studing.jpg')
    
    post_23 = Post.create!(user_id: appacademy.id, title: 'Welcome our new TA, Nishant! #appacademy #sf #sanfrancisco #california')
    post_23.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/teaching1.jpg'), filename: 'teaching1.jpg')
    
    
    post_15 = Post.create!(user_id: appacademy.id, title: 'Daphne is ready for Christmas! Big thanks to Darren for letting us go early. #christmas #christmas2021 #christmasdecor #christmasdecorations #christmaslights #christmasiscoming #christmasgifts #christmasgiftideas #christmasgift #christmasparty #christmas2020 #christmasgiftguide #christmasgifts2020 #christmasgiftguide2020 #christmasgifts2021 #christmasgiftguide2021 #christmasgiftideas2020 #christmasgiftideas2021 #christmasgiftguide2021 #christmasgiftguide2020 #christmasgiftguide2021')
    post_15.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/hat.jpg'), filename: 'hat.jpg')
    post_11 = Post.create!(user_id: appacademy.id, title: 'Whatever’s yummy goes in my tummy. #sharingiscaring')
    post_11.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/eating.jpg'), filename: 'eating.jpg')
    post_12 = Post.create!(user_id: appacademy.id, title: 'Kashual: "I going to make like a just finish user auth, so we can go home early today lol." #12/23/2022')
    post_12.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/explaining.jpg'), filename: 'explaining.jpg')
    post_7 = Post.create!(user_id: appacademy.id, title: 'What is the best coding language? JS? Ruby? Python? Comment below your favorite!')
    post_7.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/computer.jpg'), filename: 'computer.jpg')


    post_3 = Post.create!(user_id: valenciaciudad.id, title: 'Do you like blue? #blue#valencia#spain#summercolors#summerwemissyou#tapas#sangria')
    post_3.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/casa.jpg'), filename: 'casa.jpg')
    post_24 = Post.create!(user_id: valenciaciudad.id, title: 'Come visit Torre de ')
    post_24.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/torre-de-serranos.jpg'), filename: 'torre-de-serranos.jpg')
    post_25 = Post.create!(user_id: valenciaciudad.id, title: 'Valencia is a city in Spain. It is the capital of the autonomous community of Valencia and the third largest city in Spain after Madrid and Barcelona, with around 800,000 inhabitants in the administrative centre. The urban area of Valencia extends beyond the administrative city limits with a population of around 1.5 million people, ranking fourth in Spain. The Port of Valencia is the 5th busiest container port in Europe and the 30th busiest container port in the world. Valencia is Spain''s third largest metropolitan area, with a population ranging from 1.7 to 2.5 million.')
    post_25.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/valencia.jpg'), filename: 'valencia.jpg')
    post_18 = Post.create!(user_id: valenciaciudad.id, title: 'Mercado central de Valencia #valencia #visitvalencia #spain #a #valenciagram #igersvalencia #visitspain #valenciaturisme #valenciabonita #ncia #espa #valenciaspain #valenciaenamora #estaes #loves #valenciacity #travel #total #comunitatvalenciana #ig #architecture #comunidadvalenciana #travelgram #cvalenciana #valenciasecreta #to #addicted #travelphotography #valenciagramers #val')
    post_18.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/mercat.jpg'), filename: 'mercat.jpg')
    post_17 = Post.create!(user_id: valenciaciudad.id, title: 'Alburefa és una llacuna d’aigua dolça i estuari en la costa del Golf de València de la Comunitat Valenciana en l’est d’Espanya. És la part principal del Parc Natural de l’Albufera de València, amb una superfície de 21.120 hectàrees. La biodiversitat natural de la reserva natural permet que una gran varietat de flora i fauna prospere i siga observada durant tot l’any. Encara que una vegada va ser una llacuna d’aigua salada, la dilució a causa de la irrigació i els canals que desemboquen en l’estuari i les barres d’arena que augmenten de grandària la van convertir en aigua dolça en el segle XVII.')
    post_17.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/albufera.jpg'), filename: 'albufera.jpg')


    #Po More users
    # 10.times do 
    #   User.create!({
    #     username: Faker::Internet.unique.username(specifier: 3),
    #     email: Faker::Internet.unique.email,
    #     name: Faker::Internet.name,
    #     password: 'password'
    #   }) 
    # end
end