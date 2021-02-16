import Message from '../models/Message';

export default async function mock() {
  try {
    await Message.create({ text: 'Hello, World!' });
  } catch (exception) {
    console.error(exception.message);
  }
}
