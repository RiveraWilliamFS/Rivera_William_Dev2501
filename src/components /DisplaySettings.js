import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';



const DisplaySettings = (props) => {
    return ( 
        <section style={styles.container}>
            <img style={styles.avatar} src={props.avatar} />
            <h1 style={styles.h1}>{props.fName} {props.lName}</h1>
            <p style={styles.myInputRow}>
                <span>Street: {props.street} </span>
                <span>City: {props.city} </span>
            </p>
            <p style={styles.myInputRow}>
                <span>State: {props.state} </span>
                <span>Zip: {props.zipcode} </span>
            </p>
            <p style={styles.myInputRow}>
                <span>Email: {props.email} </span>
                <span>Phone: {props.phone} </span>
            </p>
            <p style={styles.myInputRow}>
                <span>Username: {props.username}</span>
                <span>Password: {props.password}</span>
            </p>
            <button type="submit" style={styles.btn}><FaPencilAlt />Edit Profile</button>
        </section>
    );
}

export default DisplaySettings;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        maxWidth: '400px',
        margin: '0 auto'
    },
    avatar: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '20px'
    },
    h1: {
        fontSize: '24px',
        margin: '10px 0'
    },
    myInputRow: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '10px'
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px'
    }
};

