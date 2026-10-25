import {createContext,useState,useContext} from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

 export const AppContextProvider = ({children}) =>{

    const Navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller,setIsSeller] = useState(false);

    const value = {Navigate,user,setUser,isSeller,setIsSeller};
        return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
    
 }

export const useAppContext = () =>{
    return useContext(AppContext)
}