import { useNavigate } from "react-router-dom"

export const NavbarLink = () => {

    const navigate = useNavigate();

  return (
    <div    className=" w-auto h-10 bg-indigo-100 border-b border-b-amber-100">
        <nav    className="">
            <ul className="flex flex-wrap font-bold gap-5 justify-center p-2">
                <li onClick={() => navigate('/')} className="hover:cursor-pointer">HOME</li>
                <li onClick={() => navigate('/shop')} className="hover:cursor-pointer">SHOP</li>
                <li onClick={() => navigate('/catogaries')} className="hover:cursor-pointer">CATEGORIES</li>
                <li onClick={() => navigate('/deals')} className="hover:cursor-pointer">DEALS</li>
                <li onClick={() => navigate('/contact')} className="hover:cursor-pointer">CONTACT</li>
            </ul>
        </nav>
    </div>
  )
}
