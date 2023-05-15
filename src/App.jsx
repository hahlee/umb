import { useState, useEffect } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import SelectCptCode from "./components/SelectCptCode";
import CostList from "./components/CostList";
import AddCost from "./components/AddCost";
import Stack from 'react-bootstrap/Stack';

function App() {
  const [cptCodes, setCptCodes] = useState([]);
  const [selectedCptCode, setSelectedCptCode] = useState(null);
  const [costs, setCosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/cptCodes").then((response) => {
      setCptCodes(response.data);
    });
  }, []);

  const onSelectCptCode = (codeId) => {
    setSelectedCptCode(codeId);
    axios.get(`http://localhost:3001/cptCodes/${codeId}/costs`).then((response) => {
      setCosts(response.data);
    });
  };

  const onCostAdded = (newCost) => {
    setCosts([...costs, newCost]);
  };

  return (
    <Container className="app mt-4">
      <Stack gap={5}>
        <SelectCptCode cptCodes={cptCodes} onSelectCptCode={onSelectCptCode} />
        {selectedCptCode && (
          <> 
            <CostList costs={costs} />
            <AddCost
              selectedCptCode={selectedCptCode}
              onCostAdded={onCostAdded}
            />
          </>
        )}
      </Stack>
    </Container>
  );
}

export default App;
