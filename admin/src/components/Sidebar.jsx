import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPlusSquareFill } from "react-icons/bs";
import { VscChecklist } from "react-icons/vsc";
import { BsCardList } from "react-icons/bs";

const Sidebar = () => {
    return (
        <div className='w-1/5 min-h-screen border-r border-slate-900/10'>
            <div className='flex flex-col gap-10 pt-4 sm:pt-10 pl-[20%]'>
                <NavLink to={"/add"} className="flex items-center gap-x-2 cursor-pointer h-10 max-w-60 border border-slate-900/15 bg-transparent">
                    <BsPlusSquareFill />
                    <p className='hidden lg:flex'> Add Products</p>
                </NavLink>
                <NavLink to={"/list"} className="flex items-center gap-x-2 cursor-pointer h-10 max-w-60 border border-slate-900/15 bg-transparent">
                    <BsCardList />
                    <p className='hidden lg:flex'> Product List</p>
                </NavLink>
                <NavLink to={"/orders"} className="flex items-center gap-x-2 cursor-pointer h-10 max-w-60 border border-slate-900/15 bg-transparent">
                    <VscChecklist />
                    <p className='hidden lg:flex'> Orders</p>
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
