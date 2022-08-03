import { connectToDatabase } from '../../../lib/mongodb';
async function handler(req, res) {
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION2);

  if (req.method === 'GET') {
    const data = await collection
      .find({ 'comment.eventId': req.query.eventId })
      .toArray();
    res.status(200).json({ comments: data });
  }
}
export default handler;
