import type { Story } from '@/types/story';

export const stories: Story[] = [
  // ─────────────────────────────────────────────
  // BASIC
  // ─────────────────────────────────────────────
  {
    id: 'basic-rendang',
    title: 'Rendang: The King of Indonesian Food',
    subtitle: 'A simple story about the most famous dish from West Sumatra',
    difficulty: 'basic',
    format: 'story',
    topic: 'Food & Culture',
    estimatedMinutes: 3,
    keyVocab: [
      { word: 'dish', translation: 'hidangan / masakan' },
      { word: 'spicy', translation: 'pedas' },
      { word: 'tender', translation: 'empuk' },
      { word: 'cook', translation: 'memasak' },
      { word: 'flavor', translation: 'rasa / cita rasa' },
      { word: 'popular', translation: 'populer / terkenal' },
      { word: 'ingredient', translation: 'bahan masakan' },
    ],
    turns: [
      { text: 'Rendang is one of the most famous foods in Indonesia. It comes from West Sumatra, a province on the island of Sumatra. The Minangkabau people first made this dish many years ago.' },
      { text: 'Rendang is made from beef. The meat is cooked slowly in coconut milk and many spices. The main ingredients are lemongrass, galangal, ginger, garlic, chili, and turmeric. The cooking process is very long. It can take three to four hours.' },
      { text: 'Because the cooking time is so long, the meat becomes very tender. The coconut milk slowly dries up and the spices go deep into the meat. The color of rendang is dark brown. It looks very rich and delicious.' },
      { text: 'Rendang has a very strong and complex flavor. It is savory, a little sweet, and quite spicy. The smell is also amazing. When you smell rendang cooking in the kitchen, you will feel very hungry.' },
      { text: 'People in Indonesia eat rendang on special occasions. They serve it at weddings, Eid celebrations, and family gatherings. It is a very important dish in Minangkabau culture.' },
      { text: 'Today, rendang is popular all over the world. In 2011, CNN voted rendang as the number one most delicious food in the world. Many people from other countries come to Indonesia just to try this dish.' },
      { text: 'You can find rendang in almost every Padang restaurant in Indonesia. Padang restaurants serve many types of food on the table at once, and rendang is always the star. If you visit Indonesia, you must try this amazing dish.' },
    ],
  },
  {
    id: 'basic-bali',
    title: 'Bali: The Island of the Gods',
    subtitle: 'A short and simple description of the beautiful island of Bali',
    difficulty: 'basic',
    format: 'story',
    topic: 'Places & Travel',
    estimatedMinutes: 3,
    keyVocab: [
      { word: 'island', translation: 'pulau' },
      { word: 'temple', translation: 'kuil / pura' },
      { word: 'rice field', translation: 'sawah' },
      { word: 'ceremony', translation: 'upacara / seremoni' },
      { word: 'tourist', translation: 'wisatawan / turis' },
      { word: 'culture', translation: 'budaya' },
      { word: 'peaceful', translation: 'damai / tenang' },
    ],
    turns: [
      { text: 'Bali is a small island in Indonesia. It is part of the Lesser Sunda Islands. Bali is very beautiful. Many tourists visit Bali every year from all over the world.' },
      { text: 'People call Bali "the Island of the Gods" because the Balinese people are very religious. Most people in Bali follow Hinduism. They believe in many gods and spirits. Temples are everywhere on the island. There are said to be more than twenty thousand temples in Bali.' },
      { text: 'The landscape of Bali is stunning. There are green rice fields, tall volcanoes, and beautiful beaches. The most famous volcano is Mount Agung. It is the highest point on the island and is considered very sacred.' },
      { text: 'Balinese culture is rich and unique. The people have traditional dances, music, paintings, and crafts. Every day, women place small flower offerings called "canang sari" in front of their homes and at temples. These offerings are a way of giving thanks to the gods.' },
      { text: 'Bali also has many ceremonies throughout the year. One of the most special is Nyepi, the Day of Silence. On this day, everyone must stay home and be quiet. There are no cars on the road. No lights are turned on. Even the airport is closed. The whole island rests in complete silence.' },
      { text: 'The food in Bali is delicious. Babi guling, which is roasted pig, is a traditional Balinese dish. Nasi campur, a plate of rice with various side dishes, is also very popular among tourists and locals alike.' },
      { text: 'Bali is truly a magical place. Whether you come for the beaches, the culture, or the food, you will always find something beautiful. It is no wonder that so many people fall in love with this peaceful island.' },
    ],
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE
  // ─────────────────────────────────────────────
  {
    id: 'intermediate-spice',
    title: 'The Spice Trade: How Indonesia Changed the World',
    subtitle: 'The history of the global spice trade and its roots in the Indonesian archipelago',
    difficulty: 'intermediate',
    format: 'story',
    topic: 'History',
    estimatedMinutes: 5,
    keyVocab: [
      { word: 'trade', translation: 'perdagangan' },
      { word: 'colony', translation: 'koloni / jajahan' },
      { word: 'merchant', translation: 'pedagang / saudagar' },
      { word: 'route', translation: 'jalur / rute' },
      { word: 'dominate', translation: 'mendominasi / menguasai' },
      { word: 'monopoly', translation: 'monopoli' },
      { word: 'wealth', translation: 'kekayaan' },
      { word: 'conquest', translation: 'penaklukan' },
      { word: 'archipelago', translation: 'kepulauan' },
      { word: 'valuable', translation: 'berharga / bernilai tinggi' },
    ],
    turns: [
      { text: 'Long before Indonesia was known as Indonesia, the islands of the archipelago were famous across the ancient world for one reason: spices. Nutmeg, cloves, pepper, and cinnamon grew in abundance in these tropical islands, and for centuries they were among the most valuable commodities on Earth.' },
      { text: 'In medieval Europe, spices were more than just flavoring for food. They were used to preserve meat, make medicine, and produce perfumes. A small amount of nutmeg or cloves could be worth as much as gold. European nobles competed to have spices on their tables as a sign of wealth and power.' },
      { text: 'The problem was that spices were extremely difficult to obtain. They had to travel thousands of kilometers along complex overland routes through the Middle East and Central Asia before reaching European markets. Arab and Persian merchants controlled much of this trade, and each middleman along the way took a share of the profits. By the time spices reached Europe, their price had multiplied many times over.' },
      { text: 'This situation drove European nations to seek a direct sea route to the source of spices. In 1498, the Portuguese explorer Vasco da Gama successfully sailed around the southern tip of Africa and reached India. This breakthrough opened the Indian Ocean to European ships and shifted the balance of the spice trade dramatically.' },
      { text: 'Within a few decades, the Portuguese had established trading posts along the coasts of India and Southeast Asia. They reached the Maluku Islands — known in Europe as the Spice Islands — in 1512. These islands in eastern Indonesia were the only place in the world where nutmeg and cloves grew naturally. By controlling the Spice Islands, the Portuguese gained a powerful monopoly over the world\'s most desired commodities.' },
      { text: 'But Portuguese dominance did not last forever. In the 17th century, the Dutch entered the scene with aggressive ambition. The Dutch East India Company, known by its Dutch initials VOC, was established in 1602 and quickly became the most powerful trading corporation in the world. The VOC did not just trade — it built fortresses, waged wars, and overthrew local rulers to maintain its control over the spice islands.' },
      { text: 'The consequences for the local population were devastating. On the Banda Islands, the Dutch killed or expelled almost the entire indigenous population in order to take full control of the nutmeg plantations. Forced labor and brutal taxation became instruments of colonial profit. The wealth that flowed out of the Indonesian archipelago built cities in the Netherlands and funded the Dutch Golden Age of art and culture.' },
      { text: 'By the 19th century, the monopoly on spices had collapsed as other tropical regions began cultivating the same plants. But the legacy of the spice trade endured. The borders of modern Indonesia were shaped largely by which islands European powers had fought to control. The story of nutmeg and cloves is therefore not just a culinary history — it is the foundation of Indonesia\'s complex relationship with the wider world.' },
    ],
  },
  {
    id: 'intermediate-raja-ampat',
    title: 'Raja Ampat: Paradise Beneath the Surface',
    subtitle: 'Exploring the extraordinary marine biodiversity of West Papua',
    difficulty: 'intermediate',
    format: 'story',
    topic: 'Nature & Places',
    estimatedMinutes: 5,
    keyVocab: [
      { word: 'biodiversity', translation: 'keanekaragaman hayati' },
      { word: 'coral reef', translation: 'terumbu karang' },
      { word: 'marine', translation: 'laut / kelautan' },
      { word: 'species', translation: 'spesies / jenis makhluk hidup' },
      { word: 'remote', translation: 'terpencil / jauh' },
      { word: 'conservation', translation: 'konservasi / pelestarian' },
      { word: 'ecosystem', translation: 'ekosistem' },
      { word: 'sustainable', translation: 'berkelanjutan' },
      { word: 'pristine', translation: 'masih alami / murni' },
      { word: 'diver', translation: 'penyelam' },
    ],
    turns: [
      { text: 'Hidden in the far eastern corner of Indonesia, in the province of West Papua, lies a place that marine scientists often describe as the most biodiverse waters on Earth. Raja Ampat — which translates to "Four Kings" in Indonesian — is an archipelago of more than 1,500 small islands, cays, and shoals scattered across a turquoise sea.' },
      { text: 'The name refers to the four main islands that dominate the region: Waigeo, Batanta, Salawati, and Misool. But it is not the islands themselves that make Raja Ampat extraordinary — it is what lies beneath them. The waters here are home to more than 1,500 species of fish, 600 species of coral, and an almost incomprehensible variety of marine invertebrates. Scientists estimate that Raja Ampat contains approximately 75 percent of all known coral species in the world.' },
      { text: 'This exceptional richness is the result of geography and ocean currents. Raja Ampat sits at the heart of the Coral Triangle, a region spanning Indonesia, the Philippines, Malaysia, Papua New Guinea, the Solomon Islands, and Timor-Leste, which scientists consider the global center of marine biodiversity. Warm, nutrient-rich currents from both the Pacific and Indian Oceans converge here, creating ideal conditions for coral growth and sustaining vast food chains.' },
      { text: 'For divers, Raja Ampat is a place of almost spiritual awe. Beneath the surface, the reefs are densely layered — soft corals in shades of pink and orange cascade over hard coral formations, while schools of barracuda spiral in tight circles above. Pygmy seahorses, no larger than a fingernail, cling to sea fans. Wobbegong sharks rest motionless on the seafloor. Manta rays glide silently through cleaning stations, offering a rare opportunity for close observation.' },
      { text: 'The region was largely unknown to the outside world until the late 1990s and early 2000s, when scientific surveys revealed the full extent of its biological wealth. This remoteness was, paradoxically, its greatest protection. With no major fishing industry nearby and limited human settlement, the reefs had been allowed to develop undisturbed for centuries.' },
      { text: 'Today, Raja Ampat faces the familiar tension between conservation and economic development. Tourism has grown rapidly, bringing much-needed income to local communities, but also putting pressure on fragile ecosystems. The regional government has implemented a marine protected area covering about 3.7 million hectares, and visitor fees are collected to fund conservation efforts. Local guides and "sea patrols" help enforce fishing regulations and prevent the collection of protected species.' },
      { text: 'The communities of Raja Ampat have a long history of living with the sea. The Papuan people of the region have practiced a form of traditional marine conservation called "sasi" for generations — a customary law that temporarily closes certain areas of the reef to allow fish populations to recover. This indigenous knowledge has proven remarkably compatible with modern conservation science.' },
      { text: 'Raja Ampat reminds us that the health of the ocean depends not on single heroic interventions but on continuous, collaborative stewardship. It is a place where pristine natural beauty coexists — for now — with the fragility that comes from being discovered by the world. How it is managed in the coming decades will determine whether future generations can still call it paradise.' },
    ],
  },

  // ─────────────────────────────────────────────
  // ADVANCED
  // ─────────────────────────────────────────────
  {
    id: 'advanced-majapahit',
    title: 'The Rise and Fall of Majapahit',
    subtitle: 'The story of Southeast Asia\'s greatest maritime empire and the forces that destroyed it',
    difficulty: 'advanced',
    format: 'story',
    topic: 'History',
    estimatedMinutes: 8,
    keyVocab: [
      { word: 'empire', translation: 'kekaisaran / kerajaan besar' },
      { word: 'sovereignty', translation: 'kedaulatan' },
      { word: 'tributary', translation: 'bawahan / negara taklukan yang membayar upeti' },
      { word: 'succession', translation: 'suksesi / pergantian kepemimpinan' },
      { word: 'maritime', translation: 'maritim / berkaitan dengan laut' },
      { word: 'allegiance', translation: 'kesetiaan / loyalitas' },
      { word: 'fragmentation', translation: 'fragmentasi / perpecahan' },
      { word: 'hegemony', translation: 'hegemoni / dominasi' },
      { word: 'vassal', translation: 'negara bawahan / vasal' },
      { word: 'diplomacy', translation: 'diplomasi' },
    ],
    turns: [
      { text: 'In the year 1293, a young prince named Raden Wijaya performed one of the most audacious political maneuvers in Southeast Asian history. When Mongol forces sent by Kublai Khan arrived on the northern coast of Java, ostensibly to punish a rival Javanese king, Raden Wijaya offered to serve as their guide into the interior. He led them to victory — and then, at the moment of triumph, turned against his allies and drove them back to their ships. From this dramatic foundation of betrayal and brilliance, the Majapahit Empire was born.' },
      { text: 'Majapahit grew rapidly under its early rulers. The empire\'s first great prime minister, Gajah Mada, famously swore an oath known as the Palapa Oath — declaring that he would not taste any delicacy, specifically the Javanese condiment palapa, until he had brought all the nusantara (the Indonesian archipelago) under Majapahit\'s sovereignty. This oath became a foundational myth of Indonesian nationhood and was explicitly invoked when the country declared independence in 1945.' },
      { text: 'At its height under King Hayam Wuruk in the mid-14th century, Majapahit\'s sphere of influence extended across much of maritime Southeast Asia. A court poet named Prapanca composed the Nagarakretagama, an epic poem that catalogued the empire\'s territorial claims — listing dozens of vassal states and tributary polities stretching from Sumatra and the Malay Peninsula to Borneo, Sulawesi, the Maluku Islands, and even parts of what is now the Philippines and mainland Southeast Asia.' },
      { text: 'Historians debate the precise nature of Majapahit\'s dominion. Unlike continental empires, Majapahit did not rule its distant territories through a permanent administrative apparatus. Its hegemony was more fluid — a network of relationships maintained through trade, diplomacy, royal marriages, and the calculated deployment of naval power. Tributary states acknowledged Majapahit\'s spiritual and political pre-eminence, sent periodic gifts to the court, and were expected to provide military support when required. In return, they received legitimacy and protection.' },
      { text: 'The empire\'s prosperity rested on its command of the maritime trade routes that connected China to India and the Arab world. Java\'s north coast harbored some of the busiest ports in Asia, where Chinese ceramics, Indian textiles, and local spices passed through in enormous quantities. The cosmopolitan nature of this trade meant that Majapahit\'s court was thoroughly international — Chinese, Indian, and Arab merchants maintained permanent communities, and their cultural influences left visible marks on Javanese art, architecture, and cuisine.' },
      { text: 'But empires sustained by personal loyalty and maritime patronage are inherently fragile. When Hayam Wuruk died in 1389, a bitter succession dispute fractured the court. His son-in-law and his daughter both claimed power, and the resulting civil war — known as the Paregreg War — lasted nearly a decade and devastated the empire\'s core territories. Gajah Mada had died years before, and no figure of comparable political genius emerged to hold the competing factions together.' },
      { text: 'The 15th century brought further pressures that Majapahit\'s weakened rulers could not absorb. The rise of the Malacca Sultanate on the Malay Peninsula created a powerful alternative center of trade and political gravity in the region. Crucially, Malacca had converted to Islam, and its influence accelerated the spread of the new religion along the trade routes. Javanese port cities, long accustomed to a syncretic blend of Hindu-Buddhist and local animist traditions, began converting as well. With each conversion, another thread of loyalty to the Hindu-Buddhist court at Majapahit frayed.' },
      { text: 'By the early 16th century, Majapahit had ceased to function as an empire. The court fragmented into competing successor states. Tradition holds that the final fall of the capital occurred around 1527, when the Islamic kingdom of Demak conquered what remained of the Majapahit heartland. The Hindu-Javanese nobility and priests did not simply vanish, however — many fled eastward to the island of Bali, carrying with them the manuscripts, artistic traditions, and religious practices that they would preserve and elaborate for the following five centuries.' },
      { text: 'The memory of Majapahit has proven extraordinarily durable. Its symbols — the sunburst flag, the Garuda bird, the concept of nusantara — were consciously revived by Indonesian nationalists in the 20th century as evidence of a pre-colonial civilization worthy of modern nationhood. The word "nusantara" itself, plucked from Gajah Mada\'s ancient oath, was recently chosen as the official name of Indonesia\'s new capital city. In naming a 21st-century metropolis after a 14th-century imperial concept, Indonesia demonstrated that the past is never merely history — it is an argument about who we are and what we might yet become.' },
    ],
  },
  {
    id: 'advanced-jamu',
    title: 'Jamu: Science, Spirit, and the Politics of Healing',
    subtitle: 'An in-depth exploration of Indonesia\'s ancient herbal medicine tradition and its contested place in modern healthcare',
    difficulty: 'advanced',
    format: 'story',
    topic: 'Culture & Science',
    estimatedMinutes: 8,
    keyVocab: [
      { word: 'herbal', translation: 'herbal / berbahan tanaman' },
      { word: 'remedy', translation: 'obat / solusi penyembuhan' },
      { word: 'indigenous', translation: 'asli / pribumi / tradisional' },
      { word: 'efficacy', translation: 'khasiat / efektivitas' },
      { word: 'pharmaceutical', translation: 'farmasi / obat-obatan industri' },
      { word: 'clinical trial', translation: 'uji klinis' },
      { word: 'holistic', translation: 'holistik / menyeluruh' },
      { word: 'commodification', translation: 'komersialisasi / penjadikan komoditas' },
      { word: 'empirical', translation: 'empiris / berbasis bukti dan pengalaman' },
      { word: 'bioactive', translation: 'bioaktif / secara biologis aktif' },
    ],
    turns: [
      { text: 'Every morning in cities and villages across Indonesia, a particular scene repeats itself with the regularity of ritual. A woman — often middle-aged, typically Javanese — carries a basket or pushes a cart along a neighborhood path, offering small glass bottles and cups to waiting customers. The liquid inside is yellow, brown, or dark green. It smells of turmeric, ginger, tamarind, and something else harder to name — something earthen and ancient. This is jamu, and it has been part of Indonesian life for at least a thousand years.' },
      { text: 'The word "jamu" itself is believed to derive from the Old Javanese "djampi" or "usodo," terms that described medicinal formulations and healing incantations in early Hindu-Javanese kingdoms. Archaeological evidence from the Borobudur temple complex, constructed in the 9th century, includes carvings that depict figures preparing what appear to be herbal medicines. The Serat Centhini, a vast 19th-century Javanese literary compendium, devotes entire chapters to herbal formulations for conditions ranging from fever and digestive ailments to emotional distress and matters of romantic concern.' },
      { text: 'Jamu is not a single medicine or even a coherent system in the way that, say, Traditional Chinese Medicine or Ayurveda is institutionally structured. It is better understood as a living corpus of empirical knowledge accumulated across generations of observation, refined through household practice, and transmitted through oral tradition and manuscript. Its practitioners range from village healers to sophisticated industrial manufacturers, and its philosophical assumptions — that illness reflects a disruption in the balance between the body, its environment, and spiritual forces — resist easy reduction to biomedical categories.' },
      { text: 'The core ingredients of jamu are largely drawn from the extraordinary botanical wealth of the Indonesian archipelago. Turmeric, or kunyit, is perhaps the most ubiquitous. Its bright yellow rhizome is used in dozens of preparations aimed at reducing inflammation, improving digestion, and restoring what Javanese healers describe as the body\'s internal warmth. Modern pharmacological research has confirmed that curcumin, the primary bioactive compound in turmeric, possesses potent anti-inflammatory and antioxidant properties — a rare instance of traditional wisdom anticipating scientific validation by several centuries.' },
      { text: 'Other common ingredients include temulawak, a close relative of turmeric with historically documented applications in liver support; sambiloto, a bitter herb studied in recent decades for its immune-modulating effects; and kayu manis, or cinnamon, whose capacity to influence blood glucose regulation has attracted substantial pharmaceutical interest. The Indonesian government maintains an official database of medicinal plants, known as TOGA (Tanaman Obat Keluarga), that currently catalogs over 300 species with documented therapeutic applications.' },
      { text: 'The relationship between jamu and modern medicine has been neither simple nor static. During the colonial period, Dutch physicians largely dismissed indigenous healing practices as superstition, and the prestige of Western biomedicine displaced jamu to the margins of formal healthcare. Independence did not immediately reverse this hierarchy. For decades, the Indonesian medical establishment treated jamu with ambivalence — acknowledging its cultural significance while questioning its scientific credibility.' },
      { text: 'This attitude began shifting in the 1990s, accelerated by the 1997-98 financial crisis, when the collapse of the rupiah made imported pharmaceuticals prohibitively expensive for millions of Indonesians and drove renewed interest in locally available alternatives. The government established research institutes dedicated to studying traditional medicines, and several major Indonesian pharmaceutical corporations began investing in the extraction and standardization of jamu compounds. The COVID-19 pandemic produced another surge of interest, as public health messaging from the government explicitly encouraged the consumption of jamu preparations rich in immune-supporting compounds.' },
      { text: 'Critics of this institutional embrace of jamu raise legitimate concerns. The evidentiary standards applied to traditional medicines are frequently less rigorous than those required for pharmaceutical drugs. Many celebrated jamu preparations have never been subjected to randomized controlled trials, and the leap from in-vitro studies of isolated compounds to clinical recommendations for complex multi-ingredient preparations is one that mainstream pharmacology does not readily accept. There is also the uncomfortable question of commodification: as jamu is packaged, branded, and sold at premium prices in urban wellness boutiques, something of its original character — its embeddedness in community, its holistic attentiveness to the whole person — risks being flattened into a lifestyle accessory.' },
      { text: 'Yet jamu endures, and perhaps the most honest account of why is neither purely scientific nor nostalgic. It persists because it works for many people across many conditions, in ways that may or may not be fully explained by the bioactive compounds its ingredients contain. It persists because the woman with the basket and the careful knowledge of her grandmother\'s recipes represents a form of care — personal, attentive, rooted in place — that industrial medicine has never fully replicated. In a country navigating the contradictions between development and tradition, jamu is not simply medicine. It is an ongoing argument about what it means to be well.' },
    ],
  },
];

export function getStoryById(id: string): Story | undefined {
  return stories.find((s) => s.id === id);
}

export function getStoriesByDifficulty(difficulty: string): Story[] {
  if (difficulty === 'all') return stories;
  return stories.filter((s) => s.difficulty === difficulty);
}
