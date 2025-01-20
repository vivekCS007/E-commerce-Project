import React, { Fragment } from 'react';
import { BadgeCheck, ChartNoAxesCombined, LayoutDashboard, ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import './AdminSideBar.css';

const adminSidebarMenuItems = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        path: '/admin/dashboard',
        icon: <LayoutDashboard />
    },
    {
        id: 'products',
        label: 'Products',
        path: '/admin/products',
        icon: <ShoppingBasket />
    },
    {
        id: 'orders',
        label: 'Orders',
        path: '/admin/orders',
        icon: <BadgeCheck />
    },
];

function MenuItems({ setOpen }) {
    const navigate = useNavigate();
    return (
        <nav className="menu-items">
            {adminSidebarMenuItems.map(menuItem => (
                <div
                    key={menuItem.id}
                    onClick={() => {
                        navigate(menuItem.path);
                        setOpen && setOpen(false);
                    }}
                    className="menu-item"
                >
                    {menuItem.icon}
                    <span>{menuItem.label}</span>
                </div>
            ))}
        </nav>
    );
}

function AdminSideBar({ open, setOpen }) {
    const navigate = useNavigate();
    return (
        <Fragment>
            <div className={`sheet ${open ? 'open' : ''}`}>
                <div className="sheet-content">
                    <div className="sheet-header">
                        <div className="sheet-title">
                            <ChartNoAxesCombined size={30} />
                            <h1 className="admin-title">Admin Panel</h1>
                        </div>
                    </div>
                    <MenuItems setOpen={setOpen} />
                </div>
            </div>
            <aside className="admin-sidebar">
                <div onClick={() => navigate("/admin/dashboard")} className="sidebar-header">
                    <ChartNoAxesCombined size={30} />
                    <h1 className="admin-title">Admin Panel</h1>
                </div>
                <MenuItems />
            </aside>
        </Fragment>
    );
}

export default AdminSideBar;
