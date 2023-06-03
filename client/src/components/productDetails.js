import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetails(){
    let {id} = useParams();
    return(
        <>
            ProductDetails:- {id}
        </>
    );
}

export default ProductDetails;
