import Admin from '../models/adminSchema.js';
// import User from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// const createAdmin = async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const existingAdmin = await Admin.findOne({ username });

//         if (existingAdmin) {
//             return res.status(409).json({ message: 'Admin with this phone number already exists.' });
//         }

//         const saltRounds = 10;
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//         const newAdmin = new Admin({
//             username,
//             password: hashedPassword,
//         });

//         const savedAdmin = await newAdmin.save();

//         res.status(201).json({ message: 'Admin created successfully'});
//     } catch (error) {
//         res.status(400).json({ message: 'Error creating admin', error: error.message });
//     }
// };


// const createUser = async (req, res) => {
//     const { username, phoneNumber, emailId, role, status, password } = req.body;

//     try {
//         const existingUser = await User.findOne({ phoneNumber });
//         if (existingUser) {
//             return res.status(409).json({ message: 'user with this phone number already exists.' });
//         }

//         const saltRounds = 10;
//         const hashedPassword = await bcrypt.hash(password, saltRounds);
//         let userRole;
//         if (Array.isArray(role) && role.includes('digital-advisor') && role.includes('farm-advisor')) {
//             userRole = 'both';
//         } else {
//             userRole = Array.isArray(role) ? role : [role]; 
//         }
//         const newUser = new User({
//             username,
//             phoneNumber,
//             emailId,
//             role:userRole,
//             status,
//             password: hashedPassword,
//         });

//         const savedUser = await newUser.save();

//         res.status(201).json({ message: 'user created successfully', user: savedUser });
//     } catch (error) {
//         res.status(400).json({ message: 'Error creating user', error: error.message });
//     }
// };


const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const accessToken = jwt.sign(
            { id: admin._id, isSuperAdmin: admin.isSuperAdmin },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }
        );

        const refreshToken = jwt.sign(
            { id: admin._id, isSuperAdmin: admin.isSuperAdmin },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({
            message: 'Login successful',
            admin: { username: admin.username, isSuperAdmin: admin.isSuperAdmin },
            accessToken,
            refreshToken,
        });
    } catch (error) {
        res.status(500).json({ message: 'Login error', error: error.message });
    }
};


// const getUsers = async (req, res) => {
//     try {

//         const query = {};
//         if (req.body.status) {
//             query.status = req.body.status; 
//         }

//         if (req.body.role) {
//             query.role = req.body.role; 
//         }

//         const users = await User.find(query,{_id:0,password:0});

//         res.status(200).json({ message: 'Users fetched successfully', users });
//     } catch (error) {
//         res.status(500).json({ message: 'Get users error', error: error.message });
//     }
// };


export default {
    // createAdmin,
    // createUser,
    loginAdmin,
    // getUsers,
};
