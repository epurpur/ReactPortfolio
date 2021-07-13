import React, { useState } from 'react'

const Contact = () => {

    // set state variables for form input fields. These are updated 'onChange'
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        // handle press submit button
        e.preventDefault()

        // if I were to make a POST request to a Database it would happen here
        const userMessage = {name, email, message}

        alert('Your message has been submitted! Thank you for your patience while I return your inquiry.');
    }

    // set state variables for contact-info fields
    const [contactItems, setContactItems] = useState([
        {
            id: 1,
            title: 'Email',
            href: 'mailto:epurpur@gmail.com',
            imgSrc: '/images/email.png',
            alt: 'email link with letter icon',
            data: 'epurpur@gmail.com'
        },
        {
            id: 2,
            title: 'LinkedIn',
            href: 'https://www.linkedin.com/in/erich-purpur-140a1433/',
            imgSrc: '/images/linkedin.png',
            alt: 'LinkedIn logo',
            data: 'LinkedIn Profile'
        },
        {
            id: 3,
            title: 'Github',
            href: 'https://github.com/epurpur',
            imgSrc: '/images/github.png',
            alt: 'Github logo',
            data: 'Github Profile'
        },
        {
            id: 4,
            title: 'Phone',
            href: '',
            imgSrc: '/images/phone.png',
            alt: 'Old phone image',
            data: '(828) 773 7140'
        },
    ])

    const [hoverText, setHoverText] = useState('');

    const showHoverText = () => {
    // sets state of hoverText to item that user is hovering over
    }

    return (
        <div>
            <h1> Contact Me </h1>
            <section id='contactItems'>
                {/* Render each contact item */}
                {contactInfo}
            </section>
            <br></br>
            <p id='hoverText'>Here</p>
            <br></br>
            <h1> Or Send a Message </h1>
            <br></br>
            <div className="myForm">
                <form onSubmit={handleSubmit}>
                    <label>Your Name</label>
                    <input
                        type="text"
                        placeholder="Your name here"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="yourname@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    />
                    <label>Message</label>
                    <textarea
                        type="text"
                        placeholder="Write me a message!"
                        rows={8}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button>
                        Submit
                    </button>
                </form>
                <br></br>
            </div>

        </div>
    )
}

export default Contact
