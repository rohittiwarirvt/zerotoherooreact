
import './custom-button.styles.scss';


const CustomButton = ({inverted, children, isGoogleSignIn, ...otherButtonProps}) =>(
  <button
    className={`${inverted ? 'inverted': ' '}
    ${isGoogleSignIn ? 'google-sign-in': ''}
      custom-button` }
    {...otherButtonProps}
    >
    {children}
  </button>
)


export default CustomButton;