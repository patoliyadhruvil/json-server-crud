import React, { useEffect } from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserGet, deleteUser, Usersingle } from '../../service/Action/Action';

function View() {

    const { users } = useSelector(state => state.UserReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserGet());
    }, []);

    const handleEdit = async (id) => {
        await dispatch(Usersingle(id))
        navigate("/Update");
    }

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }

    return (
        <>
            <Container>
                <Row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td className="product-image">
                                                <img src={user.image} alt="" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                                            </td>
                                            <td>
                                                <Button variant='primary' onClick={() => handleEdit(user.id)}>
                                                    Edit
                                                </Button>

                                                <Button variant='danger' onClick={() => handleDelete(user.id)} className='ms-3'>
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default View;
