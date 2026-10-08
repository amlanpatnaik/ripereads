// Pillar 4 — The Bookish Life. Editorial/lifestyle content, not book ratings.
// Candle data is sourced from Aarka Origins' public "Book Lovers' Soy Candles"
// collection (https://aarkaorigins.com/collections/book-lovers-soy-candles).
// No affiliate relationship, sponsorship, or free product: Abbey picked these
// because she likes them. Images are the maker's own product photography,
// self-hosted with a visible credit line under every one.

const img = (file) => `/images/bookish-life/${file}`;

export const bookishLife = [
  {
    slug: "the-best-candle-for-every-book-you-love",
    title: "The Best Candle for Every Book You Love: A Scent Guide by Series",
    metaDescription:
      "A scent guide pairing real soy candles to Fourth Wing, ACOTAR, Harry Potter, Twilight and more — matched by mood, not official license.",
    eyebrow: "Pillar · the bookish life",
    heroImage: {
      src: img("bookshop.jpg"),
      alt: "The Bookshop bookish candles jar with leather, wood, and coffee scent notes, a cozy all-purpose reading-nook pick",
      credit: "Aarka Origins",
      creditUrl: "https://aarkaorigins.com/collections/book-lovers-soy-candles",
    },
    intro:
      "There's no official Fourth Wing candle, and there's no official Harry Potter one either — the licensing for that kind of tie-in mostly doesn't exist yet, and probably won't for years. What does exist is a small soy-candle maker, Aarka Origins, that has built a 300-scent catalog entirely out of book-nerd moods: old libraries, wizard-school kitchens, fae forests, gothic studies, the smell of a coffee shop at closing time. I went through that catalog scent by scent and matched the real ones to the series my readers ask about most — Harry Potter, Twilight, the romantasy shelf, and the rest of my core list — and I'm being honest throughout about which matches are a genuine vibe fit and which ones simply don't exist yet.",
    method:
      "A word on how I picked these, because it matters. I didn't test-burn every candle in a 300-scent catalog — nobody has, including, I'd guess, the people who run the company. What I did was read every scent description in the Book Lovers' line, cross-reference the notes against the series parents and readers ask me about most, and keep only the pairings that actually hold up once you think about them for more than five seconds. Where a real match didn't exist, I say so, instead of forcing a candle called \"Forest Something\" onto a book it has nothing to do with. A few of these are genuinely built for a fandom (the wizard-school cluster, the two Twilight-coded ones); the rest are mood matches I'm calling mood matches, not products with a license behind them. All of it is one small maker's work, not a roundup scraped off Amazon, and I have nothing to gain from steering you toward any one scent over another.\n\nI'll also say why I think this is worth a whole page and not just a paragraph on a gift-guide list. Scent is the sense most tied to memory, more than sight or sound, and a reading nook that smells like something specific turns an ordinary chair into a ritual — the candle becomes the signal that it's reading time, the same way a certain mug or a certain playlist works for other people. That's a real thing a scent can do for a reluctant reader especially, and it's a cheaper, lower-effort trick than redecorating an entire corner of a bedroom.",
    sections: [
      {
        id: "harry-potter",
        heading: "If you love Harry Potter",
        lead:
          "None of these say the name — the licensing reasons are obvious, and Aarka Origins would be asking for a lawsuit from Warner Bros. if they tried — but the scent notes aren't subtle about which wizarding world they're from. This is the tightest, most confident cluster in the whole catalog, which tells me the maker has sold a lot of these and kept refining them.",
        linkSlug: "harry-potter-and-the-sorcerers-stone",
        linkLabel: "Harry Potter and the Sorcerer's Stone",
        candles: [
          {
            name: "Butter Brew",
            notes: "Butterscotch, Caramel, Vanilla",
            price: "From $11.99",
            blurb: "The pancake-and-syrup version of a certain wizarding tavern drink, rather than anything boozy. Sweet without tipping into dessert-candle territory, and the one I'd hand to a reader who wants comfort over atmosphere. Burns warm rather than sharp, which matters if your reader is sensitive to strong scents.",
            image: { src: img("butter-brew.jpg"), alt: "Butter Brew bookish candles jar with butterscotch, caramel, and vanilla scent notes, a cozy pick for wizard-school fantasy readers" },
          },
          {
            name: "The Restricted Section",
            notes: "Leather, Frankincense, Amber",
            price: "From $11.99",
            blurb: "A closed library after curfew, which is exactly the fantasy this scent is selling. This is the one I'd put on a shelf in a reading nook, not a desk someone studies at — it's moody rather than cheerful, and a little goes a long way. Pairs best with the later, darker books in the series, not the first one.",
            image: { src: img("restricted-section.jpg"), alt: "The Restricted Section bookish candles jar with leather, frankincense, and amber scent notes, a moody library pick for wizard-school fantasy readers" },
          },
          {
            name: "Pumpkin Juice",
            notes: "Pumpkin, Vanilla, Cinnamon",
            price: "From $11.99",
            blurb: "Autumn term at a magic school, bottled, and the most straightforwardly cozy of the four. If someone on your gift list has never burned a bookish candle before, start them here rather than with The Restricted Section — it's an easier, friendlier first scent.",
            image: { src: img("pumpkin-juice.jpg"), alt: "Pumpkin Juice bookish candles jar with pumpkin, vanilla, and cinnamon scent notes, an autumn pick for wizard-school fantasy readers" },
          },
          {
            name: "Divination Classroom",
            notes: "Incense, Wood, Earl Grey",
            price: "From $11.99",
            blurb: "The one elective nobody takes seriously until it gets strange. Tea and old wood, more interesting than it sounds, and the closest thing in this cluster to an actual classroom smell rather than a common-room one. A good pick if the other three feel too sweet for your taste.",
            image: { src: img("divination-classroom.jpg"), alt: "Divination Classroom bookish candles jar with incense, wood, and Earl Grey scent notes, a moody pick for wizard-school fantasy readers" },
          },
        ],
      },
      {
        id: "twilight",
        heading: "If you love Twilight",
        lead:
          "Just two here, and that's fine — I'd rather give you two real matches than pad the list out with scents that don't actually fit the Pacific Northwest mood this series runs on. Both of these skip the sweetness entirely, which is the right call for Twilight specifically.",
        linkSlug: "twilight",
        linkLabel: "Twilight",
        candles: [
          {
            name: "Twilight Forest",
            notes: "Woods, Cypress, Moss, Chilly Breeze",
            price: "From $11.99",
            blurb: "Damp evergreen and cold air, no sweetness anywhere in it. The closest thing in this catalog to the actual Pacific Northwest, and the one I'd pick if you only want one Twilight-adjacent scent in the house.",
            image: { src: img("twilight-forest.jpg"), alt: "Twilight Forest bookish candles jar with woods, cypress, and moss scent notes, a Pacific Northwest pick for Twilight readers" },
          },
          {
            name: "Forks WA",
            notes: "Pine, Mountain Air, Moss, Fog",
            price: "From $11.99",
            blurb: "Named for the actual town the books are set in. Pine and fog, nothing sweet about it, which is the point — this reads more like a camping trip than a romance candle, and that restraint is what makes it work.",
            image: { src: img("forks-wa.jpg"), alt: "Forks WA bookish candles jar with pine, mountain air, and fog scent notes, a Pacific Northwest pick for Twilight readers" },
          },
        ],
      },
      {
        id: "romantasy",
        heading: "If you're deep in a fae-court romantasy",
        lead:
          "Fourth Wing, ACOTAR, Crescent City, and Throne of Glass readers come to me asking for a candle that matches a specific book, and I have to be straight with them every time: nothing in this catalog is built for any one of those titles by name, and I'd be making something up if I told you otherwise. What I can give you is the closest mood match available, said honestly as a mood match and not a tie-in, which is still useful — it's just a different promise than the Harry Potter cluster above.",
        linkSlug: "fourth-wing",
        linkLabel: "Fourth Wing",
        extraLinks: [
          { slug: "a-court-of-thorns-and-roses", label: "A Court of Thorns and Roses" },
          { slug: "crescent-city-house-of-earth-and-blood", label: "Crescent City: House of Earth and Blood" },
          { slug: "throne-of-glass", label: "Throne of Glass" },
        ],
        candles: [
          {
            name: "Faerie Door",
            notes: "Forest Floor, Spices",
            price: "From $11.99",
            blurb: "Fallen leaves and a thread of spice underneath. The closest thing here to a Prythian or Velaris mood — earthy rather than floral, which fits the fae-court aesthetic better than a sweeter scent would.",
            image: { src: img("faerie-door.jpg"), alt: "Faerie Door bookish candles jar with forest floor and spice scent notes, a fae-forest pick for romantasy readers" },
          },
          {
            name: "Wizard's Forest",
            notes: "Forest Greens, Moss, Patchouli",
            price: "From $11.99",
            blurb: "Deep woods and grounding patchouli, heavier than Faerie Door. This one reads more dragon-rider training grounds than cottage fantasy, so it's the pick I'd reach for over a Fourth Wing readthrough specifically.",
            image: { src: img("wizards-forest.jpg"), alt: "Wizard's Forest bookish candles jar with forest greens, moss, and patchouli scent notes, a fae-forest pick for romantasy readers" },
          },
          {
            name: "Morally Grey",
            notes: "Bergamot, Yuzu Blossom, Petitgrain",
            price: "From $11.99",
            blurb: "Citrus-bright, not dark the way the name suggests, which surprised me. For readers who have a type, and the type is complicated — think the brooding-love-interest-you-shouldn't-trust-yet archetype rather than a literal villain.",
            image: { src: img("morally-grey.jpg"), alt: "Morally Grey bookish candles jar with bergamot, yuzu blossom, and petitgrain scent notes, a pick for morally-grey-love-interest romantasy readers" },
          },
          {
            name: "The Storyteller",
            notes: "Bergamot, Bourbon, Oak, Cedar",
            price: "From $11.99",
            blurb: "Warmer and heavier than Morally Grey, with the bourbon note doing a lot of work. Good for the brooding-mentor-figure subplot more than the central romance, and a strong pick for evening reading rather than daytime.",
            image: { src: img("the-storyteller.jpg"), alt: "The Storyteller bookish candles jar with bergamot, bourbon, oak, and cedar scent notes, a cozy pick for fantasy romance readers" },
          },
        ],
      },
      {
        id: "gothic",
        heading: "One gothic pick worth knowing about",
        lead:
          "If your reader is in Jessica Townsend's Nevermoor, I want to be very clear about this one before you spend the money on it: Nevermore, singular, is a reference to Edgar Allan Poe's \"The Raven\" — the famous line the raven keeps repeating — not to Nevermoor, the middle-grade series. The name similarity is a coincidence of English vocabulary, not a tie-in, and I'd rather tell you that plainly than let a near-identical name do the selling for me.",
        linkSlug: "nevermoor",
        linkLabel: "Nevermoor: The Trials of Morrigan Crow",
        candles: [
          {
            name: "Nevermore",
            notes: "Mandarin, Berries, Rosewood",
            price: "From $11.99",
            blurb: "Brighter than its gothic name suggests — mandarin and berries over a rosewood base, more cheerful than moody. A good atmospheric candle on its own merits if you like the name and the notes, just not a Nevermoor one, and not something I'd buy specifically expecting a Morrigan Crow connection.",
            image: { src: img("nevermore.jpg"), alt: "Nevermore bookish candles jar with mandarin, berries, and rosewood scent notes, a gothic pick inspired by Poe's The Raven, not an official Nevermoor tie-in" },
          },
        ],
      },
      {
        id: "universal",
        heading: "Universal reading-nook candles",
        lead:
          "Percy Jackson, Keeper of the Lost Cities, Wings of Fire, Divergent, and Shatter Me readers: I went looking for a scent built around any of these specifically, and I didn't find one I'd stand behind. Rather than stretch a pairing that isn't real, here are my five general reading-nook picks instead — they suit any book in your hand, and most of them are the ones I'd actually gift without a series in mind at all.",
        linkSlug: "percy-jackson-the-lightning-thief",
        linkLabel: "Percy Jackson and the Lightning Thief",
        extraLinks: [
          { slug: "keeper-of-the-lost-cities", label: "Keeper of the Lost Cities" },
          { slug: "wings-of-fire-the-dragonet-prophecy", label: "Wings of Fire: The Dragonet Prophecy" },
          { slug: "divergent", label: "Divergent" },
          { slug: "shatter-me", label: "Shatter Me" },
        ],
        candles: [
          {
            name: "The Bookshop",
            notes: "Leather, Wood, Coffee",
            price: "From $11.99",
            blurb: "The default, and deliberately so. If you only buy one candle off this entire page, this is the safe, always-right choice — it smells like a used bookstore rather than any one genre, so it never clashes with what's actually on the page.",
            image: { src: img("bookshop.jpg"), alt: "The Bookshop bookish candles jar with leather, wood, and coffee scent notes, a cozy all-purpose reading-nook pick" },
          },
          {
            name: "Cozy Reads",
            notes: "Lavender, Eucalyptus, Citrus",
            price: "From $11.99",
            blurb: "Calmer and brighter than The Bookshop, with none of the wood or leather weight. Good for a reader who finds heavy, warm scents a bit much, or for a reading nook that doubles as a wind-down space.",
            image: { src: img("cozy-reads.jpg"), alt: "Cozy Reads bookish candles jar with lavender, eucalyptus, and citrus scent notes, a calming all-ages reading-nook pick" },
          },
          {
            name: "Go Away, I'm Reading",
            notes: "Warm Cookies, Oat Milk",
            price: "From $11.99",
            blurb: "Exactly what it says on the label. Sweet, soft, and a fairly funny thing to light when you actually mean it — this is the one most likely to make a tween laugh when they see the name on the jar.",
            image: { src: img("go-away-im-reading.jpg"), alt: "Go Away I'm Reading bookish candles jar with warm cookies and oat milk scent notes, a cozy all-ages reading-nook pick" },
          },
          {
            name: "One More Chapter",
            notes: "Hazelnut, Coffee, Cream",
            price: "From $10.99",
            blurb: "A coffee-shop candle more than a bookshop one, and the one I'd pick for a parent's own reading corner rather than a kid's. Good for late-night reading when actual coffee isn't an option you want to take.",
            image: { src: img("one-more-chapter.jpg"), alt: "One More Chapter bookish candles jar with hazelnut, coffee, and cream scent notes, a cozy all-ages reading-nook pick" },
          },
          {
            name: "Bedtime Stories",
            notes: "Lavender, Oat Milk, Latte",
            price: "From $11.99",
            blurb: "The one I'd actually put in a kid's reading nook as part of a wind-down routine before lights-out. Soft and milky, nothing sharp or citrusy in it, which keeps it from being too stimulating right before sleep.",
            image: { src: img("bedtime-stories.jpg"), alt: "Bedtime Stories bookish candles jar with lavender, oat milk, and latte scent notes, a calming bedtime reading-nook pick" },
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is there an official Harry Potter candle?",
        a: "Not from this maker, and not from most small candle makers — Warner Bros. licenses that fairly tightly, and a small soy-candle company isn't getting that deal. What Aarka Origins sells instead are wizard-school-flavored scents (Butter Brew, Pumpkin Juice, The Restricted Section, Divination Classroom) that never use the name but are clearly built for the fandom, the same way a lot of fan-made merchandise works around trademarks.",
      },
      {
        q: "Is there a Fourth Wing or ACOTAR candle?",
        a: "Not an officially licensed one in this particular catalog, and I didn't find one elsewhere that I'd vouch for either. The fae-forest and morally-grey scents I've listed here are mood matches I picked myself, not products built around those specific titles — I say that plainly in the romantasy section above rather than letting the product names imply something that isn't true.",
      },
      {
        q: "What does a bookish candle actually smell like?",
        a: "It depends entirely on which one. This maker's range alone runs from \"old library\" (leather, aged wood, parchment) to genuinely sweet (butterscotch, pumpkin, warm cookies) to clean and calming (lavender, citrus, eucalyptus). There's no single \"book smell\" the way there's a single new-car smell — that range is the whole appeal of a catalog this size.",
      },
      {
        q: "Are these candles safe to burn in a kid's room?",
        a: "I'd treat any open-flame candle the way you'd treat any open flame near a child: supervised, out of reach when lit, and away from curtains or stacks of paper. These are standard soy candles with cotton wicks, not flameless ones, so the usual candle rules apply. If you want zero flame risk in a young reader's room, a flameless version is the safer swap, though this maker doesn't sell one.",
      },
      {
        q: "What sizes do these candles come in, and how much do they cost?",
        a: "Most of the scents above start around $11.99 for the smallest size and go up from there for larger jars, with One More Chapter the one exception I found starting a dollar lower at $10.99. I'm not listing exact burn-time hours here, because the maker doesn't state them consistently across every listing and I'd rather leave that blank than guess at a number I can't verify.",
      },
      {
        q: "Where can I see the rest of the collection?",
        a: "Aarka Origins carries over 300 scents in its Book Lovers' Soy Candles line, hand-poured in North Carolina from 100% US-grown soy wax. I've only featured sixteen of them here; the full collection is linked at the bottom of this page, and it's worth a browse if your reader's favorite book or author isn't covered above.",
      },
    ],
    closing: {
      heading: "See the rest of the collection",
      body:
        "Sixteen candles is a small slice of a 300-scent catalog. If none of these fit your reader's exact book, Aarka Origins is worth a browse on your own — I'd start by searching for your reader's favorite author, setting, or aesthetic rather than a specific title, since that's how most of the maker's own names are built. I have no partnership with Aarka Origins and no affiliate arrangement here; I just went through the catalog because I liked what I found, and I'll update this page if the lineup changes or a real series tie-in shows up.",
      ctaLabel: "Browse all 300+ scents at Aarka Origins",
      ctaUrl: "https://aarkaorigins.com/collections/book-lovers-soy-candles",
    },
  },
];

const cover = (id) => `https://covers.openlibrary.org/b/id/${id}-L.jpg`;
const fallImg = (file) => `/images/fall-reads-candles/${file}`;
const fallProduct = (slug) => `https://aarkaorigins.com/collections/fall-scented-candles/products/${slug}`;

bookishLife.push({
  slug: "fall-autumn-books-for-kids-by-age-with-candle-pairings",
  title: "Fall & Autumn Books for Kids by Age: The Best Cozy and Spooky Reads From Toddlers to Teens (Plus Candles to Match)",
  metaDescription:
    "The best fall and autumn books for kids, sorted by age from toddlers to teens, each paired with a real soy candle from Aarka Origins' Fall Scented Candles collection.",
  eyebrow: "Pillar · the bookish life",
  heroImage: {
    src: fallImg("ivory-pumpkin-jar.jpg"),
    alt: "Ivory ceramic pumpkin jar soy candle from Aarka Origins' Fall Scented Candles collection, lit beside a taper candle, mini pumpkins, and a stack of books on a wooden table",
    credit: "Aarka Origins",
    creditUrl: "https://aarkaorigins.com/collections/fall-scented-candles",
  },
  intro:
    "Every October the same four questions land in my inbox: what should a toddler read before Halloween, what's a good chapter book for a kid who just discovered they like being a little bit scared, which YA book actually earns the word \"gothic\" instead of just releasing in October, and — this one's newer — what should I burn while I read it to them. I went looking for real answers to all four, sorted by the age that actually matters instead of a vague \"all ages\" shrug, and then matched each stack to a real candle from Aarka Origins' Fall Scented Candles collection, the same small soy-candle maker I already profiled elsewhere on this site. Nothing here is sponsored. I picked these ten candles because a reader asked me to feature this exact collection and because the scent notes genuinely fit the books, not because anyone paid for the placement.",
  method:
    "A word on how this list is built. Every book below is a real, currently-in-print title, chosen because it keeps showing up on fall reading lists compiled by teachers, librarians, and parent bloggers, and because the premise earns the word \"autumn\" rather than just happening to release in October. I sorted them into four age bands because \"fall books for kids\" is useless advice without knowing whether your kid is two or fifteen: picture books for toddlers and preschoolers, early chapter books for new independent readers, middle grade for the spooky-but-not-scary shelf, and YA for the reader who wants real gothic atmosphere. Covers are pulled live from Open Library's public cover archive, the same keyless method the rest of this site uses — no invented editions, no guessed publication years.\n\nThe ten candles are the full set from Aarka Origins' Fall Scented Candles collection that a reader specifically asked me to feature. I pulled each one's current scent notes, price, and review count straight from its own product page rather than estimating, so the numbers below are what that page showed at the time I wrote this, not a guess — and I'll say plainly where a candle has barely any reviews yet instead of implying otherwise. I matched each candle to the age band whose books actually smell like it: woodsy and witchy for the middle-grade shelf, gothic and cozy-fire for the YA shelf, bright and orchard-sweet for the two youngest bands. None of these are official book tie-ins unless I say so explicitly.",
  sections: [
    {
      id: "toddler-preschool",
      heading: "Fall picture books for toddlers & preschoolers (ages 2–5)",
      booksHeading: "The books",
      candlesHeading: "Light this at your own reading chair",
      lead:
        "At this age the book does the work and the candle is for you, not them. Every scent in this band is something to burn in your own reading nook while you read aloud — standard open-flame soy candles, supervised and well out of reach, never on a shelf a toddler can grab.",
      books: [
        {
          title: "Leaf Man",
          author: "Lois Ehlert",
          ageNote: "Picture book, ages 2+",
          cover: cover(113803),
          alt: "Cover of Leaf Man by Lois Ehlert, a picture book illustrated with collages made from real autumn leaves",
          blurb: "Collage illustrations made from real pressed leaves follow Leaf Man wherever the autumn wind takes him. A near-wordless favorite for the youngest kids who like naming shapes and colors on the page.",
        },
        {
          title: "Fletcher and the Falling Leaves",
          author: "Julia Rawlinson",
          ageNote: "Picture book, ages 3+",
          cover: cover(46149),
          alt: "Cover of Fletcher and the Falling Leaves by Julia Rawlinson, showing a young fox among falling autumn leaves",
          blurb: "A young fox panics when his favorite tree starts losing its leaves, convinced something is wrong. A gentle, reassuring lesson about the seasons, with a cozy first-snow payoff at the end.",
        },
        {
          title: "The Leaf Thief",
          author: "Alice Hemming",
          ageNote: "Picture book, ages 3+",
          cover: cover(15164359),
          alt: "Cover of The Leaf Thief by Alice Hemming, showing a squirrel clutching a leaf in an autumn forest",
          blurb: "A squirrel is sure someone is stealing his tree's leaves one by one — spoiler, it's the wind. Funny, repetitive, and short enough for a single bedtime sitting.",
        },
        {
          title: "Apples and Pumpkins",
          author: "Anne Rockwell",
          ageNote: "Picture book, ages 3+",
          cover: cover(433763),
          alt: "Cover of Apples and Pumpkins by Anne Rockwell, showing a family at an apple orchard and pumpkin patch",
          blurb: "A family spends the day apple-picking at the orchard, then hunts for the perfect pumpkin. First published in 1989 and still one of the most checked-out books at preschool story time.",
        },
        {
          title: "Goodbye Summer, Hello Autumn",
          author: "Kenard Pak",
          ageNote: "Picture book, ages 3+",
          cover: cover(7442168),
          alt: "Cover of Goodbye Summer, Hello Autumn by Kenard Pak, showing a child walking through a forest as leaves change color",
          blurb: "A quiet walk through forest and town as summer hands the year off to fall, page by page. One of the few fall picture books that reads as genuinely poetic rather than plot-driven.",
        },
      ],
      candles: [
        {
          name: "Pumpkin Juice",
          notes: "Pumpkin, Vanilla, Cinnamon",
          price: "From $11.99",
          rating: 5.0,
          reviewCount: 29,
          url: fallProduct("pumpkin-juice-soy-candle-pumpkin-vanilla-cinnamon"),
          blurb: "Soft pumpkin, warm vanilla, a pinch of cinnamon — the friendliest, least-sharp scent in this whole lineup. A good first bookish candle if you've never burned one before.",
          image: { src: fallImg("pumpkin-juice.jpg"), alt: "Pumpkin Juice soy candle from Aarka Origins' Fall Scented Candles collection with pumpkin, vanilla, and cinnamon scent notes, styled with mini pumpkins and cinnamon sticks" },
        },
        {
          name: "October Rain",
          notes: "Autumn Leaves, Rain",
          price: "From $11.99",
          rating: 0,
          reviewCount: 0,
          url: fallProduct("october-rain-soy-candle-autumn-rain-79272"),
          blurb: "Rain-soaked fallen leaves rather than anything sweet — the calmest, least food-coded scent on this page, good for a quiet read-aloud on an actual rainy afternoon. New enough to the collection that it has no reviews yet, so treat that as an honest gap, not a flaw.",
          image: { src: fallImg("october-rain.jpg"), alt: "October Rain soy candle from Aarka Origins' Fall Scented Candles collection with autumn leaves and rain scent notes" },
        },
      ],
    },
    {
      id: "early-readers",
      heading: "Fall chapter books for early readers (ages 6–8)",
      booksHeading: "The books",
      candlesHeading: "A family reading-nook candle",
      lead:
        "Kids graduating from picture books into their first real chapter books want fall-coded plots: orchard field trips, harvest festivals, the first hint of Halloween planning. These two candles are sweet and fruity rather than smoky or spiced, so they work lit in a shared family room while an early reader works through a chapter on their own nearby.",
      books: [
        {
          title: "The Maple Festival",
          author: "Poppy Green (The Adventures of Sophie Mouse, Book 5)",
          ageNote: "Early chapter book, ages 6–8",
          cover: cover(8729101),
          alt: "Cover of The Maple Festival, book five in The Adventures of Sophie Mouse series by Poppy Green",
          blurb: "Sophie helps her mom get ready for their town's autumn Maple Festival in this gently illustrated early chapter book, built for kids right at the picture-book-to-chapter-book transition.",
        },
        {
          title: "Apple Orchard Race",
          author: "Abby Klein (Ready, Freddy!, Book 20)",
          ageNote: "Early chapter book, ages 6–8",
          cover: cover(6456969),
          alt: "Cover of Apple Orchard Race, book twenty in the Ready, Freddy! series by Abby Klein",
          blurb: "Freddy's class field trip to the orchard turns into a hunt for a hidden wooden apple. Low-stakes, funny, and a reliable pick for a kid who needs a little humor to stay motivated reading independently.",
        },
        {
          title: "Mindy Kim and the Mid-Autumn Festival",
          author: "Lyla Lee",
          ageNote: "Early chapter book, ages 6–9",
          cover: cover(14856252),
          alt: "Cover of Mindy Kim and the Mid-Autumn Festival by Lyla Lee",
          blurb: "Mindy navigates her Korean-American family's Chuseok celebrations in a warm, specific own-voices early chapter book that broadens \"fall book\" well past leaves and pumpkins.",
        },
        {
          title: "A Fall for Friendship",
          author: "Megan Atwood",
          ageNote: "Early chapter book, ages 7–9",
          cover: cover(8812909),
          alt: "Cover of A Fall for Friendship by Megan Atwood",
          blurb: "Four friends plan their Halloween costumes and investigate rumors about a maybe-haunted barn. Just enough mild spookiness for a reader who's outgrown picture books but isn't ready for real scares.",
        },
      ],
      candles: [
        {
          name: "Stars Hollow in Autumn",
          notes: "Apples, Berries, Cinnamon, Cedar",
          price: "From $11.99",
          rating: 5.0,
          reviewCount: 1,
          url: fallProduct("stars-hollow-in-autumn-soy-candle-apples-berries-cinnamon-cedar"),
          blurb: "Dark berries, crisp apple, a light dust of cinnamon over cedar — an autumn-market scent rather than a dessert one. Brand new to the collection, so it's currently sitting on a single review rather than a long track record.",
          image: { src: fallImg("stars-hollow-autumn.jpg"), alt: "Stars Hollow in Autumn soy candle from Aarka Origins' Fall Scented Candles collection with apples, berries, cinnamon, and cedar scent notes" },
        },
        {
          name: "Stars Hollow",
          notes: "Autumn Leaves, Apple, Marshmallows",
          price: "From $11.99",
          rating: 4.99,
          reviewCount: 90,
          url: fallProduct("stars-hollow-soy-candle-leaves-apple-marshmallows"),
          blurb: "Crackling autumn leaves, crisp apple, and toasted marshmallow — the most dessert-like, kid-friendly scent in the entire fall collection, and one of its two most-reviewed candles.",
          image: { src: fallImg("stars-hollow-leaves.jpg"), alt: "Stars Hollow soy candle from Aarka Origins' Fall Scented Candles collection with autumn leaves, apple, and marshmallow scent notes" },
        },
      ],
    },
    {
      id: "middle-grade",
      heading: "Fall & spooky-season books for middle grade readers (ages 9–12)",
      booksHeading: "The books",
      candlesHeading: "Candles for the spooky-but-not-scary shelf",
      lead:
        "This is where \"fall book\" starts meaning actual ghosts, witches, and dares in the woods — just without the gore. Every title below is atmospheric rather than graphic, the same standard the rest of this site holds its middle-grade shelf to. Four candles match this band: woodsy, witchy, and library-coded instead of sweet.",
      books: [
        {
          title: "The Witches",
          author: "Roald Dahl",
          ageNote: "Middle grade, ages 8–12",
          cover: cover(12374442),
          alt: "Cover of The Witches by Roald Dahl",
          blurb: "A boy and his grandmother face down a secret society of child-hating witches. Darkly funny rather than frightening, and still the gold-standard \"spooky but safe\" middle grade pick, first published in 1983.",
        },
        {
          title: "Doll Bones",
          author: "Holly Black",
          ageNote: "Middle grade, ages 9–12",
          cover: cover(8188147),
          alt: "Cover of Doll Bones by Holly Black",
          blurb: "Three friends take one last imagination-game road trip, chasing a bone-china doll that might be haunted by a dead girl's ghost. Melancholy and genuinely unsettling without a drop of actual gore.",
        },
        {
          title: "Small Spaces",
          author: "Katherine Arden",
          ageNote: "Middle grade, ages 9–12",
          cover: cover(8739427),
          alt: "Cover of Small Spaces by Katherine Arden",
          blurb: "A girl is trapped at a pumpkin farm after dark with scarecrows that may not be scarecrows. First book in a trilogy that's become one of the most-requested October reads in middle school libraries.",
        },
        {
          title: "City of Ghosts",
          author: "Victoria Schwab",
          ageNote: "Middle grade, ages 9–12",
          cover: cover(8447797),
          alt: "Cover of City of Ghosts by Victoria Schwab",
          blurb: "A girl who can see ghosts explores haunted Edinburgh for her parents' TV show. Moody and atmospheric, with the scares kept deliberately light despite the premise.",
        },
        {
          title: "Nightbooks",
          author: "J.A. White",
          ageNote: "Middle grade, ages 9–12",
          cover: cover(10085027),
          alt: "Cover of Nightbooks by J.A. White",
          blurb: "A boy obsessed with scary stories is trapped by a witch and must keep telling them to survive, Scheherazade-style. A book about loving horror stories, written for kids who already love horror stories.",
        },
      ],
      candles: [
        {
          name: "Autumn Witch",
          notes: "Apples, Pear, Woods, Moss",
          price: "From $11.99",
          rating: 4.96,
          reviewCount: 25,
          url: fallProduct("autumn-witch-soy-candle-apples-pear-woods-moss"),
          blurb: "Apples and pears over damp woods and moss — earthy forest rather than a sweet dessert candle. The closest scent here to the pumpkin-farm woods of Small Spaces.",
          image: { src: fallImg("autumn-witch.jpg"), alt: "Autumn Witch soy candle from Aarka Origins' Fall Scented Candles collection with apples, pear, woods, and moss scent notes" },
        },
        {
          name: "Haunted Library",
          notes: "Cinnamon Broom, Aged Woods",
          price: "From $11.99",
          rating: 4.96,
          reviewCount: 78,
          url: fallProduct("haunted-library-soy-candle-cinnamon-broom-aged-woods"),
          blurb: "A cinnamon broom propped in the corner, aged wood shelving, the dry hush of old paper. The most book-coded scent in the whole collection, and one of its two most-reviewed candles — a natural match for anything shelved as a ghost story.",
          image: { src: fallImg("haunted-library.jpg"), alt: "Haunted Library soy candle from Aarka Origins' Fall Scented Candles collection with cinnamon broom and aged woods scent notes" },
        },
        {
          name: "Witching Hour",
          notes: "Cinnamon, Sugar, Amber",
          price: "From $11.99",
          rating: 4.91,
          reviewCount: 23,
          url: fallProduct("witching-hour-soy-candle-cinnamon-sugar-amber"),
          blurb: "Warm cinnamon, a spill of sugar, deep golden amber — playful-witchy rather than dark-witchy, which fits The Witches' tone better than anything moodier would.",
          image: { src: fallImg("witching-hour.jpg"), alt: "Witching Hour soy candle from Aarka Origins' Fall Scented Candles collection with cinnamon, sugar, and amber scent notes" },
        },
        {
          name: "Sleepy Hollow",
          notes: "Pumpkin, Coffee, Vanilla Spice",
          price: "From $11.99",
          rating: 5.0,
          reviewCount: 17,
          url: fallProduct("sleepy-hollow-soy-candle-pumpkin-coffee-vanilla-spice"),
          blurb: "Dark roast coffee under soft pumpkin and vanilla spice, named for Washington Irving's public-domain classic — the one candle on this page with a genuine, centuries-old literary namesake rather than a mood match.",
          image: { src: fallImg("sleepy-hollow.jpg"), alt: "Sleepy Hollow soy candle from Aarka Origins' Fall Scented Candles collection with pumpkin, coffee, and vanilla spice scent notes" },
        },
      ],
    },
    {
      id: "teen-ya",
      heading: "Fall & gothic YA books for teens (ages 13+)",
      booksHeading: "The books",
      candlesHeading: "Candles for dark academia & gothic romance nights",
      lead:
        "By thirteen, \"fall book\" can finally mean actual gothic: boarding-school secrets, family curses, witches with real stakes. Two candles match this band — both gothic-adjacent rather than sweet, built for an evening reading session rather than an afternoon one.",
      books: [
        {
          title: "A Great and Terrible Beauty",
          author: "Libba Bray",
          ageNote: "YA, ages 13+",
          cover: cover(7079039),
          alt: "Cover of A Great and Terrible Beauty by Libba Bray",
          blurb: "A Victorian boarding-school gothic with visions, secret orders, and a genuinely eerie supernatural thread running under all the corsets. First published in 2003 and still the book that launched a hundred \"dark academia\" shelves.",
        },
        {
          title: "Beautiful Creatures",
          author: "Kami Garcia & Margaret Stohl",
          ageNote: "YA, ages 13+",
          cover: cover(6280152),
          alt: "Cover of Beautiful Creatures by Kami Garcia and Margaret Stohl",
          blurb: "Southern Gothic small-town romance with a family curse and a girl counting down to the birthday when her magic gets claimed for good or evil. Humid, moody, and a different flavor of fall than the New-England-leaves norm.",
        },
        {
          title: "Cemetery Boys",
          author: "Aiden Thomas",
          ageNote: "YA, ages 13+",
          cover: cover(10927389),
          alt: "Cover of Cemetery Boys by Aiden Thomas",
          blurb: "A trans boy determined to prove himself as a brujo summons the wrong ghost and falls for him instead. Funny and tender, about as cozy as a book with a body count gets.",
        },
        {
          title: "Winterwood",
          author: "Shea Ernshaw",
          ageNote: "YA, ages 13+",
          cover: cover(12035224),
          alt: "Cover of Winterwood by Shea Ernshaw",
          blurb: "A witch's granddaughter finds a boy lost in the woods behind her house, in a dark, slow-burn fairy tale with real teeth under the prettiness.",
        },
      ],
      candles: [
        {
          name: "Nevermore",
          notes: "Mandarin, Cranberry, Rosewood",
          price: "From $11.99",
          rating: 5.0,
          reviewCount: 23,
          url: fallProduct("nevermore-soy-candle-mandarin-cranberry-rosewood"),
          blurb: "Mandarin cut sharp, cranberry gone tart and red, rosewood underneath — a gothic-but-bright scent that fits A Great and Terrible Beauty's boarding-school unease better than anything heavier. Named for Poe's \"The Raven,\" not for the Nevermoor middle grade series — a name coincidence worth knowing before you buy it expecting one or the other.",
          image: { src: fallImg("nevermore.jpg"), alt: "Nevermore soy candle from Aarka Origins' Fall Scented Candles collection with mandarin, cranberry, and rosewood scent notes" },
        },
        {
          name: "The Keeper's Hut",
          notes: "Woods, Cozy Fire, Tea",
          price: "From $11.99",
          rating: 4.98,
          reviewCount: 90,
          url: fallProduct("the-keepers-hut-soy-candle-woods-cozy-fire-tea"),
          blurb: "Aged wood walls, a low fire crackling, steam off a fresh cup of tea. The collection's other most-reviewed candle, and the pick for a slow, cozy Beautiful Creatures or Winterwood reading night.",
          image: { src: fallImg("keepers-hut.jpg"), alt: "The Keeper's Hut soy candle from Aarka Origins' Fall Scented Candles collection with woods, cozy fire, and tea scent notes" },
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What are the best fall books for kids by age?",
      a: "For toddlers and preschoolers (2–5), start with Leaf Man and Apples and Pumpkins. For early readers (6–8), try The Maple Festival and A Fall for Friendship. For middle grade (9–12), Small Spaces and The Witches cover the spooky-but-safe range. For teens (13+), A Great and Terrible Beauty and Cemetery Boys deliver real gothic atmosphere without crossing into horror. The full list above has five picture books, four early chapter books, five middle grade titles, and four YA novels, each matched to the age it's actually written for.",
    },
    {
      q: "Which fall candle should I pair with a kid's spooky middle grade book?",
      a: "Autumn Witch (apples, pear, woods, moss), Haunted Library (cinnamon broom, aged woods), Witching Hour (cinnamon, sugar, amber), and Sleepy Hollow (pumpkin, coffee, vanilla spice) are the four from Aarka Origins' Fall Scented Candles collection matched to this band — woodsy and witchy rather than sweet, which fits books like Small Spaces and Doll Bones better than a dessert-coded scent would.",
    },
    {
      q: "Is it safe to burn a fall candle in a kid's room?",
      a: "Treat any open-flame candle the way you'd treat any open flame near a child: supervised, out of reach when lit, and away from curtains, bedding, or stacks of paper. Every candle in this post is a standard soy candle with a cotton wick, not a flameless one, so the usual candle rules apply. For the toddler and early-reader bands especially, the candle is meant for the adult doing the reading, not for the child's own room.",
    },
    {
      q: "Is the Nevermore candle connected to the book series Nevermoor?",
      a: "No. Nevermore, singular, is a reference to Edgar Allan Poe's \"The Raven\" — the famous line the raven keeps repeating — not to Jessica Townsend's Nevermoor series. The name overlap is a coincidence of English vocabulary, not a tie-in, which is worth knowing before buying it expecting a Nevermoor connection.",
    },
    {
      q: "How many reviews do these fall candles actually have?",
      a: "Across the ten candles featured here, combined review counts total 376 as of this writing. Seven of the ten (Pumpkin Juice, Autumn Witch, Haunted Library, Witching Hour, Sleepy Hollow, Nevermore, and Stars Hollow) carry 20 or more reviews, and two of those — Stars Hollow and The Keeper's Hut — are each past 90. Two candles are genuinely new to the collection: October Rain has no reviews yet, and Stars Hollow in Autumn currently has one. I'm listing those counts plainly rather than implying every candle here is equally proven.",
    },
    {
      q: "Where can I buy the fall candles mentioned in this post?",
      a: "All ten are part of Aarka Origins' Fall Scented Candles collection, linked at the bottom of this page and underneath each candle above. I have no affiliate arrangement or sponsorship with Aarka Origins; I'm linking directly to each product because a reader asked me to feature this specific collection.",
    },
  ],
  closing: {
    heading: "See the rest of the Fall Scented Candles collection",
    body:
      "These ten candles are a slice of a much larger fall lineup — Aarka Origins' Fall Scented Candles collection runs to more than fifty scents, from pumpkin-spice lattes to haunted carnivals. If none of the ten above fit your reader's exact book, it's worth a browse on your own. I have no partnership or affiliate arrangement with Aarka Origins; I linked this collection because a reader asked me to feature it, and I'll update this page if any of these ten candles change scent notes, price, or go out of stock.",
    ctaLabel: "Browse the full Fall Scented Candles collection at Aarka Origins",
    ctaUrl: "https://aarkaorigins.com/collections/fall-scented-candles",
  },
  candleCollection: {
    label: "Aarka Origins — Fall Scented Candles",
    url: "https://aarkaorigins.com/collections/fall-scented-candles",
  },
});

export const bookishLifeBySlug = (slug) => bookishLife.find((p) => p.slug === slug);
