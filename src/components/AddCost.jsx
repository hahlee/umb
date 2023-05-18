import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const AddCost = ({ selectedCptCode, onCostAdded }) => {
  const [facilityType, setFacilityType] = useState("");
  const [cost, setCost] = useState("");
  const [copay, setCopay] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
        `http://localhost:3001/cptCodes/${selectedCptCode}/costs`,
        {
          facilityType,
          cost,
          copay
        }
      );
  
      // Assuming the response data contains the newly added cost
      const newCost = response.data;
  
      // Pass the new cost back to the parent component
      onCostAdded(newCost);
  
      // Reset the form fields
      setFacilityType('');
      setCost('');
      setCopay('');
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
  };
  

  return (
    <Container className="form-container col-md-8">
        <Form className="cost-form" onSubmit={handleSubmit}>
            <h3 className="text-red">Add New Facility Cost</h3>
            <Form.Group className="mb-3" controlId="formFacilityType">
                <Form.Label>Facility Type:</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter facility type"
                    required
                    value={facilityType}
                    onChange={(e) => setFacilityType(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCost">
                <Form.Label>Cost:</Form.Label>
                <Form.Control 
                    type="number"
                    min="0"
                    placeholder="Enter cost"
                    required
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCopay">
                <Form.Label>Copay:</Form.Label>
                <Form.Control 
                    type="number"
                    min="0"
                    placeholder="Enter copay"
                    required
                    value={copay}
                    onChange={(e) => setCopay(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">Add Cost</Button>
        </Form>
    </Container>
  );
};

export default AddCost;
