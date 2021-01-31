import React from 'react';
import'./FooterMenu.css'

// import NewsIcon from './img/news-icon.png';
// import LeavesIcon from './img/leaves-icon.png';
// import PlusIcon from './img/plus-icon.png';
const Footer = () => {
    return(
        <div> 
            <footer className='footer'>
                <div className='hero center'> 
                    <a href= "http://localhost:3000/"className='button-style'>
                        Activities
                    </a>
                    <a href= "http://localhost:3000/chess" className='button-style'>
 
                        Chat
                    </a>
                    <a href="#" className='button-style'>
                       
                     People Online
                    </a>
                </div>
            </footer>
        </div>
    );

};

export default Footer;
// <img id='plus-icon' src={PlusIcon}  />
// <img id='news-icon' src={NewsIcon}  />
// <img id='leaves-icon' src={LeavesIcon} />
// <Content style={{ margin: '0 16px' }}>
// <Breadcrumb style={{ margin: '16px 0' }}>
//   <Breadcrumb.Item>User</Breadcrumb.Item>
//   <Breadcrumb.Item>Bill</Breadcrumb.Item>
// </Breadcrumb>
// <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//   Bill is a cat.
// </div>
// </Content>
// <Layout className="site-layout">
// <Header className="site-layout-background" style={{ padding: 0 }} />

// <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
// </Layout>