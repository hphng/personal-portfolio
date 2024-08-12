import React, {useState} from 'react'
import './index.css'
import { Form, Button, Alert } from 'react-bootstrap'

const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [alert, setAlert] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset the alert
        setAlert({ show: false, variant: '', message: '' });

        // Simple validation
        if (!email || !message || !name) {
            setAlert({
                show: true,
                variant: 'danger',
                message: 'Please fill in all fields.',
            });
            return;
        }

        // Simulate successful submission
        setAlert({
            show: true,
            variant: 'success',
            message: 'Message sent successfully!',
        });

        // Clear the form fields
        setEmail('');
        setMessage('');
        setName('');
    };
    return (
        <section className='contact-container' id='contact'>
            <header className='contact-header'>Contact</header>
            {/* {alert.show && (
                <Alert className="alert" variant={alert.variant} onClose={() => setAlert({ show: false })} dismissible>
                    {alert.message}
                </Alert>
            )} */}
            <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group controlId='formBasicMessage'>
                    <Form.Control
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='formBasicMessage'>
                    <Form.Control
                        as='textarea'
                        rows={6}
                        value={message}
                        placeholder='Message'
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Group>
                <Button className='btn btn-danger' type='submit'>
                    Submit
                </Button>
            </Form>
        </section>
    )
}

export default ContactPage
