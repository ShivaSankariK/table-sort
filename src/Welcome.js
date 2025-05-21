import './App.css';
import React, { useContext } from 'react';
import { AppContext } from './context';


const Welcome = () => {
    const { username="" } = useContext(AppContext);
  return (
    <div>
        {`Welcome ${username}`}
      </div>
  );
};

export default Welcome;
