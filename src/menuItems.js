import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useContext } from 'react';
import { AppContext } from './context';

const MenuItems = () => {
    const { setUserName, username, userList, setUserAvailableState } = useContext(AppContext);
    const [name, setName] = useState("");
   

    const handleValChange =(event) =>{
        setName(event.target.value);
    }

    const handleSubmit =() =>{
        const filteredArray = userList.filter(item => (item.username === name));
        if(filteredArray.length > 0){
            setUserAvailableState(true);
            setUserName(filteredArray[0].name);
        }else {
            setUserAvailableState(false);
        }
    }

  return (
    <div>
         <div className="menubar">
        <nav className="navbar">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">About</a>
                <div className="submenu1">
                    <nav>
                        <li><a href="#">Mission</a></li>
                        <li className="hoverme"><a href="#">Vision</a>
                            <div className="submenu2">
                                <nav>
                                    <li><a href="#">category-1</a></li>
                                    <li><a href="#">category-2</a></li>
                                    <li><a href="#">category-3</a></li>
                                </nav>
                            </div>
                        </li>
                        <li><a href="#">Team</a></li>
                    </nav>
                </div>
            </li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </nav>
        </div>
        <input type="text" defaultValue={name} value={name} onChange={handleValChange}></input>
        <button onClick={handleSubmit}>submit</button>
       
    </div>
  );
};


export default MenuItems;
