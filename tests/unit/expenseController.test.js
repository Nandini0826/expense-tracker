const request = require("supertest");
const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const router = require("../../routes/index");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const path = require("path");

let app;
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  app = express();

  // These lines must go AFTER app is initialized
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../../views"));

  app.use(express.urlencoded({ extended: false }));
  app.use(session({ secret: "test", resave: false, saveUninitialized: true }));
  app.use(flash());

  app.use("/", router);
});
describe("Dummy test for Expense Controller", () => {
  it("should pass this sanity test", () => {
    expect(1 + 1).toBe(2);
  });
});

afterEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});
