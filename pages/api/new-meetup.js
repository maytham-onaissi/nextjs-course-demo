// // /api/new-meetup
// // only POST works here due to the if statement

// const mongoose = require("mongoose");

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     const data = req.body;

//     const { title, image, address, description } = data;

//     await mongoose.connect(
//       process.env.DB_URL
//     );

//     const meetupSchema = new mongoose.Schema({
//       title: String,
//       image: String,
//       address: String,
//       description: String,
//     });

//     const Meetup = mongoose.model("Meetups", meetupSchema);

//     const meetup = new Meetup({
//       title: title,
//       image: image,
//       address: address,
//       description: description,
//     });

//     // const result = await meetup.save();
//     await meetup.save();
//     // console.log(result);

//     mongoose.disconnect();
//     res.status(201).json({ message: "Meetup inserted" });
//   }
// };

// export default handler;

import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
