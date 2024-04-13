import React from 'react';
import './App.css'

function Navleft() {
  return (
    <>
      <div className='Navleft'>
        <a className='logo' href='google.com'>Logo</a>
      </div>
    </>
  )
}

function Navcenter() {
  return (
    <>
      <div className='Navcenter'>
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Contact Us</h3>
        <h3>Services</h3>
      </div>
    </>
  )
}

function Navright() {
  return (
    <>
      <div className='Navright'>
        <h4>Login</h4>
        <h4>Signup</h4>
      </div>
    </>
  )
}

function Develco () {
  return (
    <h1 className='develco'>DevelCo</h1>
  )
}

function App() {
  return (
    <>
      <div className='Navbar'>
        <Navleft />
        <Navcenter />
        <Navright />
      </div>
      <div className='Body'>
        <img className='bodyimg' src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Develco />
        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero non debitis molestias repellat vero voluptate voluptatum unde cum, et numquam dolore reiciendis expedita consectetur suscipit ea tempore sequi laborum quibusdam.
        Dolore tenetur cum nihil iste neque aliquid, quasi vero nesciunt incidunt rem quibusdam! Magni autem natus quas, obcaecati eius commodi tempora praesentium saepe vitae delectus, ullam voluptatibus aspernatur, rem iure?
        Alias repellat exercitationem hic modi asperiores quidem blanditiis, repellendus nesciunt, quasi saepe aliquid. Illo, saepe praesentium dignissimos molestiae obcaecati suscipit placeat aut in recusandae qui id odit ad, incidunt dolorum.
        Eaque voluptas aspernatur fugit sunt tenetur, corrupti dolor, id quae nostrum sed animi ut! Cumque eius dignissimos itaque, id quia maxime sunt obcaecati minus esse? Animi temporibus asperiores doloremque commodi!</p>

      </div>
      <footer className='footer'>
        <h1>Footer </h1>
      </footer>
    </>
  )
}

export default App;