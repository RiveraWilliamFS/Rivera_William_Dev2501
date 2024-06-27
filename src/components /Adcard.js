import React from 'react';

const AdCard = props => {
    console.log(props)
    return (
        <div style={styles.container}>
            <article style={styles.myArticle}>
                <img src="https://www.pexels.com/photo/the-aurora-bore-is-shown-in-the-sky-over-a-forest-24405949/" alt="I am Groot" style={styles.image} />
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
                <div style={styles.buttons}>
                    <button src={props.button} type="submit" style={styles.cardButton}>I am Groot</button>
                    <button src={props.button} type="submit" style={styles.cardButton}>I am Groot</button>
                </div>
            </article>
        </div>
    )
}
export default AdCard;
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        top: '1px', 
        marginRight: '10px', 
    },
    myArticle: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        padding: '1%',
        backgroundColor: 'red',
        color: 'rgb(163, 173, 194)',
        justifyContent: 'space-between',
        borderRadius: '5px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign: 'center',
        margin: '5px',
    },
    image: {
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '5px',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardButton: {
        width: '45%',
        backgroundColor: 'none',
        color: 'brown',
        padding: '5%',
        border: '1px solid brown',
        borderRadius: '5px',
    }
};