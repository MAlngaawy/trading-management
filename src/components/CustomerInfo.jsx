import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Popup from './global/Popup'

const CustomerInfo = ({ closePopup, theID }) => {
    return (
        <div className="info">
            <Popup>
                {' '}
                <h2 onClick={() => closePopup()}>
                    Click Here To Close {theID}{' '}
                </h2>{' '}
            </Popup>
        </div>
    )
}

export default CustomerInfo
