import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "../index.css";

export default function AnimalModal({ show, onHide, form, onChange, onSave }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>POSSUMS, PERPS, & PETS</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label className="ruff">NAME::</Form.Label>
              <Form.Control name="name" value={form.name} onChange={onChange} />
            </Form.Group>

            <Form.Group controlId="formSpecies">
              <Form.Label>ALIASES & AKAs::</Form.Label>
              <Form.Control
                name="species"
                value={form.species}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>LAST SCENE</Form.Label>
              <Form.Control value={form.age} onChange={onChange} name="age" />
            </Form.Group>

            <Form.Group controlId="formImageUrl">
              <Form.Label className="form-label">UPLOAD A PHOTO::</Form.Label>
              <Form.Control
                className="form-control"
                value={form.imageUrl}
                onChange={onChange}
                name="imageUrl"
                placeholder="optional"
              />
            </Form.Group>

            <Form.Group controlId="lovesPizzaForm">
              <Form.Check
                type="checkbox"
                label="Loves Pizza"
                name="lovesPizza"
                checked={form.lovesPizza}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="vaccinatedForm">
              <Form.Check
                type="checkbox"
                label="Vaccinated"
                name="vaccinated"
                checked={form.vaccinated}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button className="ruff" onClick={onSave} variant="primary">
            Save Animal
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
