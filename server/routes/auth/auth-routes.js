import { Router } from 'express';
const router=Router();
import { logoutUser,authMiddleware,loginUser, registerUser } from '../../controllers/auth/auth-controller';

router.post('/logout',logoutUser);
router.get('/check-auth',authMiddleware,(req,res)=>{
    const user=req.user;
    res.status(200).json({
        success:true,
        message:"User is authenticated",
        user
    })
});
router.post('/login',loginUser);
router.post('/register',registerUser);
export default router;