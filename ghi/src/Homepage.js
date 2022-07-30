import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function MainPage() {
    return (
        <>
            <div className="text-center">
                <h1 className='pt-4 display-3 fw-bold nameText'>Impulse</h1>
                <p className='siteText'>Your one stop shop for anything you might need 💖</p>
            </div>
            <div className='pb-5 container'>
                <div className='row'>
                    <div className='col b_cards me-3 shad_intense p-4 rounded mt-4 heliotrope_gray'>
                        <h1 className='nameText text-left'>Thing of The Month</h1>
                        <hr className="featurette-divider" />
                        <h3 className='siteText text-decoration-underline'>Rotary Cheese Grater!</h3>
                        <p className='nameText'>Over here at Impulse, two of our favorite things are cheese 
                            and aesthetics. The team thinks this hits both of those marks
                            wondefully and we can't wait for you to get it in this months
                            "Kitchen Wonders" box.
                        </p>
                        <hr className="featurette-divider" />
                        <img className="card b_cards shad_light" width="100%" height="80%" src='cheese_grater.jpg' alt='no clothes :(' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                    <div className='col b_cards ms-3 shad_intense p-4 rounded mt-4 heliotrope_gray'>
                        <h1 className='display-3 siteText text-right'>Style of The Month</h1>
                        <hr className="featurette-divider" />
                        <p className='nameText'>cheese</p>
                    </div>
                </div>
            </div>
            <Card className='ms-3 box_marg b_cards me-3 shad_intense rounded mt-1 heliotrope_gray'>
                <Card.Title>
                    <Card.Body>
                        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1" className=""></button>
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img className="" width="100%" height="500px" src='egg_cook.jpg' alt='no egg :(' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                                    <div className="container">
                                        <div className="nameText carousel-caption text-start almond">
                                            <h1>With our things box, you could get <i className='text-decoration-underline'>anything</i></h1>
                                            <p>Like a handy hard-boiled egg maker!</p>
                                            <p><NavLink to="things/"><button className="btn btn-lg almond ob_button" >See our stuff!🪀🔭🖌️</button></NavLink></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item active carousel-item-start">
                                <img className="" width="100%" height="500px" src='clothe_.png' alt='no clothes :(' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                                    <div className="container">
                                        <div  className="nameText carousel-caption almond">
                                            <h1 style={{ opacity: 1}}>Our style box ain't too shabby either...</h1>
                                            <p>Our stylists <i className='text-decoration-underline'>always </i>knows what makes you look the best.</p>
                                            <p><NavLink to="clothing/"><button className="btn btn-lg almond ob_button" >Check our styles!👕👗⌚</button></NavLink></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item carousel-item-next carousel-item-start">
                                    <svg className="bd-placeholder-img" width="100%" height="500px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                    <div className="container">
                                        <div className="carousel-caption nameText text-end almond">
                                            <h1>An Impulse Box is just a few clicks away.</h1>
                                            <p>What's stopping you?</p>
                                            <p><NavLink to="signup/"><button className="btn btn-lg almond ob_button" >Sign up today!📦📃✍🏽</button></NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card.Title>
            </Card>
        </>
    );
};

export default MainPage;
