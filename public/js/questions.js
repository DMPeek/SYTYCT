// All quiz data by category
const QUESTIONS = {
  beaches: [
    {
      question: 'Which Mexican coastal town is famous for Playa la Ropa and Playa Las Gatas?',
      options: ['Cancún','Zihuatanejo','Puerto Vallarta'],
      answer: 'Zihuatanejo'
    },
    {
      question: 'On which island in the Bahamas will you find Paradise Beach?',
      options: ['Grand Bahama','Paradise Island','New Providence'],
      answer: 'Paradise Island'
    },
    {
      question: 'Hapuna Beach, known for its white sand and clear water, is on which Hawaiian island?',
      options: ['Maui','Hawaii (Big Island)','Oahu'],
      answer: 'Hawaii (Big Island)'
    },
    {
      question: 'Elafonissi Beach, with its famous pink-tinged sand, is found on which Mediterranean island?',
      options: ['Sardinia','Crete','Cyprus'],
      answer: 'Crete'
    },
    {
      question: 'Cala Comte, known for turquoise coves and sunsets, is on which Balearic Island?',
      options: ['Majorca','Ibiza','Menorca'],
      answer: 'Ibiza'
    },
    {
      question: 'Cala Goloritze, a beach only accessible by boat or hiking, is on which Italian island?',
      options: ['Sicily','Corsica','Sardinia'],
      answer: 'Sardinia'
    },
    {
      question: 'Bang Bao Beach, with its wooden fishing-village bungalows, is on which Thai peninsula?',
      options: ['Malay Peninsula','Koh Chang Peninsula','Indochina Peninsula'],
      answer: 'Koh Chang Peninsula'
    },
    {
      question: 'Canto de la Playa (“song of the beach”) is found on which Dominican peninsula?',
      options: ['Barahona Peninsula','Samaná Peninsula','Pedernales Peninsula'],
      answer: 'Samaná Peninsula'
    },
    {
      question: 'Turquoise Bay, popular for snorkeling with whale sharks, is part of which Australian coast?',
      options: ['Great Barrier Reef','Ningaloo Coast','Gold Coast'],
      answer: 'Ningaloo Coast'
    },
    {
      question: 'Pink Beach, colored by crushed red coral, is on which Indonesian island?',
      options: ['Lombok','Bali','Komodo'],
      answer: 'Komodo'
    },
    {
      question: 'Zihuatanejo’s beaches are in which Mexican state?',
      options: ['Veracruz','Guerrero','Oaxaca'],
      answer: 'Guerrero'
    },
    {
      question: 'Hapuna Beach is located on the Kohala Coast of which island?',
      options: ['Maui','Oahu','Hawaii (Big Island)'],
      answer: 'Hawaii (Big Island)'
    },
    {
      question: 'Elafonissi Beach is in which country?',
      options: ['Turkey','Greece','Italy'],
      answer: 'Greece'
    },
    {
      question: 'Cala Comte overlooks which body of water?',
      options: ['Adriatic Sea','Mediterranean Sea','Aegean Sea'],
      answer: 'Mediterranean Sea'
    },
    {
      question: 'Turquoise Bay is famous for snorkeling with which marine animal?',
      options: ['Dolphins','Whale sharks','Sea turtles'],
      answer: 'Whale sharks'
    }
  ],

  mountains: [
    {
      question: 'The Southern Alps, home to Aoraki/Mount Cook, stretch along which island of New Zealand?',
      options: ['North Island','South Island','Stewart Island'],
      answer: 'South Island'
    },
    {
      question: 'Which mountain range, spanning Pakistan and China, includes K2?',
      options: ['Himalayas','Hindu Kush','Karakoram Range'],
      answer: 'Karakoram Range'
    },
    {
      question: 'Sagarmatha National Park, the gateway to Everest, is in which region of Nepal?',
      options: ['Annapurna','Mustang','Everest Region (Khumbu)'],
      answer: 'Everest Region (Khumbu)'
    },
    {
      question: 'The Sierra Nevada range runs through California and which other U.S. state?',
      options: ['Oregon','Nevada','Utah'],
      answer: 'Nevada'
    },
    {
      question: 'Which country is home to the Drakensberg Mountains?',
      options: ['Lesotho','South Africa','Namibia'],
      answer: 'South Africa'
    },
    {
      question: 'The Vilcabamba Range was the last refuge of which civilization’s final ruler?',
      options: ['Maya','Inca','Aztec'],
      answer: 'Inca'
    },
    {
      question: 'The Patagonian Andes stretch across Chile and which other country?',
      options: ['Peru','Argentina','Bolivia'],
      answer: 'Argentina'
    },
    {
      question: 'The West MacDonnell Ranges, known for red-rock gorges, are in which Australian territory?',
      options: ['Queensland','Northern Territory','Western Australia'],
      answer: 'Northern Territory'
    },
    {
      question: 'The Atlas Mountains span Morocco and which neighboring country?',
      options: ['Tunisia','Algeria','Libya'],
      answer: 'Algeria'
    },
    {
      question: 'The Turkestan Range is part of which larger mountain system?',
      options: ['Pamir Mountains','Karakoram','Tien Shan'],
      answer: 'Tien Shan'
    },
    {
      question: 'Yosemite National Park is in which U.S. mountain range?',
      options: ['Rocky Mountains','Sierra Nevada','Cascade Range'],
      answer: 'Sierra Nevada'
    },
    {
      question: 'Aoraki/Mount Cook is the highest peak in which country?',
      options: ['Australia','New Zealand','Fiji'], answer: 'New Zealand'
    },
    {
      question: 'Nanga Parbat, also called the “Killer Mountain,” is in which range?',
      options: ['Karakoram','Hindu Kush','Himalayas'],
      answer: 'Himalayas'
    },
    {
      question: 'Sagarmatha National Park includes part of which famous mountain?',
      options: ['Annapurna','Everest','Manaslu'],
      answer: 'Everest'
    },
    {
      question: 'Which town is closest to the West MacDonnell Ranges?',
      options: ['Darwin','Perth','Alice Springs'],
      answer: 'Alice Springs'
    }
  ],

  parks: [
    {
      question: 'Which theme park just east of Paris opened in 1992 and features Sleeping Beauty’s Castle?',
      options: ['Parc Astérix','Disneyland Paris','Europa-Park'],
      answer: 'Disneyland Paris'
    },
    {
      question: 'Siam Park, often called the world’s best water park, is on which island?',
      options: ['Gran Canaria','Tenerife','Lanzarote'],
      answer: 'Tenerife'
    },
    {
      question: 'Ferrari World, home to the Formula Rossa coaster, is in which country?',
      options: ['Kuwait','Qatar','United Arab Emirates'],
      answer: 'United Arab Emirates'
    },
    {
      question: 'Beto Carrero World, Latin America’s largest theme park, is in which country?',
      options: ['Argentina','Chile','Brazil'],
      answer: 'Brazil'
    },
    {
      question: 'Waterbom Bali is located in which Balinese town?',
      options: ['Ubud','Seminyak','Kuta'],
      answer: 'Kuta'
    },
    {
      question: 'Beach Park, which mixes water rides with a beach vibe, is in which Brazilian state?',
      options: ['Rio de Janeiro','São Paulo','Ceará'],
      answer: 'Ceará'
    },
    {
      question: 'Puy du Fou, famous for its medieval nighttime shows, is in which country?',
      options: ['Germany','France','Spain'],
      answer: 'France'
    },
    {
      question: 'Alton Towers Resort, home to rides like Nemesis and Oblivion, is in which UK county?',
      options: ['Cornwall','Staffordshire','Kent'],
      answer: 'Staffordshire'
    },
    {
      question: 'Dollywood, co-owned by Dolly Parton, celebrates Appalachian culture in which U.S. state?',
      options: ['North Carolina','Tennessee','Kentucky'],
      answer: 'Tennessee'
    },
    {
      question: 'Heide Park, with the Colossos coaster, is in which German state?',
      options: ['Bavaria','Hesse','Lower Saxony'],
      answer: 'Lower Saxony'
    },
    {
      question: 'Siam Park is part of which Spanish island group?',
      options: ['Balearic Islands','Canary Islands','Mediterranean Islands'],
      answer: 'Canary Islands'
    },
    {
      question: 'Beach Park is located in which country?',
      options: ['Mexico','Portugal','Brazil'],
      answer: 'Brazil'
    },
    {
      question: 'Puy du Fou’s famous “Cinéscénie” show is in which French region?',
      options: ['Brittany','Pays de la Loire','Normandy'],
      answer: 'Pays de la Loire'
    },
    {
      question: 'Disneyland Paris is in which French département?',
      options: ['Seine-Saint-Denis','Seine-et-Marne','Val-d’Oise'],
      answer: 'Seine-et-Marne'
    },
    {
      question: 'Ferrari World is located on which island?',
      options: ['Sir Bani Yas','Delma Island','Yas Island'],
      answer: 'Yas Island'
    }
  ],

  nature: [
    {
      question: 'Which ancient pilgrimage route ends at Santiago de Compostela?',
      options: ['Via Francigena','Camino de Santiago','El Camino Real'],
      answer: 'Camino de Santiago'
    },
    {
      question: 'Cinque Terre connects five villages along the Italian Riviera. Which region is it in?',
      options: ['Tuscany','Liguria','Calabria'],
      answer: 'Liguria'
    },
    {
      question: 'The West Highland Way starts in Milngavie. Where does it end?',
      options: ['Inverness','Fort William','Glasgow'],
      answer: 'Fort William'
    },
    {
      question: 'The Overland Track, which passes through Cradle Mountain, is found on which Australian island?',      options: ['Kangaroo Island','Tasmania','Fraser Island'],
      answer: 'Tasmania'
    },
    {
      question: 'The GR20, known as one of Europe’s toughest hikes, crosses which Mediterranean island?',
      options: ['Sardinia','Corsica','Sicily'],
      answer: 'Corsica'
    },
    {
      question: 'Hadrian’s Wall Path follows the remains of a wall built by which ancient civilization?',
      options: ['Greek','Roman','Ottoman'],
      answer: 'Roman'
    },
    {
      question: 'Roughly how many miles does the Great Wall of China stretch?',
      options: ['5,500','8,500','13,000'],
      answer: '13,000'
    },
    {
      question: 'If you’re hiking the Cotswold Way, which country are you in?',
      options: ['Scotland','England','Wales'],
      answer: 'England'
    },
    {
      question: 'The Great Ocean Walk in Australia passes by which iconic rock formation?',
      options: ['London Arch','Twelve Apostles','Bay of Fires'],
      answer: 'Twelve Apostles'
    },
    {
      question: 'The Lycian Way is a famous hiking route in which country?',
      options: ['Greece','Turkey','Cyprus'],
      answer: 'Turkey'
    },
    {
      question: 'The Camino de Santiago passes through which two countries?',      options: ['Portugal and Spain','Spain and France','Italy and France'],
      answer: 'Spain and France'
    },
    {
      question: 'The Lycian Way stretches from Fethiye to which coastal city?',
      options: ['Bodrum','Antalya','Antalya'],
      answer: 'Antalya'
    },
    {
      question: 'About how long is the Cotswold Way trail?',
      options: ['85 miles','102 miles','120 miles'],
      answer: '102 miles'
    },
    {
      question: 'Which of these trails is located entirely within Tasmania?',
      options: ['Lycian Way','West Highland Way','The Overland Track'],
      answer: 'The Overland Track'
    },
    {
      question: 'The GR20 is famous as one of Europe’s _____ hiking trails.',
      options: ['Easiest','Longest','Toughest'],
      answer: 'Toughest'
    }
  ]
};

