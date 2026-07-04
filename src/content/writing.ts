// Blog posts ported from the prior site's WordPress export (the author's real writing).
// In-repo and simple; Ghost remains deferred.

// Inline markup allowed inside text/items/cells: **bold**, *italic*, [label](url).
// Republished (canonical) posts are copied verbatim from the source; do not restyle them.
export type PostBlock =
  | { type: 'p' | 'h2' | 'h3' | 'code'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };
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
    "excerpt": "Learn what pending and confirmed Bitcoin payments mean, why confirmations matter, and how to think about settlement risk when sending or receiving a Bitcoin invoice.",
    "body": [
      { "type": "p", "text": "Bitcoin Payments. What makes them trustworthy?" },
      { "type": "p", "text": "When someone sends a Bitcoin payment, it does **not** go straight from \"sent\" to \"final.\"" },
      { "type": "p", "text": "There is an in-between stage that matters. First the transaction becomes visible to the network. Then, later, it becomes confirmed in a block. People often blur those together, but they are not the same thing." },
      { "type": "p", "text": "That distinction is what this is about." },
      { "type": "h2", "text": "What a pending Bitcoin payment means" },
      { "type": "p", "text": "A **pending** Bitcoin payment is a transaction that has been broadcast to the network but has **not yet been included in a block**." },
      { "type": "p", "text": "In practical terms, that usually means the payment is visible. You can often see that a transaction exists, inspect the amount, and verify the destination address. That is useful. But it is still not the same thing as settlement." },
      { "type": "p", "text": "A pending transaction is best understood as **in flight**." },
      { "type": "p", "text": "The payer may very well have done everything right. In most cases, they probably did. Still, until the transaction is confirmed, there is some remaining uncertainty. Depending on the fee rate and current network conditions, a pending transaction can sit for a while before miners pick it up. In some cases, especially if the fee is too low, it may not confirm when the recipient expects." },
      { "type": "p", "text": "That is why \"I can see it\" and \"it is settled\" are two different statements." },
      { "type": "h2", "text": "What a confirmed Bitcoin payment means" },
      { "type": "p", "text": "A Bitcoin payment becomes **confirmed** when it is included in a block that is accepted by the network." },
      { "type": "p", "text": "That first block gives the transaction **1 confirmation**. After that, each additional block adds one more confirmation." },
      { "type": "p", "text": "A simple way to think about it:" },
      { "type": "ul", "items": ["**1 confirmation** - the transaction is now on-chain", "**3 confirmations** - a common threshold for many ordinary payments", "**6 confirmations** - a traditional standard for higher-value payments"] },
      { "type": "p", "text": "The first confirmation is the big change. Before that, the payment is pending. After that, it has crossed into a more trustworthy state." },
      { "type": "p", "text": "Every confirmation after the first adds more weight behind the transaction." },
      { "type": "h2", "text": "Why confirmations matter" },
      { "type": "p", "text": "This is really a question of **finality**, not just visibility." },
      { "type": "p", "text": "A pending payment can look completely real because, most of the time, it is real. But if you are deciding whether to mark an invoice paid, deliver something of value, or close out a business process, \"probably fine\" is not always the same as \"settled enough.\"" },
      { "type": "p", "text": "Each new block built on top of a transaction makes that transaction harder to reverse. Reversing it would require redoing more proof-of-work than the honest network has already added since that payment was confirmed." },
      { "type": "p", "text": "That is why confirmation count matters. It is not just trivia for block explorers. It is a rough measure of how much confidence you should place in the payment's finality." },
      { "type": "p", "text": "For lower-risk situations, one confirmation may be enough. For moderate-value payments, three confirmations is a common middle ground. For larger payments, six confirmations is still the conventional benchmark." },
      { "type": "p", "text": "There is no magic number that is correct in every case. The right threshold depends on the amount at risk and how conservative you want to be." },
      { "type": "h2", "text": "How long does Bitcoin confirmation take?" },
      { "type": "p", "text": "Bitcoin targets a new block about every **10 minutes on average**." },
      { "type": "p", "text": "The important phrase there is **on average**." },
      { "type": "p", "text": "A transaction with a healthy fee often confirms in the next block or two. But there is no guarantee. Sometimes blocks come faster. Sometimes they take longer. If the network is busy or the fee is too low, a transaction may wait much longer than the sender expected." },
      { "type": "p", "text": "So when people say Bitcoin confirmations take ten minutes, that is a useful rule of thumb, not a promise." },
      { "type": "h2", "text": "Pending vs confirmed in real-world invoicing" },
      { "type": "p", "text": "This is where the distinction stops being theoretical." },
      { "type": "p", "text": "If someone pays a Bitcoin invoice, you will often see the transaction appear quickly as pending. That tells you something useful: a payment attempt exists, and you can start checking whether the amount and destination match what you expected." },
      { "type": "p", "text": "But that is not the end of the story." },
      { "type": "p", "text": "You still need to know things like:" },
      { "type": "ul", "items": ["does this transaction belong to the correct invoice?", "is the amount correct?", "is it still pending, or has it confirmed?", "how many confirmations does it have?", "has it crossed the settlement threshold you care about?"] },
      { "type": "p", "text": "That is the real job here." },
      { "type": "p", "text": "The problem is not just detecting that some Bitcoin transaction exists. The problem is knowing whether the **right** payment arrived, whether it belongs to the **right** invoice, and whether it has settled far enough to trust." },
      { "type": "p", "text": "That is why pending and confirmed are not interchangeable labels. They describe two different stages of the payment lifecycle, and good invoicing workflow needs to treat them differently." },
      { "type": "h2", "text": "So what makes a Bitcoin payment trustworthy?" },
      { "type": "p", "text": "A Bitcoin payment becomes trustworthy when the uncertainty around it drops low enough for the situation at hand." },
      { "type": "p", "text": "That usually means a few things are true at the same time. The transaction matches the expected invoice. The amount is correct. The destination is correct. And it has enough confirmations for the level of risk involved." },
      { "type": "p", "text": "Trustworthiness in Bitcoin is not all-or-nothing the moment a transaction is broadcast. A pending transaction may be real, and often is, but it is still less settled than a confirmed one. Each confirmation reduces the remaining doubt and makes the transaction harder to reverse." },
      { "type": "p", "text": "What makes a Bitcoin payment trustworthy is not mere visibility, but verifiability and finality. You do not just want to know that a transaction exists. You want to know it is the right transaction, for the right amount, tied to the right invoice, and settled far enough to rely on." }
    ]
  },
  {
    "slug": "what-is-a-bitcoin-invoice",
    "canonical": "https://cryptozing.app/learn/what-is-a-bitcoin-invoice/",
    "title": "What Is a Bitcoin Invoice?",
    "date": "2026-04-22",
    "excerpt": "Bitcoin invoice means different things in different contexts. We break down the business, Lightning, and scam versions so you know which one applies to you.",
    "body": [
      { "type": "p", "text": "Bitcoin Invoice: Does It Mean What You Think It Means?" },
      { "type": "p", "text": "\"Bitcoin invoice\" is one of those terms that sounds like it should have a simple definition. It does not." },
      { "type": "p", "text": "If you ask a freelancer, a Bitcoin invoice is a payment request they send a client with a Bitcoin address and an amount. If you ask someone who just got a suspicious email from PayPal, it is a scam. And if you open a Lightning wallet, it is a one-time encoded string with an expiry; this is what the wallet calls an \"invoice.\"" },
      { "type": "p", "text": "They are all using the same word but they're not exactly talking about the same thing." },
      { "type": "p", "text": "We're here to sort this out. If you arrived here because you want to understand what a Bitcoin invoice is, the honest answer is that it depends on context. Let's walk through each meaning so you know which one applies to your circumstance." },
      { "type": "h2", "text": "The business invoice (what most people mean)" },
      { "type": "p", "text": "When people search \"Bitcoin invoice,\" they are often looking for one of two things: how to bill someone and get paid in Bitcoin, or what to do with a Bitcoin invoice they just received." },
      { "type": "p", "text": "Conceptually, it works like a standard invoice does. You have a sender, a recipient, an amount, maybe line items, maybe a due date. The difference is that instead of paying by bank transfer or card, the recipient pays by sending Bitcoin to an address." },
      { "type": "p", "text": "The tools that create these range from simple payment link generators to full invoicing platforms with line items, client tracking, and automatic payment detection. What they share is the basic idea: tell someone what they owe and where to send it." },
      { "type": "p", "text": "But what about those QR codes; are they invoices? Well, sort of. We need to talk about Lightning first." },
      { "type": "h2", "text": "The Lightning invoice" },
      { "type": "p", "text": "The Lightning Network is where the word \"invoice\" officially entered Bitcoin. If you ever see the term in a Bitcoin spec, it almost certainly refers to Lightning." },
      { "type": "p", "text": "A Lightning invoice is a one-time payment request. It contains an amount, a destination, and an expiry window. Once it expires or gets paid, it cannot be reused. Lightning wallets say \"Create Invoice\" when you want to receive a payment, which is why the term shows up so often." },
      { "type": "p", "text": "It is not a business invoice. There are no line items, no due dates, no client details. It is closer to a payment link with a countdown. But because Lightning wallets put the word \"invoice\" front and center, it is one of the most common places people encounter the term in Bitcoin, and the easiest to confuse with the business version." },
      { "type": "h2", "text": "QR codes and invoices" },
      { "type": "p", "text": "Now back to those QR codes. They show up on both the on-chain and off-chain sides of Bitcoin invoicing." },
      { "type": "p", "text": "QR codes containing invoices: This is the off-chain side. The Lightning invoice from the previous section, also the one-time payment request with an amount, destination, and expiry, is an encoded string. The QR code wraps the entire invoice into something your phone can scan." },
      { "type": "p", "text": "Invoices containing QR codes: This is the on-chain side. An invoicing tool creates a document with an amount, a Bitcoin address, and sometimes line items or a due date. A QR code can be included as a convenience; the payer scans it instead of copying and pasting the Bitcoin address." },
      { "type": "h2", "text": "The on-chain payment request" },
      { "type": "p", "text": "At the protocol level, an on-chain Bitcoin payment has no concept of an \"invoice.\" There is a Bitcoin address and sometimes an amount, but no structured fields for line items, due dates, or client details. The invoicing tools from earlier in this article take that Bitcoin address and wrap it in something useful: line items, client details, payment tracking, a QR code. The protocol simply gives us a \"send here.\" Invoice details are added by the tool resulting in a \"Bitcoin invoice\". This is what we mean when *we* say \"Bitcoin invoice,\" and we think it is the most appropriate definition." },
      { "type": "h2", "text": "What about those \"Bitcoin invoices\" purportedly from PayPal and other payment apps?" },
      { "type": "p", "text": "If you received an unexpected email invoice claiming you purchased Bitcoin, especially one that appears to come from PayPal or another payment platform, it is almost certainly a scam. These emails typically include a phone number and urge you to call if you \"did not authorize\" the purchase. Do not call. The number connects to scammers, not the company." },
      { "type": "p", "text": "Legitimate payment platforms do not send unsolicited Bitcoin invoices. If something looks off, log into your account directly through the app or website, never through any link in the email, and check your actual transaction history." },
      { "type": "h2", "text": "How a Bitcoin invoice actually works" },
      { "type": "p", "text": "The details vary by tool, but the general flow is very similar." },
      { "type": "p", "text": "**Creating the invoice.** The sender sets an amount; sometimes denominated in Bitcoin, sometimes in a fiat currency like USD with the Bitcoin equivalent calculated at given rates. They add a Bitcoin address for the payer to send to. Some tools generate a unique address per invoice; others reuse one. The invoice might include line items, notes, or a due date, depending on the tool." },
      { "type": "p", "text": "**Sharing it.** The sender shares the invoice with the payer often by email, a link, a QR code, or sometimes all three. The payer sees what they owe, where to send it, and how much Bitcoin to send." },
      { "type": "p", "text": "**Paying.** The payer opens their wallet, sends Bitcoin to the address on the invoice. On-chain, this means broadcasting a transaction to the Bitcoin network. On Lightning, it means scanning or pasting the Lightning invoice and paying it before it expires." },
      { "type": "p", "text": "**Confirmation.** On-chain transactions start as unconfirmed and gain confirmations as new blocks are added. Most tools will likely treat one to three confirmations as sufficient. Lightning payments settle in seconds. Some invoicing tools detect payment automatically; others don't, leaving it to the sender to verify manually." },
      { "type": "p", "text": "**Settlement.** Once confirmed, the Bitcoin is available in the recipient's wallet. With noncustodial tools, that is the end of it; no intermediary holds the funds. With custodial tools, there may be an additional withdrawal or conversion step." },
      { "type": "h2", "text": "A freelancer, a wallet, and a scammer walked into a definition" },
      { "type": "p", "text": "\"Bitcoin invoice\" means different things depending on who is using the term and where. To a freelancer, \"Bitcoin invoice\" most likely means a payment request with a Bitcoin address and possibly line items. In a Lightning wallet, \"Bitcoin invoice\" means a one-time encoded string with an expiry. What a scammer means by \"Bitcoin invoice\" is whatever effectively tricks you out of your funds." },
      { "type": "p", "text": "If you are here because you want to invoice clients and get paid in Bitcoin, the business invoice is what you are looking for. The tools that create them range from self-hosted platforms to hosted services that take minutes to set up. We compared the options in [BTCPay Server Alternatives](https://cryptozing.app/learn/btcpay-server-alternatives/)." }
    ]
  },
  {
    "slug": "btcpay-server-alternatives",
    "canonical": "https://cryptozing.app/learn/btcpay-server-alternatives/",
    "title": "BTCPay Server Alternatives: Simpler Bitcoin Invoicing for Small Businesses",
    "date": "2026-04-21",
    "excerpt": "An honest comparison of BTCPay Server alternatives for freelancers and small businesses — what each tool does, what it costs, and what tradeoffs you are actually making.",
    "body": [
      { "type": "p", "text": "Your keys, your coins, without the overhead." },
      { "type": "p", "text": "BTCPay Server is widely regarded as the gold standard for self-sovereign Bitcoin payments. It is free, open-source, noncustodial, and extraordinarily capable. It is also, for a lot of people, too much." },
      { "type": "p", "text": "If you have landed here, you probably already know that. Maybe you tried to set it up and hit a wall at the Docker deployment. Maybe you got it running and realized you were now responsible for a Bitcoin full node, SSL certificates, and Lightning channel liquidity, all on top of whatever your actual business is. Maybe you just looked at the requirements and thought, \"I invoice three clients a month. This is not for me.\"" },
      { "type": "p", "text": "You are not wrong. BTCPay was built to serve everyone from a solo freelancer to Namecheap. That range means the floor is higher than most small operators need it to be." },
      { "type": "p", "text": "So what else is out there?" },
      { "type": "h2", "text": "What BTCPay does well and where it can get difficult" },
      { "type": "p", "text": "Before looking at alternatives, it is worth being specific about what you are trading away and what you are trying to escape. \"BTCPay is too complicated\" is the most common complaint, but that undersells the problem." },
      { "type": "h3", "text": "The real pain points" },
      { "type": "p", "text": "**Setup is not plug-and-play.** BTCPay's Docker deployment takes over the entire machine so you can't really drop it into any existing Docker Compose stack alongside other services. One user on the BTCPay community forums offered $100 for someone to teach them how to install it. A milkweed seed merchant took three years from first attempt to getting it working. BTCPay's own docs acknowledge that \"some technical understanding is required for initial setup.\"" },
      { "type": "p", "text": "**Infrastructure has real costs.** A full Bitcoin node needs 600GB+ of storage (pruned: ~60GB minimum), 2 CPUs, and 4GB RAM. VPS hosting runs $8–65/month depending on setup, and the initial blockchain sync takes one to five days on a VPS. A BTCPay maintainer has said he \"wouldn't recommend a Raspberry Pi setup for eCommerce.\"" },
      { "type": "p", "text": "**Lightning is a second job.** BTCPay supports Lightning, but running your own Lightning node means managing channels, inbound liquidity, and routing all in perpetuity. A technically capable user in Guatemala spent a month trying to get Lightning working and still could not reliably receive payments. BTCPay's own FAQ calls inbound liquidity \"one of the biggest UX struggles\" with Lightning." },
      { "type": "p", "text": "**Maintenance never stops.** Updates can break things. Plugin conflicts crash BTCPay at startup in loops. SSL certificates, LND authentication, and channel management are ongoing. The milkweed merchant again: \"Without conversion to sales the BTC server node fees and lightning channel fees will drain my funds in a couple years.\"" },
      { "type": "h3", "text": "Features and qualities to keep" },
      { "type": "p", "text": "None of these are BTCPay exclusives. The right alternative keeps the ones that matter to you, while the wrong one quietly drops them." },
      { "type": "ul", "items": ["**Noncustodial architecture.** Some alternatives hold your Bitcoin for you. Sovereignty is not a given.", "**No transaction fees.** BTCPay charges nothing. Many alternatives charge around 1%. A few are also free.", "**Lightning support.** Some alternatives have it; some do not. Depends on your use case.", "**Integration depth.** BTCPay has 20+ e-commerce plugins and a full API. If you need Shopify or WooCommerce, check compatibility.", "**Scale.** BTCPay handles enterprise volume. Most small operators do not need this, but it is worth understanding."] },
      { "type": "p", "text": "If all of these matter and you have the technical capacity to run BTCPay, it is still the right answer. The rest of this article is for people who need something that works without becoming a sysadmin." },
      { "type": "h2", "text": "Tradeoffs: what the differences mean for you" },
      { "type": "h3", "text": "Custody: who holds your money?" },
      { "type": "p", "text": "This is the single most important axis and the one many people skip." },
      { "type": "p", "text": "**Noncustodial** means payments go directly to your wallet. No third party holds your Bitcoin; not a processor, not the tool, and not the company behind the tool. If the company disappears tomorrow, you still have your money. BTCPay, Blockonomics, Zaprite, Swiss Bitcoin Pay, Coinsnap, and CryptoZing work this way." },
      { "type": "p", "text": "**Custodial** means the service receives payments on your behalf and then forwards them or holds them until you withdraw. OpenNode, Strike, CoinGate, BitPay, and Speed work this way. This is simpler, but it means trusting a company with your money and usually requires KYC." },
      { "type": "h3", "text": "Complexity: how much do you want to manage?" },
      { "type": "p", "text": "The spectrum runs from \"sign up, connect a wallet, and go\" to \"provision a VPS, deploy Docker, sync a full node, open Lightning channels, and maintain it all forever.\"" },
      { "type": "p", "text": "Many hosted alternatives land on the simpler end. The question is what you give up for that simplicity. It's usually some combination of control, privacy, and cost." },
      { "type": "h3", "text": "Lightning vs on-chain only" },
      { "type": "p", "text": "Not every tool supports Lightning, and \"supports Lightning\" means very different things across tools." },
      { "type": "p", "text": "Some tools let you bring your own Lightning node resulting in maximum sovereignty and maximum complexity. Others handle Lightning for you but take custody of those funds temporarily. And several tools: Blockonomics, Coinbase Commerce, NOWPayments, and CryptoZing, are on-chain only." },
      { "type": "p", "text": "If your clients pay in amounts where on-chain fees are negligible relative to the invoice, Lightning may not matter. If you are processing high volumes of small payments, it can matter a lot." },
      { "type": "h3", "text": "Cost: free is not always free" },
      { "type": "p", "text": "BTCPay is genuinely free — no subscription, no transaction fee. But you pay for infrastructure and your own time maintaining it." },
      { "type": "p", "text": "Many alternatives flip that equation: they charge a fee (typically 1% or a monthly subscription) but eliminate the infrastructure burden. The question is whether the fee costs less than running BTCPay yourself. For low-volume merchants, it almost always does." },
      { "type": "h2", "text": "The alternatives" },
      { "type": "h3", "text": "Custodial" },
      { "type": "p", "text": "These tools hold your Bitcoin temporarily or until you withdraw. Simpler setup, but you are trusting a third party company." },
      { "type": "p", "text": "**13. BitPay**: bitpay.com The oldest and largest Bitcoin payment processor. Founded 2011. 130,000+ merchants. 150+ fiat currencies. Also the most expensive: 2% + $0.25 per transaction at low volumes. Full invoice processing with a separate noncustodial wallet app. BitPay is what you use when your CFO needs a name they recognize. For a freelancer, the fees do not make sense." },
      { "type": "p", "text": "**12. NOWPayments**: nowpayments.io With 350+ supported cryptocurrencies, NOWPayments has the broadest crypto support in this list. Default noncustodial (forwarded to your wallet), optional custodial add-on. 0.5% base fee. On-chain only for BTC, so no Lightning. If you need to accept Bitcoin alongside dozens of altcoins, this is the tool." },
      { "type": "p", "text": "**11. CoinGate**: coingate.com 1% flat fee. 70+ cryptocurrencies. EU-regulated and MiCA-licensed, supervised by the Bank of Lithuania. Order management, refunds, permissions, export. Lightning enabled by default. The strongest regulatory posture of any tool in this list, which matters if your business needs compliance documentation." },
      { "type": "p", "text": "**10. Strike**: strike.me/en/business Primarily a payment rail and API, not a standalone invoicing tool. Lightning-first. ~1% spread on currency conversion. USD balances are FDIC-insured; BTC is not. Shopify and NCR partnerships. Aimed at businesses that want Lightning payments integrated into existing infrastructure." },
      { "type": "p", "text": "**9. Speed**: tryspeed.com 1% per payment, no other fees. Lightning-first with same-day ACH for USD conversion. Invoices, payment links, QR codes, subscription billing. Also supports USDC and USDT. MSB-licensed. Straightforward and low-cost." },
      { "type": "p", "text": "**8. OpenNode**: opennode.com 1% per transaction, no monthly fee. Dashboard for creating and emailing invoices. Lightning and on-chain. KYC required. Optional fiat conversion. Well-funded ($24.7M raised). Clean API if you ever need to build on it." },
      { "type": "h3", "text": "Noncustodial" },
      { "type": "p", "text": "These tools never hold your Bitcoin. Payments go to your wallet." },
      { "type": "p", "text": "**7. Breez**: breez.technology A self-custodial mobile wallet with a built-in POS. Not a full invoicing platform; it turns your phone into a Lightning cash register. 0.4–0.75% one-time channel opening fee, then just routing fees. Lightning only, no on-chain at the POS level. Built for in-person retail where you want self-custody and do not need traditional invoicing." },
      { "type": "p", "text": "**6. Flash**: paywithflash.com Zero fees, noncustodial, Lightning-native. Focused on digital content and SaaS payments for paywalls, subscriptions, payment links, and the like. Early-stage (500-user early access as of 2026). The 0% fee model raises obvious sustainability questions, but for the right use case it is worth watching." },
      { "type": "p", "text": "**5. Swiss Bitcoin Pay**: swiss-bitcoin-pay.ch Noncustodial with a strong physical retail focus. Lightning payments are converted to on-chain BTC and forwarded to your wallet every 24 hours. 0–1% for BTC, 1.5% if you want fiat payouts. Mobile app with basic invoicing and auto-generated tax reports. Swiss company, widely used in Lugano. Geared toward brick-and-mortar or POS scenarios rather than remote invoicing." },
      { "type": "p", "text": "**4. Coinsnap**: coinsnap.io Coinsnap has the lowest barrier to entry in this group; that's if you already have a Lightning address. Sign up with just an email and a Lightning address. 1% fee. 40+ e-commerce plugins. It's not a standalone invoicing platform, it's a payment gateway for online stores. If you need to add a \"Pay with Bitcoin\" button to WooCommerce and do not want to touch a server, this is it." },
      { "type": "p", "text": "**3. Blockonomics**: blockonomics.co Uses the same xpub model as BTCPay. Hosted, so no server to manage. 1% fee (first 20 transactions free). On-chain only so no Lightning. Notable for encrypted invoices: Blockonomics itself cannot see your invoice contents. 20+ e-commerce plugins. A solid, quiet workhorse if you want noncustodial without the infrastructure." },
      { "type": "p", "text": "**2. Zaprite**: zaprite.com The closest thing to a full invoicing platform in this list. USD-denominated invoices with line items, tax percentages, and recurring billing. Supports fiat and Bitcoin on the same checkout so your client chooses how to pay. Connects to your own wallets (hardware wallet support, multi-sig) and Lightning nodes. $25/month flat, no transaction fee on invoicing. QuickBooks integration. The main drawbacks: no mobile app, sparse documentation, and that $25/month is a real barrier for someone invoicing a few hundred dollars a month." },
      { "type": "p", "text": "**1. CryptoZing**: cryptozing.app This is us! We're partial but we'll try to be objective. Still, take this with the appropriate grain of salt." },
      { "type": "p", "text": "CryptoZing is a noncustodial Bitcoin invoicing tool built for freelancers and small businesses. USD-denominated invoices with BTC computed at current rates. Watch-only architecture using your xpub so we never hold or have access to your private keys. Automatic on-chain payment detection. Self-hostable (Laravel/Docker) or hosted if you don't want to worry about servers or installs — just sign up, complete the quick walk-through and send an invoice." },
      { "type": "p", "text": "What we do not have (or have yet): Lightning support (we're on-chain only), CSV/JSON export, recurring invoices, or a QuickBooks integration. Client management is minimal. Reporting is dashboard-only for now. We are pre-release, with an open beta projected around late 2026 and a first public release around mid-to-late 2027. No fees during beta. Long-term pricing hasn't been decided; free is still on the table, and if not, the intent is to keep it very low." },
      {
        "type": "table",
        "headers": ["Noncustodial tool", "Lightning", "Fee", "Invoicing", "Client Mgmt", "Reporting", "Self-host"],
        "rows": [
          ["BTCPay Server", "Yes", "0%", "Full", "No", "Export + reporting", "Yes"],
          ["**CryptoZing**", "**No**", "**0% (beta)**", "**Full**", "**Basic**", "**Dashboard only**", "**Yes**"],
          ["Zaprite", "Yes", "$25/mo", "Full", "Basic", "CSV + QuickBooks", "No"],
          ["Blockonomics", "No", "1%", "Yes", "No", "Unknown", "No"],
          ["Coinsnap", "Yes", "1%", "Basic (plugins)", "No", "Unknown", "No"],
          ["Swiss Bitcoin Pay", "Yes", "0–1%", "Basic", "No", "Auto tax reports", "No"],
          ["Flash", "Yes", "0%", "Basic", "No", "Unknown", "No"],
          ["Breez", "Yes (only)", "0.4–0.75% setup", "POS only", "No", "Export only", "No"]
        ]
      },
      { "type": "h2", "text": "So which one?" },
      { "type": "p", "text": "**\"I just want to invoice clients in Bitcoin without managing a server.\"** Blockonomics or CryptoZing. Both are noncustodial, xpub-based, and hosted. Blockonomics is established with a 1% fee. CryptoZing is pre-release and free but earlier in its lifecycle." },
      { "type": "p", "text": "**\"I need fiat and Bitcoin on the same invoice.\"** Zaprite. It is the only noncustodial tool here that does this well. $25/month." },
      { "type": "p", "text": "**\"I need Lightning.\"** Zaprite if you want to bring your own node. Swiss Bitcoin Pay or Coinsnap if you want it handled for you. On the custodial side, OpenNode and Strike are Lightning-native." },
      { "type": "p", "text": "**\"I want to self-host but BTCPay is too much.\"** CryptoZing is self-hostable via Docker without requiring a full Bitcoin node. BTCPay is the only other self-hostable option we're aware of." },
      { "type": "p", "text": "**\"I need a recognized company behind it.\"** BitPay (oldest, most expensive), OpenNode (well-funded), or CoinGate (EU-regulated)." },
      { "type": "p", "text": "**\"I want the simplest possible setup.\"** Coinsnap if you have a Lightning address. Blockonomics if you have an xpub. Both take minutes." },
      { "type": "h2", "text": "Closing" },
      { "type": "p", "text": "Every tool in this article is balancing the same tensions: sovereignty, simplicity, cost, and capability. None of them get all four right." },
      { "type": "p", "text": "BTCPay gives you maximum sovereignty and asks you to earn it. Custodial tools give you maximum simplicity and ask you to trust someone." },
      { "type": "p", "text": "There is no tool that gives you everything. If someone is selling you that, they are leaving something out." },
      { "type": "p", "text": "What you can do is figure out which tradeoffs you can live with. For a lot of freelancers and small businesses, the answer turns out to be simpler than they expected." },
      { "type": "h2", "text": "Sources" },
      { "type": "ul", "items": ["BTCPay Server docs, FAQ, and case studies — btcpayserver.org", "BTCPay community forums and GitHub issues — community.btcpayserver.org, github.com/btcpayserver", "Individual tool websites and help documentation", "Blockonomics community forum (Lightning support confirmation)"] }
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
  }
];

export function getPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

