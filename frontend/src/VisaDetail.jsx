import TableData from "./TableData";
import data from "./demoData";
const VisaDetail = () => {
  return (
    <div className="table-container">
      <table className="visa-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Status</th>
            <th>Type</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return <TableData key={e.id} visaData={e} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VisaDetail;
