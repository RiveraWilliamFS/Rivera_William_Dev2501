import React from 'react';
import ImageUrl from '../images/icons8-iron-man-16.png';
import MyIcons from './MyIcons';
import { FaSearch, FaEnvelope, FaBell } from 'react-icons/fa';

const Header = props => {
    return (
        <header style={styles.Header}>
            <div style={styles.left}>
                <div style={styles.logo}>
                    <h1>Marvel</h1>
                </div>
            </div>
            <div style={styles.searchCont}>
                <span style={styles.inputIcon}><FaSearch /></span>
                <input
                    type='text'
                    style={styles.inputwithIcon}
                    placeholder="Search" />
            </div>
            <div style={styles.rightSide}>
                <button style={styles.rightIcons}><FaEnvelope /></button>
                <button style={styles.rightIcons}><FaBell /></button>
                <MyIcons IconImg={ImageUrl} />
            </div>
        </header>
    )
}

export default Header;

const styles = {
    container: {
        paddingTop: '80px'
    },
    Header: {
        width: '100%',
        padding: '1%',
        backgroundColor: 'red',
        color: 'rgb(163, 173, 194)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        position: 'fixed',
        top: 0,
        paddingLeft: '40px', 
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        borderRadius: '50%',
        height: '50px',
        width: '60px',
        marginRight: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchCont: {
        border: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '2px',
        width: '40%',
    },
    inputIcon: {
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
    },
    inputwithIcon: {
        border: 'none',
        flex: 1,
        padding: '10px',
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '3%',
    },
    rightIcons: {
        background: 'none',
        border: 'none',
        margin: '0 10px',
        cursor: 'pointer',
        color: 'inherit',
        fontSize: '1.5rem',
    },
};






