import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../API'
import Button from './Button'
import Popup from './global/Popup'

// DOES GRAPHQL JUST GET DATA NOT POST DATA !!!!!

const AddCustomer = () => {
    const [values, setvalues] = useState({
        name: '',
        debt: '',
        phone: '',
        address: '',
    })

    const [message, setMessage] = useState({
        show: false,
        messageText: 'Customer Added',
    })

    // useEffect(() => {
    //     console.log(message)
    // }, [message])

    const handleChangeName = (e) => {
        setvalues({
            ...values,
            name: e.target.value,
        })
    }
    const handleChangedebt = (e) => {
        setvalues({
            ...values,
            debt: e.target.value,
        })
    }
    const handleChangephone = (e) => {
        setvalues({
            ...values,
            phone: e.target.value,
        })
    }

    const handleChangeaddress = (e) => {
        setvalues({
            ...values,
            address: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${API}/api/customers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: values,
            }),
        }).then((res) => {
            if (res.status === 400) {
                setMessage({
                    messageText: 'Please fill all fields',
                    show: true,
                })
            } else if (res.status === 200) {
                setvalues({ name: '', debt: '', phone: '', address: '' })
                setMessage({
                    messageText: 'Customer Added successfly',
                    show: true,
                })
            }
        })
    }

    return (
        <div className="addCustomer bg-white">
            <div className=" text-lg container">
                <form onSubmit={handleSubmit}>
                    <Inputs
                        labelName="name"
                        handleFunction={handleChangeName}
                        value={values.name}
                        type="text"
                    />
                    <Inputs
                        labelName="debt"
                        handleFunction={handleChangedebt}
                        value={values.debt}
                        type="number"
                    />
                    <Inputs
                        labelName="phone"
                        handleFunction={handleChangephone}
                        value={values.phone}
                        type="number"
                    />
                    <Inputs
                        labelName="address"
                        handleFunction={handleChangeaddress}
                        value={values.address}
                        type="text"
                    />
                    <input
                        className="bg-main cursor-pointer text-white p-2 m-2"
                        type="submit"
                        name="submit"
                        value="SUBMIT"
                    />
                </form>

                {message.show ? (
                    <Popup>
                        <h2 className="text-center px-3 text-l">
                            {message.messageText}
                        </h2>
                        <Button
                            text="Close"
                            type="main"
                            className="px-10 font-semibold mt-10"
                            onClickFun={() => {
                                setMessage({ ...message, show: false })
                            }}
                        >
                            <Link to="/customers"></Link>
                        </Button>
                    </Popup>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default AddCustomer

const Inputs = ({ labelName, handleFunction, value, type }) => {
    return (
        <label>
            {labelName}
            <input
                type={type}
                value={value}
                onChange={handleFunction}
                className="border-2 block max-w-full"
            />
        </label>
    )
}
