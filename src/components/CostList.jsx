import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function CostList({ costs }) {
  return (
    <Container className="cost-list-container col-md-8">
        <Table striped bordered hover className="cost-list">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Facility Type</th>
                    <th>Cost</th>
                    <th>Copay</th>
                </tr>
            </thead>
            <tbody>
                {costs.map((cost) => (
                    <tr key={cost.id}>
                        <td>{cost.id}</td>
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
