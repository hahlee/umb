import { useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Header from "./components/Header";
import SelectCptCode from "./components/SelectCptCode";
import CostList from "./components/CostList";
import AddCost from "./components/AddCost";

function App() {
  const [selectedCptCode, setSelectedCptCode] = useState(null);
  const [costs, setCosts] = useState([]);

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
    <>
      <Header />
      <Container className="app py-4">
        <Stack gap={5}>
          <SelectCptCode onSelectCptCode={onSelectCptCode} />
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
    </>
  );
}

export default App;
