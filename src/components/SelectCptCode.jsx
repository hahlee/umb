import { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <label htmlFor="cptCodes">Select a CPT code:</label>
      <select id="cptCodes" value={selectedCptCode} onChange={handleSelectChange}>
        <option value="">--Please choose an option--</option>
        {cptCodes.map((cptCode) => (
          <option key={cptCode.id} value={cptCode.id}>
            {cptCode.code}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCptCode;
