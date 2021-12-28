const jwt = require("jsonwebtoken");
const config = require("../config/config.json")["jwtConfig"];
const sessionStorage = require('sessionstorage');


const generatejwt = async (email, id) => {
    const token = await jwt.sign({ email: email, id: id },
        config.secretekey,
        { expiresIn: config.expiretime }
    );
    return token;
}

const verifyauth = async (req, res, next) => {
    const jwtToken = req.headers["authorization"];
    const authToken = jwtToken?jwtToken.slice(4):null;
    const path = req.path;
    try {
        if (path.includes('login')) {
            next();
        } else {
            await jwt.verify(authToken, config.secretekey, (err, payload) => {
                if (err) {
                    res.status(401).send({message:"Session Expired"});
                } else {
                    const sessionUser = sessionStorage.getItem(`user-${payload.id}`);
                    const sessionEmp = sessionStorage.getItem(`employee-${payload.id}`);
                    if (sessionUser === authToken || sessionEmp === authToken) {
                        req.payload = payload;
                        next();
                    } else {
                        if(sessionUser == null && sessionEmp == null){
                            res.status(400).send({message:'session close'})
                        }else{
                            res.status(401).send({message:'another login detect'})
                        }
                    }
                }
            })
        }
    } catch (error) {
        res.status(500).send({message:"internal server error"});
    }
}

module.exports = { generatejwt, verifyauth }