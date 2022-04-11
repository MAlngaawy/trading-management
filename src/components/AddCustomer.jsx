import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
        fetch('http://localhost:1337/api/customers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: values,
            }),
        })
            .then((res) =>
                setvalues({ name: '', debt: '', phone: '', address: '' })
            )
            .then(() => {
                setMessage({ ...message, show: true })
            })
    }

    return (
        <div className="addCustomer text-lg">
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
                <div className="m-0 message text-white text-center absolute top-0 left-0 bottom-0 right-0 bg-black  h-full w-full">
                    {message.messageText}
                    <span
                        onClick={() => {
                            setMessage({ ...message, show: false })
                        }}
                        className="text-lg text-white"
                    >
                        <Link to="/customers">CLOSE</Link>
                    </span>
                </div>
            ) : (
                ''
            )}
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
                className="border-2 block"
            />
        </label>
    )
}
