const { MongoClient } = require('mongodb');

// Replace <username>, <password>, and <cluster-url> with Atlas credentials
const uri = "mongodb+srv://adminUser:SecurePassword123@cluster0.abcde.mongodb.net/company_db?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB Atlas Cloud Deployment!");

    const database = client.db("company_db");
    const statusCollection = database.collection("deployment_status");

    const doc = { service: "MongoDB Atlas", status: "Active", timestamp: new Date() };
    const result = await statusCollection.insertOne(doc);
    console.log(`Verification document inserted with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);