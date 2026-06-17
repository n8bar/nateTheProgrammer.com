// Blog posts ported from the prior site's WordPress export (the author's real writing).
// In-repo and simple; Ghost remains deferred.

export type PostBlock = { type: 'p' | 'h2' | 'code'; text: string };
export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    "slug": "artificial-intelligence-can-write-programs-continued",
    "title": "Artificial Intelligence Can Write Programs?! (continued)",
    "date": "2023-03-12",
    "excerpt": "This is the second half of the story from the previous post. To resolve this issue of saying You Lose! X beats X or You Win! X beats X. I asked: “Can we use a more specific verb instead of beats”…",
    "body": [
      {
        "type": "p",
        "text": "This is the second half of the story from the previous post."
      },
      {
        "type": "p",
        "text": "To resolve this issue of saying You Lose! X beats X or You Win! X beats X. I asked: “Can we use a more specific verb instead of beats” but instead of generating specific verbs based on the weapon choices, ChatGPT replied “Sure, we can use a more specific verb instead of “beats” in the game result messages. How about using “defeats” for when the player wins and “is defeated by” for when the player loses? Here’s the updated code” and outputted the code accordingly. I don’t think that defeats is hardly more specific than beats, but I probably needed to ask in a different way so I said “No I don’t like that.” ChatGPT then asked me which verb I would prefer to replace beats. Now I had to think. I suppose AI doesn’t quite do all of our thinking, at least not yet. The response I came up with was “I would like to use a different verb for each unique scenario.” To my pleasant surprise, it did exactly what I wanted, using the verbs from Kass’s expansion as well as the classic Rock smashes Scissors, Paper covers rock, etc."
      },
      {
        "type": "p",
        "text": "Next I took a detour and began asking philosophical questions and other curiosities, and I literally had to paste the code back into ChatGPT to get back on the same page."
      },
      {
        "type": "p",
        "text": "Now, as if this wasn’t interesting enough, I then said, “Now add a clown”. Now, if you understand the dynamics of this game, you probably know that we can’t have an even number of options and preserve the balance of the game. ChatGPT recognized this and said that it didn’t know how to do that. So I typed, “Add a clown and an insect”… It did! It added them, and came up with the extra verbs, preserved the games balance, and everything."
      },
      {
        "type": "p",
        "text": "Then I wanted to fine change some of the verbs. For example, the insect would defeat the paper with the verb “flies around”. But ChatGPT didn’t understand me, so I did it manually and pasted the code back in. Then I decided to change insect to bird. That worked out great. If you want to test out the game yourself, here is the link: https://natetheprogrammer.com/ChatGPT-RPS-LS-BC/. Thanks for reading! Let me know what you think of this."
      }
    ]
  },
  {
    "slug": "artificial-intelligence-can-write-programs",
    "title": "Artificial Intelligence Can Write Programs?!",
    "date": "2023-03-11",
    "excerpt": "I wanted to see if ChatGPT could create a simple game in JavaScript. Open AI’s ChatGPT has been out for a few months now but I’m just getting around to tinkering with it. I was impressed by it’s…",
    "body": [
      {
        "type": "p",
        "text": "I wanted to see if ChatGPT could create a simple game in JavaScript."
      },
      {
        "type": "p",
        "text": "Open AI’s ChatGPT has been out for a few months now but I’m just getting around to tinkering with it. I was impressed by it’s ability to generate, stories, articles, and reports, but the activity that made me completely lose track of time is generating code."
      },
      {
        "type": "p",
        "text": "For example, I told ChatGPT to “Write a really cool game in Javascript” and it responded with an HTML file a JavaScript file to link to it. It explained how the code worked and gave instructions for execution. The resulting web page had buttons labeled Rock, Paper, and Scissors, with the instruction “Choose your weapon:” above them. Clicking the buttons, simply resulted in some text below them, saying whether you won or lost, without telling you what the computer’s selection was."
      },
      {
        "type": "p",
        "text": "Next, I wanted to make it more interesting, so I asked “Can you add lizard and spock?”. This is a reference to Sam Kass’s expansion to the classic game of Rock, Paper, Scissors. And it did! It generated new HTML and JavaScript files, with the added buttons, and the more complex JavaScript code! How cool is that? I was just getting started! I then asked it to rename the JavaScript file, which it did, updating the reference in the HTML. Then I said “Can you make it output the computerSelection?” because I wanted to know what the computer’s choice of weapon was. It had no problem generating the code for that. Then I ran it and clicked Spock. The program’s response was “You lose! lizard beats spock.” and I’m like “What? How does a lizard beat a half-Vulcan?” (You probably know if you’re very familiar with Rock-Paper-Scissors-Lizard-Spock.) My next request to ChatGPT wasn’t as smooth."
      },
      {
        "type": "p",
        "text": "The story continues in my next post."
      }
    ]
  },
  {
    "slug": "comptia-a-certified",
    "title": "CompTIA A+ Certified!",
    "date": "2019-10-23",
    "excerpt": "I passed last of the required exams this morning.",
    "body": [
      {
        "type": "p",
        "text": "I passed last of the required exams this morning."
      }
    ]
  },
  {
    "slug": "ciw-certification-achieved",
    "title": "CIW Certification Achieved.",
    "date": "2019-08-12",
    "excerpt": "After passing the exam last night, this morning I received my certification as a CIW Site Development Associate. Cool huh?",
    "body": [
      {
        "type": "p",
        "text": "After passing the exam last night, this morning I received my certification as a CIW Site Development Associate. Cool huh?"
      }
    ]
  },
  {
    "slug": "admitted-into-wgu",
    "title": "Admitted into WGU",
    "date": "2018-12-10",
    "excerpt": "I have been admitted into Western Governors University. My enrollment counselor was very impressed with my resume and my Microsoft certification and It looks like I will begin my Bachelor of…",
    "body": [
      {
        "type": "p",
        "text": "I have been admitted into Western Governors University. My enrollment counselor was very impressed with my resume and my Microsoft certification and It looks like I will begin my Bachelor of Science Software Development degree on Jan, 1st, 2019."
      }
    ]
  },
  {
    "slug": "hello-world",
    "title": "I am now Microsoft® certified!",
    "date": "2018-11-21",
    "excerpt": "I passed Microsoft’s 98-361 exam! Having demonstrated the skills of Core Programming, Databases, Desktop Applications, General Software Development, Object-oriented Programming, and Web…",
    "body": [
      {
        "type": "p",
        "text": "I passed Microsoft’s 98-361 exam! Having demonstrated the skills of Core Programming, Databases, Desktop Applications, General Software Development, Object-oriented Programming, and Web Applications, I am now a certified MTA in Software Development Fundamentals. You can see my badge on Acclaim."
      }
    ]
  }
];

export function getPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
