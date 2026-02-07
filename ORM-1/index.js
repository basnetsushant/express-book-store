require("dotenv/config");
const db = require("./db");
const { usersTable } = require("./drizzle/schema");

const getAllUsers = async () => {
  const users = await db.select().from(usersTable);
  console.log("users in db", users);
  return users;
};

async function createUser({ id, name, email }) {
  await db.insert(usersTable).values({
    id,
    name,
    email,
  });
}
// createUser({ id: 1, name: "Sushant", email: "sushant@example.com" });
// createUser({ id: 2, name: "Pujan", email: "pujan@example.com" });
getAllUsers();
