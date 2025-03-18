const aiService = require("../services/ai.service")

module.exports.getReview = async (req,res)=>{
    const code = req.body.code; // instead of query we use body 
    if(!code){
        return res.status(400).send("code is required");
    }
    const response = await aiService(code);

    res.send(response);
}