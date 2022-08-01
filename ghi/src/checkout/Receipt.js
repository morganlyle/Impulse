import React from 'react'
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';


export default function Receipt() {

    const bunList = [
        'buns.png',
        'buns1.png',
        'buns2.png',
        'buns3.png',
        'buns4.png'
    ];

    const randBun = bunList[Math.floor(Math.random() * bunList.length)];
    console.log(randBun);

    return (
        <>
            <Card style={{ marginTop: '50px', marginBottom: '150px' }} className='heliotrope_gray b_cards shad_intense'>
                <div style={{ padding: '50px' }} className="row g-5 nameText font-weight-bold">
                    <div className='b_cards p-3 text-center rounded siteText display-2 shad_lighter'>You're all set!</div>
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="nameText">Told ya'.</span>
                        </h4>
                        <Card className='bgcolor p-4 b_cards shad_light'>
                            <div className='b_cards rounded'>
                                <img  width="100%" height="80%" src={randBun} alt='no egg :('></img>
                            </div>
                        </Card>
                        <NavLink className='link-dark' to='/'>
                            <button className="text-right btn bgoxford_blue almond mt-5 btn-lg b_cards shad_light" type="button">Return to Home</button>
                        </NavLink>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <Card className='d-inline-flex pt-1 mb-4 align-items-center bgcolor b_cards shad_light'>
                            <h6 className='mx-3 nameText'>Thank you so much for choosing Impulse!</h6>
                        </Card>
                        <Card className='bgcolor p-4 b_cards shad_light'>
                            <div className="row g-3 nameText">
                                <h1>Your box will be shipping soon!</h1>
                                <p>The team over at Impulse is very small and needs some time to assemble your box for you! <br />
                                    We know you want all your very cool stuff as fast as possible and we're trying our best <br />
                                    to deliver these boxes as fast as we can to you: our valued, impulsive customer 💖 <br />
                                    <br />
                                    In the meantime, here's some pictures of bunnies... They're pretty cute.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>
        </>
    );
};

