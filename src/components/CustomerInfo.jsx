import React from 'react'
import { useParams } from 'react-router-dom'

const CustomerInfo = () => {
    const { id } = useParams()
    return <div> This is Customer Id {id} </div>
}

export default CustomerInfo
