import { connectToDatabase } from '../../../lib/mongodb';
async function handler(req, res) {
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION2);
  if (req.method === 'POST') {
    if (
      !req.body.email ||
      !req.body.name ||
      !req.body.eventId ||
      !req.body.text ||
      req.body.text.trim() === '' ||
      req.body.name.trim() === ''
    ) {
      return res.status(422).json({ message: 'Invalid comment!' });
    }
    await collection.insertOne({
      comment: req.body,
    });
    res.status(201).json({ message: 'Comment received!' });
  }
  if (req.method === 'GET') {
    const data = await collection
      .find({ 'comment.eventId': req.query.eventId })
      .toArray();
    res.status(200).json({ comments: data });
  }
}
export default handler;