import React from 'react'

const ContentHeader = ({ title, description }) => (
    <div className='contentHeader'>
      <h1 className='title'>{title}</h1>
      <p className='description'>{description}</p>
    </div>
);

export default ContentHeader;
