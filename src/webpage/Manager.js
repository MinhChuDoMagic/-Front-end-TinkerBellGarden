import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSidebar from '../components/staff/adminSidebar/adminSidebar';
import StaffManage from './components/staff/staffManage/staffManage';

export default function Manager() {
  return <div className='mana'>
      <AdminSidebar/>
      <div>
      <Routes>
        <Route exact path="/staff" element={<StaffManage/>}></Route>
      </Routes>
      </div>
      
  </div>;
}
