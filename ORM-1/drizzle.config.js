require("dotenv/config");
const { defineConfig } = require("drizzle-kit");

const config = defineConfig({
  dialect: "postgresql",
  schema: "./drizzle/schema.js",
  dbCredentials: { url: process.env.DATATABASE_URL },
});

module.exports = config;
