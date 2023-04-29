import moment from 'moment/moment';
import React from 'react';
import {  Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NesCard = ({news}) => {
    const {_id, title, details, image_url, author, total_view, rating} = news
    return (
        <Card className="">
      <Card.Header className='d-flex'>
      <Image style={{height : "50px"}} src={author?.img} roundedCircle />
      <div className='flex-grow-1'>
        <p>{author?.name}</p>
        <p><small>{moment(author.published_date).format("YYYY-MM-DD") }</small></p>
      </div>
      <div>
        <FaRegBookmark />
        <FaShareAlt />
        
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={image_url} alt="Card image" />
        <Card.Text>
         {details.length < 250 ? <><details></details></> :
         <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read more</Link></>
         }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div>
            <Rating 
             placeholderRating={rating.number}
             readonly
             emptySymbol={<FaRegStar />} 
             placeholderSymbol={<FaStar className='text-warning ' />}
             fullSymbol={<FaStar />} 
            />
            {rating?.number}
        </div>
        <div>
            <FaEye />
           <span className='ms-2'>{total_view}</span> 
        </div>
      </Card.Footer>
    </Card>
    );
};

export default NesCard;