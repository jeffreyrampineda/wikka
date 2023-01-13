const Author = require("../../models/author");
const Story = require("../../models/story");

async function mock_author_story() {
  const mock_author = await Author.create({
    first_name: "John",
    last_name: "Doe",
    date_of_birth: "1996-05-12",
  });

  const mock_story = await Story.create({
    title: "The Hiragana",
    author: mock_author,
    description: "This is a mock story for testing.",
    passages: [
      "「「「き」 ちかく",
      "きゃちょっち",
      "びっくり 「ふしぎな たけ だ。」",
      "みやこ。",
      "むかし",
    ],
  });

  return { mock_author, mock_story };
}

module.exports = {
  mock_author_story,
};
