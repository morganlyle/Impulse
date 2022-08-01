export default function SubscriptionsPage() {
    return (
        <>
            <h1 className='display-2 mt-3 nameText'>Subscription Boxes</h1>
            <div className='pb-5 container'>
                <div className='row'>
                    <div className='col b_cards me-3 shad_intense p-4 rounded mt-4 heliotrope_gray'>
                        <h1 className='display-3 siteText text-left'>Things Box</h1>
                        <a href="/checkout" className='btn btn-light almond ob_button text-right'>Add to Cart!</a>
                    </div>
                    <div className='col b_cards ms-3 shad_intense p-4 rounded mt-4 heliotrope_gray'>
                        <h1 className='display-3 siteText text-right'>Styles Box</h1>
                        <a href="/checkout" className='btn btn-light almond ob_button text-left'>Add to Cart!</a>
                    </div>
                </div>
            </div>
        </>
    );
};
