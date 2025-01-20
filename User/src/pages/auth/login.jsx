import { Link } from "react-router-dom";
import CommonForm from "@/component/common/form";
import { loginFormControls } from "@/config";
import "./login.css";
import { useState } from "react";
import { useDispatch } from "react-redux"; 
import { loginUser } from "../../store/auth-slice";
import { useToast } from "@/component/ui/use-toast";
const initialState = {
    email: "",
    password: "",
};

function AuthLogin() {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    function onSubmit(e) {
        e.preventDefault();
        dispatch(loginUser(formData)).then((res)=>{
            // console.log(res);
            if (res?.payload?.success){
                toast({
                    title: res?.payload?.message,
                });
            }
            else{
                toast({
                    title: res?.payload?.message,
                    variant: "destructive",
                });
            }
        });
    }
    return (
        <div className="auth-login-container">
            <div className="auth-login-header">
                <h1 className="auth-login-title">Login</h1>
                <p className="auth-login-subtitle">
                    New here?
                    <Link
                        className="auth-login-link"
                        to="/auth/register"
                    >
                        Register
                    </Link>
                </p>
            </div>
            <CommonForm
                formControls={loginFormControls}
                buttonText="Login"
                formData={initialState}
                setFormData={() => {}}
                onSubmit={() => {}}
            />
        </div>
    );
}

export default AuthLogin;
