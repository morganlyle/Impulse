import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const getOrderNumber = (min, max) =>
        Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [orderNumber, setOrderNumber] = useState(getOrderNumber(1, 1000000));
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const data = {
            firstName,
            lastName,
            username,
            email,
            address,
            address2,
            country,
            state,
            zip,
            orderNumber,
        }
        console.log(data);
        const receiptUrl = `${process.env.REACT_APP_SUBSCRIPTIONS}/api/receipts/`

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(receiptUrl, fetchConfig);
        if (response.ok) {
            const newReceipt = await response.json();
            console.log("New receipt generated: ", newReceipt)
            navigate('/receipt');
        }
    }



    return (
        <>
            <Card style={{ marginTop: '50px', marginBottom: '150px' }} className='heliotrope_gray b_cards shad_bottom'>
                <div style={{ padding: '50px' }} className="row g-5 nameText font-weight-bold">
                    <div className='b_cards p-3 text-center rounded siteText display-2 shad_bottom'>Checkout</div>
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="nameText">Your cart</span>
                            <span className="badge bgcolor xiketic rounded-pill shad_intense">1</span>
                        </h4>
                        <Card className='bgcolor p-4 b_cards shad_light'>
                            <ul className="list-group">
                                <li className="list-group-item  d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Impulse Box</h6>
                                        <small className="text-muted">A box of lovely treasures, headed your way! 🎁📨📪</small>
                                    </div>
                                    <span className="text-muted">$32</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$36.99</strong>
                                    <strong>Free Shipping!</strong>
                                </li>
                            </ul>
                        </Card>
                        <form className=" mt-5 card bgcolor p-2 b_cards shad_light">
                            <div className="input-group">
                                <label className="me-3 form-label">Order Number</label>
                                <input readOnly onChange={e => setOrderNumber(e.target.value)} value={orderNumber} type="text" className="form-control" id="zip" placeholder="" required="" />
                            </div>
                        </form>
                        <button
                            form='create-Receipt-form' className="text-right btn bgcolor mt-5 btn-lg b_cards shad_light" type="submit">Get your box!
                        </button>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <Card className='d-inline-flex pt-1 mb-4 align-items-center bgcolor b_cards shad_light'>
                            <h6 className='mx-3 nameText'>You're allllllmost there, we just need a few details first!</h6>
                        </Card>
                        <h4 className="mb-3 siteText">Billing address</h4>
                        <form onSubmit={handleSubmit} id='create-Receipt-form'>
                        <Card className='bgcolor p-4 b_cards shad_light'>
                            <div className="row g-3 nameText">
                                <div className="col-sm-6">
                                    <label className="form-label">First name</label>
                                    <input onChange={e => setFirstName(e.target.value)} value={firstName} type="text" className="form-control" id="firstName" placeholder="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Last name</label>
                                    <input onChange={e => setLastName(e.target.value)} value={lastName} type="text" className="form-control" id="lastName" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input onChange={e => setUsername(e.target.value)} value={username} type="text" className="form-control" id="username" placeholder="Username" required="" />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Address</label>
                                    <input onChange={e => setAddress(e.target.value)} value={address} type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                    <input onChange={e => setAddress2(e.target.value)} value={address2} type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                </div>
                                <div className="col-md-5">
                                    <label className="form-label">Country</label>
                                    <select onChange={e => setCountry(e.target.value)} value={country} className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">State</label>
                                    <select onChange={e => setState(e.target.value)} value={state} className="form-select" id="state" required="">
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Zip</label>
                                    <input onChange={e => setZip(e.target.value)} value={zip} type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>
                        </Card>
                        </form>
                    </div>
                </div>
            </Card>
        </>
    );
};
