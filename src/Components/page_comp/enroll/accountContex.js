import { createContext , useContext, useState } from "react";

export const AccountContex = createContext({
    user : "user",
    usefff : ()=>{},
    User_Avater : "url"
});
export const AccountProvider = AccountContex.Provider;
export default function useAccount(){
    return useContext(AccountContex)
}