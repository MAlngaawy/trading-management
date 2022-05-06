import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import Popup from './global/Popup'
import API from '../API'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const CustomerInfo = ({ closePopup, theID }) => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch(`${API}/api/customers/${theID}`)
            .then((res) => res.json())
            .then((data) => setData(data.data))
    })
    return (
        <div className="info transition-all">
            <Popup size="big">
                <div className="content w-full h-full relative">
                    <span
                        onClick={() => closePopup()}
                        className="cursor-pointer absolute top-2 right-8 border border-mainGray px-3 py-1 text-secondGray"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                    <h1>{data && data.attributes.name}</h1>
                </div>
            </Popup>
        </div>
    )
}

export default CustomerInfo
