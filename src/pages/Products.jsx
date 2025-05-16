import { useContext, useEffect, useState } from "react";
import { allProducts } from "../assets/config";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { Frown, Search, ShoppingCart } from "lucide-react";
import { productProvider } from "../Context/ContextProvider";

const Products = () => {
  let [loader, setLoader] = useState(false);
  let { search, setSearch } = useContext(productProvider);
  let navigate = useNavigate();
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);
  let [applySearch, setApplySearch] = useState([]);
  let filterItems = allProducts.filter((item) =>
    item.title.trim().toLowerCase().includes(search.toLowerCase().trim())
  );

  useEffect(() => {
    setApplySearch(filterItems);
  }, [search]);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="lg:px-26 lg:flex-row gap-5 flex-col flex items-center justify-between pt-25">
            <h1 className="text-4xl font-bold pb-5">All Products:</h1>
            <div className="flex border border-gray-700 gap-1 rounded-full p-4">
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                className="outline-none px-2"
                placeholder="Search Products..."
              />
              <Search />
            </div>
          </div>
          {applySearch.length == 0 ? (
            <div className="gap-5 h-[70vh] w-full flex items-center justify-center">
              <Frown size={35} />
              <h1 className="text-3xl font-bold text-gray-600">
                No Products Found!!.
              </h1>
            </div>
          ) : (
            <div className=" pt-15 pb-25 flex items-center gap-x-4 gap-y-15 justify-center flex-wrap">
              {applySearch.map((data, index) => {
                return (
                  <Link to={`/products/description/${data.id}`}>
                    <div
                      key={index}
                      className="w-66 cursor-pointer border hover:scale-103 duration-200 flex flex-col rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <img
                        src={data.image}
                        alt={data.title}
                        className="aspect-square object-cover rounded-2xl"
                      />
                      <div className="px-5">
                        <h3 className="font-bold text-xl py-3">{data.title}</h3>
                        <p className="text-sm text-gray-500">
                          {data.decription.slice(0, 200) + "..."}
                        </p>
                        <h3 className="mt-4 font-bold text-xl px-3">
                          Price:{" "}
                          <span className="text-green-500">{data.price}</span>
                        </h3>
                      </div>
                      <button className="rounded-2xl mt-5 py-3 font-bold cursor-pointer hover:bg-amber-500 duration-200 bg-yellow-300">
                        Add To Cart
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Products;
