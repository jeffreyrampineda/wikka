#! /usr/bin/env node

// Filename: populatedb.js
// Description: This script populates some author, genre, and story to your database
//
// Author: Jeffrey Ram Pineda <https://jeffreyram.pineda.org/>

console.log(
  "This script populates some author, genre, story to your database.\n"
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

// Check arguments for valid MongoDB URI string
if (userArgs.length == 0 || !userArgs[0].startsWith("mongodb")) {
  console.log(
    "You need to specify a valid mongodb URI string as the first argument\n"
  );
  console.log("Usage: node populatedb <uri_string>\n");
  process.exit(0);
}

const Story = require("../../models/story");
const Author = require("../../models/author");
const Genre = require("../../models/genre");

const mongoose = require("mongoose");
const uri_string = userArgs[0];

mongoose.set("strictQuery", false);

mongoose.connection.once("open", () =>
  console.log("MongoDB: connection established")
);

mongoose.connection.once("close", () =>
  console.log("MongoDB: connection closed")
);

mongoose.connection.on("error", () => {
  console.log("MongoDB: connection error");
  process.exit(0);
});

mongoose.connect(uri_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const authors = [];
const genres = [];
const stories = [];

async function authorCreate(first_name, last_name, d_birth, d_death) {
  let authordetail = { first_name, last_name };
  if (d_birth != false) authordetail.date_of_birth = d_birth;
  if (d_death != false) authordetail.date_of_death = d_death;

  return await Author.create(authordetail);
}

async function genreCreate(name) {
  const genredetail = { name };

  return await Genre.create(genredetail);
}

async function storyCreate(title, author, description, passages, genre) {
  storydetail = {
    title,
    author,
    description,
    passages,
  };
  if (genre != false) storydetail.genre = genre;

  return await Story.create(storydetail);
}

async function createGenreAuthors() {
  // -- Authors
  authors.push(
    await authorCreate("Jeffrey Ram", "Pineda", "1996-05-12", false),
    await authorCreate("Crunchy Nihongo", "", "2020-01-01", false)
  );

  console.log("Authors created: ", authors.length);

  // -- Genres
  genres.push(await genreCreate("Fantasy"), await genreCreate("Historical"));

  console.log("Genres created: ", genres.length);
}

async function createStories() {
  stories.push(
    await storyCreate(
      "The Hiragana",
      authors[0],
      "This is a simple collection of random words created to test different reading rules.",
      [
        "「「「き」 ちかく",
        "きゃちょっち",
        "びっくり 「ふしぎな たけ だ。」",
        "みやこ。",
        "むかし",
      ],
      false
    ),
    await storyCreate(
      "The Tale of Princess Kaguya",
      authors[1],
      "A baby who was found inside a shiny bamboo stalk, grow into a beautiful lady and orders her suitors to prove their love by completing near-impossible tasks.",
      [
        "むかし、 みやこ の ちかく の むら に たけとり の おきな と よばれて いる おじいさん が いました。",
        "おじいさん は まいにちやま へ いって たけ を とり、 それ で かご を あみ、 ざる を つくって くらして いました。",
        "ある ひ、 おじいさん が たけ を きろう と したら ねもと の ぴかぴか ひかる たけ が ありました。 「ふしぎな たけ だ。」",
        "おじいさん は びっくりして その たけ を そっと きって みました。すると どう でしょう。 たけ の なか に ちいさな おんな の こ が いました。",
        "「なんて かわいい こ だ。」おじいさん は おおよろこび で おんなのこ を だきあげ、いえ に つれて かえりました。",
      ],
      [genres[0], genres[1]]
    ),
    await storyCreate(
      "The Tale of Momotaro",
      authors[1],
      "A boy who came out from a giant peach found in a river, decided to help his parents and village by fighting the evil Oni with the help of his animal friends.",
      [
        "むかし、 むかし、 ある ところ に おじいさん と おばあさん が いました。",
        "おじいさん が やま へ き を きり に いけば、 おばあさん は かわ へ せんたく に でかけます。",
        "「おじいさん、 はよう もどってきなされ。」",
        "おばあさん も き を つけて な。」",
        "まいにち やさしく いい あって でかけます。",
      ],
      [genres[0], genres[1]]
    )
  );

  console.log("Stories created: ", stories.length);
}

createGenreAuthors()
  .then(() => createStories())

  // All done, disconnect from database
  .finally(() => mongoose.disconnect());
