const compliments: string[] = [
  "Why are you sooo hot today 🥵",
  "5 w 5mise 3lik mn l3in 🧿",
  "YOU DID SOOOOOOOOOOOOOOOOOOOOOOOOO FKING GREAT TODAAAAAAAAY 🎉",
  "Look at that smile, a TAT5WEEEET it made me instantly smile 💅",
  "You loook sooo good today 🥵",
  "OPAPAPAPAPA AX HAD LJADIBIA, ANA BOT W TE7ET",
  "NARIIIII 3LA 7TA OPAPAPAAAA",
  "For today kayna a song for you 🎶\nhttps://youtu.be/0gCEGo8DJK8\nPS: Kolxi 3la lyrics ",
  "We all have ups and downs hania for today 5eda makayn gir l upat xD",
  "You did amazing today, don't let someone tell u otherwise 🖤",
  "You have a heart of gold, always willing to lend a hand and offer a warm embrace",
  "Your kindness and compassion never fail to touch my heart, and I am grateful to know you",
  "Your love and devotion are like a warm fire on a cold night, and that something u should be proud about",
  "Your smile is like a ray of sunshine on a cloudy day, people are lucky that they saw it today 😩",
  "I'm so proud of how hard you are working on yourself 💛",
  "They say everything is a reflection of light, and if that's the case then you're the reflection of the combination of the prettiest lights that exists",
  "How strange to dream of you even when I'm wide awake",
  "I wish I could hold your heart in the way you deserve. I'm so sorry someone was so careless with it",
  "Your creativity and your manner is always the best and that’s what all people are looking for but you you are special because you have it par nature 👀",
];

export const getCustumeCompliment = (): string => {
  return compliments[Math.floor(Math.random() * compliments.length)];
};

export const getZiadCompliment = (): string => {
  const modified_compliment = [
    ...compliments,
    "I LOOOOOOOOOOOOOOOOOOOVE YOUUUU 🖤",
    "All eyes on me but my eyes on you 💅",
    "Your the best thing that happen to my life ✨",
    "You have been in my mind all day long, NAKED 🥵",
    "How I wish I could kiss every inch of you, your body and soul",
    "My heart is so full of you. I can hardly call it my own",
    "And maybe I'll never be able to find the words to describe just how much you mean to me, but I'll spend the rest of my life trying",
    "All roads lead to you, even those I took to forget you",
    "The difference between you and the sky is when you laugh I forget about the sky",
    "If I could show you how I felt about you, I'd require every art gallery on this earth",
    "If I could only hold one thing, I'd make sure that it's your hand",
    "If I were a cat, I would spend all my lives searching for you",
    "I'm this close 🤏 to worship the ground you walk on",
    "If I could choose to be anywhere I'd still be standing next to you",
    "Any placce that we travel, your eyes would still have the prettiest view",
    "If I could only write poems (technically I can learn that in future if u give me that ability :)), all my love poems would have your name",
    "If I could keep one photograph it would be your smile that's in the frame",
    "I want in fact more of you. In my mind I am dressing you with light, I'm wrapping you up in blankets of complete acceptance and then I give myself to you. I long without longing, as though I am unconscious and absorbed in neutrality and apathy, really, utterly long for every bit of you",
    "I don't love you with my heart and mind, I love you with my soul, in case my mind forgets and my heart stops",
    "I don't know how to become one with you.\nIf you're heaven, then tell me. I will kneel to every god\nIf you're hell then tell me. I will fill the earth with sins",
    "The gods don't listen to people like me, but I would go on my knees and beg them to let me keep you. You were once the bane of my existance...and now, you are the center of it",
    "You're very much like a book that can't be put back on the shelf because the story is too good and what is being read is too important to be left unfinished to stop. I look forward to learning all I can about you",
    "You are deeper and more intriguing than any philosophy I've ever read. I'm enamored with you",
  ];

  return modified_compliment[
    Math.floor(Math.random() * modified_compliment.length)
  ];
};
