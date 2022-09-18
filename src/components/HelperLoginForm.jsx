import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function HelperLoginForm() {

    const [helper,setHelper] = useState({});

    

    return (
        <div className='container col-8 mt-5'>
            <h1 style={{textAlign:'center'}}>Helper Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-bold'>Helper Id</Form.Label>
                    <Form.Control type="email" placeholder="Helper Id" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Helper Name</Form.Label>
                    <Form.Control type="text" placeholder="Helper Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <b> or new here<a href='/helpreg'> Sign Up </a>for free</b>
            </Form>
        </div>
    )
}
