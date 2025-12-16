import { useContext, createContext } from "react";

export const EnrolContex = createContext({
    username : "prashanta"
});


export const EnrollProvider =EnrolContex.Provider;


export default function useEnrol(){
    return useContext(EnrolContex)
}