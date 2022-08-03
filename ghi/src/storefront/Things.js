import React, {useState, useEffect} from 'react'

export default function Things() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/products/").then(res => res.json()).then(
            res => setProducts(res.products)
        )
    }, [])

    return (
        <>
            <section className="py-5 rounded b_cards text-center my-5 container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="display-1 siteText">All of the things</h1>
                        <p className="lead text-muted">What could you be getting in your box this month?<br />
                                                    Sometimes it's a one thing, other times it's a different thing.<br />
                                                    Whatever it is, you're gonna be excited that it showed up.<br />
                                                    Below are some of the things you could get in your box this month 📦
                        </p>
                    </div>
                </div>
            </section>



            <div className="album py-5 rounded heliotrope_gray mb-5 b_cards">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        {products?.map(product => {                 // the ? is 'optional chaining'
                            return (
                                <>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img className="bd-placeholder-img card-img-top" width="100%" height="100%" src={product.picture_url} alt="a product"></img>
                                            <div className="card-body">
                                                <h5><center>{product.name}</center></h5>
                                                <p className="card-text">{product.description}</p>
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
