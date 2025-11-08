import React from 'react';
import '../App.css';
import Header from '../components/header';
import Intro from '../components/intro-text';
import Number from '../components/number';
import Entrepreneurship from '../components/entrepreneurship';
import Wanderlust from '../components/wanderlust';
import Leadership from '../components/thought-leadership';
import Commercial from '../components/commercial';
import Social from '../components/social';
import Footer from '../components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <div>
      
     <Header/>
     <Intro/>
     <Number/>
     <Entrepreneurship/>
     <Wanderlust/>
     <Commercial/>
     <Leadership/>
     <Social/>
     <Footer/>
    </div>
  )
}

export default Home