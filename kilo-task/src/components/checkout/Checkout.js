import styles from './Checkout.module.css';
import Plan from './Plan';

function Checkout (){
    return(
        <div className={styles.checkout}>
            <h2>Choose your plan and get <font color='orange'>7 days free trial</font></h2>
            <Plan planLength='6'priceMonthly='$9.99' pricePreDiscount='$119.94' pricePostDiscount='$59.94'/>
            <Plan planLength='3'priceMonthly='$14.99' pricePreDiscount='$59.97' pricePostDiscount='$44.97'/>
            <Plan planLength='1'priceMonthly='$19.99'/>
            <button className={styles.btn}>Get your plan</button>
            <p className={styles.policytext}>Your free trial will automatically become a paid subscription on the 8th day after you begin your trial. To cancel your subscription, please contact us at least 24 hours before the end of the trial period.</p>
            <p className={styles.policytext}>By choosing a payment you agree to the <a href='#'>T&Cs</a> and <a href='#'>Privacy policy</a></p>
        </div>
    );
}

export default Checkout;