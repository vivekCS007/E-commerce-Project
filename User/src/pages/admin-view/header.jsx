import React from 'react';
import { AlignJustify } from "lucide-react";
import './AdminHeader.css';

function AdminHeader({ setOpen }) {
    return (
        <header className="admin-header">
            <button onClick={() => setOpen(true)} className="menu-button">
                <AlignJustify />
                <span className="sr-only">Toggle Menu</span>
            </button>
            <div className="logout-container">
                <button className="logout-button">
                    <LogOut />
                    Logout
                </button>
            </div>
        </header>
    );
}

export default AdminHeader;
