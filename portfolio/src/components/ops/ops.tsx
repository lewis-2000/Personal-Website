import { Link } from "react-router-dom";

function Ops() {
  return (
    <>
      <div className="Ops-bar  w-full h-[5rem] p-4">
        <div className="ops-bar-content flex justify-between">
          <div className="ops-bar-item">
            <Link to="/">
              <i className="fa-solid fa-arrow-left"></i> Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ops;
