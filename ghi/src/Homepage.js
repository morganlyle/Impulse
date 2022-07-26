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
                        <h1 className='display-3 siteText text-left'>Thing of The Month</h1>
                        <hr className="featurette-divider" />
                        <p className='nameText'>Hell yeah</p>
                    </div>
                    <div className='col b_cards ms-3 shad_intense p-4 rounded mt-4 heliotrope_gray'>
                        <h1 className='display-3 siteText text-right'>Style of The Month</h1>
                        <hr className="featurette-divider" />
                        <p className='nameText'>cheese</p>
                    </div>
                </div>
            </div>
            <Card className='ms-3 b_cards me-3 shad_intense rounded mt-1 heliotrope_gray'>
                <Card.Title>
                    <Card.Body>
                        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img className="" width="100%" height="500px" src='egg_cook.jpg' alt='no bun :(' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                                    <div className="container">
                                        <div className="nameText carousel-caption text-start">
                                            <h1>With our things box, you could get <i className='text-decoration-underline'>anything</i></h1>
                                            <p>Like a handy hard-boiled egg maker!</p>
                                            <p><NavLink to="things/"><button className="btn btn-lg almond ob_button" >See our stuff!🪀🔭🖌️</button></NavLink></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item active carousel-item-start">
                                    <svg className="bd-placeholder-img" width="100%" height="500px" xmlns="https://cdn.shopify.com/s/files/1/0572/9724/0262/articles/How-To-Elevate-Your-Product-Photography-Using-Props_1800x.jpg?v=1625105650" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                    <div className="container">
                                        <div className="carousel-caption">
                                            <h1>Our style box ain't too shabby either...</h1>
                                            <p>Our stylists *always* knows what makes you look the best.</p>
                                            <p><NavLink to="clothing/"><button className="btn btn-lg almond ob_button" >Check our styles!👕👗⌚</button></NavLink></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item carousel-item-next carousel-item-start">
                                    <svg className="bd-placeholder-img" width="100%" height="500px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                    <div className="container">
                                        <div className="carousel-caption text-end">
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
