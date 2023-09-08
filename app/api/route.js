const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://uiwonders:vvRl0rJBLx0Qx9lp@cluster0.we2oxi5.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});
  
export const db = async () => {
    try {
        client.connect();
        console.log("Database connection established")
    } catch (error) {
        console.log("Database connection error")
    }
}