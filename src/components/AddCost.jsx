import { useState } from "react";
import axios from "axios";

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
    <form onSubmit={handleSubmit}>
      <h3>Add Facility Cost</h3>
      <div>
        <label>Facility Type:</label>
        <input
          type="text"
          value={facilityType}
          onChange={(e) => setFacilityType(e.target.value)}
        />
      </div>
      <div>
        <label>Cost:</label>
        <input
          type="number"
          min="0"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <div>
        <label>Copay:</label>
        <input
          type="number"
          min="0"
          value={copay}
          onChange={(e) => setCopay(e.target.value)}
        />
      </div>
      <button type="submit">Add Cost</button>
    </form>
  );
};

export default AddCost;
