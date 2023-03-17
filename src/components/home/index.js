import React from 'react'
import Card from '../cart';
import Header from '../header';
import Main from '../main';
import './style.css'

function Home() {
    
  return (
    <div>
      <Header/>
      <div>
        <Main/>
        <Card/>
      </div>
    </div>
  )
}

export default  Home;
