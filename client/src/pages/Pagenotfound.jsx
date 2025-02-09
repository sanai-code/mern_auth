import { Link } from "react-router-dom";

export const Pagenotfound = () => {
  return (
    <div className="w-full h-dvh grid place-items-center">
      <h1 className="text-9xl">404</h1>
      <button className="text-2xl">
        {" "}
        <Link to={"/"}>Go to Home page</Link>
      </button>
    </div>
  );
};
