// Gallery data for historical and cultural locations

export interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  location: "kathmandu" | "janakpurdham";
  shortDescription: string;
  fullHistory: string;
  significance: string[];
  imageUrl: string;
  tags: string[];
  yearEstablished?: string;
  visitingHours?: string;
  entryFee?: string;
}

// All available tags for filtering
export const galleryTags = [
  "UNESCO",
  "Temple",
  "Stupa",
  "Palace",
  "Sacred Pond",
  "Monastery",
  "Garden",
  "Art & Culture",
  "Heritage",
  "Spiritual",
  "Must Visit",
  "Hidden Gem",
] as const;

export type GalleryTag = (typeof galleryTags)[number];

export const galleryItems: GalleryItem[] = [
  // ============ KATHMANDU LOCATIONS (10) ============
  {
    id: "1",
    slug: "pashupatinath-temple",
    title: "Pashupatinath Temple",
    location: "kathmandu",
    shortDescription:
      "The holiest Hindu temple in Nepal, dedicated to Lord Shiva as Pashupati, the protector of animals.",
    fullHistory: `Pashupatinath Temple is the oldest and most sacred Hindu temple in Kathmandu, with origins believed to be pre-Vedic. According to Nepal Mahatmaya and Himvatkhanda of Skanda Purana, the deity here gained great fame as Pashupati, meaning "Lord of all living beings."

The temple's existence is recorded as early as 400 CE. Historical records indicate it was constructed by Supuspadev, a Licchavi king who ruled the Kathmandu Valley between 464 and 505 AD. The sanctuary was later reconstructed by medieval king Shivadeva (1099-1126 CE), and the present main temple was built at the end of the 17th century to replace an earlier structure damaged by termites.

Located on the banks of the sacred Bagmati River, the temple complex spans an impressive 246 hectares and includes 518 mini-temples. The main temple features stunning Newari architecture with two-level copper roofs covered in gold. The structure stands 23.7 meters tall from base to pinnacle, with four main doors covered in silver sheets.

The temple is intimately connected to Hindu mythology. According to the Shiva Purana, this is where Lord Shiva, hidden underground in the form of a bull, reappeared with his head—making Pashupatinath the "head" of all Jyotirlingas. Devotees believe that without the darshan of Pashupatinath, pilgrimage to the 12 Jyotirlingas remains incomplete.

Arya Ghat beside the Bagmati River serves as the main Hindu cremation site in Kathmandu. Many believe cremation at Pashupatinath ensures moksha—liberation from the cycle of rebirth. The temple attracts hundreds of thousands of devotees during Maha Shivaratri festival.

Despite some damage to outer buildings during the April 2015 Nepal earthquake, the main temple complex and sanctum sanctorum remained untouched. The site was designated a UNESCO World Heritage Site in 1979 as part of the Kathmandu Valley heritage zone.`,
    significance: [
      "UNESCO World Heritage Site since 1979",
      "Oldest Hindu temple in Kathmandu",
      "One of the most sacred Shiva temples in the world",
      "Contains 518 mini-temples across 246 hectares",
      "Major cremation site with belief in granting moksha",
      "Host to the largest Maha Shivaratri gathering in Nepal",
    ],
    imageUrl: "/gallery/pashupatinath-temple.jpg",
    tags: ["UNESCO", "Temple", "Must Visit", "Spiritual"],
    yearEstablished: "~400 CE",
    visitingHours: "4:00 AM - 9:00 PM",
    entryFee: "NPR 1,000 for foreigners",
  },
  {
    id: "2",
    slug: "boudhanath-stupa",
    title: "Boudhanath Stupa",
    location: "kathmandu",
    shortDescription:
      "One of the largest spherical stupas in the world and the most sacred Tibetan Buddhist site outside Tibet.",
    fullHistory: `Boudhanath Stupa stands as a massive mandala, making it the largest spherical stupa in Nepal and one of the largest in the world. This sacred site has been a pilgrimage destination for over 1,500 years and represents the embodiment of the enlightened mind of all the Buddhas.

The Great Stupa was built in the 5th century, though precise dating remains debated. The Gopālarājavaṃśāvalī suggests it was founded by Nepali Licchavi king Śivadeva (c. 590-604 CE), while other chronicles date it to King Mānadeva's reign (464-505 CE). At the time of construction, it sat strategically on a major trade route with Tibet.

A beloved legend tells of a humble widow named Jyajima (a poultry keeper) who, with her four sons, constructed the stupa as tribute to Lord Buddha. Impressed by her devotion, the king granted her land for the construction. Today, her four sons are worshipped as the Four Great Bodhisattvas, representing principles of enlightenment and compassion.

The stupa's overall shape represents a Buddhist mandala—a cosmological map and the path toward enlightenment—as well as Mount Meru, the mythical center of the cosmos. According to Buddhist tradition, the site holds remains of Kassapa Buddha (the 27th of the named Buddhas) along with authentic bone pieces of Shakyamuni Buddha.

After the Chinese invasion of Tibet in the 1950s, a large refugee community settled around Boudhanath, bringing Tibetan religious practices, art, and traditions. Today, monasteries representing Ganden, Sakya, and Nyingma traditions surround the stupa, making it a living center of Tibetan Buddhism.

The April 2015 earthquake severely cracked the spire, requiring complete examination and restoration of everything above the dome. Funded entirely by private donations from Buddhist groups and volunteers ($2.1 million and 30 kg of gold), the stupa was reopened on November 22, 2016—the first earthquake-damaged World Heritage Site in Kathmandu Valley to be fully rebuilt.`,
    significance: [
      "UNESCO World Heritage Site since 1979",
      "Largest spherical stupa in Nepal",
      "Most sacred Tibetan Buddhist site outside Tibet",
      "Contains relics of Kassapa and Shakyamuni Buddha",
      "Center of Tibetan Buddhist community in Nepal",
      "First heritage site restored after 2015 earthquake",
    ],
    imageUrl: "/gallery/boudhanath-stupa.jpg",
    tags: ["UNESCO", "Stupa", "Must Visit", "Spiritual"],
    yearEstablished: "5th century CE",
    visitingHours: "Open 24 hours",
    entryFee: "NPR 400 for foreigners",
  },
  {
    id: "3",
    slug: "swayambhunath-stupa",
    title: "Swayambhunath (Monkey Temple)",
    location: "kathmandu",
    shortDescription:
      "An ancient religious complex nicknamed 'Monkey Temple,' where a miraculous self-arisen light once drew saints and sages.",
    fullHistory: `Swayambhunath is an ancient religious complex atop a hill in the Kathmandu Valley, west of Kathmandu city. The Tibetan and Sanskrit name means "self-arising" or "self-sprung," referring to a miraculous legend that has drawn pilgrims for millennia.

Historical records on a stone inscription confirm the stupa was already an important Buddhist pilgrimage destination by the 5th century AD. However, its origins predate Buddhism's arrival in the valley. The site is believed to have been established around 460 AD by King Manadeva, and by the 13th century, it had become an important center of Buddhism.

The legendary 15th-century Swayambhu Purana tells of a miraculous lotus planted by a past Buddha that blossomed from a lake once covering Kathmandu Valley. This lotus radiated brilliant light with the power to grant enlightenment, drawing saints, sages, and divinities from across the world. The bodhisattva Manjushri, determined to make it accessible, used his sword of wisdom to slice a gorge at Chobhar, draining the lake. The lotus settled on the hill where Swayambhunath now stands.

The nickname "Monkey Temple" comes from the large families of rhesus macaques inhabiting the area. According to legend, when Manjushri was raising the temple hill, the lice in his hair transformed into these monkeys, now considered sacred and believed to be transformed disciples of Manjushri.

Emperor Ashoka reportedly visited in the 3rd century BCE along with his spiritual master Upagupta Bhikku. In the 15th century, Indian Buddhist monk Śāriputra led reconstruction of the deteriorating stupa with assistance from a Malla dynasty king. King Pratap Malla built the eastern stairway in the 17th century.

The complex serves as an important pilgrimage site for both Buddhists and Hindus, with Hindu temples and deities incorporated throughout. The stupa was completely renovated in May 2010—its first major renovation since 1921—using 20 kg of gold funded by the Tibetan Nyingma Meditation Center of California.`,
    significance: [
      "UNESCO World Heritage Site since 1979",
      "Among the oldest religious sites in Nepal",
      "Emperor Ashoka visited in 3rd century BCE",
      "Sacred to both Buddhists and Hindus",
      "Origin of Kathmandu Valley creation legend",
      "Home to sacred monkey population",
    ],
    imageUrl: "/gallery/swayambhunath-stupa.jpg",
    tags: ["UNESCO", "Stupa", "Temple", "Must Visit", "Spiritual"],
    yearEstablished: "~460 CE",
    visitingHours: "Open 24 hours",
    entryFee: "NPR 200 for foreigners",
  },
  {
    id: "4",
    slug: "kathmandu-durbar-square",
    title: "Kathmandu Durbar Square",
    location: "kathmandu",
    shortDescription:
      "The historic royal palace complex of Hanuman Dhoka, where Malla and Shah kings once ruled over Nepal.",
    fullHistory: `Kathmandu Durbar Square—also known as Hanuman Dhoka Durbar Square or Basantapur Durbar—is a living testament to centuries of Nepalese history, craftsmanship, and spiritual tradition. Located in the heart of the old city, this complex served as the royal seat of power for Nepali monarchs for centuries.

The square's origins trace back to the 3rd century, gaining prominence during the Licchavi period (4th-9th century). The Hanuman Dhoka Palace was built during this era and significantly extended in the 17th century by King Pratap Malla. Every king from Ratna Malla to Prithivi Bir Bikram Shah added to or renovated the palace, with the most important contributions from Mahendra Malla, Pratap Malla, and Prithivi Narayan Shah.

The "Hanuman Dhoka" proper (Hanuman Gate) features a standing statue of Hanuman dated to 1672, draped in red cloth under an umbrella, with face smeared in red paste. The Malla dynasty used Hanuman's image on their battle flags and placed his statue to ward off evil spirits and diseases.

The eastern wing with ten courtyards is the oldest part, dated to mid-16th century. A fascinating 17th-century stone inscription on the palace wall contains text in 15 languages—legend claims whoever fully deciphers it will cause milk to flow from a spout below. Some believe it contains coded directions to treasure buried beneath Mohan Chowk by King Pratap Malla.

In 1769, King Prithivi Narayan Shah occupied the Kathmandu Valley and added four observation towers to the southeast. All successive Shah Dynasty kings lived here until moving to a new palace in 1886, though major ceremonies including royal coronations continued here—King Birendra was crowned in Nasal Chok courtyard in 1975.

The 2015 earthquake caused extensive damage to the sprawling palace complex. Despite this, UNESCO continues to recognize it as one of the most important cultural landmarks in the Kathmandu Valley.`,
    significance: [
      "UNESCO World Heritage Site",
      "Royal palace complex since 3rd century",
      "Hanuman statue from 1672 guards entrance",
      "Site of royal coronations",
      "Contains mysterious 15-language inscription",
      "Masterpiece of Newari architecture",
    ],
    imageUrl: "/gallery/kathmandu-durbar-square.jpg",
    tags: ["UNESCO", "Palace", "Must Visit", "Heritage"],
    yearEstablished: "3rd century CE",
    visitingHours: "7:00 AM - 7:00 PM",
    entryFee: "NPR 1,000 for foreigners",
  },
  {
    id: "5",
    slug: "patan-durbar-square",
    title: "Patan Durbar Square",
    location: "kathmandu",
    shortDescription:
      "A marvel of Newa architecture featuring some of the finest examples of medieval craftsmanship in the Kathmandu Valley.",
    fullHistory: `Patan Durbar Square stands as perhaps the finest example of Newari architecture anywhere in the world. This collection of historic structures from the 16th and 18th centuries showcases the exceptional craftsmanship of the Malla period through its temples, palaces, courtyards, and intricate carvings.

Evidence suggests Patan was founded during the 3rd century BC by the Kirat dynasty and later expanded in the 6th century. The royal square bears witness to the political authority and civic life of the Malla rulers who controlled the city from the 14th to 18th century.

Most current architecture dates from the 1600s, constructed during the reign of King Siddhi Narsingh Malla and his son Srinivasa Sukriti. The three main courtyards—Mul Chowk, Sundari Chowk, and Keshav Narayan Chowk—represent the heart of the complex, with Mul Chowk being the largest and most famous.

The Krishna Mandir, commissioned by King Siddhi Narsingh Malla in 1637, is adorned with 21 golden pinnacles and represents the first specimen of Shikhara-style architecture in Nepal. Built entirely of stone, it differs dramatically from the typical wood and brick pagoda style. The Taleju Bhawani Temple (1640) served as the personal deity of the Malla Dynasty, while the Bhimsen Temple (1680) features distinctive interconnected golden windows.

In 1768 AD, King Prithivi Narayan Shah of Gorkha took control of Patan without violence, preserving its architectural heritage. The 2015 earthquakes considerably slowed restoration—two major temples and two satahs collapsed completely, and other structures suffered severe damage.

However, with support from local communities, private institutions, government agencies, and international organizations (UNESCO supervising with traditional materials and methods), more than 90% of Patan Durbar's built heritage has been restored to the highest conservation standards as of July 2022.`,
    significance: [
      "UNESCO World Heritage Site since 1979",
      "Finest example of Newari architecture",
      "Krishna Mandir - first Shikhara-style temple in Nepal",
      "Over 90% restored after 2015 earthquake",
      "Three historic royal courtyards",
      "Center of medieval Malla civilization",
    ],
    imageUrl: "/gallery/patan-durbar-square.jpg",
    tags: ["UNESCO", "Palace", "Must Visit", "Heritage"],
    yearEstablished: "3rd century BC",
    visitingHours: "7:00 AM - 7:00 PM",
    entryFee: "NPR 1,000 for foreigners",
  },
  {
    id: "6",
    slug: "bhaktapur-durbar-square",
    title: "Bhaktapur Durbar Square",
    location: "kathmandu",
    shortDescription:
      "The best-preserved ancient city in Nepal, home to the magnificent Nyatapola Temple—the tallest pagoda in the country.",
    fullHistory: `Bhaktapur Durbar Square represents the pinnacle of medieval Newari architecture and remains the best-preserved ancient city in the Kathmandu Valley. Built in the 13th century by Jayasithi Malla, this former royal palace complex housed the Malla kings of Nepal from the 14th century and later the independent Kingdom of Bhaktapur until 1769.

The town itself is said to have been founded in the 12th century by King Ananda Malla. Bhaktapur served as the capital of the Greater Malla Kingdom until the 15th century, when it became an independent kingdom lasting until the 18th century. At its peak, the square featured an impressive scale: 99 palace courtyards, 172 temples, and 172 rest houses for pilgrims—of which only 15 courtyards remain today.

The crown jewel is the Nyatapola Temple, Nepal's tallest pagoda. Commissioned by King Bhupatindra Malla, construction lasted just six months from December 1701 to July 1702. The name means "Five Levels" in Newari. On January 4, 1702, Bhupatindra Malla himself inaugurated construction by carrying three bricks on his shoulder to lay on the foundation. Waves of people from surrounding towns came to assist the construction.

The five-story temple is dedicated to Siddhi Lakshmi, a fierce tantric goddess of strength and protection. Each level features guardian statues on the stairway of increasing mythical power. Remarkably, this temple has survived four major earthquakes including the devastating 7.8 magnitude April 2015 earthquake.

Key rulers Jitamitra Malla (1663-1696), Bhupatindra Malla (1696-1722), and Ranjit Malla (1722-1769) contributed significantly to the square's palaces and shrines. The Golden Gate, begun by Bhupatindra and completed by Ranjit Malla in 1754, stands as one of the finest examples of Newari metalwork.`,
    significance: [
      "UNESCO World Heritage Site since 1979",
      "Best-preserved ancient city in Kathmandu Valley",
      "Nyatapola Temple - tallest pagoda in Nepal",
      "Survived four major earthquakes",
      "Originally featured 99 palace courtyards",
      "Golden Gate - masterpiece of Newari metalwork",
    ],
    imageUrl: "/gallery/bhaktapur-durbar-square.jpg",
    tags: ["UNESCO", "Palace", "Must Visit", "Heritage"],
    yearEstablished: "13th century",
    visitingHours: "Open 24 hours",
    entryFee: "NPR 1,500 for foreigners",
  },
  {
    id: "7",
    slug: "changu-narayan-temple",
    title: "Changu Narayan Temple",
    location: "kathmandu",
    shortDescription:
      "The oldest Hindu temple in Nepal, housing the country's most ancient stone inscription from 464 AD.",
    fullHistory: `Changu Narayan Temple holds the distinction of being the oldest Hindu temple in Nepal, with origins in the 4th century AD. Dedicated to Lord Vishnu, this sacred site sits about 12 km east of Kathmandu and a few kilometers north of Bhaktapur, perched atop a hill surrounded by forest.

The temple's historical significance is anchored by Nepal's oldest stone inscription, a pillar erected by Licchavi King Manadeva in 464 AD. Located in the west corner of the site, this inscription tells the remarkable tale of how a king convinced his mother not to commit suicide after her husband's death.

The sanctuary was initially built during the Licchavi period (4th-8th centuries AD). After a major fire incident, it was rebuilt in 1702 AD. The temple follows traditional two-level pagoda-style roof design, with the roof structure supported by small rafters arranged radially from the center of the inner masonry cell.

At the temple's front stands a beautiful 5th-century Garuda statue from the Licchavi period—unique in that it resembles a human being with wings, unlike other Garuda statues found elsewhere. The temple complex showcases some of the finest examples of Newari architecture through its intricate carvings, wood sculptures, and artwork.

Although primarily sacred to Vaishnavites (devotees of Vishnu), the temple also houses idols of Shiva and Durga, making it equally important to Shaivas and Shakti worshippers—demonstrating remarkable religious tolerance and mutual respect between different Hindu sects. The main deity is worshiped by both Hindus and Buddhists.

The 2015 earthquake destroyed the temple, but restoration with Chinese support was completed in five years. The Department of Archaeology announced completion in November 2017. As one of seven structures cited by UNESCO as demonstrating historic and artistic achievements of the Kathmandu Valley, Changu Narayan was designated a World Heritage Site in 1979.`,
    significance: [
      "UNESCO World Heritage Site since 1979",
      "Oldest Hindu temple in Nepal (4th century)",
      "Contains Nepal's oldest stone inscription (464 AD)",
      "Unique 5th-century human-like Garuda statue",
      "Sacred to both Hindus and Buddhists",
      "Fully restored after 2015 earthquake",
    ],
    imageUrl: "/gallery/changu-narayan-temple.jpg",
    tags: ["UNESCO", "Temple", "Must Visit", "Heritage"],
    yearEstablished: "4th century CE",
    visitingHours: "5:00 AM - 8:00 PM",
    entryFee: "NPR 300 for foreigners",
  },
  {
    id: "8",
    slug: "kopan-monastery",
    title: "Kopan Monastery",
    location: "kathmandu",
    shortDescription:
      "A renowned Tibetan Buddhist monastery that has introduced thousands of Westerners to Buddhist philosophy and meditation.",
    fullHistory: `Kopan Monastery is a Tibetan Buddhist monastery located on a peaceful hill about 6 kilometers north of Boudhanath in Kathmandu. Founded in 1969 by Lama Thubten Yeshe and Lama Zopa Rinpoche, it has grown from a small meditation center into one of the most internationally significant Buddhist institutions in Nepal.

The monastery is affiliated with the Foundation for the Preservation of the Mahayana Tradition (FPMT), a global network of Buddhist centers spanning multiple continents. This affiliation has made Kopan instrumental in bringing Tibetan Buddhism to Western audiences, serving as a bridge between ancient Eastern wisdom and modern spiritual seekers.

Kopan gained international fame through its annual one-month meditation courses, which have been running since the early 1970s. These intensive courses attract practitioners from around the world, providing instruction in Tibetan Buddhist philosophy and meditation techniques. The monastery also offers shorter 7-10 day courses throughout the year, catering to both beginners and experienced meditators.

The monastic community houses hundreds of monks and nuns. A separate nunnery called Khachoe Ghakyil Ling operates nearby, providing spiritual education and refuge for women pursuing the monastic path. Education at Kopan follows the traditional Tibetan Buddhist curriculum, preserving ancient teachings while making them accessible to international students.

The monastery's setting offers stunning views of the Kathmandu Valley and the Himalayan peaks beyond. Its peaceful grounds, adorned with prayer flags and traditional Buddhist architecture, provide an ideal environment for contemplation and spiritual practice. Regular teachings by visiting rinpoches and resident teachers continue the living transmission of Buddhist wisdom.

Kopan has played a crucial role in preserving Tibetan Buddhist traditions after the diaspora following Chinese occupation of Tibet, while simultaneously adapting these teachings for a global audience seeking spiritual guidance.`,
    significance: [
      "Founded 1969 by Lama Thubten Yeshe and Lama Zopa Rinpoche",
      "Famous for annual month-long meditation courses since 1970s",
      "Affiliated with FPMT global Buddhist network",
      "Introduced thousands of Westerners to Tibetan Buddhism",
      "Houses hundreds of monks and nuns",
      "Preserves traditional Tibetan Buddhist curriculum",
    ],
    imageUrl: "/gallery/kopan-monastery.jpg",
    tags: ["Monastery", "Spiritual", "Heritage"],
    yearEstablished: "1969",
    visitingHours: "6:00 AM - 6:00 PM",
    entryFee: "Free (donations welcome)",
  },
  {
    id: "9",
    slug: "garden-of-dreams",
    title: "Garden of Dreams",
    location: "kathmandu",
    shortDescription:
      "A tranquil neo-classical European garden oasis in the heart of bustling Thamel, created by a visionary Rana nobleman.",
    fullHistory: `The Garden of Dreams (Nepali: स्वप्न बगैंचा), also known as the Garden of Six Seasons, stands as an enduring legacy of Late Field Marshall Kaiser Shumsher Jung Bahadur Rana (1892-1964). This neo-classical garden in Kaiser Mahal, Kathmandu, was built in 1920 and represents one of the great and unique landscaping monuments of South Asia.

Kaiser Shumsher was no ordinary nobleman—a statesman, scholar, linguist, and connoisseur of horticulture, art, and literature, he created a masterpiece inextricably linked to his impressive library collections on gardening, architecture, and literature. The garden featured a design inspired by Edwardian style and was considered one of the most sophisticated private gardens of that era.

Landscape architect Kishore Narshingh, designer of Singha Durbar and architect to Shumsher's father the Maharaja, designed and supervised construction. Within the garden walls, Kaiser Shumsher created an exquisite ensemble of pavilions, fountains, decorative furniture, and European-inspired pergolas, balustrades, urns, and statues. He erected six impressive freestanding pavilions, each dedicated to one of Nepal's six seasons.

Neoclassicism, the style drawing from ancient Greek and Roman architecture, can be seen in the garden's structures adorned with elegant columns, pediments, and symmetrical designs. While similar European-style gardens exist in India, Kaiser Shumsher's extreme refinement, personal adaptations, and connection to a historically significant figure make this monument unique.

After decades of neglect resulting in crumbling pavilions, overgrown paths, and loss of subtropical flora, restoration was undertaken between 2000 and 2007 with support from Austrian Development Aid in collaboration with Nepal's Ministry of Education. Implemented by Eco Himal, the renovation became a model project for sustainable development of historic sites.

Today the garden spans 6,895 square meters with three restored pavilions, an amphitheater, ponds, pergolas, and urns—a peaceful retreat from the chaos of adjacent Thamel.`,
    significance: [
      "Built 1920 by Field Marshall Kaiser Shumsher",
      "Unique neo-classical European garden in South Asia",
      "Six pavilions representing Nepal's six seasons",
      "Restored 2000-2007 with Austrian support",
      "Model project for historic site restoration",
      "Oasis of calm in bustling Thamel",
    ],
    imageUrl: "/gallery/garden-of-dreams.jpg",
    tags: ["Garden", "Heritage"],
    yearEstablished: "1920",
    visitingHours: "9:00 AM - 10:00 PM",
    entryFee: "NPR 200 for foreigners",
  },
  {
    id: "10",
    slug: "thamel",
    title: "Thamel",
    location: "kathmandu",
    shortDescription:
      "The vibrant heart of Kathmandu's tourism, evolved from an ancient Newar neighborhood into Nepal's most famous commercial district.",
    fullHistory: `Thamel is the primary tourist hub in Kathmandu, located in the heart of the city. This vibrant district evolved from a traditional Newar neighborhood into Nepal's main tourist center, becoming synonymous with adventure, culture, and the gateway to the Himalayas.

The transformation began in the 1960s and 1970s when Thamel became popular with hippies traveling the famous "Hippie Trail" from Europe to South Asia. This influx of Western travelers seeking spiritual enlightenment and adventure transformed the quiet neighborhood into an international meeting point. As Nepal opened up to tourism, Thamel grew to accommodate the increasing number of visitors.

The district features narrow, winding streets with a fascinating mix of traditional Nepalese architecture and modern buildings. Traditional Newar buildings and courtyards (bahals) can still be found among the more commercial establishments, offering glimpses into the area's historic character. The juxtaposition of ancient and modern creates Thamel's unique atmosphere.

Today, Thamel serves as the main staging area for trekkers heading to Nepal's legendary mountain regions—Everest, Annapurna, Langtang, and beyond. Countless trekking agencies, gear shops, hotels, restaurants, and cultural shops line its streets. From budget hostels to boutique hotels, the area offers accommodation for every type of traveler.

The district is a center for purchasing handicrafts, trekking gear, Tibetan goods, thangka paintings, singing bowls, and Nepali souvenirs. Restaurants serve cuisines from around the world, while rooftop cafes offer views of the surrounding cityscape. The nightlife scene adds another dimension to Thamel's vibrant character.

Despite commercialization, Thamel retains cultural significance as a living example of how traditional neighborhoods adapt to global tourism while maintaining elements of their heritage—a meeting point between ancient Nepal and the modern world.`,
    significance: [
      "Nepal's primary tourist district since 1960s-70s",
      "Famous stop on the historic Hippie Trail",
      "Gateway for Himalayan trekking expeditions",
      "Mix of traditional Newar and modern architecture",
      "Center for handicrafts and cultural goods",
      "Meeting point of ancient and modern Nepal",
    ],
    imageUrl: "/gallery/thamel.jpg",
    tags: ["Art & Culture", "Heritage"],
    yearEstablished: "Historic (transformed 1960s)",
    visitingHours: "Open 24 hours",
    entryFee: "Free",
  },

  // ============ JANAKPURDHAM LOCATIONS (10) ============
  {
    id: "11",
    slug: "janaki-mandir",
    title: "Janaki Mandir",
    location: "janakpurdham",
    shortDescription:
      "The magnificent 'Nine Lakh Temple' dedicated to Goddess Sita, built at the site where her golden idol was miraculously discovered.",
    fullHistory: `Janaki Mandir, located in Janakpurdham, Nepal, is a magnificent Hindu temple dedicated to Goddess Sita (Janaki), the divine consort of Lord Rama. This architectural masterpiece represents the heart of the ancient Mithila region, recognized as Sita's birthplace according to the Ramayana.

Commonly known as Nau Lakha Mandir ("Nine Lakh Temple"), it was built in 1910 AD by Queen Vrisha Bhanu of Tikamgarh, India, at an approximate cost of nine hundred thousand gold coins. The temple's location holds deep significance: in 1657, a golden statue of Goddess Sita was miraculously discovered at this very spot, believed to be where Sita once lived.

Shurkishordas, a great saint and poet who preached Sita Upasana philosophy, is credited as the founder of modern Janakpur. He first identified the sacred site where the images of Goddess Sita were found. According to Vedic texts, Janakpur was ruled by King Janaka, Sita's father, who discovered her while plowing the earth during a religious ritual.

The temple showcases a striking one-of-a-kind fusion of Hindu, Mughal, Nepali, and Koiri architectural styles—built entirely of white marble, occupying 4,860 square feet. The three-story structure stands 50 meters tall with 60 rooms, each adorned with exquisite lattice windows, turrets, and colorful carvings. Unlike typical Nepalese wood and brick pagoda-style temples, Janaki Mandir is constructed of stone and marble.

The walls are embellished with vibrant Madhubani paintings depicting mythological scenes. A remarkable testament to religious tolerance, a mosque sits inside the temple premises—built for laborers during construction.

In 2008, the temple was designated a UNESCO tentative site. It sustained partial damage in the April 2015 earthquake but continues to draw thousands of pilgrims from Nepal, India, Sri Lanka, and beyond, especially during the Vivah Panchami festival celebrating Ram and Sita's divine wedding.`,
    significance: [
      "UNESCO tentative site since 2008",
      "Built 1910 at cost of nine lakh gold coins",
      "Site where golden Sita idol was discovered in 1657",
      "Unique fusion of Hindu, Mughal, and Koiri architecture",
      "50 meters tall with 60 decorated rooms",
      "Contains mosque within temple premises showing religious harmony",
    ],
    imageUrl: "/gallery/janaki-mandir.jpg",
    tags: ["Temple", "Must Visit", "Heritage"],
    yearEstablished: "1910",
    visitingHours: "5:00 AM - 9:00 PM",
    entryFee: "Free",
  },
  {
    id: "12",
    slug: "ram-mandir-janakpur",
    title: "Ram Mandir",
    location: "janakpurdham",
    shortDescription:
      "One of the oldest temples in Janakpur, dedicated to Lord Rama and rebuilt by the legendary Gorkhali General Amar Singh Thapa.",
    fullHistory: `Ram Mandir stands as one of the oldest Hindu temples in Janakpur, dedicated to Lord Rama, the divine hero of the Ramayana epic. Located just a 10-minute walk from Janaki Mandir, this temple holds profound significance for devotees who come to worship both Ram and Sita in their sacred homeland.

The temple was originally built in the 17th century by Chaturbhuj Giri, a saint who recognized the spiritual importance of Janakpur as the birthplace of Sita and the setting for her marriage to Rama. The temple was later rebuilt in 1782 by the famous Gorkhali General Amar Singh Thapa, who contributed to many religious structures across Nepal.

The architecture follows the traditional Nepalese pagoda style, featuring tiered roofs and intricate woodwork characteristic of temples in the Himalayan region. Inside, devotees find idols of Lord Rama along with his brother Lakshmana, creating a complete scene from the epic narrative.

According to Vedic literature, the present area belonged to the realms of King Janaka, father of Sita. During her swayambar (groom-choosing ceremony), Princess Janaki (Sita) selected Lord Rama as her spouse after he successfully strung and broke the divine bow of Lord Shiva—a feat no other suitor could accomplish. This momentous event transformed Janakpur into one of Hinduism's most sacred pilgrimage sites.

The temple attracts large crowds during Ram Navami (Lord Rama's birthday) and Dashain, important annual festivals dedicated to Lord Rama. Pilgrims often visit both Ram Mandir and Janaki Mandir together, completing their darshan of the divine couple in their earthly home.

The connection between Janakpur and Lord Rama extends beyond the temple walls—the entire city serves as a living memorial to the events of the Ramayana, with various sites marking different episodes from the epic.`,
    significance: [
      "One of oldest temples in Janakpur",
      "Originally built 17th century by Chaturbhuj Giri",
      "Rebuilt 1782 by General Amar Singh Thapa",
      "Traditional Nepalese pagoda architecture",
      "Houses idols of Ram and Lakshmana",
      "Major pilgrimage site for Ram Navami and Dashain",
    ],
    imageUrl: "/gallery/ram-mandir-janakpur.jpeg",
    tags: ["Temple", "Heritage", "Spiritual"],
    yearEstablished: "17th century",
    visitingHours: "5:00 AM - 8:00 PM",
    entryFee: "Free",
  },
  {
    id: "13",
    slug: "vivah-mandap",
    title: "Vivah Mandap",
    location: "janakpurdham",
    shortDescription:
      "The sacred marriage pavilion where Lord Rama and Goddess Sita's celestial wedding is believed to have taken place.",
    fullHistory: `Ram Janaki Vivah Mandap is a sacred Hindu temple site in Janakpur commemorating the legendary wedding of Lord Rama and Goddess Sita (Janaki). Located in the southwest corner of Janaki Mandir, this gorgeous marble structure marks the exact spot where the most celebrated marriage in Hindu mythology is believed to have occurred.

The ancient city of Janakpur was once the capital of the Mithila Kingdom, and according to Hindu scriptures, this is where Lord Rama succeeded in breaking Lord Shiva's divine bow—a challenge set by King Janaka to find a worthy bridegroom for his daughter. After Rama's extraordinary feat, witnessed by gods and sages, the celestial wedding took place at this very location.

The current structure was built in the early 20th century and resembles part of a palace with sturdy pillars, elegant arches, and stunning domes. At the center of the mandap, the legendary wedding ceremony is depicted through idols of Goddess Sita and Lord Rama sitting on a raised pedestal, with sages and their parents seated on parallel pedestals facing each other—recreating the divine moment.

The mandap becomes the focal point during Vivah Panchami, the weeklong festival celebrating Ram and Sita's marriage anniversary. Usually falling in November/December on the fifth day of the Shukla Paksha (waxing moon), the festival features a reenactment of the wedding ceremony, colorful processions, and dance performances. Thousands of pilgrims from across Nepal, India, and other countries flock here, including visitors from Ayodhya (Rama's birthplace) in India.

The site symbolizes divine love, devotion, and the ideal marriage according to Hindu tradition. For devotees, visiting Vivah Mandap represents witnessing the sacred union of Vishnu (as Rama) and Lakshmi (as Sita), making it one of the most spiritually significant pilgrimage destinations in the Ramayana circuit.`,
    significance: [
      "Believed site of Ram and Sita's divine wedding",
      "Central to Vivah Panchami festival celebrations",
      "Features marble idols depicting the wedding scene",
      "Part of the Ramayana pilgrimage circuit",
      "Symbolizes ideal Hindu marriage",
      "Attracts pilgrims from Nepal, India, and beyond",
    ],
    imageUrl: "/gallery/vivah-mandap.jpeg",
    tags: ["Temple", "Heritage", "Spiritual"],
    yearEstablished: "Early 20th century",
    visitingHours: "6:00 AM - 7:00 PM",
    entryFee: "Free",
  },
  {
    id: "14",
    slug: "dhanush-sagar",
    title: "Dhanush Sagar",
    location: "janakpurdham",
    shortDescription:
      "The sacred pond formed when a fragment of Lord Shiva's divine bow struck the earth during Rama's legendary feat.",
    fullHistory: `Dhanush Sagar is a deeply religious sacred pond connected to the pivotal events of the Ramayana. Located south of Janakchowk, west of Ganga Sagar, and east of Ram Mandir, it serves as the largest ceremonial tank in Janakpur city.

According to the epic narrative, during Sita's swayambar, Lord Rama lifted and broke Lord Shiva's divine bow (Pinac) in three pieces. One piece ascended to heaven, the second fell to Patallok (the netherworld), and the third piece struck this location—hence the name Dhanush Sagar, meaning "Ocean of the Bow." The Sanskrit word "Dhanush" refers to the bow, and "Sagar" means ocean or large water body.

Religious beliefs hold that this fragment of the sacred bow is sometimes visible within the pond, appearing to devotees during auspicious times. As per Valmiki Ramayana, a loud blast occurred when the bow broke, scattering small pieces across the land. Some of these pieces fell at this spot and are believed to remain in the form of stone beneath the waters.

According to the legend preserved in Mithila philosophical texts, King Janaka constructed these ponds in preparation for the arrival of gods following the marriage of Lord Rama and Sita. The ponds served both practical and ceremonial purposes for the grand celebrations that followed the divine wedding.

Dhanush Sagar gleams during annual Chhath Puja celebrations, attracting pilgrims who offer prayers and take holy dips in its waters. The pond also witnesses significant activity during Maha Shivaratri, Ram Navami, and especially the Vivah Panchami festival. Small shrines line the perimeter, and vendors sell flowers and ritual objects for puja ceremonies.

The pond offers pilgrims the opportunity for spiritual purification, with many believing that bathing here washes away sins and grants blessings. It is counted among the holiest ponds of Janakpur alongside Ganga Sagar and Parshuram Kund.`,
    significance: [
      "Formed when piece of Shiva's bow struck earth",
      "Largest ceremonial tank in Janakpur",
      "Bow fragment believed sometimes visible",
      "Major site for Chhath Puja celebrations",
      "Associated with King Janaka's wedding preparations",
      "Believed to purify sins through holy dip",
    ],
    imageUrl: "/gallery/dhanush-sagar.jpg",
    tags: ["Sacred Pond", "Spiritual", "Must Visit"],
    yearEstablished: "Ancient (Ramayana era)",
    visitingHours: "Open 24 hours",
    entryFee: "Free",
  },
  {
    id: "15",
    slug: "ganga-sagar",
    title: "Ganga Sagar",
    location: "janakpurdham",
    shortDescription:
      "A holy pond with waters believed to come from the Seven Seas and all sacred places, featuring daily evening Aarti ceremonies.",
    fullHistory: `Ganga Sagar is a revered sacred pond in the heart of Janakpur, holding immense religious significance for Hindus. Located a short walk from Janaki Mandir, this holy site draws thousands of pilgrims and tourists annually, serving as a spiritual centerpiece of the ancient city.

Historical records connect this pond to Hindu scriptures of Janakpur Dham since the ruling period of King Janaka, father of Goddess Sita. In the late 17th century, Saint Sur Kishor Das came to Janakpurdham and confirmed Ganga Sagar's presence, indicating this pond is among the oldest in the region. According to Vishnu Puran, the lake and Rajarshi Janaka's story are intimately connected.

Ganga Sagar is renowned for never having dried up since time immemorial. Its waters are believed to originate from the Seven Seas and all sacred places, making it an important holy site for devotees. The pond is said to have a spiritual connection with the holy River Ganga in India—people believe bathing in its waters washes away sins, just as bathing in the Ganges does.

One of the most enchanting aspects of Ganga Sagar is its nightly Aarti ceremony. The pond comes alive after dark with prayers on the riverbank accompanied by special chanting, music, and instruments. During Aarti, not only Ganga Stuti but also mantras of all deities are chanted. Many priests trained in Banaras conduct the ceremonies alongside local priests. Devotees believe participating in Ganga Aarti brings forgiveness for mistakes and fulfillment of wishes.

The pond is heavily decorated during Chhath, the biggest festival in the Mithila region. Devotees from different districts flock here to pay homage to the setting sun, fasting for 48 hours without water before making offerings.

A 70-year-old Ganga Sagar Library near the pond serves book lovers and scholars. The success of Ganga Aarti here has inspired similar daily ceremonies at Jaleshwor in Mahottari and Siraha district.`,
    significance: [
      "Waters believed from Seven Seas and all sacred places",
      "Never dried up since ancient times",
      "Daily evening Aarti ceremony",
      "Connected to King Janaka in Hindu scriptures",
      "Major site for Chhath festival celebrations",
      "Home to 70-year-old Ganga Sagar Library",
    ],
    imageUrl: "/gallery/ganga-sagar.jpeg",
    tags: ["Sacred Pond", "Spiritual", "Must Visit"],
    yearEstablished: "Ancient (King Janaka's era)",
    visitingHours: "Open 24 hours (Aarti at sunset)",
    entryFee: "Free",
  },
  {
    id: "16",
    slug: "ratna-sagar",
    title: "Ratna Sagar",
    location: "janakpurdham",
    shortDescription:
      "The 'Ocean of Jewels' where legend says King Janaka stored precious gems, now a serene temple complex.",
    fullHistory: `Ratna Sagar, meaning "Ocean of Jewels," is a sacred pond in Janakpur surrounded by temples and considered one of the four holiest ponds in the city. Located about a 10-minute walk from Ramananda Chowk, this serene site offers spiritual seekers a tranquil environment for contemplation and worship.

The name carries deep legendary significance: ancient stories tell that King Janaka, the wise and wealthy ruler of Mithila, used this pond to store precious jewels. Whether this represents actual treasure or a metaphor for spiritual riches, the name has persisted through millennia, connecting visitors to the glorious era of the Mithila Kingdom described in the Ramayana.

Ratna Sagar Temple, named after the sacred pond it surrounds, is dedicated to Lord Rama and Mother Sita. The temple is quite tall and houses idols of the divine couple, continuing the worship tradition that has existed since the ancient kingdom. A beautiful garden surrounds the temple complex, creating a picturesque panorama that delights both spiritual seekers and photographers.

As part of Janakpur's identity as the "City of Ponds," Ratna Sagar contributes to the remarkable collection of over 72 ancient water bodies dotting the landscape. These ponds were constructed for religious ceremonies, ritual bathing, and practical water storage, creating a unique urban ecosystem that has sustained the city for millennia.

A visit to Ratna Sagar offers escape from the bustling city center. The peaceful atmosphere, gentle waters, and surrounding temple architecture create an environment conducive to meditation and spiritual reflection. Many pilgrims include Ratna Sagar in their circuit of Janakpur's sacred sites, paying respects at the temple before continuing to other holy locations.

The pond and temple complex represent the integration of Hindu devotion with the natural environment—a characteristic feature of Mithila religious architecture that sought harmony between worship spaces and water bodies.`,
    significance: [
      "Name means 'Ocean of Jewels'",
      "Legend says King Janaka stored gems here",
      "One of four holiest ponds in Janakpur",
      "Temple dedicated to Rama and Sita",
      "Part of city's 72 ancient ponds",
      "Peaceful environment for meditation",
    ],
    imageUrl: "/gallery/ratna-sagar.jpg",
    tags: ["Sacred Pond", "Spiritual", "Heritage"],
    yearEstablished: "Ancient (King Janaka's era)",
    visitingHours: "6:00 AM - 6:00 PM",
    entryFee: "Free",
  },
  {
    id: "17",
    slug: "jaleshwar-mahadev-temple",
    title: "Jaleshwar Mahadev Temple",
    location: "janakpurdham",
    shortDescription:
      "An ancient Shiva temple where the sacred lingam lies 20 feet below ground, perpetually submerged in water.",
    fullHistory: `Jaleshwar Mahadev Temple is a remarkable Hindu temple dedicated to Lord Shiva, situated in Mahottari district, Nepal. The city of Jaleshwar where this temple stands is named after the deity—Jaleshwar literally means "Lord of the Water," describing the unique characteristic of the sacred Shiva lingam that lies perpetually submerged.

Records indicate the temple existed since the time of King Janaka, linking it to the Ramayana era. It is said that soil from this temple was used during the marriage between Lord Rama and Sita, sanctifying the divine union. A copper inscription in the temple records that in 1812-1813 AD, King Girvan Yuddha Bikram Shah provided 275 bighas of land to administer the temple. An even older record shows the then Mahant installed a bell in 1143 AD.

The Shiva lingam is situated approximately 20 feet below the temple surface, reached by a narrow stone stairway. Most of the time, it lies immersed in water—a phenomenon that gives the temple its name and mystique. A square Shiva Linga at the center of the main temple remains submerged throughout the year.

According to mythology, about 250 years ago, a hermit named Jagadesh meditated here for extended periods. He prophesied that the soil of Jaleshwar would crack and a unique Shivalinga would emerge. This belief draws people from worldwide, especially during Maghe Sankranti.

The temple complex features four historical ponds: Barun Sir (famous for lotus flowers used in worship), Purand Sir (for washing before temple visits), Purni Sir (the "Makhan pond" for offerings), and Mahantha Pokhari. The architecture follows the Gumbaja style with distinctive domed features.

Only during Maha Shivaratri do devotees get to touch the Shivling—Nepal Army personnel pump water from the cave to allow access. Past attempts using fire brigades failed repeatedly. Efforts continue to include this unique temple in the UNESCO World Heritage List.`,
    significance: [
      "Existed since King Janaka's time",
      "Shiva lingam 20 feet underground, submerged in water",
      "Soil used in Ram-Sita's wedding ceremony",
      "Four sacred ponds in complex",
      "Lingam only touchable on Maha Shivaratri",
      "Seeking UNESCO World Heritage status",
    ],
    imageUrl: "/gallery/jaleshwar-mahadev-temple.jpeg",
    tags: ["Temple", "Spiritual", "Hidden Gem"],
    yearEstablished: "Ancient (Ramayana era)",
    visitingHours: "5:00 AM - 8:00 PM",
    entryFee: "Free",
  },
  {
    id: "18",
    slug: "mithila-art-center",
    title: "Mithila Art Center",
    location: "janakpurdham",
    shortDescription:
      "Where the ancient tradition of Madhubani painting—created for Sita's wedding—continues through the hands of Maithili women artists.",
    fullHistory: `Mithila art, also known as Madhubani painting, represents one of the oldest living art traditions in the world, with origins tracing back to the 8th or 7th century BCE. According to legend, King Janaka of Mithila commissioned local artists to decorate the town of Janakpur with this unique art form for the wedding of his daughter Sita to Lord Rama—making it possibly the world's first wedding decoration tradition.

The art was traditionally created by women of various communities in the Mithila region, passed down through generations from mother to daughter. Originally painted on freshly plastered mud walls and floors of homes, the artwork featured natural dyes and pigments—ochre for reddish brown, lampblack for black—applied with fingers, twigs, brushes, nib-pens, and matchsticks.

Mithila paintings are characterized by eye-catching geometrical patterns and ritual content for occasions like birth, marriage, and festivals including Holi, Durga Puja, and Chhath. The artwork depicts people's association with nature, deities from ancient epics, natural objects like the sun and moon, religious plants like tulsi, royal court scenes, and social events. No space is left empty—gaps are filled with flowers, animals, birds, and geometric designs.

In the 1960s, Madhubani painters began painting on canvas and paper to generate income for women in the impoverished Mithila region. In the 1970s, German anthropologist Erika Moser challenged the notion that the art belonged only to high castes by encouraging Dalit women to create paintings inspired by their tattoos and house designs.

The Janakpur Women's Development Center (JWDC) now provides employment opportunities for about 40 Maithili women, producing paper paintings, boxes, screen-printed fabrics, and hand-thrown ceramics. The art has received Geographical Indication (GI) status, recognizing its unique cultural heritage. Today, Janakpur serves as the center for preservation and promotion of this ancient art form in Nepal.`,
    significance: [
      "Originated for Sita's wedding (8th-7th century BCE)",
      "Traditional women's art form passed through generations",
      "Received Geographical Indication (GI) status",
      "Janakpur Women's Development Center empowers local women",
      "Featured on walls, now on canvas and paper",
      "UNESCO recognized intangible cultural heritage",
    ],
    imageUrl: "/gallery/mithila-art-center.jpg",
    tags: ["Art & Culture", "Heritage"],
    yearEstablished: "8th-7th century BCE (tradition)",
    visitingHours: "9:00 AM - 5:00 PM",
    entryFee: "Nominal fee",
  },
  {
    id: "19",
    slug: "dhanusha-dham",
    title: "Dhanusha Dham",
    location: "janakpurdham",
    shortDescription:
      "The sacred pilgrimage site where a fossilized fragment of Lord Shiva's divine bow is believed to remain buried.",
    fullHistory: `Dhanushadham is a sacred pilgrimage town located about 40 kilometers (18 km northeast) from Janakpurdham, believed to be the place where the broken remains of Lord Shiva's divine bow fell after Rama shattered it to win Sita's hand in marriage. This makes it one of the most spiritually significant sites in the Ramayana pilgrimage circuit.

According to Valmiki Ramayana, when Lord Rama broke Lord Shiva's bow (Pinac), a tremendous blast scattered pieces across the land. The bow—originally made from the bones of sage Dadhichi along with Vajra (given to Indra) and Saarang (with Vishnu/Rama)—was entrusted to King Janaka. When Rama broke Pinac, small fragments fell at various locations, with one significant piece landing at Dhanushadham.

The "Dhanusha" (broken bow) is said to be buried deep in a sacred pond, with only a small part visible during dry seasons. A fossilized fragment of the broken piece is believed to be present here, making it a site of immense archaeological and religious interest. Mithila philosophical texts declare that all sins will be washed away for those who visit and worship at Dhanushkhand.

Every Sunday in the month of Magh (January/February), a Makar Mela (fair) takes place—a tradition unbroken since Vedic times. Tens of thousands of devotees from Nepal and India flock here to pay homage. The area is considered one of the purest spiritual locations by Maithili Brahmins and Hindu scholars.

Dhanusadham is part of the Janakpur-Ramayana Circuit being jointly promoted by Nepal and India for religious tourism. Visitors who come to Janakpurdham rarely miss visiting this site to complete their pilgrimage. The municipality (Dhanusadham Municipality) itself is named after this sacred location.

To reach Dhanusha Dham, local buses depart from Janakpur's main bus station. The fare is approximately NPR 50-100, and the journey takes about 45 minutes to an hour through the Mithila countryside.`,
    significance: [
      "Fragment of Shiva's bow believed buried here",
      "Part of Ramayana pilgrimage circuit",
      "Makar Mela tradition since Vedic times",
      "Considered purest spiritual site by Maithili scholars",
      "Fossilized bow piece may be visible in dry season",
      "Joint Nepal-India tourism promotion site",
    ],
    imageUrl: "/gallery/dhanusha-dham.jpg",
    tags: ["Spiritual", "Heritage", "Hidden Gem"],
    yearEstablished: "Ancient (Ramayana era)",
    visitingHours: "Open during daylight",
    entryFee: "Free",
  },
  {
    id: "20",
    slug: "parshuram-kund",
    title: "Parshuram Kund",
    location: "janakpurdham",
    shortDescription:
      "A sacred pond associated with the legendary sage Parshuram, among the holiest water bodies in the ancient City of Ponds.",
    fullHistory: `Parshuram Kund is one of the most sacred ponds in Janakpur, associated with the legendary sage Parshuram (also known as Parashurama), an avatar of Lord Vishnu known as the warrior-sage who wielded an axe. This holy water body stands among the holiest ponds alongside Ganga Sagar and Dhanush Sagar.

Sage Parshuram holds a significant place in Hindu mythology as the sixth avatar of Vishnu, known for ridding the earth of corrupt Kshatriya rulers twenty-one times. His association with Janakpur connects to the broader narrative of the Ramayana—according to some accounts, Parshuram appeared at Sita's swayambar and challenged Rama after he broke Lord Shiva's bow, testing whether Rama was truly worthy of wielding such divine power.

The pond is part of Janakpurdham's remarkable collection of over 72 ancient ponds of historical and mythological importance—earning the city its reputation as the "City of Ponds" in Nepal. These water bodies were created for religious ceremonies, ritual bathing, and as sacred spaces for contemplation and worship.

Devotees believe that bathing in Parshuram Kund brings spiritual purification and blessings. The pond attracts pilgrims year-round, with increased visitors during major Hindu festivals. Like other sacred ponds in Janakpur, it serves as a site for ritual offerings, prayers, and religious ceremonies.

The Mithila region takes pride in its numerous ponds, which represent a unique integration of religious practice with water management. These ancient water bodies have sustained the city for millennia, serving both spiritual and practical purposes. Many were constructed during King Janaka's time in preparation for religious ceremonies and to accommodate the multitudes who gathered for significant events.

Parshuram Kund offers visitors a quieter, more contemplative experience compared to the busier main pilgrimage sites, making it particularly appealing for those seeking peaceful meditation and connection with the ancient spiritual traditions of Mithila.`,
    significance: [
      "Associated with sage Parshuram (Vishnu avatar)",
      "Among holiest ponds with Ganga Sagar and Dhanush Sagar",
      "Part of 72 ancient ponds in Janakpur",
      "Connected to Ramayana narrative",
      "Offers spiritual purification through bathing",
      "Quieter alternative for peaceful meditation",
    ],
    imageUrl: "/gallery/parshuram-kund.jpeg",
    tags: ["Sacred Pond", "Spiritual", "Hidden Gem"],
    yearEstablished: "Ancient (King Janaka's era)",
    visitingHours: "Open 24 hours",
    entryFee: "Free",
  },
];

// Helper functions
export function getGalleryBySlug(slug: string): GalleryItem | undefined {
  return galleryItems.find((item) => item.slug === slug);
}

export function getGalleryByLocation(
  location: GalleryItem["location"]
): GalleryItem[] {
  return galleryItems.filter((item) => item.location === location);
}

export function getGalleryByTag(tag: string): GalleryItem[] {
  return galleryItems.filter((item) => item.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  galleryItems.forEach((item) => item.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function getFilteredGallery(
  location?: GalleryItem["location"] | "all",
  tag?: string | "all"
): GalleryItem[] {
  return galleryItems.filter((item) => {
    const locationMatch = !location || location === "all" || item.location === location;
    const tagMatch = !tag || tag === "all" || item.tags.includes(tag);
    return locationMatch && tagMatch;
  });
}
