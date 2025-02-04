import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate(); 
  console.log(err);
  return (
    <div className="error-page flex flex-col items-center justify-center h-[100vh] bg-[#f9fafb] text-center p-5">
      <h1 className="text-5xl text-[#1f2937] mb-5">Oops!!!...Something went wrong 🚨</h1>
      <h2 className="text-2xl text-[#ff6f61] mb-3">
        {err.status} : {err.statusText}
      </h2>
      <p className="text-xl text-[#6b7280] mb-8">Don't worry, it's not your fault. Let's get you back on track!</p>
      <button className="home-button py-3 px-6 text-lg font-bold text-white bg-[#ff6f61] border-none rounded-3xl cursor-pointer transition ease-in-out duration-800 hover:bg-[#e65a50] hover:-translate-y-1" onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
