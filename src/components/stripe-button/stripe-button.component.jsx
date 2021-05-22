
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

  const priceForStripe = price *100;
  const publishableKey = 'pk_test_pPfEu7hhC7hjZ4kGrXzirC2R00DCZnunvE';

  const onToken = () => {
    console.log('Payment Successful');
    alert('Payment Successsfull');
  }
  return (
    <StripeCheckout

    label='Pay Now'
    name='CRWN Clothing'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your Total price is $${price}`}
    amount = {priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
  )
}


export default StripeCheckoutButton;