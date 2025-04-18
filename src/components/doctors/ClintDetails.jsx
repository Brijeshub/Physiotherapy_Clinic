// import React from "react";

// const ClientDetails = () => {
//   return (
//     <>
//     <div className="size-60 mt-5 p-5 border rounded-lg shadow-md bg-white">
//       <p>hello</p>
//     </div>
//     </>
//   );
// };

// export default ClientDetails;

import React from "react";
const ClientDetails = ({ client }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-transparent shadow-xl rounded-xl text-gray-100 md:bg-red-300 md:absolute md:left-[30rem] md:-top-16 md:w-80 md:shadow-2xl md:shadow-slate-600 lg:bg-green-500 lg:left-20">
      <h2 className="text-3xl font-extrabold mb-3 text-center text-blue-700">
        Physiotherepy specialist
      </h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center text-gray-400 text-xl font-semibold">
          {/* {client?.name ? client.name.charAt(0) : "P"} */}
        </div>
        <p className="text-lg font-semibold">
          {client?.name || "Not Available"}
        </p>
        <p className="text-gray-200">{client?.email || "Not Available"}</p>
        {client?.phone && (
          <p className="text-gray-200">
            <strong>Phone:</strong> {client.phone}
          </p>
        )}
        {client?.specialization && (
          <p className="text-gray-200 italic">{client.specialization}</p>
        )}
        {client?.experience && (
          <p className="text-gray-200">
            <strong>Experience:</strong> {client.experience} years
          </p>
        )}
        {client?.address && (
          <p className="text-gray-200">
            <strong>Location:</strong> {client.address}
          </p>
        )}
      </div>
    </div>
  );
};

export default ClientDetails;
