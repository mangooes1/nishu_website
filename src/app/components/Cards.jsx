import React from 'react'
import '../styles/template.css';
const Cards = () => {
  return (
    <div className="container">
    <div className="row">
        <div className="col-lg-8 mx-auto text-center">
            <div className="card card-blog card-plain">
                <div className="position-relative">
                    <a className="d-block blur-shadow-image">
                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/devices-table.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg"/>
                    </a>
                </div>
                <div className="card-body px-0 pt-4">
                    <p className="text-gradient text-primary text-gradient font-weight-bold text-sm text-uppercase">Enterprise</p>
                    <a href="javascript:;">
                        <h4>
                            Siri brings hands-free TV to more devices
                        </h4>
                    </a>
                    <p>
                        Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward, rewind and more, without having to first invoke a specific skill, or even
                        press a button on their remote.
                    </p>
                    <button type="button" className="btn bg-gradient-primary mt-3">Read more</button>
                </div>
            </div>
        </div>
        <div className="col-lg-8 mx-auto text-center mt-5">
            <div className="card card-blog card-plain">
                <div className="position-relative">
                    <a className="d-block blur-shadow-image">
                        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/mic.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg"/>
                    </a>
                </div>
                <div className="card-body px-0 pt-4">
                    <p className="text-gradient text-warning text-gradient font-weight-bold text-sm text-uppercase">Music</p>
                    <a href="javascript:;">
                        <h4>
                            Shark Week: How to Watch It Scientist
                        </h4>
                    </a>
                    <p>
                        As Uber works through a huge amount of internal management turmoil, the company is also consolidating and rationalizing more of its international business. Today, the company announced it will be combining its rides-on-demand business
                        and UberEATS.
                    </p>
                    <button type="button" className="btn bg-gradient-warning mt-3">Read more</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cards
