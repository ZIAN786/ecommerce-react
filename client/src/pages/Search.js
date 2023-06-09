import { useSearch } from "../context/search.js"
import ProductCard from "../components/cards/ProductCard.js"
import Jumbotron from "../components/cards/Jumbotron.js"


export default function Search() {
const [values, setValues] = useSearch();
return ( 
<>
 <Jumbotron title="Search results" 
 subTitle={values?.results?.length < 1 ? "No product found" : `Found ${values?.results?.length} products`}
 />

 <div className="container mt-3">
  <div className="row">
      {values?.results?.map((p) => (
        <div key={p._id} className="col-md-4">
            <ProductCard p={p} />
        </div>
      ))}
  </div>
 </div>
</>
)
}