import User from '../Models/Users.js';
import bcrypt from 'bcryptjs';
// ====================================================================
//  GET ALL USERS (all users list fetch)
// ====================================================================
export const getAllUsers = async (req, res) => {

  try {
    
    const users = await User.find({ role: { $ne: 'Admin' } });
    res.status(200).json(users);
  } catch (error) {
    
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};
// ADMIN ADD NEW USER
export const adminAddUser = async (req, res) => {

  try {
    const { name, email, phone, role, status } = req.body;

    //(Duplicate Validation)
    const userExists = await User.findOne({ email });
    
    if (userExists) {
      return res.status(400).json({ message: 'Email already registered!' });
    }

    // સિક્યોરિટી સ્ટેપ: ડિફોલ્ટ પાસવર્ડને લોક (Hash) કરવો
    const salt = await bcrypt.genSalt(10);
    // defualte password set 
    const hashedPassword = await bcrypt.hash('Welcome@123', salt);

    // database newuser crete function entery
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword, 
      phone,
      role,
      status
    });


    res.status(201).json({ 
      message: 'New User added successfully by Admin!', 
      user: newUser 
    });
    

  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// ====================================================================
// UPDATE USER DETAILS & STATUS 
// ====================================================================
export const updateUser = async (req, res) => {

  try {
    const { id } = req.params; 

    const { name, email, phone, status, role } = req.body;

    // 🔐 પાવરફુલ સિક્યોરિટી ચેક: એડમિન એકાઉન્ટને ડિએક્ટિવેટ થતું અટકાવવું
    if (role === 'Admin' && status === 'Deactivated') {
      return res.status(400).json({ message: 'You cannot deactivate an Admin profile!' });
    }

    // 🔄 ડેટાબેઝમાં લાઇન અપડેટ કરવી
    const updatedUser = await User.findByIdAndUpdate(
      id, // ૧. કયા યુઝરનો ડેટા બદલવો છે તેની આઇડી
      { name, email, phone, status, role }, 
      { new: true }
    );
    res.status(200).json({ message: 'User updated successfully!', user: updatedUser });

  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// ====================================================================
// DELETE USER
// ====================================================================
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; 

    // 🔍 સ્ટેપ 1 chek the user id 
    const user = await User.findById(id);    
    // 🔐 સ્ટેપ ૨:admin account safe
    if (user && user.role === 'Admin') {
      return res.status(400).json({ message: 'Admin account cannot be deleted from the system!' });
    }

    // 🗑️ સ્ટેપ 3 noramal user delete in database
    await User.findByIdAndDelete(id);

    res.status(200).json({ message: 'User deleted successfully!' });

  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};
