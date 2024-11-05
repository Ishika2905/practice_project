const{constants}=require("../constants");
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    switch (statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Failed",
                message:err.message,
                stackTrace:err.stack,
            });
            break;
        case constatnts.NOT_FOUND:
            res.json({
                title:"Not Found",
                message:err.message,
                stackTrace:err.stack,
            });
        case constatnts.UNAUTHORISED:
            res.json({
                title:"unauthorised",
                message:err.message,
                stackTrace:err.stack,
            });
        case constatnts.SERVER_ERROR:
            res.json({
                title:"Server error",
                message:err.message,
                stackTrace:err.stack,
            });

        default:
            console.log("No error,All good!!");
            break;
    }
};

module.exports=errorHandler;