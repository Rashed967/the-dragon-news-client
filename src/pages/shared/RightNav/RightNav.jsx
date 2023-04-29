import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='mb-2' variant="primary"><FaGoogle /> Login with google</Button>
      <Button variant="secondary"><FaGithub /> Login with github</Button>

      <div className='mt-3'>
        <h4>Find us on</h4>
      <ListGroup>
      <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
      </div>
        </div>
    );
};

export default RightNav;