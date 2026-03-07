import React from 'react';
import Profilebar from '../../profile/Profilebar';

const ProfileLayout = ({children}) => {
  return (
    <div className='d-flex gap-3'>
      <Profilebar />
       <div>
      {children}
      </div>
    </div>
  );
};

export default ProfileLayout;