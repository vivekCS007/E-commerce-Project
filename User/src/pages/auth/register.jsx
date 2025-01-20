import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useToast } from "@/component/ui/use-toast";
import { registerUser } from "../../store/auth-slice";
import CommonForm from "@/component/common/form";
import { registerFormControls } from "@/config";
import "./register.css";
const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};



function handleRegisterSubmit() {
    console.log(formData); 
}

function AuthRegister() {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {toast} = useToast();
    function onSubmit() {
        // console.log(formData); 
        event.preventDefault();
        dispatch(registerUser(formData)).then((res)=>{
            // console.log(res);
            if (res?.payload?.success){
                toast({
                    title: res?.payload?.message,
                });
                navigate("/auth/login");
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
        <div className="auth-register-container">
            <div className="auth-register-header">
                <h1 className="auth-register-title">Create new account</h1>
                <p className="auth-register-subtitle">
                    Already have an account?
                    <Link className="auth-register-link" to="/auth/login">
                        Login
                    </Link>
                </p>
            </div>
            <CommonForm
                formData={formData}
                setFormData={setFormData}
                buttonText="Register"
                formControls={registerFormControls}
                onSubmit={handleRegisterSubmit}
            />
        </div>
    );
}

export default AuthRegister;
