import { asyncHandler } from "../utils/asyncHandlers.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiError.js";
import  {User} from "../models/user.model.js"
const registerUser = asyncHandler(async (req, res) => {
  // ALGORITHM  for registerting user

  // get details from frontend
  const { username, email, fullName, password } = req.body;
  console.log("user name :", username,password);

  // validation of

  if ( [username, email, fullName, password, avatar].some(field => field?.trim() === "")
) {
    throw new ApiError(400,"All fields are requried");
    
  }
  // email or password alerady exists
const aleradyExist = User.findOne({
  $or: [{email},{username}]
}) 

if(aleradyExist){
  throw new ApiError(409,"user with enail or username already exits")
}
req.files.avatar[0]?.path

  // check for images ,avatar
  // upload the images to cloudniary
  // createa a new entery in DB
  // remove password and refresh token form feilds
  // cheack for user creation
  // return res
});

export default registerUser;
