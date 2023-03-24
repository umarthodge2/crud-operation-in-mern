
import express from 'express';
import User from '../models/User.js';
import { addUser,getUser, getUsers,editUser ,deleteUser} from '../controller/user-controller.js';
// import {  } from '../../client/src/service/api.js';

const router = express.Router();


// router.post("/add", async (request, response) => {
//   const users = await User.find({});

//   try {
//     response.send(users);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

router.post("/add", addUser);


// router.get("/all", async (request, response) => {
//     const users = await User.find({});
  
//     try {
//       response.send(users);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

router.get("/all", getUsers);

router.get("/:id",getUser);
// router.post("/:id",editUser);

router.put("/:id",editUser);
router.delete("/:id", deleteUser)


  export default router;