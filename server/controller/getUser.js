import { usermodel } from "../db.js";

export let GetUser = async (req, res) => {
  let id = req.params.id;
  try {
    let response = await usermodel.findOne({ _id: id },{password:0});
    res.json({
      msg: response,
    });
  } catch (error) {
    console.log("can't get user")
  }
};
