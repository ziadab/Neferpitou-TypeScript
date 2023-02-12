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
  ];

  return modified_compliment[
    Math.floor(Math.random() * modified_compliment.length)
  ];
};
