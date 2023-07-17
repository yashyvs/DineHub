import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS</h1>
      <p>Something Went Wrong!!</p>
      <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  );
};
export default Error;
