import React, { useState, useEffect } from 'react'

export default function Clothing() {
    const [clothes, setClothes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/clothing/").then(res => res.json()).then(
            res => setClothes(res.clothes)
        )
    }, [])                        // square bracket is to load once and not ongoing

    return (
        <>
            <section className="py-5 rounded b_cards text-center my-5 container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="display-1 siteText">Styles!</h1>
                        <p className="lead text-muted">What clothing and accessories could you be getting in your box this month?<br />
                            👗 🎩 👡 🥾 ⏱ 💎<br />
                            If you don't like it, get free shipping and trade with other members!<br />
                            Below are some of the many possibilities...

                        </p>
                    </div>
                </div>
            </section>



            <div className="album py-5 rounded heliotrope_gray mb-5 b_cards">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        {clothes?.map(clothing => {                 // the ? is 'optional chaining'
                            return (
                                <>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img className="bd-placeholder-img card-img-top" width="100%" height="100%" src={clothing.picture_url} alt="a clothing"></img>
                                            <div className="card-body">
                                                <h5><center>{clothing.name}</center></h5>
                                                <p className="card-text">{clothing.description}</p>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}



                    </div>
                </div>
            </div>
        </>
    )
}
