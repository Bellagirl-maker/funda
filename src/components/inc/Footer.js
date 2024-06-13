import React from 'react'

const Footer = () => {
  return (
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h6>Company Information</h6>
                    <hr />
                    <p>Lorem ipsum lorem lorem ipsum ipsum.Lorem ipsum lorem lorem ipsum ipsum.Lorem ipsum lorem lorem ipsum ipsum</p>
                </div>
                <div className='col-md-4'>
                    <h6>Quick Links</h6>
                    <hr />
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/">Home</Link></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
