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
  "Your eyes were portraits of a world without cruelty",
  "If I was a vampire, and you were the sun I would never look for shade, I would rather burn at the sight of your shining beauty",
];

export const getCustumeCompliment = (): string => {
  return compliments[Math.floor(Math.random() * compliments.length)];
};

export const getZiadCompliment = (): string => {
  const modified_compliment = [
    ...compliments,
    "Say you'll share with me one love, one lifetime. Lead me, save me from my solitude.\nSay you want me with you, here beside you. Anywhere you go, let me go too",
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
    "You make me feel all the love that I have lost in my lifetime",
    "I don't know that I ever lived before laying eyes on the likes of you",
    "How strange. I dream of you even though I'm wide awake",
    "If I were to kiss you then go to hell, I would.\nSo then I can brag with the devils I saw heaven without ever entering it",
    "Someday, my memories of you will fade. Your voice, your action\nI may forget them all as well. But even then, I will always remember that I loved you",
    "I notice every single one your features. I could stare at you for hours, you're a work of art as yourself and even I don't deserve you but I'm honored you bless me with your presence",
    "I hope the light at the end of the tunnel hold a solhouette of you, for there is no afterlife worth living without your embrace",
    "I'm a dreamer, I know so little of real life that I just can't help re-living such moments as these on my dreams, for such moments are something I have very rarely experienced\nI'm going to dream about you the whole night, the whole week, the whole year",
    "Who cares about perfection?\nEven the moon is not perfect, it is full of craters.\nThe sea is incredibly beatiful but salty and dark in depth\nTheSky is always infinite, but often cloudy.\nSpp everything that is beatiful isn't perfect. Therefore, everyone can be special to someone.",
    "Do you think that there is a corner of this earth that you could travel to far away enough to free me from this torment? I'm a gentleman.\nMy father raise me to act with honor, but tha honor is hanging by a thread that grows more precarious with every moment I spend in your presence.\nYou are the bane of my existance. and the object of all my desires. night and day, I dream of you",
    "I would recognise you in total darkness, were you mute and I deaf. I would recognise you in another lifetime entirely, in different bodies, different times. and I would love you in all of this, until the very last star in the sky burnt out into oblivion",
    "from the moment I met you, all this years ago, not a day has gone by where I haven't thought of you. and now that I'm with you again, I'm in agony, the closer I get to you the worse it gets. the thought of not being with you, I can't breathe. I'm haunted by the kiss that you should never given me",
    "For the stars themselves could not hope to outshine you my mosy beloved light",
    "One can qaze to the sky in search of heaven, or instead behold devine beauty through the glistenning of your eyes",
    "I will love you, even when all the mortals have forgotten about us and we are nothing but stardust",
    "If I could rearrange the universe I'd replace her as every star visible so that I could gaze upon her beauty every night",
    "In the end be it fire, flood or plague I will not notice any of it as long as you are in my gaze",
    "I want ti make romeo jealous. I want the dead lovers of the world to hear our laughter and grow sad. I want a breath of our passion to stir their dust into consciousness, to wake their ashes into pain",
  ];

  return modified_compliment[
    Math.floor(Math.random() * modified_compliment.length)
  ];
};
