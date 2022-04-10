import React, { useState, useEffect } from 'react'

const AddCustomer = () => {
    const [name, setName] = useState('')

    // useEffect((event) => {
    //     setName()
    // })

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('This is the submit button', name)
    }

    return (
        <div className="addCustomer">
            <form onSubmit={handleSubmit}>
                <label>
                    name
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                        className="border-2 block"
                    />
                </label>
                <input type="submit" name="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default AddCustomer
