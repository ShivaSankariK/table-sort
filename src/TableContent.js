/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { AppContext } from './context';
import './App.css';

export default function TableContent () {
   const {user, setUser} = useContext(AppContext);
    const handleClick = (event) => {
        var value = event.target.textContent;
        var sortedList = [];
        if(value === "Age"){
            sortedList = user?.sort((a,b) => a.age - b.age);
        } else if(value === "Name") {
            sortedList = user?.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        }
        setUser(() => [...sortedList]);
    }
    return (
        <div className="table" style={{marginTop:10}}>
           <table style={{border: "1px solid", borderCollapse: "collapse", width:500}}>
            <thead>
                <tr style={{border: "1px solid", borderCollapse: "collapse"}}>
                    <th onClick={(e) => handleClick(e)} style={{border: "1px solid", borderCollapse: "collapse", background:"grey"}}>S.No</th>
                    <th onClick={(e) => handleClick(e)} style={{border: "1px solid", borderCollapse: "collapse", cursor:"pointer", background:"lavender"}}>Name</th>
                    <th onClick={(e) => handleClick(e)} style={{border: "1px solid", borderCollapse: "collapse", cursor:"pointer", background:"lavender"}}>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item, index) => (
                        <tr style={{border: "1px solid", borderCollapse: "collapse"}}>
                            <td style={{border: "1px solid", borderCollapse: "collapse",background:"lightgrey"}}>{index + 1}</td>
                            <td style={{border: "1px solid", borderCollapse: "collapse"}}>{item.name}</td>
                            <td style={{border: "1px solid", borderCollapse: "collapse"}}>{item.age}</td>
                        </tr>
                    ))
                }
            </tbody>
           </table>
        </div>
    );
       
}