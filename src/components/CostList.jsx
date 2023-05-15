function CostList({ costs }) {
  return (
    <div>
        <h2>Costs:</h2>
        {costs.map((cost) => 
        (
            <div key={cost.id}>
                <p>Facility Type: {cost.facilityType}</p>
                <p>Cost: {cost.cost}</p>
                <p>Copay: {cost.copay}</p>
            </div>
        ))}
    </div>
  );
}

export default CostList;
