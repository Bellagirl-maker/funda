import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='section footer bg-dark text-white'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h6>Company Information</h6>
                    <hr />
                    <p className='text-white'>Lorem ipsum lorem lorem ipsum ipsum.Lorem ipsum lorem lorem ipsum ipsum.Lorem ipsum lorem lorem ipsum ipsum</p>
                </div>
                <div className='col-md-4'>
                    <h6>Quick Links</h6>
                    <hr />
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About Us</Link></div>
                    <div><Link to="/contact">Contact Us</Link></div>
                    <div><Link to="/Services">Services</Link></div>
                </div>
                <div className='col-md-4'>
                    <h6>Contact Information</h6>
                    <hr />
                    <div><p className='text-white mb-1'>No.8 Boulevard street</p></div>
                    <div><p className='text-white mb-1'>Atlanta AT 478</p></div>
                    <div><p className='text-white mb-1'>United States</p></div>
                    <div><p className='text-white mb-1'>email@domain.com</p></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
