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

export const bookishLifeBySlug = (slug) => bookishLife.find((p) => p.slug === slug);
