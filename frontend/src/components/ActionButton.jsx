import { useNavigate } from "react-router-dom";

const ActionButton = (props) => {
  const navigate = useNavigate();

  function handleCreate() {
    navigate("/create");
  }

  return (
    <button className="action-button" onClick={handleCreate}>
      {props.type}
    </button>
  );
};

export default ActionButton;
