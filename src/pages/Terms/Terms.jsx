import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='mt-4 w-25 mx-auto'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis ullam deleniti. Vel veritatis voluptate iure provident nam accusantium doloremque, nobis unde. Eum explicabo ipsam tempore, quos sint hic. Quae repudiandae ad quo incidunt inventore dolores. Nam laboriosam qui in!</p>
            <Link to="/register">Go back register</Link>
        </Container>
    );
};

export default Terms;