import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-700 py-2 `">
      {/* links */}
      <div className="align-element flex justify-end sm:justify-end'">
        <Link to="/login" className="link pr-4 capitalize text-base-300">
          sign in
        </Link>
        <p className="text-base-300">/</p>
        <Link
          to="/register"
          type="button"
          className="link pl-4 capitalize text-base-300"
        >
          create account
        </Link>
      </div>
    </header>
  );
};
export default Header;
