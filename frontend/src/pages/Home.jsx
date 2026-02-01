import ActionButton from "../components/ActionButton";
import VisaDetail from "../components/VisaDetail";

const Home = () => {
  return (
    <>
      <div className="parent-action">
        <ActionButton type="Create New" />
      </div>
      <VisaDetail />
    </>
  );
};

export default Home;
