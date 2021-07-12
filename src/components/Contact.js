import React, { useState } from 'react'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const userMessage = {name, email, message}
        console.log(userMessage)

        // alert('Your message has been submitted! Thank you for your patience while I return your inquiry.');
        
    }

    return (
        <div>
            <h1> Contact Me </h1>
            <a href="mailto:epurpur@gmail.com" target="_blank"><img src={"/images/email.png"} alt="email link with letter icon" class="contact-item" data-label="epurpur@gmail.com"></a> 

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
