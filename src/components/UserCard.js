import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { BiEnvelope, BiGlobe, BiHeart } from "react-icons/bi";
import {
  AiOutlinePhone,
  AiOutlineEdit,
  AiFillDelete,
  AiFillHeart,
} from "react-icons/ai";
import "../assets/scss/UserCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDelete } from "../redux/actions/action";
// import EditDetail from "./EditDetail";
import EditModal from "./EditCardModal";


function UserCard(props) {
  const [like, setLike] = useState(true);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  var id;
  const handleDelete = (id) => {
    if (posts !== null) {
      dispatch(fetchPostDelete(id));
    }
  };
  return (
    <>
    <EditModal show={modalShow}  item={props.item} onHide={() => setModalShow(false) }/>
    <div className="card_container py-2 col-lg-3 col-md-4 col-sm-12">
      <Card>
        <div className="image_container">
          <Card.Img
            height="200px"
            width="200px"
            variant="top"
            src={`https://avatars.dicebear.com/v2/avataaars/${props.item.username}.svg?options[mood][]=happy`}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>
            <p>
              <span className="logo">
                <BiEnvelope />
              </span>
              <span className="px-2">{props.item.email}</span>
            </p>
            <p>
              <span className="logo">
                <AiOutlinePhone />
              </span>
              <span className="px-2">{props.item.phone}</span>
            </p>
            <p>
              <span className="logo">
                <BiGlobe />
              </span>
              <span className="px-2">{props.item.website}</span>
            </p>
          </Card.Text>
        </Card.Body>
        <hr></hr>
        <div className="footer_section">
          {/* <span className="heart logo" onClick={() => (setLike(like) => !like)}> */}
          <span
            className="heart logo text-danger"
            onClick={() => setLike(!like)}
          >
            {like ? <BiHeart /> : <AiFillHeart />}
          </span>
          <div className="ver-border border"></div>
          <span className="edit logo"
          onClick={()=> setModalShow(!modalShow)}
          >
            <AiOutlineEdit />
          </span>
          <div className="ver-border border"></div>
          <span className="delete logo" onClick={()=>handleDelete(props.item.id)}>
            <AiFillDelete />
          </span>
        </div>
        
      </Card>
  
      
    </div>
    </>
  );
}

export default UserCard;
