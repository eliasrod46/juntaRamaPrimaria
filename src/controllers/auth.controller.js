import User from "../models/user.model.js";
import Role from "../models/role.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const { name,lastname,dni,username, email, password } = req.body;
    // check dni is a number;
    if (!Number(dni)){
      return res.status(400).json({
        message: ["The dni must be a number"],
      });
    }

    // check duplicate data
    const usernameFound = await User.findOne({ username });
    if (usernameFound){
      return res.status(400).json({
        message: ["The username is already in use"],
      });
    }
    const emailFound = await User.findOne({ email });
    if (emailFound){
      return res.status(400).json({
        message: ["The email is already in use"],
      });
    }
    const dniFound = await User.findOne({ dni:Number(dni) });
    if (dniFound){
      return res.status(400).json({
        message: ["The dni is already in use"],
      });
    }

    // seting 'user' role
    const role = await Role.findOne({name:'user'})
    
    // hashing the password
    const passwordHash = await bcrypt.hash(password, 10);
    
    // creating the user
    const newUser = new User({
        name,
        lastname,
        dni,
        username,
        email,
        password: passwordHash,
        active: true,
        roles:[role._id]
      });
      
      
      // saving the user in the database
      const userSaved = await newUser.save();
      
    // create access token
    const token = await createAccessToken({
      id: userSaved._id,
    });

    // setting cookie
    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // check user exist
    const userFound = await User.findOne({ username });
    if (!userFound)
      return res.status(400).json({
        message: ["The username does not exist"],
      });

    // check passowrod match
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    // create access token
    const token = await createAccessToken({
      id: userFound._id,
    });

    // setting cookie
    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
