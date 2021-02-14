import express from 'express';
import HomeController from '../../controllers/HomeController';

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await HomeController.createTable();
  res.json(response);
});

export default router;
