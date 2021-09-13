const User = require('../models/User')
const jwt = require('jsonwebtoken');


const signUp = async (req, res) => {
    try{
    const {userName, email, password, roles} = req.body 
    //   const userFound =  User.find({email})
    const newUser =  new User({
        userName,
        email,
        password: await User.encryptPassword(password)
    })
     const saveUser =   await newUser.save();
    const token = jwt.sign({id: saveUser._id}, 'products-api' , {
         expiresIn: 86400 // un día
     })
     console.log(token)
        res.status(200).json({token})
        
    } catch (error) {
        console.log(error)
    }
}

const signIn = async (req, res) => {
    try{
        res.json('sig IN')

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    signUp,
    signIn
}