// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({ data }) => {
    const { name, email, phone, photo } = data;
    return (
        <>
            <div key={email}>
                <img src={`${photo}`} alt={name} />
                <div>{name}</div>
                <div>{email}</div>
                <div>{phone}</div>
            </div>
        </>
    )
}

export default Contact;