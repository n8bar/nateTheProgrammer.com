// Blog posts ported from the prior site's WordPress export (the author's real writing).
// In-repo and simple; Ghost remains deferred.

export type PostBlock = { type: 'p' | 'h2' | 'code'; text: string };
export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: PostBlock[];
  canonical?: string; // set when republished from elsewhere (points at the original)
};

export const posts: Post[] = [
  {
    "slug": "bitcoin-pending-vs-confirmed-payments",
    "canonical": "https://cryptozing.app/learn/bitcoin-pending-vs-confirmed-payments/",
    "title": "Bitcoin Payment Confirmations Explained: What Pending Means",
    "date": "2026-04-12",
    "excerpt": "When someone sends a Bitcoin payment, it doesn't go straight from sent to final — there's an in-between stage that matters, and good invoicing has to handle it.",
    "body": [
      {
        "type": "p",
        "text": "Bitcoin Payments. What makes them trustworthy?"
      },
      {
        "type": "p",
        "text": "When someone sends a Bitcoin payment, it does not go straight from \"sent\" to \"final.\""
      },
      {
        "type": "p",
        "text": "There is an in-between stage that matters. First the transaction becomes visible to the network. Then, later, it becomes confirmed in a block. People often blur those together, but they are not the same thing."
      },
      {
        "type": "p",
        "text": "That distinction is what this is about."
      },
      {
        "type": "h2",
        "text": "What a pending Bitcoin payment means"
      },
      {
        "type": "p",
        "text": "A pending Bitcoin payment is a transaction that has been broadcast to the network but has not yet been included in a block."
      },
      {
        "type": "p",
        "text": "In practical terms, that usually means the payment is visible. You can often see that a transaction exists, inspect the amount, and verify the destination address. That is useful. But it is still not the same thing as settlement."
      },
      {
        "type": "p",
        "text": "A pending transaction is best understood as in flight."
      },
      {
        "type": "p",
        "text": "The payer may very well have done everything right. In most cases, they probably did. Still, until the transaction is confirmed, there is some remaining uncertainty. Depending on the fee rate and current network conditions, a pending transaction can sit for a while before miners pick it up. In some cases, especially if the fee is too low, it may not confirm when the recipient expects."
      },
      {
        "type": "p",
        "text": "That is why \"I can see it\" and \"it is settled\" are two different statements."
      },
      {
        "type": "h2",
        "text": "What a confirmed Bitcoin payment means"
      },
      {
        "type": "p",
        "text": "A Bitcoin payment becomes confirmed when it is included in a block that is accepted by the network."
      },
      {
        "type": "p",
        "text": "That first block gives the transaction 1 confirmation. After that, each additional block adds one more confirmation."
      },
      {
        "type": "p",
        "text": "A simple way to think about it:"
      },
      {
        "type": "p",
        "text": "1 confirmation - the transaction is now on-chain"
      },
      {
        "type": "p",
        "text": "3 confirmations - a common threshold for many ordinary payments"
      },
      {
        "type": "p",
        "text": "6 confirmations - a traditional standard for higher-value payments"
      },
      {
        "type": "p",
        "text": "The first confirmation is the big change. Before that, the payment is pending. After that, it has crossed into a more trustworthy state."
      },
      {
        "type": "p",
        "text": "Every confirmation after the first adds more weight behind the transaction."
      },
      {
        "type": "h2",
        "text": "Why confirmations matter"
      },
      {
        "type": "p",
        "text": "This is really a question of finality, not just visibility."
      },
      {
        "type": "p",
        "text": "A pending payment can look completely real because, most of the time, it is real. But if you are deciding whether to mark an invoice paid, deliver something of value, or close out a business process, \"probably fine\" is not always the same as \"settled enough.\""
      },
      {
        "type": "p",
        "text": "Each new block built on top of a transaction makes that transaction harder to reverse. Reversing it would require redoing more proof-of-work than the honest network has already added since that payment was confirmed."
      },
      {
        "type": "p",
        "text": "That is why confirmation count matters. It is not just trivia for block explorers. It is a rough measure of how much confidence you should place in the payment's finality."
      },
      {
        "type": "p",
        "text": "For lower-risk situations, one confirmation may be enough. For moderate-value payments, three confirmations is a common middle ground. For larger payments, six confirmations is still the conventional benchmark."
      },
      {
        "type": "p",
        "text": "There is no magic number that is correct in every case. The right threshold depends on the amount at risk and how conservative you want to be."
      },
      {
        "type": "h2",
        "text": "How long does Bitcoin confirmation take?"
      },
      {
        "type": "p",
        "text": "Bitcoin targets a new block about every 10 minutes on average."
      },
      {
        "type": "p",
        "text": "The important phrase there is on average."
      },
      {
        "type": "p",
        "text": "A transaction with a healthy fee often confirms in the next block or two. But there is no guarantee. Sometimes blocks come faster. Sometimes they take longer. If the network is busy or the fee is too low, a transaction may wait much longer than the sender expected."
      },
      {
        "type": "p",
        "text": "So when people say Bitcoin confirmations take ten minutes, that is a useful rule of thumb, not a promise."
      },
      {
        "type": "h2",
        "text": "Pending vs confirmed in real-world invoicing"
      },
      {
        "type": "p",
        "text": "This is where the distinction stops being theoretical."
      },
      {
        "type": "p",
        "text": "If someone pays a Bitcoin invoice, you will often see the transaction appear quickly as pending. That tells you something useful: a payment attempt exists, and you can start checking whether the amount and destination match what you expected."
      },
      {
        "type": "p",
        "text": "But that is not the end of the story."
      },
      {
        "type": "p",
        "text": "You still need to know things like:"
      },
      {
        "type": "p",
        "text": "does this transaction belong to the correct invoice?"
      },
      {
        "type": "p",
        "text": "is the amount correct?"
      },
      {
        "type": "p",
        "text": "is it still pending, or has it confirmed?"
      },
      {
        "type": "p",
        "text": "how many confirmations does it have?"
      },
      {
        "type": "p",
        "text": "has it crossed the settlement threshold you care about?"
      },
      {
        "type": "p",
        "text": "That is the real job here."
      },
      {
        "type": "p",
        "text": "The problem is not just detecting that some Bitcoin transaction exists. The problem is knowing whether the right payment arrived, whether it belongs to the right invoice, and whether it has settled far enough to trust."
      },
      {
        "type": "p",
        "text": "That is why pending and confirmed are not interchangeable labels. They describe two different stages of the payment lifecycle, and good invoicing workflow needs to treat them differently."
      },
      {
        "type": "h2",
        "text": "So what makes a Bitcoin payment trustworthy?"
      },
      {
        "type": "p",
        "text": "A Bitcoin payment becomes trustworthy when the uncertainty around it drops low enough for the situation at hand."
      },
      {
        "type": "p",
        "text": "That usually means a few things are true at the same time. The transaction matches the expected invoice. The amount is correct. The destination is correct. And it has enough confirmations for the level of risk involved."
      },
      {
        "type": "p",
        "text": "Trustworthiness in Bitcoin is not all-or-nothing the moment a transaction is broadcast. A pending transaction may be real, and often is, but it is still less settled than a confirmed one. Each confirmation reduces the remaining doubt and makes the transaction harder to reverse."
      },
      {
        "type": "p",
        "text": "What makes a Bitcoin payment trustworthy is not mere visibility, but verifiability and finality. You do not just want to know that a transaction exists. You want to know it is the right transaction, for the right amount, tied to the right invoice, and settled far enough to rely on."
      }
    ]
  },
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
