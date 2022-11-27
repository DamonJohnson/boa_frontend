import React from 'react'
import UserDetails from './UserDetails'
import Orders from './Orders'

const MyAccount = () => {
    return (
        <Routes>
            <UserDetails />
            <Orders />
        </Routes>

    )
}

export default MyAccount