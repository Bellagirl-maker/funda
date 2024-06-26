
import React from 'react';
import Slides from '../inc/Slides';
import { Link } from 'react-router-dom';
import Vmc from './inc/Vmc';
import service1 from '../images/service1.jpeg'

const Home = () => {
  return (
    <div>
      <Slides />

    <section className='section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h3 className='main-heading'>Our Company</h3>
            <div className='underline mx-auto'></div>
           <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           <Link to="/about" className='btn btn-warning shadow'>Read More</Link>
          </div>
        </div>
      </div>
    </section>
    {/* vision, mission and values*/}
    <Vmc />
    {/* Our Services */}

    <section className='section border-top'>
    <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-5 text-center'>
            <h3 className='main-heading'>Our Services</h3>
            <div className='underline mx-auto'></div>
          </div>
          <div className='col-md-4'>
            <div className='card shadow'>
            <img src={service1} className='w-100 border-bottom' alt="services" />
              <div className='card-body'>
              <h6>Photography</h6>  
              <div className='underline'></div>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
              <Link to="/services" className='btn btn-link'>Read More</Link>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card shadow'>
            <img src={service1} className='w-100 border-bottom' alt="services" />
              <div className='card-body'>
              <h6>Services 1</h6>  
              <div className='underline'></div>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
              <Link to="/services" className='btn btn-link'>Read More</Link>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card shadow'>
            <img src={service1} className='w-100 border-bottom' alt="services" />
              <div className='card-body'>
              <h6>Services 1</h6>  
              <div className='underline'></div>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
              <Link to="/services" className='btn btn-link'>Read More</Link>
              </div>
            </div>
          </div>
          
          
          
        </div>
      </div>

    </section>
    
    </div>
  )
}

export default Home
