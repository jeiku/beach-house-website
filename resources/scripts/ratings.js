// local reviews data
const reviews = [
  {
    id: 1,
    stars: "★★★★★",
    guest: "Guest from VRBO, 2020",
    text:
      "Great experience for our family gathering! Plenty of space and well-equipped home. Thanks again!",
  },
  {
    id: 2,
    stars: "★★★★★",
    guest: "Guest from VRBO, 2020",
    text:
      "We had a wonderful time at Island Manor. Beth and Dave were wonderful to work with. It's so nice to have the sheets provided and on the beds when you arrive. Plus the towels, beach towels, beach umbrellas and chairs... the list goes on and on. The beach is lovely and you couldn't be any closer. We hope to have a chance to come back one day.",
  },
  {
    id: 3,
    stars: "★★★★★",
    guest: "Guest from VRBO, 2020",
    text:
      "My family and I had a wonderful time . House was very clean up upon arrival . A bonus was that there is a room under the house that is stocked with beach toys , cornhole, volleyball, etc . Also beach chairs and umbrellas. We never got our umbreallas out of the car. Kitchen was well stocked with utinsels, beds were comfortable. Spent 90% of our time on the porch or the beach.... TVs in every bedroom but we never turned them on except to watch cartoons :) . Well stocked DVD movie cabinet. We had a great time and would definately go back next year hopefully. Owner were very nice , responsive and flexible in this time of pandemic....",
  },
  {
    id: 4,
    stars: "★★★★★",
    guest: "Guest from VRBO, 2019",
    text:
      "My family has been going to Edisto for years. This year we decided to spend our Thanksgiving week there! Could not have asked for a better house and location. Plus the weather was priceless! Cannot wait to make this a holiday tradition!",
  },
  {
    id: 5,
    stars: "★★★★★",
    guest: "Guest from VRBO, 2019",
    text:
      "This was our second trip here. We rode out the Tropical Storm last October and we thought we were going to have Dorian visit...but all held off the coast and we had a week of bliss with a cold front that dropped the temps to crazy nice highs. Owners are very responsive and cordial. A must stay!",
  },
  {
    id: 6,
    stars: "★★★★★",
    guest: "Guest from VRBO, 2019",
    text:
      "We loved being right on the beach, not a long boardwalk past dunes to be on the sand and then in the surf. Really appreciated the bathroom for every two bedrooms, rather than an overblown fancy master with a fancy bathroom that only 2 use and everyone else uses the other one or two bathrooms. We kept saying we had found the spot we'l always return to, though we do like trying different places. We'll see, but we sure did enjoy this place: location, layout, location, accommodations (the Wests provided EVERYTHING), location, comfort, location, well stocked, and did I mention, location? Thanks Beth and Dean!",
  },
  {
    id: 7,
    stars: "★★★★★",
    guest: "Guest from VRBO, 2019",
    text:
      "Everything provided for which made it so convenient for all of us flying in. Lovely home and great owners!",
  },
  {
    id: 8,
    stars: "★★★★★",
    guest: "Guest from VRBO, 2019",
    text:
      "If you want to experience your vacation 'on the beach' --not near to, steps to, a view of, just minutes away from,'..... I mean 'on the beach,' this is the place to stay!! I have rented many beach front homes and condos, but this one is undeniably the BEST! I could stay inside or outside on the decks and feel as much a part of all the action, since the activities were right in front of me. It was so nice not to have to walk any distance to the ocean or to go back and forth to the house. Lots of seating for when we all gathered together. Plenty of pots and pans for cooking seafood, etc., games and books, and the use of beach gear if you forgot anything. Our entire family loved this place! It just doesn't get any better than this! Lots of sweet memories!!",
  },
  {
    id: 9,
    stars: "★★★★★",
    guest: "Guest from VRBO, 2019",
    text:
      "The location of this house is perfect! The owner provided beach towels, linens, and a huge digital movie library. The beach towels were much appreciated as we forgot to bring ours. Thank you so much for a wonderful family vacation!",
  },
  {
    id: 10,
    stars: "★★★★★",
    guest: "Guest from VRBO, 2019",
    text:
      "Everything provided for which made it so convenient for all of us flying in. Lovely home and great owners!",
  },
];

// select items
const rating = document.getElementById("rating");
const reviewer = document.getElementById("reviewer");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showReview(currentItem);
});

// show person based on item

const showReview = (person) => {
  const item = reviews[person];
  rating.textContent = item.stars;
  reviewer.textContent = item.guest;
  info.textContent = item.text;
};

// show next person

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReview(currentItem);
});
