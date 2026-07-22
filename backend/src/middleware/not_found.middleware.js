import API_error from "../utils/api_error.js";

const not_found=(req,res,next)=>{
  next(new API_error(404,`Route ${req.originalUrl} not found`));
};

export default not_found;