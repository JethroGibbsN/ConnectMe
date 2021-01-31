
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
import './Chat.css'
import profile1 from '../img/profile1.png'
import profile2 from '../img/profile2.png'
import profile3 from '../img/profile3.png'
import profile4 from '../img/profile4.png'


import Footer from  '../layout/Layout.js';
import Demo from '../Chess/Demo'
import './Chat.css'


function ChatPage() {
    return (
      <div className="ChatPage">
        <div className='center'>
          <button id="center" className="main-title"> Chess Game</button>    
        </div>

        <div className='center'> 
          <button className='paragraph'>You can now play a match tournamet with your new friend! </button>
        </div>

      <Demo/>

      <Footer/>
      </div>
    );
  }
  
  export default ChatPage;
