import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import About from './Components/About';
import Alert from './Components/Alert';

import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
   const [text,setenable]=useState('Dark Mode');

   const [nav_color,setnav_clr]=useState('light');

   const [alert,setalert]=useState(null);

   function showlAlert(msg,tp)
   {
      setalert(
        {
          message:msg,
          type:tp
        }
      );
   }
   function togglemod(){
     if(nav_color=='light')
     {

       setnav_clr('dark');
       setenable('Light Mode');
       document.body.style.backgroundColor='black';
       document.body.style.color='white';
       showlAlert("Dark mode has been enabled","success");
      }
      else
      {
        
        setnav_clr('light');
        setenable('Dark Mode');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        showlAlert("Light mode has been enabled","success");
     }
     setTimeout(() => {
       setalert(null);
     }, 4000);
     
   }

  return (
    <>
    
   <BrowserRouter>
<Navbar title='TextUtils' text_enable={text} switch={togglemod} them={nav_color}></Navbar>
<Alert Alert={alert}></Alert>
<Routes>
<Route path="/" element={<Text />} />
<Route path="about/*" element={<About />} />
          
        </Routes>
        </BrowserRouter>
{/* <Text></Text> */}
{/* <About></About> */}
    </>
  );
}

export default App;
