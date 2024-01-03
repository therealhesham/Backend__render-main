const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const uri = "mongodb+srv://lvw:LVW123456789@cluster0.9bdwe65.mongodb.net/landingpage?retryWrites=true&w=majority&ssl=true";
console.log('MongoDB URI:', uri);


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    poolSize: 10
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 90000, 
  socketTimeoutMS: 90000,
});

async function run() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
