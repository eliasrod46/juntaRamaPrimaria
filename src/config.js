export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1/mern-tasks";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";



//--Setting base roles
import Role from './models/role.model.js'
export const settingRoles = ()=>{
    const roles = ['admin', 'user', 'manager'] 
    roles.forEach(async role => {
      const findRole = await Role.findOne({name:role})
      if(!findRole){
        const newRole = await Role.create({name:role})
        newRole.save()
      }
    });
}