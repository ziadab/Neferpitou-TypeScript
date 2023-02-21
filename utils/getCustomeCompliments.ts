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
  ];

  return modified_compliment[
    Math.floor(Math.random() * modified_compliment.length)
  ];
};
