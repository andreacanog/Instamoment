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
    decorideas = User.create!({
      username: 'decorideas', 
      name: 'Decor Ideas',
      email: 'decor@user.io', 
      password: 'password'
    })
    decorideas.profile_picture.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/demo-logo.jpg'), filename: 'demo-logo.jpg')

    cutepets = User.create!({username: 'cutepets', name: 'Love for pets', email: 'cutepets@gmail.com', password: 'ilovepets'})
    cutepets.profile_picture.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/pets-logo.jpg'), filename: 'pets-logo.jpg')

    appacademy = User.create!({username: 'appacademy', name: 'App Academy', email: 'admisions@appacademy.com', password: 'appacademyforver'})
    appacademy.profile_picture.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/app-logo.png'), filename: 'app-logo.png')

    sflocations = User.create!({username: 'sflocations', name: 'SF Pictures', email: 'sfpics@gmail.com', password: 'sfbestcity'})
    sflocations.profile_picture.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/sf-logo.jpg'), filename: 'sf-logo.jpg')

    valenciaciudad = User.create!({username: 'valenciaciudad', name: 'Valencia', email: 'valencia@gmail.com', password: 'valenciaisbetterthansf'})
    valenciaciudad.profile_picture.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/valencia-logo.jpg'), filename: 'valencia-logo.jpg')

    fcbarcelona = User.create!({username: 'fcbarcelona', name: 'FC Barcelona', email: 'fcbarcelona@gmail.com', password: 'bestteamever'})
    fcbarcelona.profile_picture.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/barca-logo.jpg'), filename: 'barca-logo.jpg')

    stevejobs = User.create!({username: 'stevejobs', name: 'Steve Jobs', email: 'stevejobs@gmail.com', password: 'appleisbetterthansamsung'})
    stevejobs.profile_picture.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/steve-logo.jpg'), filename: 'steve-logo.jpg')

    zarastore = User.create!(username: 'zarastore', name: 'Zara Store', email: 'zaraclothes@gmail.com', password: 'zaraclothes')
    zarastore.profile_picture.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/zara-logo.jpg'), filename: 'zara-logo.jpg')

  
    follow_1 = Follow.create!(follower_id: decorideas.id, followee_id: cutepets.id)
    follow_2 = Follow.create!(follower_id: decorideas.id, followee_id: appacademy.id)
    follow_3 = Follow.create!(follower_id: decorideas.id, followee_id: sflocations.id)
    follow_4 = Follow.create!(follower_id: decorideas.id, followee_id: valenciaciudad.id)
    follow_5 = Follow.create!(follower_id: decorideas.id, followee_id: fcbarcelona.id)
    follow_6 = Follow.create!(follower_id: cutepets.id, followee_id: decorideas.id)
    follow_7 = Follow.create!(follower_id: cutepets.id, followee_id: appacademy.id)
    follow_8 = Follow.create!(follower_id: cutepets.id, followee_id: sflocations.id)
    follow_9 = Follow.create!(follower_id: cutepets.id, followee_id: valenciaciudad.id)
    follow_10 = Follow.create!(follower_id: cutepets.id, followee_id: fcbarcelona.id)
    follow_11 = Follow.create!(follower_id: appacademy.id, followee_id: decorideas.id)
    follow_12 = Follow.create!(follower_id: appacademy.id, followee_id: cutepets.id)
    follow_13 = Follow.create!(follower_id: appacademy.id, followee_id: sflocations.id)
    follow_14 = Follow.create!(follower_id: appacademy.id, followee_id: valenciaciudad.id)
    
    post_38 = Post.new(user_id: decorideas.id, title: 'Modern minimalist home design #interior #design #minimalist')
    post_38.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/white.jpg'), filename: 'white.jpg')
    post_38.save!

    post_23 = Post.new(user_id: appacademy.id, title: 'Welcome our new TA, Nishant! #appacademy #sf #sanfrancisco #california')
    post_23.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/teaching1.jpg'), filename: 'teaching1.jpg')
    post_23.save!

    post_22 = Post.new(user_id: appacademy.id, title: 'Students waiting for Diego, who decided to meet with them right before everyone was going to leave for the holidays. Thankfully the lecture was really informative/helpful for them, and for that reason, he was forgiven. #appacademy #sf #sanfrancisco #california')
    post_22.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/studying1.jpg'), filename: 'studying1.jpg')
    post_22.save!

    post_5 = Post.new(user_id: cutepets.id, title: 'To the window, to the wall. To my comfy bed, I crawl. Down this big long hall. Ahh sleep, sleep sleep, sleep sleep.')
    post_5.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/cat-sleeping.jpg'), filename: 'cat-sleeping.jpg')
    post_5.save!

    post_13 = Post.new(user_id: sflocations.id, title: 'What a beautiful day in San Francisco! Have you ever taken a ride in the SF trolley? #sanfrancisco #california')
    post_13.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/golde-hour.jpg'), filename: 'golde-hour.jpg')
    post_13.save!

    post_27 = Post.new(user_id: zarastore.id, title: 'Have you come to our new store in Union Square? Everything will be 70% off #sales #zara')
    post_27.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/zarastore.jpg'), filename: 'zarastore.jpg')
    post_27.save!

    post_26 = Post.new(user_id: fcbarcelona.id, title: 'Best soccer team of all times! #barca #a #barcelona #messi #bar #fcbarcelona #football #laliga #fcb #soccer #championsleague #campnou #futbol #fifa #blaugrana #spain #viscabarca #forcabarca #mare #for #barcafans #abar')
    post_26.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/barca.jpg'), filename: 'barca.jpg')
    post_26.save!

    post_3 = Post.new(user_id: valenciaciudad.id, title: 'Do you like blue? #blue #valencia #spain #summercolors #summerwemissyou #tapas #sangria')
    post_3.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/casa.jpg'), filename: 'casa.jpg')
    post_3.save!

    post_24 = Post.new(user_id: valenciaciudad.id, title: 'Come visit Torre de Serranos in Valencia! #valencia #spain #tapas #sangria ')
    post_24.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/torre-de-serranos.jpg'), filename: 'torre-de-serranos.jpg')
    post_24.save!

    post_33 = Post.new(user_id: stevejobs.id, title: 'Tribute to Steve Jobs : Round glasses laying down with the legendary iPhone 4S.')
    post_33.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/glasses-iphone.jpg'), filename: 'steve-jobs.jpg')
    post_33.save!

    post_30 = Post.new(user_id: zarastore.id, title: 'Eau de Parfum For Her! An elegant fragrance that radiates delicate feelings, mystery, and attractiveness')
    post_30.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/perfume.jpg'), filename: 'perfume.jpg')
    post_30.save!

    post_1 = Post.new(user_id: appacademy.id, title: 'What do think guys? Does she look like Steve Jobs? I think she does!')
    post_1.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/steve.jpg'), filename: 'steve.jpg')
    post_1.save!

    post_2 = Post.new(user_id: stevejobs.id, title: 'I am the real Steve Jobs! She wishes she was me!')
    post_2.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/steve-jobs-real.jpg'), filename: 'steve-jobs-real.jpg.jpg')
    post_2.save!

    post_36 = Post.new(user_id: decorideas.id, title: 'Green foliage with wooden vases home decor piece')
    post_36.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/cuadros.jpg'), filename: 'cuadros.jpg')
    post_36.save!

    post_25 = Post.new(user_id: valenciaciudad.id, title: 'Valencia is a city in Spain. It is the capital of the autonomous community of Valencia and the third largest city in Spain after Madrid and Barcelona.')
    post_25.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/valencia.jpg'), filename: 'valencia.jpg')
    post_25.save!

    post_9 = Post.new(user_id: cutepets.id, title: 'Tired of studying! I need a break from it, I need to go out and have fun!')
    post_9.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/dog-studying.jpg'), filename: 'dog-studying.jpg')
    post_9.save!

    post_10 = Post.new(user_id: cutepets.id, title: 'I am a VIP: Very Important Puppy. #dogs #dogsofinstagram #dog #dogstagram #puppy #doglover #dogoftheday #instadog #doglovers #doglife #pets #love #puppylove #puppies #pet #puppiesofinstagram #dogsofinsta #cute #instagram #of #petsofinstagram #dogslife #doggo #animals #ilovemydog #cats #doglove #petstagram #dogphotography #cutedogs')
    post_10.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/yellow-dog.jpg'), filename: 'yellow-dog.jpg')
    post_10.save!

    post_32 = Post.new(user_id: zarastore.id, title: 'Who does not like Yellow? #zara #yellow4ever #spring2023')
    post_32.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/yellow-clothes.jpg'), filename: 'yellow-clothes.jpg')
    post_32.save!

    post_39 = Post.new(user_id: decorideas.id, title: 'Interior Love for lazy days #TAKE #YOUR #TIME')
    post_39.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/living-room.jpg'), filename: 'living-room.jpg')
    post_39.save!

    post_11 = Post.new(user_id: appacademy.id, title: 'Whatever’s yummy goes in my tummy. #sharingiscaring')
    post_11.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/eating1.jpg'), filename: 'eating1.jpg')
    post_11.save!

    post_16 = Post.new(user_id: appacademy.id, title: 'Oct 2022 SF Cohort having a great time ice skating in Union Square. There were a few falls, but everyone had a great time! #bestcohortever #sanfrancisco #california')
    post_16.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/ice-skating1.jpg'), filename: 'ice-skating1.jpg')
    post_16.save!

    post_19 = Post.new(user_id: sflocations.id, title: 'Once upon a time in San Francisco #sfdowntown #cali #photooftheday #westcoast')
    post_19.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/sf-downtown.jpg'), filename: 'sf-downtown.jpg')
    post_19.save!

    post_4 = Post.new(user_id: cutepets.id, title: 'Making friends with a butterfly.')
    post_4.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/cat-butterfly.jpg'), filename: 'cat-butterfly.jpg')
    post_4.save!

    post_12 = Post.new(user_id: appacademy.id, title: 'Kashual: "I need to finish user auth, so I can go home early lol" #12/23/2022')
    post_12.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/explaining1.jpg'), filename: 'explaining1.jpg')
    post_12.save!
    
    post_18 = Post.new(user_id: valenciaciudad.id, title: 'Mercado central de Valencia #valencia #visitvalencia #spain #a #valenciagram #igersvalencia #visitspain #valenciaturisme #valenciabonita #ncia #espa #valenciaspain #valenciaenamora #estaes #loves #valenciacity #travel #total #comunitatvalenciana #ig #architecture #comunidadvalenciana #travelgram #cvalenciana #valenciasecreta #to #addicted #travelphotography #valenciagramers #val')
    post_18.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/mercat.jpg'), filename: 'mercat.jpg')
    post_18.save!

    post_31 = Post.new(user_id: zarastore.id, title: 'Body Cologne for Him!')
    post_31.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/cologne.jpg'), filename: 'cologne.jpg')
    post_31.save!

    post_6 = Post.new(user_id: cutepets.id, title: 'Being purr-fect ain’t easy. But I’m working on it. #cutecat #lovecats #catloversclub #catsofig #dog #animal #kittycat #petstagram #instacats #catphoto #catsofinsta #dogsofinstagram #ilovemycat #catslover #katze #catscatscats #instagood #blackcat #katzen #catsofworld #chat #catsoftheworld #caturday #photooftheday #photography #ilovecats #day #nature #art #catphotography')
    post_6.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/cat-sunglasses.jpg'), filename: 'cat-sunglasses.jpg')
    post_6.save!

    post_41 = Post.new(user_id: decorideas.id, title: 'Boundless peace has found her way #peace #homedecor #interior')
    post_41.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/mirror.jpg'), filename: 'mirror.jpg')
    post_41.save!

    post_14 = Post.new(user_id: sflocations.id, title: 'The Golden Gate Bridge is one of the most iconic bridges in the world. Have you ever been to San Francisco? Comment below what is your favorite thing of SF. #sanfrancisco #california')
    post_14.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/golden-gate.jpg'), filename: 'golden-gate.jpg')
    post_14.save!

    post_15 = Post.new(user_id: appacademy.id, title: 'Daphne is ready for Christmas! Big thanks to Darren for letting us go early! #christmas #christmasdecorations #christmaslights #christmasiscoming #christmas2022 #christmasparty')
    post_15.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/hat1.jpg'), filename: 'hat1.jpg')
    post_15.save!

    post_34 = Post.new(user_id: stevejobs.id, title: 'Have you read Steve Jobs book? #stevejobs #mustRead #apple #book')
    post_34.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/book.jpg'), filename: 'book.jpg')
    post_34.save!

    post_8 = Post.new(user_id: cutepets.id, title: 'Warning: Cuteness overload!!!')
    post_8.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/dog-flower.jpg'), filename: 'dog-flower.jpg')
    post_8.save!

    post_37 = Post.new(user_id: decorideas.id, title: 'Home decor ideas #pink #light #decoryourhome')
    post_37.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/pink.jpg'), filename: 'pink.jpg')
    post_37.save!

    post_7 = Post.new(user_id: appacademy.id, title: 'What is the best coding language? JS? Ruby? Python? Comment below your favorite!')
    post_7.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/computer.jpg'), filename: 'computer.jpg')
    post_7.save!
    
    post_17 = Post.new(user_id: valenciaciudad.id, title: 'Alburefa és una llacuna d’aigua dolça i estuari en la costa del Golf de València de la Comunitat Valenciana en l’est d’Espanya. És la part principal del Parc Natural de l’Albufera de València, amb una superfície de 21.120 hectàrees. La biodiversitat natural de la reserva natural permet que una gran varietat de flora i fauna prospere i siga observada durant tot l’any. Encara que una vegada va ser una llacuna d’aigua salada, la dilució a causa de la irrigació i els canals que desemboquen en l’estuari i les barres d’arena que augmenten de grandària la van convertir en aigua dolça en el segle XVII.')
    post_17.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/albufera.jpg'), filename: 'albufera.jpg')
    post_17.save!
    
    post_20 = Post.new(user_id: sflocations.id, title: 'The Painted Ladies in San Francisco have a unique symbolism. They are symbolic of the famous California Gold Rush. With so much money coming into the city, San Francisco builders wanted to show off their newfound wealth with these grand homes.')
    post_20.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/sf-houses.jpg'), filename: 'sf-houses.jpg')
    post_20.save!

    post_21 = Post.new(user_id: sflocations.id, title: 'Is this real? #LombardStreet #SanFrancisco #California')
    post_21.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/sf-street.jpg'), filename: 'sf-street.jpg')
    post_21.save!
    
    post_29 = Post.new(user_id: fcbarcelona.id, title: 'Mes que un club! #barcelona #soccer #campnou')
    post_29.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/barcelona.jpg'), filename: 'barcelona.jpg')
    post_29.save!
    
    post_28 = Post.new(user_id: zarastore.id, title: 'New winter 22/23 collection #zara #fashion #style #zarawoman #love #fashionblogger #instagram #zaraoutfit #outfit #instagood #moda #follow #fashionstyle #zarasale #model')
    post_28.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/black-clothes.jpg'), filename: 'black-clothes.jpg')
    post_28.save!

    post_35 = Post.new(user_id: stevejobs.id, title: 'Apple "Spaceship" Campus #amazing #apple #spaceship')
    post_35.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/apple.jpg'), filename: 'apple.jpg')
    post_35.save!

    post_40 = Post.new(user_id: decorideas.id, title: 'Plant envy #plants #books #read #homedecor')
    post_40.photo.attach(io: URI.open('https://instapound-aa-dev.s3.us-west-1.amazonaws.com/libros.jpg'), filename: 'libros.jpg')
    post_40.save!

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