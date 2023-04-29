import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData()
    const {title, details, thumbnail_url, category_id} = news;
    // console.log(title, details)
    return (
        <div>
            <Card >
      <Card.Img variant="top" src={thumbnail_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="danger">All news in this category</Button></Link>
      </Card.Body>
    </Card>
        <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;