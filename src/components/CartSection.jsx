import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const CartSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889"
    )
      .then((res) => {
        return res.json();
      })
      .then((item) => {
        console.log(item.items[0]);
        setData(item.items[0]);
      });
  }, []);

  const [number, setNumber] = useState(1);

  return (
    <div className="py-5 lg:py-10 px-0 lg:px-14 flex flex-col lg:flex-row gap-5">
      <div className="relative flex flex-col w-full h-full bg-white bg-clip-border">
        <table className="w-full text-left table-auto max-w-[70vw] lg:max-w-[100vw]">
          <thead className="bg-pink-100">
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 pl-10 lg:pl-20">
                <p className="block font-sans text-sm antialiased font-semibold">
                  Product
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-semibold">
                  Price
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-semibold">
                  Quantity
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-semibold">
                  Subtotal
                </p>
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4 border-b border-blue-gray-50 flex gap-3 items-center">
                <img className="w-20" src={data.image} alt="" />
                <p className="text-sm font-normal text-gray-400 block font-sans antialiased leading-normal text-blue-gray-900">
                  {data.title}
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p className=" text-gray-400 block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {data.price ? `Rs. ${data.price}` : ""}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {data.quantity ? (
                    <input
                      className="w-12"
                      type="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  ) : (
                    ""
                  )}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {data.price ? `Rs. ${data.price * number}` : ""}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                {data.price ? (
                  <button
                    onClick={() => setData([])}
                    className="text-orange-400"
                  >
                    <FaTrash />
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="min-w-[25vw] bg-pink-100 grid justify-center">
        <h1 className="mt-3 text-2xl font-bold">Cart Totals</h1>
        <div className="flex gap-10 mt-10">
          <p className="font-semibold">Subtotal</p>
          <p className="text-sm font-medium text-gray-400">
            {data.price ? `Rs. ${data.price * number}` : "Rs. 0"}
          </p>
        </div>
        <div className="flex gap-10 mt-4">
          <p className="font-semibold">Total</p>
          <p className="text-orange-400 text-xl">
            {data.price ? `Rs. ${data.price * number}` : "Rs. 0"}
          </p>
        </div>
        <button
          onClick={() => setData([])}
          className="bg-pink-100 text-black font-semibold py-2 px-4 border border-black rounded-lg shadow mb-14 mt-10"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartSection;
