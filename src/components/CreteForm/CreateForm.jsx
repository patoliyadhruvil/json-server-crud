import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserCreate } from '../../service/Action/Action';

const CreateForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        Image: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
      await  dispatch(UserCreate(formData));
        navigate("/View")
        setFormData(formData());
    }

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <div className="form">
                        <div className="col-9 detail">
                            <Form className="pt-3 form-container" onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group controlId="formGridFirstName">
                                        <Form.Label className="mb-0">Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter The Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formGridNumber">
                                        <Form.Label className="mb-0">Phone</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter Your Mobile Number"
                                            name="phone"
                                            onChange={handleChange}
                                            value={formData.phone}
                                        />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className="mb-0">Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter Your Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formGridPassword">
                                        <Form.Label className="mb-0">Image</Form.Label>
                                        <Form.Control
                                            type=""
                                            placeholder="Enter Your Image URL"
                                            name="Image"
                                            value={formData.Image}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Row>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default CreateForm;