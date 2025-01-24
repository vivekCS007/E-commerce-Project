import React from 'react';
import {Button} from "../ui/button";
import { AlignJustify ,LogOut} from "lucide-react";
import './AdminHeader.css';
import { useDispatch } from 'react-redux';

function AdminHeader({ setOpen }) {

    const dispatch = useDispatch();

    function handleLogout() {
        dispatchEvent(logoutUser());

    }
    return (
        <header className="admin-header">
            <button onClick={() => setOpen(true)} className="menu-button">
                <AlignJustify />
                <span className="sr-only">Toggle Menu</span>
            </button>
            <div className="logout-container">
                <button onClick={handleLogout}className="logout-button">
                    <LogOut />
                    Logout
                </button>
            </div>
        </header>
    );
}

export default AdminHeader;
