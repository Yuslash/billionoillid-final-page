import { useState } from "react"
import React from 'react';

const Site = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    })

    const [loading, setLoading] = useState(false) // Add loading state

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true) // Set loading to true when form is submitted
        try {
            const response = await fetch('https://catalyst-test-kappa.vercel.app/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            alert(data.message)

            // Clear form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: ''
            })

            // Redirect after submission
            window.location.href = 'https://success-alert-template-react-jsx.vercel.app/'
        } catch (error) {
            console.log('There was an error submitting the form!', error)
        } finally {
            setLoading(false) // Set loading back to false after submission is complete
        }
    }

    return (
        <div className="site-container">
            <div className='text-center'>
                <p className="get-in text-white text-5xl font-extrabold">👑Welcome To billionoillid👑</p>
                <p className="reach-out text-gray-500 mt-2 text-xl font-small">Uncover a New Dimension of Possibilities with Us!</p>
            </div>
            <div className="body-color mt-16 text-white flex gap-8 p-5">
                <div className="inside-body p-10 flex flex-col gap-2 max-w-xl">
                    <h1 className="font-semibold text-2xl">Let's Ignite Your Journey! ✨</h1>
                    <h1 className="text-gray-500 text-xs">Begin your creative journey with us. Fill out the form below to connect and start your adventure.</h1>
                    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3">
                        <div className="flex gap-2 justify-between">
                            <input
                                className="input-field w-full"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="input-field w-full"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <input
                            className="input-field w-full"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="input-field w-full"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            className="input-field w-full h-28"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button type="submit" disabled={loading} className="submit-button">
                            {loading ? 'Sending...👑' : 'Send To The Company CEO'}
                        </button>
                    </form>
                </div>
                <div className="sambar">
                    <iframe src="https://infinite-world-alpha.vercel.app/" className="inner-sambar" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Site
