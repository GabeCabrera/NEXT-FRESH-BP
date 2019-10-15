import React from 'react';
import Nav from '../components/nav';
import ContentHeader from '../components/contentHeader';
import '../styles/master.css';

const Contact = () => ( 
    <div>
      <Nav />
      <ContentHeader title="Contact Us" description="Consectetur adipiscing elit. Pellentesque lobortis."/>
      <div className="contentBody">   
        <a href="https://github.com/GabeCabrera/next-fresh-bp/issues">Please leave any issues here</a>
      </div>
    </div>
);

export default Contact;
