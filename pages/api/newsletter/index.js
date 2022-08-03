import { connectToDatabase } from '../../../lib/mongodb';
async function handler(req, res) {
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION1);
  if (req.method === 'POST') {
    if (!req.body || !req.body.includes('@')) {
      return res.status(422).json({ message: 'Invalid email address!' });
    }
    await collection.insertOne({
      email: req.body,
    });
    res.status(201).json({ message: 'Success!' });
  }
}
export default handler;
