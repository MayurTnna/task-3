import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { fetchPostEdit } from "../redux/actions/action";

function EditModal(props) {
  const [name, setName] = useState(props.item.name);
  const [email, setEmail] = useState(props.item.email);
  const [phone, setPhone] = useState(props.item.phone);
  const [website, setWebsite] = useState(props.item.website);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userData, setUserData] = useState({
    name: name,
    email: email,
    phone: phone,
    website: website,
  });

  const dispatch = useDispatch();
  var e;
  const handleSubmitData = (e) => {
    e.preventDefault()
   dispatch(fetchPostEdit(userData));
    
  };

  const handleSave = () => {
    setUserData({
      ...props,
      name: name,
      email: email,
      phone: phone,
      website: website,
    });
    handleClose();

  };
  console.log(name)

  return (
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={handleClose} >Close</Button>
        <Button variant="primary" type="submit" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditModal;
// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);
