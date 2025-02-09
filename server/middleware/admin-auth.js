import { usermodel } from "../db.js";

export async function adminAuthMiddleware(req, res, next) {
  let id = req.id;

  try {
    let response = await usermodel.find();
    // console.log(response)
    if(response){
      let admin = response.filter((cur)=>{
        return cur.isAdmin
      })
      req.response = admin
      next();

    }else{{
      res.json({
        msg:"no user found"
      })
    }}
    } catch (error) {
    console.log(error);
    res.json({
      err: error,
    });
  }
}
