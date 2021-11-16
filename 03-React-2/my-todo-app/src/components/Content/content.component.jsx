import styles from './content.style.module.css';

export const ContentComponent = (props) => {

    return (
        <div className={styles.content + ' container'}>
            {props.children}
        </div>
    )
};
