import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SubscriptionsPage() {
    return (
        <>
            <h1 className='text-center display-2 mt-3 nameText'>Subscription Boxes</h1>
            <hr className="featurette-divider" />
            <div className='pb-5 container'>
                <div className='row'>
                    <div className='col b_cards me-3 shad_bottom p-4 rounded mt-4 heliotrope_gray'>
                        <h1 className='display-3 siteText text-left'>Things Box</h1>
                        <NavLink to="/checkout" className='btn btn-light almond ob_button text-right'>Add to Cart!</NavLink>
                        <hr className="featurette-divider" />
                        <h3 className='siteText text-decoration-underline'>Universal Cat Ears for Headset</h3>
                        <p className='nameText'>Over here at Impulse, our memory isn't exactly what you'd call the best
                            but we're sure to never forget a thing with these Field Notes notepads and wallets. <br /> <br />
                            Cute Straps wraps around the headset and connects to its self. And It is widely applicable for the different headphones between the width of 1.1 inch to 1.5 Inch
                            Special kitty ears make you look super cute. Fits great on the headset, cute decoration attachment for the conventional dull gaming headsets. Only available in this month's "Back-To-Basics" Things Box.
                        </p>
                        <hr className="featurette-divider" />
                        <img className="card b_cards shad_light" width="100%" height="80%" src='https://m.media-amazon.com/images/I/515QgxNovlL._AC_SX679_.jpg' alt='no clothes :(' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>

                    <div className='col b_cards ms-3 shad_bottom p-4 rounded mt-4 heliotrope_gray'>
                        <h1 className='display-3 siteText text-right'>Styles Box</h1>
                        <NavLink to="/checkout" className='btn btn-light almond ob_button text-left'>Add to Cart!</NavLink>
                        <hr className="featurette-divider" />
                        <h3 className='siteText text-decoration-underline'>Coral Fleece Socks - Cat Paw Socks</h3>
                        <p className='nameText'> Cozy cat claw socks feature:
                            The cozy cat paw socks are most common size, there is no worry that the socks are too big or too small, the elasticity is good, and you can give your feet enough warmth in winter. <br />
                            <br />
                            Stylish and warm: the pattern is lovely, the material is soft, it brings warmth to your ankles, the height of the socks can reach above the ankles, giving you the most comfortable warmth in winter.Socks with non-slip footprints; only availble in this month's "Pop" Styles box.
                        </p>
                        <hr className="featurette-divider" />
                        <img className="card b_cards shad_light" width="100%" height="80%" src='https://m.media-amazon.com/images/S/aplus-media/sc/f14fbaa2-0a19-4c88-9548-82d9fe7d9010.__CR0,0,970,600_PT0_SX970_V1___.jpg' alt='no clothes :(' aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
            </div>
        </>
    );
};
