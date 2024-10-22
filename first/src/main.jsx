/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
//import React from 'react'
import React from 'react';
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}
/*
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}
  */
const anotherElement =(
  <a href="https://google.com" target='blank'>visit google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'click me to visit google',

  anotherUser
)
ReactDom.createRoot(document.getElementById('root')).render(
  
reactElement
    
)
