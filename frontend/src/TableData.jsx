const TableData = (props) => {
  const data = props.visaData;
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.country}</td>
      <td>{data.city}</td>
      <td>{data.status}</td>
      <td>{data.visaType}</td>
      <td>{data.createdAt}</td>
    </tr>
  );
};

export default TableData;
