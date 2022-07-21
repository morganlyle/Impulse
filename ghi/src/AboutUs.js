// import React from 'react';
import Card from 'react-bootstrap/Card';


export default function AboutUs() {
    return (
      <>
      <h1 className='display-2 nameText text-center'>About Us</h1>
      <p className="lead mb-4 text-center">
        Here are some paragraphs about how we started.
      </p>
      <Card className='b_cards shad_intense p-4 rounded mt-4 heliotrope_gray'>
      {/* <div className='container'> */}
        {/* <div> */}
            <Card.Body className='inputText'>
            <Card.Title className='display-6 nameText'>About Impulse</Card.Title>
              One day we realized there was a market gap for buying more things, all together, every month. So we hatched Impulse! Now you can get arugula, crocs and ladders all in one convenient place. Every month.
            </Card.Body>
        {/* </div> */}
      </Card>
        {/* <div> */}
      <Card className='b_cards shad_intense p-4 rounded mt-4 heliotrope_gray'>
            <Card.Body className='inputText'>
            <Card.Title className='display-6 nameText'>About the Creators</Card.Title>
              Our names spell MEAN, nothing average about us.
            </Card.Body>
      </Card>
        {/* </div> */}

      {/* </div> */}
      </>
    );
}
