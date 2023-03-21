import {React , useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useDispatch } from 'react-redux';

function EditDetail(item ,edit ) {
    const [show, setShow] = useState(false);
    const [name,setName] = useState(item.name)
    const [email, setEmail] = useState(item.email)
    const [phone, setPhone] = useState(item.phone)
    const [website, setWebsite] = useState(item.website)

    

    // used to set user's edited data
    const [userData,setUserData] = useState({
      name:name,
      email:email,
      phone:phone,
      website:website
    })
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
  return (
    <>
    </>
    // <div>
    //     <Button variant="primary" onClick={handleShow}>
    //     Launch demo modal
    //   </Button>

    //   <Modal show={edit   } onHide={handleClose}>
    //   {console.log(item.item)}
    //     <Modal.Header closeButton>
    //       <Modal.Title>Modal heading</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <Form >
    //         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //           <Form.Label>*Name</Form.Label>
    //           <Form.Control
    //             type="text"
    //             value={name}
    //             autoFocus
    //             onChange={(event) =>{setName(event.target.value)}}
               
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //           <Form.Label>*Email</Form.Label>
    //           <Form.Control
    //             type="email"
    //             value={email}
    //             autoFocus
    //             onChange={(event) =>{setEmail(event.target.value)}}
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //           <Form.Label>*Phone</Form.Label>
    //           <Form.Control
    //             type="text"
    //             value={phone}
    //             autoFocus
    //             onChange={(event) =>{setPhone(event.target.value)}}
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //           <Form.Label>*Website</Form.Label>
    //           <Form.Control
    //             type="text"
    //             value={website}
    //             autoFocus
    //             onChange={(event) =>{setWebsite(event.target.value)}}
    //           />
    //         </Form.Group>
            
    //       </Form>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button variant="secondary" onClick={handleClose}>
    //         Close
    //       </Button>
    //       <Button variant="primary" onClick={handleClose}>
    //         Save Changes
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
        
    // </div>
  )
}

export default EditDetail