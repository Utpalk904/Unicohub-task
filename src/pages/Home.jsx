import React from 'react'
import Header from '../sections/Header';
import CompanySection from './CompanySection';
import Product1 from '../sections/Product1';
import { subSection1, subSection2 } from '../constants/constant';
import Team from '../sections/Team';

const Home = () => {
  return (
    <div>
      <Header />
      <CompanySection />
      <Product1 subSection={subSection1}/>
      <Team />
      <Product1 subSection={subSection2}/>
    </div>
  )
}

export default Home;