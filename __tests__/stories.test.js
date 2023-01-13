require("dotenv").config();

const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

const { mock_author_story } = require("../util/tests/mock");

mongoose.set("strictQuery", false);

beforeAll(async () => {
  await await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await mongoose.connection.db.dropDatabase();
});

afterEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

// close database and server after all tests are complete
afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /api/stories", () => {
  it("should return an empty array when stories is empty", async () => {
    const res = await request(app).get("/api/stories");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(0);
  });

  it("should return all stories when stories is not empty", async () => {
    await mock_author_story();

    const res = await request(app).get("/api/stories");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("should return the mock author and story", async () => {
    const { mock_author, mock_story } = await mock_author_story();

    const res = await request(app).get("/api/stories");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(JSON.stringify(res.body[0]._id)).toBe(
      JSON.stringify(mock_story._id)
    );
    expect(JSON.stringify(res.body[0].author._id)).toBe(
      JSON.stringify(mock_author._id)
    );
  });
});

describe("GET /api/stories/:id", () => {
  it("should return the correct story associated with :id", async () => {
    const { mock_author, mock_story } = await mock_author_story();

    const res = await request(app).get("/api/stories/" + mock_story._id);
    expect(res.statusCode).toBe(200);
    expect(JSON.stringify(res.body._id)).toBe(JSON.stringify(mock_story._id));
    expect(JSON.stringify(res.body.passages)).toBe(
      JSON.stringify(mock_story.passages)
    );
    expect(JSON.stringify(res.body.author._id)).toBe(
      JSON.stringify(mock_author._id)
    );
  });
});
