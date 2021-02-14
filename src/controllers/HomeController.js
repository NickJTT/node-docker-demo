import database from '../database';

export default class HomeController {
  static createTable = async () => {
    const query = 'CREATE TABLE test (name varchar);';

    let message = 'Table was successfully created!';

    try {
      await database.query(query);
    } catch (exception) {
      console.error(exception.message);
      message = exception.message;
    }

    return message;
  }
}
