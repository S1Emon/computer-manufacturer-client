import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-3xl text-orange-600 font-bold text-center mt-4'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/history">My History</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;