import styles from './Elements.module.css';

function Elements(props){
    return (
        <div className={styles.container}>
            <div className={styles.iconholder}>
                <img src={props.imgsrc}/>
            </div>
            <div className={styles.textholder}>
                <p className={styles.headtext}>{props.headline}</p>
                <p className={styles.bodytext}>{props.text}</p>
            </div>
        </div>
    );
}

export default Elements;