import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function MainPage() {
    return (
        <>
            <h1 className='pt-2 ms-5 display-3 text-center fw-bold nameText'>Impulse</h1>
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
            <Card className='ms-3 box_marg b_cards me-3 shad_intense rounded mt-1 heliotrope_gray'>
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
                                    <svg className="bd-placeholder-img" width="100%" height="500px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                    <div className="container">
                                        <div className="carousel-caption text-start">
                                            <h1>Example headline.</h1>
                                            <p>Some representative placeholder content for the first slide of the carousel.</p>
                                            <p><NavLink className="btn btn-lg btn-primary" to="#">Sign up today</NavLink></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item active carousel-item-start">
                                    <svg className="bd-placeholder-img" width="100%" height="500px" xmlns="https://cdn.shopify.com/s/files/1/0572/9724/0262/articles/How-To-Elevate-Your-Product-Photography-Using-Props_1800x.jpg?v=1625105650" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                    <div className="container">
                                        <div className="carousel-caption">
                                            <h1>Another example headline.</h1>
                                            <p>Some representative placeholder content for the second slide of the carousel.</p>
                                            <p><NavLink className="btn btn-lg btn-primary" to="#">Learn more</NavLink></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item carousel-item-next carousel-item-start">
                                    <svg className="bd-placeholder-img" width="100%" height="500px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                    <div className="container">
                                        <div className="carousel-caption text-end">
                                            <h1>One more for good measure.</h1>
                                            <p>Some representative placeholder content for the third slide of this carousel.</p>
                                            <p><NavLink className="btn btn-lg btn-primary" to="#">Browse gallery</NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </Card.Body>
                </Card.Title>
            </Card>
        </>
    );
};

export default MainPage;
