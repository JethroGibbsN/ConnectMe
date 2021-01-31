import react from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  HomeOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import profile1 from '../img/profile1.png'
import profile2 from '../img/profile2.png'
import profile3 from '../img/profile3.png'
import profile4 from '../img/profile4.png'
import Footer from '../layout/Layout.js'
function OnlinePage() {
    return (
      <div className="ChatPage">

<div className='center'>
          <button id="center" className="main-title"> Chess Players Online</button>    
        </div>

        <div className='center'> 
          <button className='paragraph'>Find someone who you would like to play chess with! </button>
        </div>

          <div className="hero"> 
          
              <a href= "http://localhost:3000/chess"><img  className="margin-fix" src={profile1} style={{width:"421px", height:"485px"}}/></a>
              <a href= "http://localhost:3000/chess"><img  className="margin-fix" src={profile2} style={{width:"421px", height:"485px"}}/></a>              
         
          
          </div>
      
      <Footer/>
      </div>
    );
  }
  
  export default OnlinePage;