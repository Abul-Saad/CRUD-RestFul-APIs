import express from 'express';

import { getItems, createItem, updateItem, deleteItem } from '../controllers/ItemController.js';

const router = express.Router();

router.get("/getItem", getItems);
router.post("/createItem", createItem);
router.put("/updateItem/:id", updateItem);
router.delete("/deleteItem/:id", deleteItem);

export default router;