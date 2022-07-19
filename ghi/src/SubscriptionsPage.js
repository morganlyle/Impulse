export default function SubscriptionsPage() {
    return (
        <>
            <h1 className='display-1 nameText'>Subscription Boxes</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='display-3 siteText text-left'>Things Box</h1>
                        <button className='btn btn-light almond ob_button text-right'>Add to Cart!</button>
                    </div>
                    <div className='col'>
                        <h1 className='display-3 siteText text-right'>Styles Box</h1>
                        <button className='btn btn-light almond ob_button text-left'>Add to Cart!</button>
                    </div>
                </div>
            </div>
        </>
    )
}
