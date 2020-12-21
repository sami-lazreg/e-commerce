import React from 'react'
import electro from '../electromenager.jpg'
import pc from '../pc.jpg'
import phone from '../phone.jpg'
import tablette from '../tablette.jpg'
import accessoires from '../acessoires.jpg'
import photocopier from '../photocopier.jpg'
import homecinema from '../homecinema.jpg'
import tv from '../tv.jpg'
import recepteur from '../recepteur.jpg'
import CarouselPage from './CarousalPage'
import CarouselLogo from './CarouselLogo'
import News from './News'
const Home = () => {
   
    return (
      <div style={{height:3000}}>
       <CarouselPage />
      <div className='offres'>
        <h1>NOS OFFRES</h1>
        <div className='container mt-5'>
        <div className='row text-center' >
          <div className='col-sm-6 col-md-4 my-2'>
            <img src={electro} className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2'>
            <img src={pc} className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2'>
            <img src={phone}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2'>
            <img src={tablette}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2'>
            <img src={accessoires}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2'>
            <img src={photocopier}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2'>
            <img src={homecinema}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2'>
            <img src={recepteur}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 '>
            <img src={tv}  className=' img-thumbnail image'  />
          </div>
        </div>
        </div>
      </div>
      <CarouselLogo/>
      <News/>
      </div>
    )
}

export default Home
