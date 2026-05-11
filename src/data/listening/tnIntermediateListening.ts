import type { ModuleLesson, ListeningAudio } from "@/types/module";

// ── Intermediate Listening Lessons ───────────────────────────────────────────

const intermediateListeningLessons: ModuleLesson[] = [
  // ── Day 1: Fill the Blank — Free Time · Amazing Facts · Junior Cycle Camp ─────
  {
    id: "int-listening-1",
    track: "listening",
    day: 1,
    tutor: "Mr. Fajri",
    title: "Fill the Blank — Listening Practice",
    subtitle:
      "Audio 1: Free Time · Audio 2: Amazing Facts · Audio 3: Junior Cycle Camp",
    overview:
      "Latihan mendengarkan audio dan melengkapi teks rumpang. Tiga audio dengan konteks berbeda: percakapan di kolam renang, fakta ilmiah tentang tubuh manusia, dan informasi kamp bersepeda.",
    materialSections: [],
    exercises: [],
    listeningAudios: [
      // ── Audio 1: Free Time (dialogue, 16 blanks) ──────────────────────────────
      {
        title: "Audio 1: Free time.",
        instruction: "Fill the blank spaces while listening to the recording.",
        type: "dialogue",
        answers: {
          1: "Swimming",
          2: "Pool",
          3: "I'd",
          4: "under",
          5: "16s",
          6: "Club",
          7: "adults",
          8: "train",
          9: "evenings",
          10: "Tuesdays and Thursdays",
          11: "6.30–8.00 PM",
          12: "September",
          13: "2nd",
          14: "complete a form",
          15: "photograph",
          16: "your name",
        },
        lines: [
          {
            speaker: "Receptionist",
            text: "Good morning, Brownton {{b:1}} {{b:2}}.",
          },
          {
            speaker: "Tyrone",
            text: "Hello, {{b:3}} like some information about the water polo club.",
          },
          {
            speaker: "Receptionist",
            text: "Yes, of course. We have an under 14s club, an {{b:4}} {{b:5}} {{b:6}}, an under 18s club and an {{b:7}} club. How old are you?",
          },
          { speaker: "Tyrone", text: "I'm 15." },
          {
            speaker: "Receptionist",
            text: "OK, so you want the under 16s club.",
          },
          { speaker: "Tyrone", text: "Yes." },
          {
            speaker: "Receptionist",
            text: "Just a moment … yes, we have two places in the under 16s club.",
          },
          { speaker: "Tyrone", text: "When do they {{b:8}}?" },
          {
            speaker: "Receptionist",
            text: "Let's see, the under 16s train two {{b:9}} a week, on Mondays, no sorry, on {{b:10}} from {{b:11}}. And matches are on Saturday mornings.",
          },
          { speaker: "Tyrone", text: "When does the training start?" },
          {
            speaker: "Receptionist",
            text: "Training starts next week, on {{b:12}} {{b:13}}.",
          },
          { speaker: "Tyrone", text: "OK. And how much are the classes?" },
          { speaker: "Receptionist", text: "Classes are free for under 18s." },
          { speaker: "Tyrone", text: "Great! What do I have to do to join?" },
          {
            speaker: "Receptionist",
            text: "You have to come to the swimming pool and {{b:14}}. You need to bring a {{b:15}} too.",
          },
          { speaker: "Tyrone", text: "OK." },
          { speaker: "Receptionist", text: "Can I take {{b:16}}, please?" },
          { speaker: "Tyrone", text: "Yes, it's Tyrone Williams." },
          { speaker: "Receptionist", text: "OK, thanks, Tyrone." },
          { speaker: "Tyrone", text: "Thanks. Bye." },
        ],
      } satisfies ListeningAudio,

      // ── Audio 2: Amazing Facts (dialogue, 35 blanks) ──────────────────────────
      {
        title: "Audio 2: Amazing facts",
        instruction: "Fill the blank spaces while listening to the recording.",
        type: "dialogue",
        answers: {
          1: "interesting",
          2: "article",
          3: "Human",
          4: "biology",
          5: "lessons",
          6: "discovering",
          7: "bacteria",
          8: "millions",
          9: "trillions",
          10: "experiment",
          11: "special",
          12: "diet",
          13: "digest",
          14: "we",
          15: "are",
          16: "better",
          17: "they're",
          18: "cells",
          19: "I'd",
          20: "say",
          21: "mathematical",
          22: "space",
          23: "tiny",
          24: "cube",
          25: "0.002",
          26: "extract",
          27: "mites",
          28: "eyelashes",
          29: "particular",
          30: "eyebrows",
          31: "50%",
          32: "harmless",
          33: "dead",
          34: "skin",
          35: "preferred",
        },
        lines: [
          {
            speaker: "A",
            text: "Hey, I'm reading this really {{b:1}} {{b:2}} about the human body.",
          },
          {
            speaker: "B",
            text: "Yeah? Well, we know all about that from {{b:3}} {{b:4}}.",
          },
          {
            speaker: "A",
            text: "No, we didn't learn much at all at school! They're {{b:5}} {{b:6}} loads more things all the time. Really amazing things! Did you know that only about one tenth of the cells in your body are really you? The rest are {{b:7}}.",
          },
          { speaker: "B", text: "What? I'm not really me?" },
          {
            speaker: "A",
            text: "No, of course you are you, but you also have {{b:8}}, or {{b:9}}, of bacteria in you.",
          },
          { speaker: "B", text: "Eeeeuuugh!" },
          {
            speaker: "A",
            text: "No, they're mostly really helpful. Someone did an {{b:10}} to see if animals can live without bacteria, and he found that a lot of them died or had to have a {{b:11}} {{b:12}}. Animals need bacteria to {{b:13}} food, you see. So {{b:14}} {{b:15}} {{b:16}} off with bacteria.",
          },
          { speaker: "B", text: "Unless the bacteria are bad." },
          {
            speaker: "A",
            text: "Unless they are bad, but {{b:17}} nearly all good. Oh yeah, and going back to {{b:18}}, do you know how many cells you have in your body?",
          },
          { speaker: "B", text: "Quite a lot, {{b:19}} {{b:20}}. A good few." },
          { speaker: "A", text: "Yeah, but how many?" },
          { speaker: "B", text: "I don't know. I'm not {{b:21}}." },
          { speaker: "A", text: "7 octillion! That's 7 plus 27 noughts." },
          { speaker: "B", text: "I knew it was a lot." },
          {
            speaker: "A",
            text: "OK, that's an amazingly huge number, almost impossible to imagine. But the really weird thing is that most of the atoms are empty {{b:22}}. Just air or nothingness. And if you took out the empty space, you could fit your body inside a {{b:23}} {{b:24}} which measures one 500th of a centimetre on either side. That's a box measuring {{b:25}} of a centimetre on each side. You'd be much too small to see.",
          },
          {
            speaker: "B",
            text: "Mmm, I can imagine that. It sounds like something that would happen in a really bad Hollywood movie. You know, a mad scientist goes: (funny voice) 'I'm going to {{b:26}} all the air from your body'. OK, enough facts for one day.",
          },
          { speaker: "A", text: "Don't go! One last thing, did you know …" },
          { speaker: "B", text: "No." },
          {
            speaker: "A",
            text: "Did you know that you probably have {{b:27}} in your {{b:28}}?",
          },
          {
            speaker: "B",
            text: "Mites in my eyelashes? What are mites exactly anyway?",
          },
          {
            speaker: "A",
            text: "Yeah, they're very small creatures, like insects, only not insects. They're about a third of a millimetre long, so you can't really see them. These {{b:29}} mites live in eyelashes and {{b:30}}.",
          },
          { speaker: "B", text: "But in mine?" },
          {
            speaker: "A",
            text: "Well, maybe not. Only about {{b:31}} of people have them, and more older people. So you might not have any. Anyway, they're completely {{b:32}}, they just eat {{b:33}} {{b:34}}.",
          },
          {
            speaker: "B",
            text: "Yeah, right, harmless. I really would have {{b:35}} not to know that.",
          },
          { speaker: "A", text: "Sorry." },
          { speaker: "B", text: "I mean, really!" },
        ],
      } satisfies ListeningAudio,

      // ── Audio 3: Junior Cycle Camp (notes, 10 blanks) ─────────────────────────
      {
        title: "Audio 3: Junior Cycle Camp",
        instruction:
          "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        type: "notes",
        answers: {
          1: "park",
          2: "blue",
          3: "reference",
          4: "story",
          5: "rain",
          6: "snack",
          7: "medication",
          8: "helmet",
          9: "tent",
          10: "199",
        },
        lines: [
          { text: "The course focuses on skills and safety" },
          { text: "Charlie would be placed in Level 5.", indent: true },
          {
            text: "First of all, children at this level are taken to practise in a 1 {{b:1}}.",
            indent: true,
          },
          { text: "Instructors", bold: true },
          { text: "Instructors wear 2 {{b:2}} shirts." },
          { text: "A 3 {{b:3}} is required and training is given." },
          { text: "Classes", bold: true },
          { text: "The size of the classes is limited." },
          {
            text: "There are quiet times during the morning for a 4 {{b:4}} or a game.",
          },
          { text: "Classes are held even if there is 5 {{b:5}}." },
          { text: "What to bring", bold: true },
          { text: "a change of clothing", indent: true },
          { text: "a 6 {{b:6}}", indent: true },
          { text: "shoes (not sandals)", indent: true },
          { text: "Charlie's 7 {{b:7}}", indent: true },
          { text: "Day 1", bold: true },
          { text: "Charlie should arrive at 9.20 am on the first day." },
          { text: "Before the class, his 8 {{b:8}} will be checked." },
          {
            text: "He should then go to the 9 {{b:9}} to meet his class instructor.",
          },
          { text: "Cost", bold: true },
          { text: "The course costs ${{b:10}} per week." },
        ],
      } satisfies ListeningAudio,
    ],
  },

  // ── Day 2: Shopping · Celebrations · Holiday Rental ─────────────────────────
  {
    id: "int-listening-2",
    track: "listening",
    day: 2,
    tutor: "Mr. Fajri",
    title: "Fill the Blank — Listening Practice Day 2",
    subtitle:
      "Audio 4: Shopping for Clothes · Audio 5: Celebrations · Audio 6: Holiday Rental",
    overview:
      "Tiga audio berbeda: percakapan belanja baju, lima orang berbagi cerita perayaan, dan informasi sewa liburan dalam format catatan.",
    materialSections: [],
    exercises: [],
    listeningAudios: [
      // ── Audio 4: Shopping for clothes (dialogue, 15 blanks) ───────────────────
      {
        title: "Audio 4: Shopping for clothes.",
        instruction: "Fill the blank spaces while listening to the recording.",
        type: "dialogue",
        answers: {
          1: "T-shirt",
          2: "white",
          3: "black",
          4: "red",
          5: "purple",
          6: "we've",
          7: "got",
          8: "changing",
          9: "rooms",
          10: "I'll",
          11: "take",
          12: "10.95",
          13: "9",
          14: "pounds",
          15: "receipt",
        },
        lines: [
          { speaker: "Shop assistant", text: "Can I help you?" },
          {
            speaker: "Customer",
            text: "Yes, have you got this {{b:1}} in other colours?",
          },
          {
            speaker: "Shop assistant",
            text: "We've got it in {{b:2}}, {{b:3}}, {{b:4}} and {{b:5}}. What size do you want?",
          },
          { speaker: "Customer", text: "Medium." },
          {
            speaker: "Shop assistant",
            text: "OK, in medium {{b:6}} {{b:7}} black and red.",
          },
          { speaker: "Customer", text: "And in purple?" },
          { speaker: "Shop assistant", text: "No, just black and red." },
          { speaker: "Customer", text: "OK, red. Can I try it on?" },
          {
            speaker: "Shop assistant",
            text: "Yes, of course. The {{b:8}} {{b:9}} are over there.",
          },
          { speaker: "(pause)", text: "" },
          { speaker: "Shop assistant", text: "Is it OK?" },
          { speaker: "Customer", text: "Yes, {{b:10}} {{b:11}} it." },
          {
            speaker: "Shop assistant",
            text: "That's £{{b:12}}. Would you like to pay by credit card or with cash?",
          },
          { speaker: "Customer", text: "Cash please. Here's twenty." },
          {
            speaker: "Shop assistant",
            text: "OK, thanks, that's £{{b:13}} {{b:14}}, 5p change and here's your {{b:15}}.",
          },
          { speaker: "Customer", text: "Thanks. Bye." },
        ],
      } satisfies ListeningAudio,

      // ── Audio 5: Celebrations (monologue A–E, 36 blanks) ─────────────────────
      {
        title: "Audio 5: Celebrations",
        instruction: "Fill the blank spaces while listening to the recording.",
        type: "dialogue",
        answers: {
          1: "brilliant",
          2: "decorate",
          3: "longest",
          4: "great",
          5: "bass",
          6: "player",
          7: "carnival",
          8: "August",
          9: "fantastic",
          10: "time",
          11: "costumes",
          12: "crowded",
          13: "pickpockets",
          14: "hire",
          15: "river",
          16: "ages",
          17: "loads",
          18: "old",
          19: "records",
          20: "same",
          21: "week",
          22: "surprise",
          23: "party",
          24: "luckily",
          25: "October",
          26: "excuse",
          27: "stuff",
          28: "turn",
          29: "June",
          30: "princes",
          31: "decided",
          32: "the",
          33: "middle",
          34: "dishes",
          35: "nationalities",
          36: "neighbours",
        },
        lines: [
          {
            speaker: "A",
            text: "It was Nicky's idea, but we all think it's going to be {{b:1}}. As soon as the last exams have finished, we're going to {{b:2}} the main hall at school with paper streamers and Chinese lanterns and things. Steve had this idea of projecting photos of everyone onto a wall, like a slide show. And we've got Jo's brother, who's a professional DJ, coming along. Then there are three different bands lined up to play. Ours is the best, because we've been together {{b:3}} and we've got a {{b:4}} {{b:5}} {{b:6}}, (coughs) although I say so myself, so we're on last. It's going to be cool.",
          },
          {
            speaker: "B",
            text: "Every year there's a {{b:7}} in {{b:8}} in London. You've probably heard of it, the Notting Hill Carnival? So this year, me and my friends are going again. We went last year and we had such a {{b:9}} {{b:10}}. It's all Afro-Caribbean, with people in amazing {{b:11}} and these brilliant steel bands. We don't go in costume, but we do dance a lot. It does get quite {{b:12}} so you have to make sure you stick together. And you have to watch out for {{b:13}} when there are so many people in the same place. But it's really good fun; it's like London becomes a different country. Even the police dance sometimes.",
          },
          {
            speaker: "C",
            text: "We're going to {{b:14}} a boat for the day and take it up the {{b:15}}. It's my grandparents' golden wedding anniversary, so the whole family is getting together. I'm really looking forward to seeing my cousins again. I haven't seen them for {{b:16}}. We've got this huge picnic planned, with {{b:17}} of different types of sandwiches and salads and an enormous cake. My dad has borrowed an ancient gramophone player, you know, what they had before CD players, and some {{b:18}} {{b:19}}. So as we go up the river we're going to listen to music from the time my grandparents got married — the swinging sixties!",
          },
          {
            speaker: "D",
            text: "Two of my best friends have their birthday in the {{b:20}} {{b:21}}, so some of us have decided to have a {{b:22}} {{b:23}} for both of them. One of my friends, Sandra, has a big house, and her parents say we can use it. They're going away, {{b:24}}. It's at the end of {{b:25}} so we're going to decorate the house with Halloween things, you know, spiders' webs and spooky things. We're going to make up an {{b:26}} to get the birthday girls to come round to the house — say we're going to help Sandra move some {{b:27}}, or something. Then, as soon as Sandra lets them in, we're going to {{b:28}} the lights out and jump out at them! We just have to make sure nobody mentions anything on Facebook and gives away the surprise.",
          },
          {
            speaker: "E",
            text: "There's a Royal wedding in {{b:29}} — one of our {{b:30}} is getting married — so it's a public holiday. Lots of people are having parties in squares and parks and places, and the people in our street {{b:31}} to have one too. Well, it's a good excuse to have a party, isn't it? We're all going to take out tables and chairs and put them together in {{b:32}} {{b:33}} of the road. We're going to stop cars coming through, obviously. We're all going to bring different {{b:34}} and share them round. There are quite a lot of different {{b:35}} living on our street — people from India, China and different African countries — so the food should be really interesting. It'll be good to get to know more of the {{b:36}}.",
          },
        ],
      } satisfies ListeningAudio,

      // ── Audio 6: Holiday rental (notes, 10 blanks) ────────────────────────────
      {
        title: "Audio 6: Holiday rental",
        instruction:
          "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        type: "notes",
        answers: {
          1: "28th",
          2: "550",
          3: "Chervil",
          4: "garage",
          5: "garden",
          6: "parking",
          7: "wood",
          8: "bridge",
          9: "monument",
          10: "March",
        },
        lines: [
          { text: "Owner's names: Jack Fitzgerald and Shirley Fitzgerald" },
          { text: "Granary Cottage", bold: true },
          { text: "available for week beginning {{b:1}} May", indent: true },
          { text: "cost for the week: £{{b:2}}", indent: true },
          { text: "{{b:3}} Cottage", bold: true },
          { text: "cost for the week: £480", indent: true },
          { text: "building was originally a {{b:4}}", indent: true },
          {
            text: "walk through doors from living room into a {{b:5}}",
            indent: true,
          },
          { text: "several {{b:6}} spaces at the front", indent: true },
          { text: "bathroom has a shower", indent: true },
          {
            text: "central heating and stove that burns {{b:7}}",
            indent: true,
          },
          { text: "views of old {{b:8}} from living room", indent: true },
          { text: "view of hilltop {{b:9}} from the bedroom", indent: true },
          { text: "Payment", bold: true },
          { text: "deposit: £144", indent: true },
          { text: "deadline for final payment: end of {{b:10}}", indent: true },
        ],
      } satisfies ListeningAudio,
    ],
  },

  // ── Day 3: Tour of London · Difficult Situations · Crime Report ───────────────
  {
    id: "int-listening-3",
    track: "listening",
    day: 3,
    tutor: "Mr. Fajri",
    title: "Fill the Blank — Listening Practice Day 3",
    subtitle:
      "Audio 7: Tour of London · Audio 8: Difficult Situations · Audio 9: Crime Report Form",
    overview:
      "Tiga audio: panduan wisata kota London, percakapan situasi sulit (ujian, kehilangan hewan, HP dicuri), dan laporan kejahatan dalam format formulir.",
    materialSections: [],
    exercises: [],
    listeningAudios: [
      // ── Audio 7: Tour of London (dialogue, 28 blanks) ─────────────────────────
      {
        title: "Audio 7: Tour of London.",
        instruction: "Fill the blank spaces while listening to the recording.",
        type: "dialogue",
        answers: {
          1: "fantastic",
          2: "tour",
          3: "your",
          4: "guide",
          5: "open",
          6: "top",
          7: "bus",
          8: "a",
          9: "question",
          10: "umbrellas",
          11: "rains",
          12: "stop",
          13: "wonderful",
          14: "2",
          15: "famous",
          16: "sites",
          17: "wax",
          18: "models",
          19: "clock",
          20: "Parliament",
          21: "tourist",
          22: "attraction",
          23: "sunny",
          24: "day",
          25: "cup",
          26: "tea",
          27: "lovely",
          28: "café",
        },
        lines: [
          {
            speaker: "Tour guide",
            text: "Good afternoon ladies and gentlemen and welcome to this {{b:1}} {{b:2}} of London by bus. My name's Greg and I'm {{b:3}} {{b:4}} this afternoon on our tour of London. As you can see, we're on an {{b:5}} {{b:6}} {{b:7}}, so you can see all the attractions from your seat and you don't need to walk anywhere. And please don't worry about the rain, I'm sure it'll stop soon. A-a-and please ask any questions at any time.",
          },
          { speaker: "Tourist 1", text: "I have {{b:8}} {{b:9}}." },
          { speaker: "Tour guide", text: "Yes?" },
          {
            speaker: "Tourist 1",
            text: "Do you have extra {{b:10}}? I mean if it {{b:11}} a lot.",
          },
          {
            speaker: "Tour guide",
            text: "Err, no, we don't have any extra umbrellas, but don't worry, I'm sure the rain will {{b:12}} soon. Right, OK, so where are we going on our {{b:13}} tour? Well, the tour takes {{b:14}} hours and we are going to visit all the {{b:15}} {{b:16}}. First we'll see Madame Tussauds, the museum with {{b:17}} {{b:18}} of famous people and celebrities, then we'll drive along the most famous shopping street in the world, Oxford Street. After that we'll see the famous {{b:19}} Big Ben and The Houses of {{b:20}}. As we drive along the river you'll see the popular {{b:21}} {{b:22}}, the London Eye, from which you can see the whole city on a {{b:23}} {{b:24}}. Then we'll see Tower Bridge and the famous Tower of London before arriving at Buckingham Palace, just in time for a {{b:25}} of {{b:26}} with the Queen.",
          },
          {
            speaker: "Tourist 2",
            text: "Is that included in the tour? A cup of tea with the Queen?",
          },
          {
            speaker: "Tour guide",
            text: "Err, well, no not exactly, but there's a {{b:27}} {{b:28}} near the palace where you can get a cup of tea.",
          },
          {
            text: "(Sound of a storm right overhead, loud thunder and very heavy downpour)",
          },
          { speaker: "Tourist 1", text: "I have another question." },
          { speaker: "Tour guide", text: "Yes?" },
          {
            speaker: "Tourist 1",
            text: "Can we have our money back? We're getting off the bus.",
          },
          {
            speaker: "Tour guide",
            text: "Err, well, you see... Quick! Run! Everyone off the bus!...",
          },
        ],
      } satisfies ListeningAudio,

      // ── Audio 8: Difficult situations (dialogue, 3 parts, 34 blanks) ────────────
      {
        title: "Audio 8: Difficult situations.",
        instruction: "Fill the blank spaces while listening to the recording.",
        type: "dialogue",
        answers: {
          1: "economics",
          2: "exam",
          3: "revise",
          4: "doing",
          5: "that",
          6: "totally",
          7: "failed",
          8: "expensive",
          9: "course",
          10: "afford",
          11: "financially",
          12: "how are you",
          13: "terrible",
          14: "garden",
          15: "hedge",
          16: "took",
          17: "immediately",
          18: "meant",
          19: "tiny",
          20: "puppy",
          21: "short",
          22: "good",
          23: "day",
          24: "pretty",
          25: "stomach",
          26: "left",
          27: "grabbed",
          28: "suppose",
          29: "dangerous",
          30: "forgotten",
          31: "tracksuit",
          32: "entrance",
          33: "forget",
          34: "insurance",
        },
        lines: [
          { text: "— A —" },
          { speaker: "Boy", text: "Mum?" },
          { speaker: "Mother", text: "Yes?" },
          {
            speaker: "Boy",
            text: "You know that {{b:1}} {{b:2}} I had last week?",
          },
          { speaker: "Mother", text: "The one you didn't {{b:3}} for?" },
          {
            speaker: "Boy",
            text: "I did revise for it. I was working on it all weekend. Don't you remember?",
          },
          {
            speaker: "Mother",
            text: "Oh, yes, I remember. Apart from {{b:4}} {{b:5}} until four in the morning, you mean?",
          },
          {
            speaker: "Boy",
            text: "Well, I have to relax a little, even if I'm revising. Anyway, I didn't pass it.",
          },
          {
            speaker: "Mother",
            text: "You {{b:6}} {{b:7}} it! But wasn't that an important one?",
          },
          { speaker: "Boy", text: "Yeah, I'm really sorry." },
          {
            speaker: "Mother",
            text: "I'm really sorry too. What does that mean?",
          },
          {
            speaker: "Boy",
            text: "Well, I'll probably have to retake the whole course.",
          },
          {
            speaker: "Mother",
            text: "Oh, Ryan! It's a really {{b:8}} {{b:9}}! I'm not sure we can {{b:10}} {{b:11}} for you to take it again. Things are difficult enough as it is.",
          },
          {
            speaker: "Boy",
            text: "I know, Mum. I'm sorry. I'll talk to the teacher again and see if I can retake it.",
          },
          { text: "— B —" },
          { speaker: "Girl 1", text: "Hi, Megan. {{b:12}}?" },
          { speaker: "Girl 2", text: "Not feeling too good, actually." },
          { speaker: "Girl 1", text: "Oh? Why's that?" },
          {
            speaker: "Girl 2",
            text: "Well, something {{b:13}} happened this morning... (voice trembling)",
          },
          {
            speaker: "Girl 1",
            text: "What? Sorry, take your time, and tell me when you're ready.",
          },
          {
            speaker: "Girl 2",
            text: "Well, I was playing with Bonzo in the {{b:14}} with a ball, and the ball went over the {{b:15}} into the road, and...",
          },
          { speaker: "Girl 1", text: "Yes?" },
          {
            speaker: "Girl 2",
            text: "And Bonzo jumped over the hedge after it and he got hit by a car.",
          },
          { speaker: "Girl 1", text: "Oh, no! And is he...?" },
          {
            speaker: "Girl 2",
            text: "Yes. We {{b:16}} him to the vet's {{b:17}}, but there was nothing she could do.",
          },
          {
            speaker: "Girl 1",
            text: "Oh, poor Bonzo. And poor you. I know how much he {{b:18}} to you.",
          },
          {
            speaker: "Girl 2",
            text: "We'd had him since he was a {{b:19}} {{b:20}}. He was like one of the family.",
          },
          {
            speaker: "Girl 1",
            text: "I'm really sorry. At least he had a happy life.",
          },
          { speaker: "Girl 2", text: "His life was too {{b:21}}..." },
          {
            speaker: "Girl 1",
            text: "Well, yes, OK. I'm sorry that was a really insensitive thing to say. I'll come round and see you later, OK?",
          },
          { text: "— C —" },
          { speaker: "Boy", text: "Hi, Dad." },
          { speaker: "Father", text: "Hi, how's it going?" },
          { speaker: "Boy", text: "Did you have a {{b:22}} {{b:23}} at work?" },
          {
            speaker: "Father",
            text: "Same as usual, really. What about you? Good day at school?",
          },
          {
            speaker: "Boy",
            text: "Yeah, {{b:24}} good. Except for one little thing...",
          },
          {
            speaker: "Father",
            text: "Why do I have a sinking feeling in my {{b:25}}?",
          },
          {
            speaker: "Boy",
            text: "Do you remember you {{b:26}} me your phone?",
          },
          { speaker: "Father", text: "Yes?" },
          {
            speaker: "Boy",
            text: "Well, I was standing just outside school, texting Jack, and somebody ran past and {{b:27}} it.",
          },
          { speaker: "Father", text: "You let someone steal my phone?" },
          { speaker: "Boy", text: "I didn't let them." },
          {
            speaker: "Father",
            text: "No, I {{b:28}} not. But did you know that that might happen? Is that a {{b:29}} spot?",
          },
          {
            speaker: "Boy",
            text: "Well, I had heard of that happening, but I'd {{b:30}}. Anyway, I didn't think it would happen to me.",
          },
          { speaker: "Father", text: "No, OK. Did you see who it was?" },
          {
            speaker: "Boy",
            text: "No. It was someone in a blue {{b:31}}, and there are loads of people who wear those. But there's a CCTV camera on the {{b:32}}. It might have got a shot of the thief's face.",
          },
          { speaker: "Father", text: "You reported it then?" },
          { speaker: "Boy", text: "Well, not yet, but I will tomorrow." },
          {
            speaker: "Father",
            text: "All right. Don't {{b:33}} to report it tomorrow. I'll have a look at the {{b:34}} and see if it's covered.",
          },
        ],
      } satisfies ListeningAudio,

      // ── Audio 9: Crime Report Form (notes, 10 blanks) ─────────────────────────
      {
        title: "Audio 9: Crime Report Form.",
        instruction:
          "Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.",
        type: "notes",
        answers: {
          1: "Canadian",
          2: "furniture",
          3: "park",
          4: "250",
          5: "shopping",
          6: "September 10th",
          7: "Museum",
          8: "time",
          9: "blonde",
          10: "879 549 2361",
        },
        lines: [
          { text: "CRIME REPORT FORM", bold: true },
          { text: "Type of crime: theft" },
          { text: "Personal information", bold: true },
          { text: "Nationality: {{b:1}}", indent: true },
          { text: "Date of birth: 14 December 1977", indent: true },
          { text: "Occupation: interior designer", indent: true },
          {
            text: "Reason for visit: business (to buy antique {{b:2}})",
            indent: true,
          },
          { text: "Length of stay: two months", indent: true },
          { text: "Current address: {{b:3}} Apartments (No 15)", indent: true },
          { text: "Details of theft", bold: true },
          {
            text: "Items stolen: a wallet containing approximately £{{b:4}}",
            indent: true,
          },
          { text: "a {{b:5}} phone", indent: true },
          { text: "Date of theft: {{b:6}}", indent: true },
          { text: "Possible time and place of theft", bold: true },
          { text: "Location: outside the {{b:7}} at about 4 pm", indent: true },
          {
            text: "Details of suspect: some boys asked for the {{b:8}} then ran off",
            indent: true,
          },
          { text: "one had a T-shirt with a picture of a tiger", indent: true },
          {
            text: "he was about 12, slim build with {{b:9}} hair",
            indent: true,
          },
          { text: "Crime reference number allocated: {{b:10}}", indent: true },
        ],
      } satisfies ListeningAudio,
    ],
  },

  // ── Day 4: Library · Language School · Community Centre · Alice's Birthday ────
  {
    id: "int-listening-4",
    track: "listening",
    day: 4,
    tutor: "Mr. Fajri",
    title: "Fill the Blank & Multiple Choice — Listening Practice Day 4",
    subtitle:
      "Audio 10: University Library · Audio 11: Star Language School · Audio 12: Community Centre",
    overview:
      "Empat bagian: pilihan gambar (A), melengkapi tabel perpustakaan (B), informasi sekolah bahasa (C), jadwal kelas komunitas (D), dan pilihan ganda tentang ulang tahun Alice (E).",
    materialSections: [],
    exercises: [
      // ── Section A: Image-based MCQ ──────────────────────────────────────────
      {
        id: "int-lis4-a1",
        type: "multiple-choice",
        question: "A-1. What will James do after dinner?",
        options: ["Play computer games", "Go cycling", "Talk on the phone"],
        correctAnswer: "Go cycling",
        reason:
          "Dalam audio, James menyebutkan ia akan bersepeda setelah makan malam.",
        section: "quiz",
        imageUrl: "/listening-day4.png",
      },
      {
        id: "int-lis4-a2",
        type: "multiple-choice",
        question: "A-2. Which room has the woman cleaned?",
        options: ["Kitchen", "Living room", "Bedroom"],
        correctAnswer: "Bedroom",
        reason:
          "Wanita dalam percakapan menyebutkan ia baru saja membersihkan kamar tidur.",
        section: "quiz",
        imageUrl: "/listening-day4-b.png",
      },
      // ── Section E: Alice's Birthday MCQ (rendered after listening audios) ──────
      {
        id: "int-lis4-e18",
        type: "multiple-choice",
        question: "E-1. What date is Alice's birthday?",
        options: ["12th July", "14th July", "16th July"],
        correctAnswer: "12th July",
        reason:
          "Jack menanyakan tanggal ulang tahun Alice, dan Alice menjawab 12 Juli.",
      },
      {
        id: "int-lis4-e19",
        type: "multiple-choice",
        question: "E-2. What was the problem at Alice's party last year?",
        options: [
          "Nobody had fun.",
          "It was hard work.",
          "Hardly any people came.",
        ],
        correctAnswer: "It was hard work.",
        reason:
          "Alice menyatakan bahwa mengadakan pesta tahun lalu sangat melelahkan.",
      },
      {
        id: "int-lis4-e20",
        type: "multiple-choice",
        question: "E-3. What is the problem with Freddie's Pizza House?",
        options: [
          "The service was terrible.",
          "The food is bad.",
          "The pizzas are expensive.",
        ],
        correctAnswer: "The food is bad.",
        reason:
          "Dalam percakapan, disebutkan bahwa makanan di Freddie's Pizza House tidak enak.",
      },
      {
        id: "int-lis4-e21",
        type: "multiple-choice",
        question: "E-4. Where is the burger restaurant?",
        options: ["Hill Street", "Penny Road", "Arthur Street"],
        correctAnswer: "Penny Road",
        reason: "Jack menyebutkan restoran burger baru berada di Penny Road.",
      },
      {
        id: "int-lis4-e22",
        type: "multiple-choice",
        question: "E-5. How much will six burgers cost at the new restaurant?",
        options: ["£18", "£36", "£40"],
        correctAnswer: "£36",
        reason: "Harga enam burger di restoran baru adalah £36.",
      },
    ],
    listeningAudios: [
      // ── Audio 10: University Library conversation (table, 5 blanks) ────────────
      {
        title: "Audio 10: University Library.",
        instruction:
          "Listen to a conversation between a student and a university librarian. Complete the table.",
        type: "table",
        answers: {
          1: "natural history",
          2: "Davies",
          3: "19.733",
          4: "5",
          5: "3.45",
        },
        lines: [],
        tableRows: [
          { label: "Name of Book:", value: "{{b:1}}" },
          { label: "Writer:", value: "George {{b:2}}" },
          { label: "Shelf number:", value: "{{b:3}}" },
          {
            label: "Students can borrow short loan books for:",
            value: "{{b:4}} hours",
          },
          { label: "Must return a book by:", value: "{{b:5}}" },
          { label: "Library closing time:", value: "11.30 pm" },
        ],
      } satisfies ListeningAudio,

      // ── Audio 11: Star Language School (notes, 5 blanks) ────────────────────
      {
        title: "Audio 11: Star Language School.",
        instruction:
          "You will hear some information about a language school. Listen and complete questions.",
        type: "notes",
        answers: {
          1: "DVDs",
          2: "grammar books",
          3: "ground floor",
          4: "small café",
          5: "famous castle",
        },
        lines: [
          { text: "Star Language School", bold: true },
          { text: "First Floor: Library", bold: true },
          {
            text: "You can borrow reading books and {{b:1}} for 2 weeks.",
            indent: true,
          },
          { text: "You cannot borrow {{b:2}}.", indent: true },
          { text: "Second Floor: Computer Room", bold: true },
          { text: "The booking form is on the {{b:3}}.", indent: true },
          { text: "Basement: {{b:4}}", indent: true },
          { text: "Saturday Trip: Visit a {{b:5}} in Warwick.", indent: true },
        ],
      } satisfies ListeningAudio,

      // ── Audio 12: Community Centre evening classes (notes, 5 blanks) ─────────
      {
        title: "Audio 12: Community Centre — Evening Classes.",
        instruction:
          "Listen to Dan and Jess talking about evening classes at the community centre. What club is on each day?",
        type: "notes",
        answers: {
          1: "Art Club",
          2: "Football Club",
          3: "Tennis",
          4: "Film Club",
          5: "Singing",
        },
        lines: [
          { text: "Evening Classes Schedule", bold: true },
          { text: "Monday: {{b:1}}", indent: true },
          { text: "Tuesday: {{b:2}}", indent: true },
          { text: "Wednesday: {{b:3}}", indent: true },
          { text: "Thursday: {{b:4}}", indent: true },
          { text: "Friday: {{b:5}}", indent: true },
        ],
      } satisfies ListeningAudio,
    ],
  },

  // ── Day 6: TOEFL Dialogues — Topics & Details ────────────────────────────────
  {
    id: "int-listening-6",
    track: "listening",
    day: 6,
    tutor: "Mr. Fajri",
    title: "TOEFL Listening — Dialogues (Topics & Details)",
    subtitle: "Audio T-1: Dialogues – Topics · Audio T-2: Dialogues – Details",
    overview:
      "Latihan TOEFL listening: Audio T-1 mengidentifikasi topik utama percakapan dari beberapa subjek sekunder, Audio T-2 mengingat detail yang disebutkan langsung dalam percakapan.",
    materialSections: [],
    exercises: [],
    listeningAudios: [
      // ── Audio T-1: Dialogues – Topics ─────────────────────────────────────────
      {
        title: "Audio T-1: Dialogues – Topics",
        instruction:
          "In some dialogues in the listening section on the Paper-Based TOEFL or the Computer-Based TOEFL, you will be asked to identify the main topic from among several secondary subjects in the conversations. Choose the best answer.",
        type: "mcq",
        lines: [],
        answers: { 1: "A", 2: "C", 3: "A", 4: "B", 5: "A", 6: "A", 7: "A", 8: "C", 9: "D", 10: "D" },
        questions: [
          {
            question: "What are the man and woman talking about?",
            options: ["A. A health club", "B. A class", "C. A game", "D. A dentist"],
            correctAnswer: "A",
          },
          {
            question: "What are these two people most probably discussing?",
            options: ["A. Food and grocery items", "B. Gasoline prices", "C. Weights and measures", "D. Money"],
            correctAnswer: "C",
          },
          {
            question: "What are the two people talking about?",
            options: ["A. A vacation", "B. The mall", "C. The newspaper", "D. The office"],
            correctAnswer: "A",
          },
          {
            question: "What are the two people discussing?",
            options: ["A. A new doctor", "B. A party they attended", "C. The man's work", "D. A restaurant"],
            correctAnswer: "B",
          },
          {
            question: "What are the man and the woman discussing?",
            options: ["A. An exchange program", "B. The man's trip to England", "C. The man's illness", "D. Their friend Nancy"],
            correctAnswer: "A",
          },
          {
            question: "What are the man and the woman talking about?",
            options: ["A. The professor's lecture", "B. The women's children", "C. The chairs they are sitting in", "D. The size of the lecture room"],
            correctAnswer: "A",
          },
          {
            question: "What are the two people discussing?",
            options: ["A. The women's computer", "B. The man's computer", "C. The man's hometown", "D. The man's job"],
            correctAnswer: "A",
          },
          {
            question: "What are the two people talking about?",
            options: ["A. The campus", "B. Registration week", "C. The parking situation", "D. The women's class"],
            correctAnswer: "C",
          },
          {
            question: "What are the man and women discussing?",
            options: ["A. The professor, Dr. Smith", "B. The lab reports", "C. The attendance policy", "D. The teaching assistant"],
            correctAnswer: "D",
          },
          {
            question: "What are the man and the women talking about?",
            options: ["A. The chemistry department", "B. The man's employer", "C. The man's house", "D. Having lunch on campus"],
            correctAnswer: "D",
          },
        ],
      } satisfies ListeningAudio,

      // ── Audio T-2: Dialogues – Details ────────────────────────────────────────
      {
        title: "Audio T-2: Dialogues – Details",
        instruction:
          "In some dialogues in the listening on the Paper-Based TOEFL or the Computer-Based TOEFL, you will be asked to remember details that are directly stated. Choose the best answer.",
        type: "mcq",
        lines: [],
        answers: { 1: "A", 2: "B", 3: "A", 4: "C", 5: "D", 6: "A", 7: "A", 8: "C", 9: "A", 10: "B" },
        questions: [
          {
            question: "What is the man's problem?",
            options: ["A. He is tired", "B. He is drunk", "C. He is thirsty", "D. He is busy"],
            correctAnswer: "A",
          },
          {
            question: "How does the woman want to pay?",
            options: ["A. She wants to pay by check", "B. She prefers to use a credit card", "C. She has cash", "D. She will need a loan"],
            correctAnswer: "B",
          },
          {
            question: "Why did Sharon stop seeing the man?",
            options: ["A. He was too short", "B. She didn't know him very well", "C. The expensive gift made her uncomfortable", "D. The man never gave her gifts"],
            correctAnswer: "A",
          },
          {
            question: "What does the woman want the man to do?",
            options: ["A. Study with her", "B. High her on the test", "C. Take a break", "D. Lend her his notebook"],
            correctAnswer: "C",
          },
          {
            question: "What does the woman want the man to do?",
            options: ["A. Study with her", "B. High her on the test", "C. Take a break", "D. Lend her his notebook"],
            correctAnswer: "D",
          },
          {
            question: "Who is driving Steve's car?",
            options: ["A. Steve", "B. Steve's girlfriend", "C. Steve's sister", "D. Mary Anne"],
            correctAnswer: "A",
          },
          {
            question: "Why don't the door open?",
            options: ["A. The door is locked", "B. The woman doesn't have the right key", "C. The dog knob is broken", "D. The door is stuck"],
            correctAnswer: "A",
          },
          {
            question: "What does the man want to do?",
            options: ["A. Check the calculators", "B. Use a calculator to do his test", "C. Borrow a calculator", "D. Lend a calculator to do his test"],
            correctAnswer: "C",
          },
          {
            question: "What is the woman's advice?",
            options: ["A. She thinks the man should pay the bills", "B. She thinks the man should ask his family for help", "C. She thinks the man should contact his roommate's family", "D. She thinks the man should leave"],
            correctAnswer: "A",
          },
          {
            question: "How will the woman help the man?",
            options: ["A. By filling out forms", "B. By filing his taxes", "C. By advising him about student loans", "D. By completing his application"],
            correctAnswer: "D",
          },
        ],
      } satisfies ListeningAudio,
    ],
  },

  // ── Day 7: TOEFL Dialogues — Selections, Reversals, Idioms, Emotions, Suggestions
  {
    id: "int-listening-7",
    track: "listening",
    day: 7,
    tutor: "Mr. Fajri",
    title: "TOEFL Listening — Dialogues (Selections, Reversals, Idioms, Emotions & Suggestions)",
    subtitle: "Audio T-3 · T-4 · T-5 · T-6 · T-7",
    overview:
      "Latihan TOEFL listening lanjutan: mengidentifikasi pilihan pembicara, perubahan pendapat, idiom, emosi, dan saran yang disampaikan dalam percakapan.",
    materialSections: [],
    exercises: [],
    listeningAudios: [
      // ── Audio T-3: Dialogues – Selections ────────────────────────────────────
      {
        title: "Audio T-3: Dialogues – Selections",
        instruction:
          "In some dialogues in the listening Section on the Computer-Based TOEFL, you will be asked to select the correct detail from among several similar alternatives, all of which have been mentioned in different contexts in the conversation. Choose the best answer.",
        type: "mcq",
        lines: [],
        answers: { 1: "B", 2: "A", 3: "C", 4: "B", 5: "A", 6: "C", 7: "A", 8: "A", 9: "C", 10: "B" },
        questions: [
          {
            question: "What is the relationship between Jack and the man?",
            options: ["A. They are brothers", "B. They are good friends", "C. They are cousins", "D. They are classmates"],
            correctAnswer: "B",
          },
          {
            question: "What does the woman suggest?",
            options: ["A. That the man and Steve be roommates", "B. That the man ask Geoff to be his roommate", "C. That the man live with Frank and Geoff", "D. That the man share a room with Frank"],
            correctAnswer: "A",
          },
          {
            question: "What grade did the woman receive?",
            options: ["A. She earned an A", "B. She received a B", "C. Her grade was C", "D. She got a D or F"],
            correctAnswer: "C",
          },
          {
            question: "What advice does the woman give the man?",
            options: ["A. Buy the computer at a discount store", "B. Put an ad in the newspaper for a computer", "C. Go to a computer store to buy a computer", "D. Buy the computer at the university as part of a special offer"],
            correctAnswer: "D",
          },
          {
            question: "Why didn't the woman receive a grade for the course?",
            options: ["A. She didn't pay her fees", "B. She didn't register for the class", "C. She didn't attend the class", "D. She didn't have her name on the roster"],
            correctAnswer: "B",
          },
          {
            question: "On what do the speakers agree?",
            options: ["A. The sign has Mickey Mouse on it", "B. They do not believe the sign", "C. The course is very easy", "D. They did not register for the course"],
            correctAnswer: "C",
          },
          {
            question: "What size will the man probably bring her?",
            options: ["A. He will probably bring her a size 5", "B. He will probably bring her a size 6", "C. He will probably bring her a size 7", "D. He will probably bring her a size 7½"],
            correctAnswer: "A",
          },
          {
            question: "For which class must the woman begin to prepare?",
            options: ["A. She must begin writing a paper for her history class", "B. She must start writing up her laboratory assignments for her chemistry class", "C. She must begin studying for her English examination", "D. She must begin studying for her French examination"],
            correctAnswer: "A",
          },
          {
            question: "Where does the man live?",
            options: ["A. In New York", "B. In Boston", "C. In Michigan", "D. In Washington"],
            correctAnswer: "C",
          },
          {
            question: "Which gear needs to be fixed?",
            options: ["A. First gear", "B. Second gear", "C. Reverse", "D. Drive"],
            correctAnswer: "B",
          },
        ],
      } satisfies ListeningAudio,

      // ── Audio T-4: Dialogues – Reversals ─────────────────────────────────────
      {
        title: "Audio T-4: Dialogues – Reversals",
        instruction:
          "In some dialogues in the listening on the Paper-Based TOEFL, you will be asked to identify the speaker's final choice or decision after a change of opinion. Choose the best answer.",
        type: "mcq",
        lines: [],
        answers: { 1: "A", 2: "B", 3: "B", 4: "B", 5: "B", 6: "D", 7: "B", 8: "C", 9: "B", 10: "C" },
        questions: [
          {
            question: "How will the woman get to the airport?",
            options: ["A. She will drive her car", "B. She will ride the airport shuttle", "C. She will get a ride with the man", "D. She will rent a car"],
            correctAnswer: "A",
          },
          {
            question: "What does the woman want to eat?",
            options: ["A. She would like eggs and potatoes", "B. She wants eggs and pancakes", "C. She wants to eat potato pancakes", "D. Pancakes are what she would like to eat"],
            correctAnswer: "B",
          },
          {
            question: "How many boxes of cookies did the man order?",
            options: ["A. The man bought one box of cookies", "B. The man ordered four boxes of cookies", "C. He purchased five boxes of cookies this year", "D. He did not order any cookies"],
            correctAnswer: "B",
          },
          {
            question: "What is the correct area code for the woman?",
            options: ["A. The area code is 1-9-6", "B. 9-1-6 is the area code", "C. 6-1-9 is the correct number", "D. 6-1-9 is the correct number"],
            correctAnswer: "D",
          },
          {
            question: "How much per copy will the woman pay?",
            options: ["A. She will pay five cents per page", "B. The price is ten cents a copy", "C. She owes fifteen cents per copy", "D. Twenty cents per page is the price"],
            correctAnswer: "B",
          },
          {
            question: "How much will the woman pay?",
            options: ["A. One dollar a minute", "B. One dollar a page", "C. Two dollars and fifty cents a minute", "D. Two dollars and fifty cents a page"],
            correctAnswer: "D",
          },
          {
            question: "What does the woman want to do?",
            options: ["A. See a documentary", "B. Change the channel", "C. Watch the television", "D. Go to a movie"],
            correctAnswer: "B",
          },
          {
            question: "What does the man want the woman to do?",
            options: ["A. Buy a larger wallet", "B. Keep the cards in his book bag", "C. Carry fewer cards", "D. Organize the cards"],
            correctAnswer: "C",
          },
          {
            question: "What does the woman mean?",
            options: ["A. She is glad Joan is moving", "B. She does not believe that Joan will move", "C. She saw Joan move", "D. She believes Joan is moving because she saw her"],
            correctAnswer: "B",
          },
          {
            question: "What does the mean mean?",
            options: ["A. He is angry with the woman", "B. He wants to talk with the woman", "C. It was a bad day for the woman", "D. He does not know what day it is"],
            correctAnswer: "C",
          },
        ],
      } satisfies ListeningAudio,

      // ── Audio T-5: Dialogues – Idioms ─────────────────────────────────────────
      {
        title: "Audio T-5: Dialogues – Idioms",
        instruction:
          "In some dialogues in the listening on the Paper-Based TOEFL, you will be asked to identify the speaker's final choice or decision after a change of opinion. Words or phrases such as \"you should\", \"or why don't you\" or \"why not\" introduce a suggestion. Choose the best answer.",
        type: "mcq",
        lines: [],
        answers: { 1: "A", 2: "B", 3: "A", 4: "B", 5: "A", 6: "D", 7: "D", 8: "B", 9: "B", 10: "A" },
        questions: [
          {
            question: "What does the woman mean?",
            options: ["A. She does not think that the man is serious", "B. She thinks the man is going to take her to Florida", "C. She thinks the man has a good idea", "D. She thinks the man does not have any money"],
            correctAnswer: "A",
          },
          {
            question: "What does the woman mean?",
            options: ["A. She needs one more semester", "B. She needs a hundred dollars", "C. The increase will be difficult for her", "D. The increase will be difficult for her"],
            correctAnswer: "C",
          },
          {
            question: "What did the man do?",
            options: ["A. He has used his last piece of paper", "B. He has left the lecture", "C. He has said good-bye to the woman", "D. He has finished giving the lecture"],
            correctAnswer: "B",
          },
          {
            question: "How does the man feel about the test?",
            options: ["A. He agrees with the woman that the test was fair", "B. He does not agree with the woman", "C. He does not want the woman to tease him about the test", "D. He is not worried about the test"],
            correctAnswer: "B",
          },
          {
            question: "What does the woman mean?",
            options: ["A. The man does not pay attention", "B. The man is very honest", "C. The man has gone away", "D. The man needs to repeat"],
            correctAnswer: "A",
          },
          {
            question: "On what do the speakers agree?",
            options: ["A. The sign has Mickey Mouse on it", "B. They do not believe the sign", "C. The course is very easy", "D. They did not register for the course"],
            correctAnswer: "C",
          },
          {
            question: "On what does the woman mean?",
            options: ["A. She does not want the man to come for her", "B. She will come for the man", "C. She thinks the man is a brother", "D. She does not want the man to come for her"],
            correctAnswer: "A",
          },
          {
            question: "What does the man mean?",
            options: ["A. The man likes ice cream", "B. The man will tell the woman later whether he likes ice cream", "C. The man does not want to say whether he wants ice cream", "D. The man will get some ice cream for the woman"],
            correctAnswer: "A",
          },
          {
            question: "What does the woman mean?",
            options: ["A. She is glad Joan is moving", "B. She does not believe that Joan will move", "C. She saw Joan move", "D. She believes Joan is moving because she saw her"],
            correctAnswer: "B",
          },
          {
            question: "What does the mean mean?",
            options: ["A. He is angry with the woman", "B. He wants to talk with the woman", "C. It was a bad day for the woman", "D. He does not know what day it is"],
            correctAnswer: "C",
          },
        ],
      } satisfies ListeningAudio,

      // ── Audio T-6: Dialogues – Emotions ──────────────────────────────────────
      {
        title: "Audio T-6: Dialogues – Emotions",
        instruction:
          "In some dialogues in the listening on the Paper-Based TOEFL, you will be asked to draw conclusions about the feelings or emotions expressed by the speakers. Words or phrases as well as the tone of voice of speakers in the conversation will provide information for your conclusions. Choose the best answer.",
        type: "mcq",
        lines: [],
        answers: { 1: "B", 2: "A", 3: "B", 4: "A", 5: "C", 6: "A", 7: "B", 8: "A", 9: "B", 10: "A" },
        questions: [
          {
            question: "How does the man feel?",
            options: ["A. He is worried", "B. He is happy", "C. He feels confident", "D. He feels tired"],
            correctAnswer: "B",
          },
          {
            question: "How did the man feel about the movie?",
            options: ["A. He thought it was very unrealistic", "B. He was impressed with the movie", "C. He agreed with the woman about the movie", "D. He liked the movie because it was a fairy tale"],
            correctAnswer: "A",
          },
          {
            question: "How does the woman feel about the TOEFL?",
            options: ["A. She does not know whether she did well", "B. She thinks that she improved her score", "C. She believes that she scored about 490", "D. He is confused"],
            correctAnswer: "B",
          },
          {
            question: "How does the woman feel about the man?",
            options: ["A. She believes that he is having a bad day", "B. She does not like the man", "C. She likes to help the man every day", "D. She likes to help the man every day"],
            correctAnswer: "A",
          },
          {
            question: "How does the man feel about Rick?",
            options: ["A. He forgot who he was", "B. He thinks that Rick and Lucy will forget to come", "C. He likes Rick, but not Lucy", "D. He does not want to invite them"],
            correctAnswer: "C",
          },
          {
            question: "What is the man's reaction to the news?",
            options: ["A. He is surprised", "B. He is confused", "C. He is supportive", "D. He is hostile toward Terry"],
            correctAnswer: "A",
          },
          {
            question: "How does the man feel about the assignments?",
            options: ["A. He does not care", "B. He does not agree", "C. He does not want to know", "D. He does not agree"],
            correctAnswer: "B",
          },
          {
            question: "What best describes the man's opinion of Terry?",
            options: ["A. He feels protective of Terry", "B. He has his doubts about Terry", "C. The man is supportive", "D. He feels hostile toward Terry"],
            correctAnswer: "B",
          },
          {
            question: "How does the man first feel about the review session?",
            options: ["A. He wants to go, and he will", "B. He does not want to go, but he won't", "C. He wants to go, but he won't", "D. He does not want to go, and he will"],
            correctAnswer: "A",
          },
          {
            question: "What does the man feel about Janine?",
            options: ["A. He thinks Janine would be difficult to live with", "B. He thinks Janine and the woman will like living together", "C. He thinks it would be better to live with Carol than with Janine", "D. He thinks that Janine and Carol should live together"],
            correctAnswer: "A",
          },
        ],
      } satisfies ListeningAudio,

      // ── Audio T-7: Dialogues – Suggestions ───────────────────────────────────
      {
        title: "Audio T-7: Dialogues – Suggestions",
        instruction:
          "In some dialogues in the listening on the Paper-Based TOEFL, you will be asked to recognize a suggestion. Words or phrases such as \"you should\", \"or why don't you\" or \"why not\" introduce a suggestion. Choose the best answer.",
        type: "mcq",
        lines: [],
        answers: { 1: "B", 2: "A", 3: "A", 4: "A", 5: "A", 6: "A", 7: "A", 8: "C", 9: "D", 10: "B" },
        questions: [
          {
            question: "What does the man suggest that the woman do?",
            options: ["A. Tip the waiter after dinner", "B. Pay for the part of the dinner", "C. Buy dinner", "D. Prepare the dinner"],
            correctAnswer: "B",
          },
          {
            question: "What does the man suggest that the woman do?",
            options: ["A. Telephone the security guard", "B. Return later", "C. Stay at the dorm", "D. Look for the key"],
            correctAnswer: "A",
          },
          {
            question: "What does the woman suggest that the man do?",
            options: ["A. Ask the custodian to unlock the lobby", "B. Use the bathroom in the main bathroom", "C. Find another bathroom", "D. Go to another building to locate a bathroom"],
            correctAnswer: "A",
          },
          {
            question: "What does the man suggest that the woman do?",
            options: ["A. Get in line behind him", "B. Take a number", "C. Come back later", "D. Go to the end of the line"],
            correctAnswer: "A",
          },
          {
            question: "What does the woman suggest that the man do?",
            options: ["A. Go to another bank", "B. Open an account with the bank", "C. Cash his check", "D. Make out the check for twenty dollars"],
            correctAnswer: "A",
          },
          {
            question: "What does the woman suggest that the man do?",
            options: ["A. Pick her up at 11:35 A.M.", "B. Wait for her at the airport", "C. Wait for her to call him", "D. Call the airport for the schedule"],
            correctAnswer: "A",
          },
          {
            question: "What does the man suggest that the woman do?",
            options: ["A. Refer to the syllabus", "B. Go to Dr. Watson's office", "C. See Dr. Watson at 2:00 P.M.", "D. Ask someone else"],
            correctAnswer: "A",
          },
          {
            question: "What does the man suggest that they do?",
            options: ["A. Stay home", "B. Go out after dinner", "C. Find a baby sitter", "D. Take the children out to dinner"],
            correctAnswer: "C",
          },
          {
            question: "What does the woman suggest that the man do?",
            options: ["A. Ask for an extension", "B. Use the interlibrary loan", "C. Look for references in the library", "D. Try the internet"],
            correctAnswer: "D",
          },
          {
            question: "What does the woman suggest that the man do?",
            options: ["A. Buy a larger wallet", "B. Keep the cards in his book bag", "C. Carry fewer cards", "D. Organize the cards"],
            correctAnswer: "B",
          },
        ],
      } satisfies ListeningAudio,
    ],
  },

  // ── Day 8: IELTS Listening — Hotel Booking & Company Information ──────────────
  {
    id: "int-listening-8",
    track: "listening",
    day: 8,
    tutor: "Mr. Fajri",
    title: "IELTS Listening — Form & Table Completion",
    subtitle: "Audio I-1A: Hotel Booking · Audio I-1B: Company Information",
    overview:
      "Latihan IELTS listening: Audio I-1A mengisi formulir pemesanan hotel (form completion), Audio I-1B melengkapi tabel transportasi dan menjawab pertanyaan pilihan ganda tentang perusahaan dan program sukarela.",
    materialSections: [],
    exercises: [],
    listeningAudios: [
      // ── Audio I-1A: Hotel Booking form ────────────────────────────────────────
      {
        title: "Audio I-1A: Hotel Booking",
        instruction:
          "You are going to hear a conversation between a hotel receptionist and a customer who has come to make a booking. Complete the form below. Write NO MORE THAN THREE WORDS AND OR/NUMBERS for each answer.",
        type: "table",
        lines: [],
        answers: {
          1: "4 & 12",
          2: "bed",
          3: "Fairly Virnsky",
          4: "15 October",
          5: "SW2 4S6",
          6: "874456",
        },
        tableRows: [
          { label: "Name of accommodation (Example)", value: "Carlton Hotel" },
          { label: "Length of stay", value: "3 nights" },
          { label: "Ages of children", value: "{{b:1}}" },
          { label: "Rooms available", value: "Two en-suites at £270" },
          { label: "Price inclusive of", value: "{{b:2}} + Tax" },
          { label: "Payment method", value: "credit card" },
          { label: "Name", value: "Michael (3) {{b:3}}" },
          { label: "Date of birth", value: "{{b:4}} 1968" },
          { label: "Address", value: "273, Stanton Court, London" },
          { label: "Post code", value: "{{b:5}}" },
          { label: "Telephone", value: "08773 (6) {{b:6}}" },
        ],
      } satisfies ListeningAudio,

      // ── Audio I-1B: Transport Options (table, Q7-10) ──────────────────────────
      {
        title: "Audio I-1B: Transport & Company Information",
        instruction:
          "Complete the table below. Write NO MORE THAN THREE WORDS AND OR/A NUMBER for each answer.",
        type: "table",
        lines: [],
        answers: {
          7: "£15",
          8: "Avenue",
          9: "the park",
          10: "30 min",
        },
        tableRows: [
          { label: "Mode of Transport", value: "Cost | Arrangements | Travel time to town" },
          { label: "Taxi", value: "Approximately {{b:7}} | Pick up from the hotel | 10 minutes" },
          { label: "Bus", value: "£2 per person | Walk down Oak Tree {{b:8}} | 15 minutes" },
          { label: "Walking", value: "-------- | Walk through {{b:9}} | {{b:10}}" },
        ],
      } satisfies ListeningAudio,

      // ── Audio I-1B: Multiple choice (Q11-14) ──────────────────────────────────
      {
        title: "Audio I-1B: Company & Volunteering Questions",
        instruction:
          "Choose the correct letter, A, B, or C for each answer.",
        type: "mcq",
        lines: [],
        answers: { 11: "B", 12: "C", 13: "C", 14: "B" },
        questions: [
          {
            question: "The company expanded in",
            options: ["A. 2000", "B. 2007", "C. 2014"],
            correctAnswer: "B",
          },
          {
            question: "The number of permanent staff is",
            options: ["A. 75", "B. 90", "C. 150"],
            correctAnswer: "C",
          },
          {
            question: "Most volunteers join the program",
            options: ["A. in Winter", "B. in July", "C. when it is best for them"],
            correctAnswer: "C",
          },
          {
            question: "Time Abroad receives all its income from",
            options: ["A. partner organisations", "B. volunteers", "C. the government"],
            correctAnswer: "B",
          },
        ],
      } satisfies ListeningAudio,

      // ── Audio I-1B: Volunteering table (Q15-20) ───────────────────────────────
      {
        title: "Audio I-1B: Volunteering Opportunities",
        instruction:
          "Complete the table. Write NO MORE THAN TWO WORDS for each answer.",
        type: "table",
        lines: [],
        answers: {
          15: "conversation",
          16: "experiences",
          17: "responsible",
          18: "organic",
          19: "promotion",
          20: "understanding",
        },
        tableRows: [
          { label: "Volunteering Opportunity | Activity | Benefits", value: "" },
          {
            label: "English Teaching",
            value: "Helping with English (15) {{b:15}} | Significantly improve the learning {{b:16}} of many children and adults",
          },
          {
            label: "Agriculture and Farming",
            value: "Promoting sustainable and (17) {{b:17}} farming | Promote (18) {{b:18}} farming methods · educate local communities",
          },
          {
            label: "Veterinary Medicine",
            value: "Helping the vet with sick animals · (19) {{b:19}} · Joining the vet on home visits | Amazing insights into the country · See a lot of fascinating animals · Gain a greater (20) {{b:20}} of the difficulties in the country",
          },
        ],
      } satisfies ListeningAudio,
    ],
  },
];

export { intermediateListeningLessons };
