import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SelectCptCode({ onSelectCptCode }) {
  const [cptCodes, setCptCodes] = useState([]);
  const [selectedCptCode, setSelectedCptCode] = useState('');

  useEffect(() => {
    async function getCptCodes() {
      const response = await axios.get('http://localhost:3001/cptCodes');
      setCptCodes(response.data);
    }
    getCptCodes();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedCptCode(event.target.value);
    onSelectCptCode(event.target.value);
  };

  return (
    <Container className="select-container col-md-8">
        <Row className="justify-content-md-center align-items-center">
            <Col xs="6" md="auto">    
                <label className="me-auto" htmlFor="cptCodes">Select a CPT code:</label>
            </Col>
            <Col xs="6" md="auto">
                <Form.Select aria-label="Select a CPT Code" id="cptCodes" value={selectedCptCode} onChange={handleSelectChange}>
                    <option>Choose a Code</option>
                    {cptCodes.map((cptCode) => (
                        <option key={cptCode.id} value={cptCode.id}>
                            {cptCode.code}
                        </option>
                    ))}
                </Form.Select>
            </Col>
        </Row>
    </Container>
  );
}

export default SelectCptCode;
