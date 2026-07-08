import User from '../Models/Users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// New user registration 
export const registerUser = async(req,res) =>{
    try{
        const {name,email,password,phone} = req.body;
        
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:'Email already registered!'});
        }
        
        const totalUserDB = await User.countDocuments({});

        let finalRole = 'User';
        let finalStatus = 'Active';
        
        if(totalUserDB === 0){
            finalRole = 'Admin';
            finalStatus = 'Active';
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create({
            name,
            email,
            password:hashPassword,
            phone,
            role:finalRole,
            status:finalStatus
        });
        
        res.status(201).json({
            message: 'User registered successfully!',
            user: {id: newUser._id, name: newUser.name, role: newUser.role, status: newUser.status}
        });
    }catch(error){
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

// Login users function 
export const loginUser = async(req,res) =>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message:'invalid email and password!'});
        }
          
        const ismatch = await bcrypt.compare(password,user.password);
        if(!ismatch){
            return res.status(400).json({message:'invalid email and password!'});
        }

        if(user.status === 'Deactivated'){
            return res.status(400).json({message:'your account is deactivated! please contact admin'});
        }

        const today = new Date().toDateString('en-CA');
        user.lastLogin = today;
        await user.save();

        const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        );

        res.status(200).json({
            message:'Login successfully!',
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                status:user.status
            }
        });
    }catch(error){
        res.status(500).json({message:'server error' + error.message});
    }
}
