export interface Package {
  id: string;
  slug: string;
  title: string;
  duration: string;
  durationDays: number;
  startingPrice: number;
  currency: string;
  summary: string;
  description: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals?: string;
    accommodation?: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
  destination: "kathmandu" | "janakpurdham" | "multi-city";
  category: "cultural" | "spiritual" | "heritage" | "adventure";
  featured: boolean;
}

export const packages: Package[] = [
  {
    id: "1",
    slug: "kathmandu-heritage-discovery",
    title: "Kathmandu Heritage Discovery",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    startingPrice: 45000,
    currency: "NPR",
    summary:
      "Immerse yourself in the ancient splendor of Kathmandu Valley. Explore UNESCO World Heritage Sites, sacred temples, and vibrant bazaars guided by local experts.",
    description:
      "The Kathmandu Heritage Discovery package offers an intimate exploration of Nepal's cultural heart. Over five enriching days, you'll walk through centuries of history, from the medieval courtyards of Patan Durbar Square to the sacred stupas of Boudhanath. Our expert guides reveal stories behind every carved window and golden shrine, connecting you with the living traditions that make Kathmandu one of the world's most captivating destinations. This carefully curated journey balances iconic landmarks with hidden gems, giving you an authentic experience of Newari culture, Buddhist spirituality, and the warm hospitality that defines Nepal.",
    highlights: [
      "Guided tour of all seven UNESCO World Heritage Sites in Kathmandu Valley",
      "Sunrise visit to Swayambhunath (Monkey Temple) with panoramic city views",
      "Traditional Newari cooking class with a local family",
      "Evening aarti ceremony at Pashupatinath Temple",
      "Walking tour through the ancient alleyways of Bhaktapur",
      "Private meditation session at Boudhanath Stupa",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description:
          "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative greets you with a traditional khada scarf. Transfer to your heritage hotel in Thamel. After settling in, enjoy a welcome dinner featuring authentic Nepali cuisine while your guide briefs you on the journey ahead.",
        meals: "Dinner",
        accommodation: "Heritage Hotel in Thamel",
      },
      {
        day: 2,
        title: "Kathmandu Durbar Square & Swayambhunath",
        description:
          "Begin with an early morning visit to Swayambhunath Stupa, watching the city awaken from this ancient hilltop sanctuary. After breakfast, explore Kathmandu Durbar Square, where our guide brings alive the history of Malla kings and Kumari, the living goddess. Afternoon at leisure to explore Thamel's vibrant streets.",
        meals: "Breakfast, Lunch",
        accommodation: "Heritage Hotel in Thamel",
      },
      {
        day: 3,
        title: "Patan & Bhaktapur",
        description:
          "Journey to Patan, the city of fine arts. Marvel at the stunning metalwork and stone carvings of Patan Durbar Square and visit the Patan Museum. Continue to Bhaktapur, the best-preserved medieval city in Nepal. Walk through Pottery Square and savor the famous juju dhau (king curd). Evening traditional Newari cooking class.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Heritage Hotel in Thamel",
      },
      {
        day: 4,
        title: "Boudhanath & Pashupatinath",
        description:
          "Morning meditation session at Boudhanath Stupa, one of the largest Buddhist stupas in the world. Explore surrounding monasteries and Tibetan refugee settlements. Afternoon visit to Pashupatinath Temple, Nepal's holiest Hindu shrine. Witness the evening aarti ceremony by the sacred Bagmati River.",
        meals: "Breakfast, Lunch",
        accommodation: "Heritage Hotel in Thamel",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "After a leisurely breakfast, time for last-minute shopping or optional visits. Transfer to the airport for your onward journey, carrying memories of an ancient civilization that continues to thrive in the heart of the Himalayas.",
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "4 nights accommodation in heritage hotel with breakfast",
      "All airport transfers in private vehicle",
      "English-speaking certified heritage guide",
      "All entrance fees to monuments and museums",
      "Traditional welcome dinner",
      "Newari cooking class with meal",
      "Bottled water during tours",
      "All applicable taxes and service charges",
    ],
    exclusions: [
      "International airfare",
      "Nepal visa fees",
      "Travel insurance",
      "Personal expenses and tips",
      "Meals not mentioned in itinerary",
      "Camera/video fees at monuments",
      "Optional activities",
    ],
    gallery: [
      "/packages/kathmandu-1.jpg",
      "/packages/kathmandu-2.jpg",
      "/packages/kathmandu-3.jpg",
      "/packages/kathmandu-4.jpg",
    ],
    destination: "kathmandu",
    category: "heritage",
    featured: true,
  },
  {
    id: "2",
    slug: "janakpurdham-spiritual-journey",
    title: "Janakpurdham Spiritual Journey",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    startingPrice: 35000,
    currency: "NPR",
    summary:
      "Discover the sacred birthplace of Goddess Sita and the living traditions of Mithila culture. A spiritual pilgrimage infused with art, devotion, and timeless heritage.",
    description:
      "Janakpurdham stands as one of the most significant pilgrimage sites in Hindu tradition—the birthplace of Goddess Sita and the setting of her divine marriage to Lord Ram. This sacred journey takes you beyond the ordinary tourist path into the heart of Mithila culture, where ancient traditions flourish in daily life. Witness the extraordinary Mithila paintings adorning every surface, participate in temple rituals that have continued for millennia, and experience the profound spirituality that draws devotees from across the subcontinent. Our local guides, deeply rooted in this culture, share insights that transform a visit into a genuine pilgrimage.",
    highlights: [
      "Darshan at the magnificent Janaki Mandir, one of Nepal's largest temples",
      "Witness traditional Mithila painting demonstration by local artists",
      "Sacred bath and rituals at Ram Janaki Vivah Mandap",
      "Visit to ancient ponds associated with Ramayana legends",
      "Exploration of local bazaars for authentic Mithila crafts",
      "Attend evening aarti at Janaki Temple",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Janakpurdham",
        description:
          "Arrive in Janakpurdham by flight or road from Kathmandu. Our guide welcomes you and transfers you to your hotel. Afternoon orientation walk through the old town, observing traditional Maithili architecture and street art. Evening aarti ceremony at Janaki Mandir.",
        meals: "Dinner",
        accommodation: "Hotel in Janakpurdham",
      },
      {
        day: 2,
        title: "Sacred Sites & Mithila Art",
        description:
          "Begin with an early morning puja at Janaki Mandir. After breakfast, visit the sacred ponds of Dhanush Sagar and Ganga Sagar, learning their mythological significance. Afternoon workshop with renowned Mithila artists—try your hand at this UNESCO-recognized art form. Visit to local women's cooperative supporting traditional artists.",
        meals: "Breakfast, Lunch",
        accommodation: "Hotel in Janakpurdham",
      },
      {
        day: 3,
        title: "Pilgrimage & Cultural Immersion",
        description:
          "Visit Ram Mandir and the legendary site of Sita's swayamvar. Explore the fascinating Janak Museum showcasing regional history and Mithila artifacts. Traditional Maithili lunch with a local family. Afternoon free for personal exploration or additional temple visits. Farewell dinner featuring regional specialties.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Hotel in Janakpurdham",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Morning at leisure for final temple visits or shopping for Mithila paintings and handicrafts. Transfer to airport/bus station for your return journey, enriched by this profound encounter with Nepal's spiritual heritage.",
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "3 nights accommodation with breakfast",
      "All transfers in Janakpurdham",
      "Local English-speaking guide",
      "All temple and museum entrance fees",
      "Mithila painting workshop",
      "Traditional meals as specified",
      "Bottled water during tours",
      "All applicable taxes",
    ],
    exclusions: [
      "Transportation to/from Janakpurdham",
      "Travel insurance",
      "Personal expenses and donations",
      "Tips for guides and drivers",
      "Meals not mentioned",
      "Special puja arrangements",
      "Personal shopping",
    ],
    gallery: [
      "/packages/janakpur-1.jpeg",
      "/packages/janakpur-2.jpg",
      "/packages/janakpur-3.jpg",
      "/packages/janakpur-4.jpg",
    ],
    destination: "janakpurdham",
    category: "spiritual",
    featured: true,
  },
  {
    id: "3",
    slug: "nepal-cultural-odyssey",
    title: "Nepal Cultural Odyssey",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    startingPrice: 85000,
    currency: "NPR",
    summary:
      "The ultimate Nepal experience combining Kathmandu's heritage treasures with Janakpurdham's spiritual depth. A comprehensive journey through Nepal's diverse cultural landscape.",
    description:
      "This signature journey weaves together Nepal's most profound cultural experiences into one seamless odyssey. Begin in the medieval splendor of Kathmandu Valley, where Buddhist and Hindu traditions intertwine among ancient palaces and sacred stupas. Then venture to the Terai plains to discover Janakpurdham, where the Ramayana comes alive and Mithila culture flourishes in vibrant colors. This carefully paced itinerary allows for deep immersion rather than hurried sightseeing, with authentic encounters, cultural workshops, and moments of spiritual reflection woven throughout. It's the definitive way to experience Nepal's remarkable heritage.",
    highlights: [
      "Complete exploration of Kathmandu Valley's seven UNESCO sites",
      "Private audience with Buddhist monks at Kopan Monastery",
      "Full-day Mithila cultural immersion in Janakpurdham",
      "Traditional craft workshops: thangka painting and Mithila art",
      "Spiritual ceremonies at Pashupatinath and Janaki Mandir",
      "Scenic road journey through Nepal's diverse landscapes",
      "Farm-to-table dining experiences with local families",
      "Personalized blessing ceremony from temple priests",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description:
          "Arrive at Tribhuvan International Airport to a traditional Nepali welcome. Transfer to your boutique hotel in the heart of the historic district. Evening orientation walk through Thamel, followed by welcome dinner at a rooftop restaurant with panoramic mountain views.",
        meals: "Dinner",
        accommodation: "Boutique Hotel in Kathmandu",
      },
      {
        day: 2,
        title: "Kathmandu Valley Treasures",
        description:
          "Full day exploring Kathmandu's highlights: sunrise at Swayambhunath, morning at Kathmandu Durbar Square, and afternoon discovering the artistic treasures of Patan. Evening visit to the Garden of Dreams for high tea.",
        meals: "Breakfast, Lunch, High Tea",
        accommodation: "Boutique Hotel in Kathmandu",
      },
      {
        day: 3,
        title: "Bhaktapur & Sacred Sites",
        description:
          "Journey to Bhaktapur, spending the morning wandering through this living museum of medieval Nepal. Afternoon visits to Boudhanath Stupa and Pashupatinath Temple. Evening cooking class followed by dinner with a Newari family.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Hotel in Kathmandu",
      },
      {
        day: 4,
        title: "Monastery Visit & Cultural Workshops",
        description:
          "Morning meditation and teaching session at Kopan Monastery. Afternoon thangka painting workshop with a master artist. Free evening to explore or rest.",
        meals: "Breakfast, Lunch",
        accommodation: "Boutique Hotel in Kathmandu",
      },
      {
        day: 5,
        title: "Journey to Janakpurdham",
        description:
          "Scenic drive through Nepal's diverse landscapes—from hills to the fertile Terai plains. Stop at local villages and tea houses along the way. Arrive in Janakpurdham by evening. Introduction to Maithili culture with local guide.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Hotel in Janakpurdham",
      },
      {
        day: 6,
        title: "Sacred Janakpurdham",
        description:
          "Full day pilgrimage beginning with morning puja at Janaki Mandir. Visit sacred ponds, Ram Mandir, and the Vivah Mandap. Afternoon with Mithila artists learning this ancient painting tradition. Evening aarti ceremony.",
        meals: "Breakfast, Lunch",
        accommodation: "Hotel in Janakpurdham",
      },
      {
        day: 7,
        title: "Mithila Cultural Immersion",
        description:
          "Visit women's cooperatives preserving traditional crafts. Explore local markets and villages. Traditional Maithili lunch with a local family. Afternoon visit to Janak Museum. Farewell dinner with cultural performance.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Hotel in Janakpurdham",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Return transfer to Kathmandu or Janakpur airport based on your onward travel plans. Depart with handcrafted Mithila artwork and memories of Nepal's extraordinary cultural tapestry.",
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "7 nights accommodation in premium hotels",
      "All meals as specified in itinerary",
      "Private vehicle throughout the journey",
      "Expert English-speaking cultural guide",
      "All entrance and permit fees",
      "Thangka and Mithila painting workshops",
      "Cooking class with local family",
      "Monastery visit and meditation session",
      "Cultural performances",
      "Bottled water and refreshments",
      "All taxes and service charges",
    ],
    exclusions: [
      "International flights",
      "Nepal visa",
      "Travel and medical insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities",
      "Alcoholic beverages",
      "Laundry and phone calls",
    ],
    gallery: [
      "/packages/odyssey-1.jpg",
      "/packages/odyssey-2.jpg",
      "/packages/odyssey-3.jpg",
      "/packages/odyssey-4.jpeg",
      "/packages/odyssey-5.jpg",
    ],
    destination: "multi-city",
    category: "cultural",
    featured: true,
  },
  {
    id: "4",
    slug: "mithila-art-retreat",
    title: "Mithila Art & Heritage Retreat",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    startingPrice: 25000,
    currency: "NPR",
    summary:
      "An intimate artistic journey into the heart of Mithila culture. Perfect for art enthusiasts seeking to understand and practice this UNESCO-recognized tradition.",
    description:
      "This specialized retreat focuses on the extraordinary artistic heritage of the Mithila region. Mithila painting, with its distinctive style passed down through generations of women, has gained global recognition for its symbolic richness and aesthetic beauty. Over three immersive days, you'll learn from master artists, visit village studios, and create your own artwork while discovering the stories and traditions woven into every brushstroke. This experience goes beyond observation to genuine participation in a living artistic tradition.",
    highlights: [
      "Hands-on workshops with award-winning Mithila artists",
      "Visit to traditional village studios",
      "Create your own Mithila artwork to take home",
      "Understanding symbolism and stories in Mithila art",
      "Meet women's collectives preserving traditional crafts",
      "Curated visit to private art collections",
    ],
    itinerary: [
      {
        day: 1,
        title: "Introduction to Mithila Art",
        description:
          "Arrive in Janakpurdham and transfer to your accommodation. Afternoon introduction to Mithila art history and symbolism. Visit to Janaki Mandir to see traditional wall paintings. Evening workshop: basic techniques and motifs.",
        meals: "Lunch, Dinner",
        accommodation: "Guesthouse in Janakpurdham",
      },
      {
        day: 2,
        title: "Full Day Art Immersion",
        description:
          "Morning visit to traditional village studios, meeting artists in their homes. Observe and participate in the creation process. Lunch with artist family. Afternoon intensive workshop: create your own painting under expert guidance. Evening: understand the ritual and ceremonial uses of Mithila art.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Guesthouse in Janakpurdham",
      },
      {
        day: 3,
        title: "Completion & Departure",
        description:
          "Morning session to complete your artwork. Visit women's cooperative and local craft market. Receive certificate of participation. Depart with your creation and newfound appreciation for this ancient art form.",
        meals: "Breakfast, Lunch",
      },
    ],
    inclusions: [
      "2 nights accommodation",
      "All meals as specified",
      "Expert artist guides",
      "All art materials and supplies",
      "Workshop sessions",
      "Village studio visits",
      "Certificate of participation",
      "Your completed artwork",
    ],
    exclusions: [
      "Transportation to/from Janakpurdham",
      "Travel insurance",
      "Personal expenses",
      "Additional art supplies for personal projects",
      "Tips",
    ],
    gallery: [
      "/packages/mithila-art-1.jpg",
      "/packages/mithila-art-2.jpg",
      "/packages/mithila-art-3.jpeg",
    ],
    destination: "janakpurdham",
    category: "cultural",
    featured: false,
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((pkg) => pkg.slug === slug);
}

export function getFeaturedPackages(): Package[] {
  return packages.filter((pkg) => pkg.featured);
}

export function getPackagesByDestination(
  destination: Package["destination"]
): Package[] {
  return packages.filter((pkg) => pkg.destination === destination);
}
