import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Layout(){

    return(
        <>
            <div>
                <Link to="/"> 
                    <button>
                        Home
                    </button>
                </Link>
                <Link to="/products"> 
                    <button>
                       product
                    </button>
                </Link>
                <Link to="/products/1"> 
                    <button>
                        ProductDetail
                    </button>
                </Link>
                <Link to="/signout"> 
                    <button>
                        Sign Out
                    </button>
                </Link>
            </div>
        <Outlet />
        <div>Footer</div>
        </>
        
    );
}

export default Layout;
