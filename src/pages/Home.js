import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={'airpods'}  heading={"Top's Airpods"}/>
      <HorizontalCardProduct category={'watches'} heading={"Top's Wathes"}/>
      <VerticalCardProduct category={'mobiles'} heading={"Mobiles"}/>
      <VerticalCardProduct category={'mouse'} heading={"Mouse"}/>
      <VerticalCardProduct category={'telivision'} heading={"Telivision"}/>
      <VerticalCardProduct category={'camera'} heading={"Camera & Photography"}/>
      <VerticalCardProduct category={'earphones'} heading={"Wire Earphone"}/>
      <VerticalCardProduct category={'speakers'} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={'refrigerator'} heading={"Rafrigerator"}/>
      <VerticalCardProduct category={'trimmers'} heading={"Trimmers"}/>
      
    </div>
  )
}

export default Home