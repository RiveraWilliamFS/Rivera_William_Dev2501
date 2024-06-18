import React from 'react'

const MyIcons = props => {
    return (
        <img src={props.IconImg} alt={props.ImageAlt} style={StyleSheet.myIcons} />
    )
}
export default MyIcons

const StyleSheet= {
    myIcons: {
        height: '50px',
        cursor: 'pointer',
        borderRadius: '50%'
    }
}