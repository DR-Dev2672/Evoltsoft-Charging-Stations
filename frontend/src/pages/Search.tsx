// import { useQuery } from "react-query";
// // import { useSearchContext } from "../contexts/SearchContext";
// import * as apiClient from "../api-client";
// import { useState } from "react";
// // import SearchResultsCard from "../components/SearchResultsCard";
// // import Pagination from "../components/Pagination";
// // import StarRatingFilter from "../components/StarRatingFilter";
// // import HotelTypesFilter from "../components/HotelTypesFilter";
// // import FacilitiesFilter from "../components/FacilitiesFilter";
// // import PriceFilter from "../components/PriceFilter";
// import ConnectorTypeFilter from "../components/ConnectorTypeFilter";
// import StatusFilter from "../components/StatusFilter";

// const Search = () => {
//   // const search = useSearchContext();
//   // const [page, setPage] = useState<number>(1);
//   const [selectedConnectors, setSelectedConnectors] = useState<string[]>([]);
//   const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
//   // const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
//   // const [selectedPrice, setSelectedPrice] = useState<number | undefined>();
//   // const [sortOption, setSortOption] = useState<string>("");

//   const searchParams = {
//     // destination: search.destination,
//     // checkIn: search.checkIn.toISOString(),
//     // checkOut: search.checkOut.toISOString(),
//     // adultCount: search.adultCount.toString(),
//     // childCount: search.childCount.toString(),
//     // page: page.toString(),
//     connectorType: selectedConnectors?.toString(),
//     status: selectedTypes,
//     // facilities: selectedFacilities,
//     // maxPrice: selectedPrice?.toString(),
//     // sortOption,
//   };

//   const { data: stationData } = useQuery(["searchStations", searchParams], () =>
//     apiClient.searchStations(searchParams)
//   );

//   const handleConnectorsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const connectorType = event.target.value;

//     setSelectedConnectors((prevtype) =>
//       event.target.checked
//         ? [...prevtype, connectorType]
//         : prevtype.filter((connector) => connector !== connectorType)
//     );
//   };

//   const handleTypeChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
//     const activityType=event.target.value;
//     // console.log(activityType);
//     // console.log(event.target.checked);
    

//     setSelectedTypes((prevType)=>
//     event.target.checked
//     ?[...prevType,activityType]
//     :prevType.filter((type)=>type!==activityType)
//   )
//   }

//   // const handleHotelTypeChange = (
//   //   event: React.ChangeEvent<HTMLInputElement>
//   // ) => {
//   //   const hotelType = event.target.value;

//   //   setSelectedHotelTypes((prevHotelTypes) =>
//   //     event.target.checked
//   //       ? [...prevHotelTypes, hotelType]
//   //       : prevHotelTypes.filter((hotel) => hotel !== hotelType)
//   //   );
//   // };

//   // const handleFacilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   //   const facility = event.target.value;

//   //   setSelectedFacilities((prevFacilities) =>
//   //     event.target.checked
//   //       ? [...prevFacilities, facility]
//   //       : prevFacilities.filter((prevFacility) => prevFacility !== facility)
//   //   );
//   // };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
//       <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
//         <div className="space-y-5">
//           <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
//             Filter by:
//           </h3>
//           <ConnectorTypeFilter
//             selectedConnector={selectedConnectors}
//             onChange={handleConnectorsChange}
//           />
//           <StatusFilter
//           selectedType={selectedTypes}
//           onChange={handleTypeChange}
//           />
          
//           {/* <HotelTypesFilter
//             selectedHotelTypes={selectedHotelTypes}
//             onChange={handleHotelTypeChange}
//           />
//           <FacilitiesFilter
//             selectedFacilities={selectedFacilities}
//             onChange={handleFacilityChange}
//           />
//           <PriceFilter
//             selectedPrice={selectedPrice}
//             onChange={(value?: number) => setSelectedPrice(value)}
//           /> */}
//         </div>
//       </div>
//       {/* <div className="flex flex-col gap-5">
//         <div className="flex justify-between items-center">
//           <span className="text-xl font-bold">
//             {stationData?.pagination.total} Stations found
//             {search.destination ? ` in ${search.destination}` : ""}
//           </span>
//           <select
//             value={sortOption}
//             onChange={(event) => setSortOption(event.target.value)}
//             className="p-2 border rounded-md"
//           >
//             <option value="">Sort By</option>
//             <option value="starRating">Star Rating</option>
//             <option value="pricePerNightAsc">
//               Price Per Night (low to high)
//             </option>
//             <option value="pricePerNightDesc">
//               Price Per Night (high to low)
//             </option>
//           </select>
//         </div> */}
//         {/* {stationData?.data.map((hotel) => (
//           <SearchResultsCard hotel={hotel} />
//         ))} */}
//         {/* <div>
//           <Pagination
//             page={stationData?.pagination.page || 1}
//             pages={stationData?.pagination.pages || 1}
//             onPageChange={(page) => setPage(page)}
//           />
//         </div> */}
//       {/* </div> */}
//     </div>
//   );
// };

// export default Search;