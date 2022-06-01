import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup
const MONGO_CONNECT_STRING =
  "mongodb+srv://washtakzo:Tekken7Tag2@cluster0.pnuaq0h.mongodb.net/meetups?retryWrites=true&w=majority";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(MONGO_CONNECT_STRING);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
