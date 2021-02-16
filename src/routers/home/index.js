import express from 'express';
import HomeController from '../../controllers/HomeController';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await HomeController.getMessages();
    res.json(response);
  } catch (exception) {
    res.status(500).json('Internal Server Error!');
  }
});

export default router;
