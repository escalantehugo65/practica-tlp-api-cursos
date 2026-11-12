import express from 'express'
import 'dotenv/config'
import { StartDB } from './src/config/database.js';
import { User } from './src/models/user.model.js';
import { Course } from './src/models/course.model.js';
import { Category } from './src/models/category.model.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

await StartDB();
await User.init(),
await Course.init(),
await Category.init(),


app.listen(PORT, () => {
  console.log("El servidor arrancó correctamente en PUERTO", PORT);
});