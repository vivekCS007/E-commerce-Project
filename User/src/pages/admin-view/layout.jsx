// import { Outlet } from "react-router-dom";
// import AdminHeader from "./header";
// import AdminSideBar from "./side-bar";

// function AdminLayout(){
//     return(
//         <div className="flex min-h-screen w-full">
//             <AdminSideBar/>
//             <div className="flex flex-l flex-col">
//                <AdminHeader/>
//                 <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
//                     <Outlet/>
//                 </main>
//             </div>
//         </div>
//     );
// }
// export default AdminLayout;

import React from 'react';
import './AdminLayout.css'; // Import the CSS file

function AdminLayout() {
    return (
        <div className="admin-layout">
            <div className="admin-sidebar">
                <AdminSideBar />
            </div>
            <div className="admin-main">
                <div className="admin-header">
                    <AdminHeader />
                </div>
                <main className="admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
