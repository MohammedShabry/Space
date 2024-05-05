const User = require('../models/user')
const {hashPassword , comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken')

const test = (req , res) => {
    res.json('test is working')
}

const registerUser = async (req,res) => {
    try {
        const {name , email , password} = req.body
        //check name was enterd
        if(!name){
            return res.json({
                error:'name is required'
            })
        }
        if(!password || password.length < 6){
            return res.json({
                error:'password is  required and should be at least 6 characters long'
            })
        }
        
        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error:'Email is taken already'
            })
        }

            const hashedPassword = await hashPassword(password)

        const user = await User.create({
            name ,
             email ,
              password: hashedPassword
        })

        return res.json(user)

    } catch (error) {
        console.log(error)
    }
}


const loginUser = async (req , res) =>{
    try {
        const {email , password} = req.body

        //check user exists
        const user = await User.findOne({email})

        if(!user){
            return res.json({
                error:'No user found'
            })
        }

        //check password match
        const match = await comparePassword(password , user.password)
        if(match){
            jwt.sign({email: user.email , id: user._id , name : user.name} , process.env.JWT_SECRET , { expiresIn: '1h' } , (err , token) => {
                if(err) throw err;
                console.log("Login User - JWT Token:", token);
                res.cookie('token', token, { httpOnly: true }).json(user)
                
            })
        }
        if(!match){
            res.json({error : "password do not match"})
        }
        
    } catch (error) {
        console.log(error)
    }
}



const getProfile  =async (req , res) => {
    const {token} = req.cookies
    if(token){
        jwt.verify(token , process.env.JWT_SECRET , {} , (err , user) => {
            if(err) throw err;
            res.json(user)
        })
    }else{
        res.json(null)
    }
}

const logoutUser = (req, res) => {
    res.clearCookie('token').json({ message: 'Logout successful' });
}





module.exports = {
    getProfile,
    test,
    registerUser,
    loginUser,
    logoutUser,
    
}