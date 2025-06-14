
import type { StationType } from "../../backend/src/shared/types";
import type { StationFormData } from "./pages/AddStation";
import type { RegisterFormData } from "./pages/Register";
import type { SignInFormData } from "./pages/SignIn";
// import { useParams } from 'react-router-dom';





const API_BASE_URL=import.meta.env.VITE_API_BASE_URL ||"";
// const { stationId } = useParams();


export const register = async (formData: RegisterFormData) => {

  console.log(formData)
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
      method: "POST",
      credentials: "include",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // console.log(response);
    const responseBody = await response.json();
    
  
    if (!response.ok) {
      throw new Error(responseBody.message);
    }
  };
  
export const signIn=async(formData:SignInFormData)=>{
    const response =await fetch(`${API_BASE_URL}/api/auth/login`,{
        method:"POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    
    const body=await response.json();
    if(!response.ok){
        throw new Error(body.message);
    }
    return body;
}

export const signOut=async()=>{
    const response=await fetch(`${API_BASE_URL}/api/auth/logout`,{
        credentials:"include",
        method:"POST",
    })
    if(!response.ok){
        throw new Error("Unable to sign out");
    }
}

export const addMyStation = async (formData:StationFormData) => {
  console.log("formDatatapi",formData)
  const response = await fetch(`${API_BASE_URL}/api/my-stations`, {
    method: "POST",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
      },
    body:  JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to add station");
  }

  return response.json();
};

export const fetchStations = async (): Promise<StationType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/stations`);
  if (!response.ok) {
    throw new Error("Error fetching stations");
  }
  return response.json();
};

export const fetchStationById = async (stationId: string): Promise<StationType> => {
  const response = await fetch(`${API_BASE_URL}/api/stations/${stationId}`);
  if (!response.ok) {
    throw new Error("Error fetching Stations");
  }

  return response.json();
};

export const fetchMyStations = async (): Promise<StationType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-stations`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching stations");
  }

  return response.json();
};

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
    
    
  });
  
  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
  
};

// export type SearchParams={
//   status?:string;
//   connectorType?:string;
//   powerOutput?:string;
// }

// export const searchStations=async(searchParams:SearchParams):Promise<StationSearchResponse>=>{
//   const queryParams=new URLSearchParams();
//   queryParams.append("status",searchParams.status||"");
//   queryParams.append("connectorType",searchParams.connectorType||"");
//   queryParams.append("powerOutput",searchParams.powerOutput||"");
//   console.log("QueryParamsssss",queryParams)
  



//   const response=await fetch(`${API_BASE_URL}/api/stations/search?${queryParams}`)

//   if(!response.ok){
//     throw new Error('Error fetching stations')
//   }

//   return response.json();
// }