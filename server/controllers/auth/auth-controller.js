const user = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//new user
const registerUser = async (req, res) => {
    // res.send("register")
    const { userName, email, password } = req.body;
    try {
        const checkUser = await user.findOne({ email });
        if (checkUser)
            return res.json({
                success: false,
                message: "User already exist",
            });

        const hashPassword = await bcrypt.hash(password, 15);
        const newuser = await user.create({
            userName,
            email,
            password: hashPassword
        });
        await newuser.save();
        res.status(201).json({
            message: "user created successfully",
            success: true,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "something went wrong",
            success: false,
        });
    }
}

//login
const loginUser = async (req, res) => {
    // res.send("login")
    const { email, password } = req.body;
    try {
        const verifyUser = await user.findOne({ email });
        if (!verifyUser)
            return res.json({
                success: false,
                message: "User doesn't exist",
            });

        const verifyPasswordMatch = await bcrypt.compare(
            password,
            verifyUser.password
        );
        if (!verifyPasswordMatch)
            return res.json({
                success: false,
                message: "Password doesn't match",
            });

        const token = jwt.sign({
            email: verifyUser.email,
            id: verifyUser._id,
            userName: verifyUser.userName,
            role: verifyUser.role,
        },"UserSecretKey",
            {expiresIn: "1d"}
        );

        res.cookie("token", token, {
            secure:false,
            httpOnly: true,
        }).json({
            success: true,
            message: "User logged in successfully", 
            user: {
                email: verifyUser.email,
                userName: verifyUser.userName,
                role: verifyUser.role,
                id: verifyUser._id
            }
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "something went wrong",
            success: false
        });
    }
}


//logout

const logoutUser = (req, res) => {
    res.clearCookie("token").json({
      success: true,
      message: "User logged out successfully",
    });
  };
  


//auth middleware
const authMiddleware=async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Please login first"
        })
    }
    try{
        const decoded=jwt.verify(token,"UserSecretKey");
        req.user=await user.findById(decoded.id);
        next();
    }
    catch(err){
        return res.status(401).json({
            success:false,
            message:"Please login first"
        })
    }
}


module.exports = {
    authMiddleware,
    logoutUser,
    registerUser,
    loginUser,
}