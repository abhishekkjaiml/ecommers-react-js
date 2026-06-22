import { Navbar } from "../components/Navbar";
import { NavbarLink } from "../components/NavbarLink";
import { useNavigate } from "react-router-dom";

export const Catogaries = () => {

  const navigate = useNavigate();

  return (
    <>
      <div>
        <Navbar />
        <main>
          <NavbarLink />
        </main>
      </div>
      <div  className="flex flex-col items-center mt-10">
        <h1 className="font-bold">Page is in under development, Go to shop page</h1>
        <p  onClick={() => navigate('/shop')}  className="font-bold hover:cursor-pointer text-blue-700">Click Here</p>
      </div>
    </>
  );
};
