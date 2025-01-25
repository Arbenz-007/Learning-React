import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate(); 
  console.log(err);
  return (
    <div className="error-page">
      <h1>Oops!!!...Something went wrong 🚨</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
      <p>Don't worry, it's not your fault. Let's get you back on track!</p>
      <button className="home-button" onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
