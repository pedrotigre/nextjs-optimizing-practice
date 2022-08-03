import { connectToDatabase } from '../../../lib/mongodb';
async function handler(req, res) {
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION2);
  if (req.method === 'POST') {
    await collection.insertOne({
      comment: req.body,
    });
    res.status(201).json({ message: 'Comment received!' });
  }
}
export default handler;
