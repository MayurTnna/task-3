  import { React, useState } from "react";
  import Button from "react-bootstrap/Button";
  import Modal from "react-bootstrap/Modal";
  import Form from "react-bootstrap/Form";
  import { useDispatch } from "react-redux";
  import { fetchPostEdit } from "../redux/actions/action";
  import "../assets/scss/UserCard.scss";
  function EditModal(props) {
    
    const [name, setName] = useState(props.item.name);
    const [email, setEmail] = useState(props.item.email);
    const [phone, setPhone] = useState(props.item.phone);
    const [website, setWebsite] = useState(props.item.website);
    
  
    //setting user's edited data
    const [userData, setUserData] = useState({
      name: props.item.name,
      email: props.item.email,
      phone: props.item.phone,
      website: props.item.website,
    });

    const dispatch = useDispatch();
    const handleSubmitData = (e) => {
      e.preventDefault();
      dispatch(fetchPostEdit(userData));
    };
    // on save edited user's data which is displayed
    const handleSave = () => {
      setUserData({
        ...props.item,
        name: name,
        email: email,
        phone: phone,
        website: website,
      });
      props.onHide();
    };
    return (
      <>
      <Modal
        // show={show} onHide={handleClose}
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitData}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>*Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                autoFocus
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>*Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                autoFocus
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>*Phone</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                autoFocus
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>*Website</Form.Label>
              <Form.Control
                type="text"
                value={website}
                autoFocus
                onChange={(event) => {
                  setWebsite(event.target.value);
                }}
              />
            </Form.Group>
            <div className="buttons_main">
            <div className="px-2">
            <Button onClick={props.onHide} variant="light" >Close</Button>
            </div>
           <div className=""> <Button variant="primary" type="submit" onClick={() => handleSave()}>
              Save Changes
            </Button></div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      </>
    );
  }
export default EditModal;

