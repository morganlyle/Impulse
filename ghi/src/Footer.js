import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon, MDBInput,
    MDBCol, MDBRow,
    MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center' color='#0D0C1D' >
            <div className='text-center p-3' style={{ backgroundColor: '#aa98a9' }}>
                <MDBContainer className='p-4'>

                    <section className=''>
                        <form action=''>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-auto'>
                                    <p className='pt-2'>
                                        <strong>Sign up for a subscription box!</strong>
                                    </p>
                                </div>

                                <MDBCol md='5' start='12'>
                                    <MDBInput label='Email address' className='mb-4' />
                                </MDBCol>

                                <div className='col-auto'>
                                    <MDBBtn outline color='dark' type='submit' className='mb-4'>
                                        Subscribe!
                                    </MDBBtn>
                                </div>
                            </div>
                        </form>
                    </section>

                    <section className=''>
                        <p>
                            Oh about us? Well for one we are super great.
                        </p>
                    </section>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
                        <MDBIcon fab icon='twitter' size='lg' />
                    </MDBBtn>
                    <section className='mb-4'>
                        <a className='btn btn-outline-dark btn-floating m-1' href='https://www.linkedin.com/in/morganlyle1/' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </a>

                        <a className='btn btn-outline-dark btn-floating m-1' href='https://www.linkedin.com/in/morganlyle1/' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </a>

                        <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </a>

                        <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </a>

                        <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                            <MDBIcon fab icon='github' />
                        </a>
                    </section>

                    <section className=''>
                        <MDBRow>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='btn btn-light ob_button almond' >
                                    Impulse!
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink href="#">Product Box!</MDBDropdownLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink href="#"> Clothing Box!</MDBDropdownLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink href="#">Quiz?</MDBDropdownLink>
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                            {/* <MDBCol lg='3' md='6' className='mb-4 mb-md-0'> */}
                            {/* <h5 className='text-uppercase'>Impulse!</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-dark'>
                                        Product Box
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-dark'>
                                        Clothing Box
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-dark'>
                                        Different Subscription Boxes
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-dark'>
                                        Quiz?
                                    </a>
                                </li>
                            </ul> */}
                            {/* </MDBCol> */}

                        </MDBRow>
                    </section>
                </MDBContainer>

                © 2022 Copyright
                <a className='text-dark' href='https://Impulse.com/'>
                    ImpulseBox.com
                </a>
            </div>
        </MDBFooter>
    );
}