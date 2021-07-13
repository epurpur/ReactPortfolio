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
    const [contactInfo, setContactInfo] = useState([
        {
            id: 1,
            title: 'Email',
            href: 'mailto:epurpur@gmail.com',
            imgSrc: '/images/email.png',
            alt: 'email link with letter icon',
            data: 'epurpur@gmail.com',
            target: '_blank',
        },
        {
            id: 2,
            title: 'LinkedIn',
            href: 'https://www.linkedin.com/in/erich-purpur-140a1433/',
            imgSrc: '/images/linkedin.png',
            alt: 'LinkedIn logo',
            data: 'LinkedIn Profile',
            target: '_blank',
        },
        {
            id: 3,
            title: 'Github',
            href: 'https://github.com/epurpur',
            imgSrc: '/images/github.png',
            alt: 'Github logo',
            data: 'Github Profile',
            target: '_blank',
        },
        {
            id: 4,
            title: 'Phone',
            href: '#',
            imgSrc: '/images/phone.png',
            alt: 'Old phone image',
            data: '(828) 773 7140',
            target: '',
        },
        {
            id: 5,
            title: 'Resumé',
            href: '/images/ErichPurpurResume.pdf',
            imgSrc: '/images/resume.png',
            alt: 'Resumé icon',
            data: 'Download Resumé',
            target: '',
        }
    ])

    const [hoverText, setHoverText] = useState('');

    const showHoverText = (item) => {
    // sets state of hoverText to item that user is hovering over. Then displays item.value in HTML of #hoverText
        
        // set state of hover text
        setHoverText(item.data)
    }

    const removeHoverText = () => {
    // sets state of hoverText to empty string when user's mouse leaves contact item

        // set state of hover text to empty string
        setHoverText('')
    }

    return (
        <div>
            <h1> Contact Me </h1>
            <section id='contactItems'>
                {/* Render each contact item */}
                {contactInfo.map((item) => 
                    (<a key={item.id} href={item.href} target={item.target}><img src={item.imgSrc} alt={item.alt} className='contact-item' data-label={item.data} onMouseOver={() => showHoverText(item)} onMouseLeave={() => removeHoverText()}></img></a>)
                )}
            </section>
            <br></br>
            <p id='hoverText'>{hoverText}</p>
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
