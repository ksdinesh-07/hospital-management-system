export const authorize_role=(...roles)=>{
  return (req,res,next)=>{
    const role=req.user.role
    if (!roles.includes(role)){
      return res.status(400).json({success:false,message:"ACCESS DENIED"})
    }
    next();
  };
};