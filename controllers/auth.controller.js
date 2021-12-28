const { passwordHash, comparePassword, genRandomString } = require('../generator/genPasswordHash');
const {generatejwt} = require('../generator/authJwt');
const jwt = require("jsonwebtoken");
const sessionStorage = require('sessionstorage');


const login = async (model, req, res) => {
    try {
        const user = await model.findOne({
            where: { email: req.body.email }
        });
        if (user) {
            var isPasswordCorrect = await comparePassword(req.body.password, user.passwordHash);
            if (isPasswordCorrect) {
               const token = await generatejwt(req.body.email,user.id);
               if(token){
                var userObj = JSON.parse(JSON.stringify(user));
                delete userObj.passwordHash
                if(req.path.includes('api/user')){
                    sessionStorage.setItem(`user-${userObj.id}`,token);
                }else{
                    sessionStorage.setItem(`employee-${userObj.id}`,token);
                }
                res.send({
                    payload: {
                        data: userObj,
                        token: token
                    }
                })
               }else{
                res.status(400).send({message:'internal error'}); 
               }
            } else {
                res.status(404).send({message:'invalid Pasword'});
            }
        } else {
            res.status(404).send({message:'invalid email'});
        }
    } catch (error) {
        if(error.errors){
            res.status(500).send({message:error.errors[0].message})
           }else{
            res.status(500).send({message:error.parent.text.split(':')[0]})
           }
    }
}

const change = async (model, req, res) => {
    try {
        const {oldPassword,newPassword,confirmNewPassword} =req.body;
        if (oldPassword != newPassword) {
        const user = await model.findOne({
            where: { email: req.payload.email }
        });
        if (user) {
            var isPasswordCorrect = await comparePassword(oldPassword, user.passwordHash);  
            if (isPasswordCorrect) {
                if (newPassword==confirmNewPassword) {
                    const hashObj = await passwordHash(newPassword);
                    const hash = `${hashObj.passwordHash}.${hashObj.salt}`;
                    const data = await user.update({passwordHash:hash});
                    res.status(200).send({success:true,message:"Password Updated successfully"}) 
                } else {
                    res.status(404).send({message:'New Password and Confirm New Password must match'});  
                }
            } else {
                res.status(404).send({message:'invalid Old Pasword'}); 
            }
        } else {
            res.status(404).send({message:'Session Expire login again'});   
        }
    } else {
        res.status(404).send({message:'Old Pasword and new Password not to be same'}); 
    }
    } catch (error) {
        res.status(404).send(error);    
    }

}



const create = async (model,req,res)=>{
    try {
        const {password, ...rest} = req.body
        if(password.length){
        const userObj = JSON.parse(JSON.stringify(rest));
        const hashObj = await passwordHash(password)
        userObj.passwordHash = `${hashObj.passwordHash}.${hashObj.salt}`
        await model.sync();
        const data = await model.create({ ...userObj });
        res.status(200).send({success:true,message:'Created/Added Successfully'});
        }else{
            res.status(500).send({message:"Password not be Empty"})   
        }
    } catch (error) {
       if(error.errors){
        res.status(500).send({message:error.errors[0].message})
       }else{
        res.status(500).send({message:error.parent.text.split(':')[0]})
       }
    }
}

module.exports = { login, change, create }