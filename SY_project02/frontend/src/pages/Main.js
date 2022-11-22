import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <div>this is main</div>

      <Link to="/test">
        <button>test</button>
      </Link>

      <Link to="/asdf">
        <button>not found</button>
      </Link>

      <Link to="/login">
        <button>login</button>
      </Link>
    </>
  );
};
