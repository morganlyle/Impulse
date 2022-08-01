import React from 'react'
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

export default function Carousel() {
    return (
        <>
            <Card className='ms-3 box_marg b_cards me-3 shad_intense rounded mt-1 heliotrope_gray'>
                <Card.Title>
                    <Card.Body>
                        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#myCarousel" data-ride='carousel' data-bs-slide-to="0" aria-label="Slide 1" className="active"></button>
                                <button type="button" data-bs-target="#myCarousel" data-ride='carousel' data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                                <button type="button" data-bs-target="#myCarousel" data-ride='carousel' data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="rounded b_cards" width="100%" height='500px' src='alicekeeb.jpg' alt='no egg :(' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                                    <div className="container">
                                        <div className="nameText carousel-caption">
                                            <h1 className='card bgoxford_blue almond'>With our things box, anything is possible.</h1>
                                            <p>Like these GMK Darling Keycaps (Keyboard not included) </p>
                                            <p><NavLink className='link-dark' to="things/"><button className="btn btn-lg almond ob_button" >See our stuff!🪀🔭🖌️</button></NavLink></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item carousel-item-next">
                                    <img className="rounded b_cards" width="100%" height="500px" src='clothing_rack.png' alt='no clothes :(' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                                    <div className="container">
                                        <div className="nameText fw-bold carousel-caption">
                                            <h1 className='card bgoxford_blue almond'>Our style box ain't too shabby either...</h1>
                                            <p>Our stylists <i className='text-decoration-underline'>always </i>knows what makes you look the best.</p>
                                            <p><NavLink className='link-dark' to="clothing/"><button className="btn btn-lg almond ob_button" >Check our styles!👕👗⌚</button></NavLink></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item carousel-item-next">
                                    <img className="rounded b_cards bd-placeholder-img" width="100%" height="500px" src='waveBG.png' alt='no egg :('></img>
                                    <div className="container">
                                        <div className="carousel-caption nameText">
                                            <h1 className='card bgoxford_blue almond'>An Impulse Box is just a few clicks away.</h1>
                                            <p>What's stopping you?</p>
                                            <p><NavLink className='link-dark' to="signup/"><button className="btn btn-lg almond ob_button" >Sign up today!📦📃✍🏽</button></NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card.Title>
            </Card>
        </>
    )
}
