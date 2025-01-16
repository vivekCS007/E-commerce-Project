// import { Outlet } from "react-router-dom";

// function AuthLayout() {
//     return (
//         <div className='flex min-h-screen w-full'>
//             <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
//                 <div className="max-w-md space-y-6 text-center text-primary-foreground">
//                     <h1 className="text-4xl font-extrabold tracking-tight">Welcome to the world</h1>
//                 </div>
//             </div>
//             <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
//                 <Outlet/>
//             </div>
//         </div>
//     );
// }

// export default AuthLayout;
import { Outlet } from "react-router-dom";
import "./auth-layout.css"; // Import your custom CSS file

function AuthLayout() {
    return (
        <div className="auth-layout">
            <div className="left-pane">
                <div className="content">
                    <h1>Welcome to the world</h1>
                </div>
            </div>
            <div className="right-pane">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;
