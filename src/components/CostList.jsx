import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function CostList({ costs }) {
  return (
    <Container className="cost-list-container col-md-8">
        <Table striped bordered hover className="cost-list">
            <thead>
                <tr>
                    <th className="text-dark">Facility Type</th>
                    <th className="text-dark">Cost</th>
                    <th className="text-dark">Copay</th>
                </tr>
            </thead>
            <tbody>
                {costs.map((cost) => (
                    <tr key={cost.id}>
                        <td>{cost.facilityType}</td>
                        <td>{cost.cost}</td>
                        <td>{cost.copay}</td>
                    </tr>
                ))}
            </tbody>      
        </Table>
    </Container>
  );
}

export default CostList;
