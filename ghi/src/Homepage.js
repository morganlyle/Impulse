import React from 'react';
import Card from 'react-bootstrap/Card';

function MainPage() {
    return (
        <>
            {/* <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-3 fw-bold nameText">Impulse</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead siteText mb-4">
                        The #1 subscription box for Impulsive people!
                    </p>
                </div>
            </div> */}
            <h1 className='pt-2 ms-5 display-3 text-center fw-bold nameText'>Impulse</h1>
            <div className='pb-5 container'>
                <div className='row'>
                    <div className='col b_cards me-3 shad_intense p-4 rounded mt-4 heliotrope_gray'>
                        <h1 className='display-3 siteText text-left'>Things Box</h1>
                        <button className='btn btn-light almond ob_button text-right'>Add to Cart!</button>
                    </div>
                    <div className='col b_cards ms-3 shad_intense p-4 rounded mt-4 heliotrope_gray'>
                        <h1 className='display-3 siteText text-right'>Styles Box</h1>
                        <button className='btn btn-light almond ob_button text-left'>Add to Cart!</button>
                    </div>
                </div>
            </div>
            <Card className='ms-3 b_cards me-3 shad_intense p-4 rounded mt-1 heliotrope_gray'>
                <Card.Title>
                    <Card.Body>
                        wheeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                        wheeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                    </Card.Body>
                </Card.Title>
            </Card>
        </>
    );
}

export default MainPage;
