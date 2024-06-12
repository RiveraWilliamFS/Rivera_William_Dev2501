import React from 'react'

//Dummy Component
const MyAvatar = props => {
    return (
        <img src={props.AvatarIcon} alt={props.AvatarAlot} style={styles.MyAvatar} />
    )
}
export default MyAvatar 

const styles={
    myAvatar: {
        height:'75px',
        cursor: 'pointer',
        borderRadius: '50%'
    }
}