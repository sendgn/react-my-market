import styles from './badge.module.css';

function Badge(props) {
    return (
        <span className={styles.badge}>{ props.value }</span>
    );
}

export default Badge;
