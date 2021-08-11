import styles from './PlansSold.module.css'

function PlansSold(props){
    return(
        <div className={styles.plans}>Over <b>{props.totalPlans}</b> plans ordered.</div>
    );
}

export default PlansSold;