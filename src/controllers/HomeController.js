import mock from '../helpers/mock';
import Message from '../models/Message';

export default class HomeController {
  static getMessages = async () => {
    let messages = {};
    try {
      await mock();
      messages.data = await Message.findAll();
      messages.success = true;
    } catch (exception) {
      console.error(exception.message);
      messages.success = false;
    } finally {
      return JSON.stringify(messages);
    }
  }
}
