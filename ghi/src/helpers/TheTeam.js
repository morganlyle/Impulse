import React from 'react'

export default function TheTeam() {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shad_bottom bgcolor">
                            <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">Web Developer</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shad_bottom bgcolor">
                            <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">Web Developer</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shad_bottom bgcolor">
                            <img src="adrian.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Adrian Dorado</h5>
                                <div className="card-text text-black-50">Full-Stack Developer</div>
                                <hr className="featurette-divider" />
                                <p className="card-text text-left">
                                    Adrian is our sleepiest engineer, but for good reason; 
                                    they're our resident "Nocturnal Coder".<br/>
                                    They have a particular fondness for coding until the 
                                    sun rises and solving the toughest problems the team has. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shad_bottom bgcolor">
                            <img src="Nellie.png" className="card-img-top" alt="face of Nellie" />
                            <div className="card-body">
                                <h5 className="card-title mb-0 text-center">Nellie Nelson</h5>
                                <div className="card-text text-black-50 text-center">Web Developer</div>
                                <hr className="featurette-divider" />
                                <p className="card-text text-left">
                                    Nellie likes solving problems across the stack, but especially server-side.
                                    Before becoming a software engineer, she worked as a death-penalty investigator,
                                    physicist, materials engineer, and bicycle messenger.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
