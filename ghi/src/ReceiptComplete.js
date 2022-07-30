import React from 'react'
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


export default function ReceiptComplete() {

    const bunList = [
        'buns.png',
        'clothe_.png'
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
                            <span className="nameText">Your cart</span>
                            <span className="badge bgcolor xiketic rounded-pill shad_intense">3</span>
                        </h4>
                        <Card className='bgcolor p-4 b_cards shad_light'>
                            <ul className="list-group">
                                <li className="list-group-item  d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Product name</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$12</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Second product</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$8</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Third item</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Promo code</h6>
                                        <small>EXAMPLECODE</small>
                                    </div>
                                    <span className="text-success">-$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>
                        </Card>
                        <form className=" mt-5 card bgcolor p-2 b_cards shad_light">
                            <div className="input-group">
                                <input type="text" id='promo' className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                        <button className="text-right btn bgcolor mt-5 btn-lg b_cards shad_light" type="submit">Continue to checkout</button>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <Card className='d-inline-flex pt-1 mb-4 align-items-center bgcolor b_cards shad_light'>
                            <h6 className='mx-3 nameText'>You're allllllmost there, we just need a few details first!</h6>
                        </Card>
                        <h4 className="mb-3 siteText">Billing address</h4>
                        <form noValidate="" />
                        <Card className='bgcolor p-4 b_cards shad_light'>
                            <div className="row g-3 nameText">
                                <h1>Your box will be shipping soon!</h1>
                                <p>The team over at Impulse is very small and needs some time to assemble your box for you! <br />
                                    We know you want all your very cool stuff as fast as possible and we're trying our best <br />
                                    to deliver these boxes as fast as we can to you: our valued, impulsive customer 💖 <br />
                                    <br />
                                    In the meantime, here's a picture of two bunnies kissing, it's cute.
                                </p>
                            </div>
                            <img className='bd-placeholder-img' width="100%" height="100%" src='egg_cook.jpg' alt='no clothes :('></img>
                        </Card>
                    </div>
                </div>
            </Card>
        </>
    );
};
