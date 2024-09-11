import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext=createContext()
export const useAuth=()=>useContext(AuthContext)

const AuthContextProvider=({children})=>{
    const [id,setId]=useState(() => localStorage.getItem("id") || false)
    const [isAuth,setAuth]=useState(() => localStorage.getItem("isAuthenticated") || false)
    const [nama, setNama] = useState(() => localStorage.getItem("nama") || '');
    const [role,setRole] = useState(() => localStorage.getItem("role") || '');
    const navigate = useNavigate();
    const [username,setUsername]=useState()
    const login=(user,role,id)=>{
        setId(id)
        setNama(user);
        setAuth(true)
        setRole(role)
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('nama', user);
        localStorage.setItem('role',role);
        localStorage.setItem("id",id)
    }
    const logout=()=>{
        setId('')
        setNama('');
        setAuth(false)
        setRole('')
        localStorage.setItem('isAuthenticated', 'false');
        localStorage.setItem('nama', '');
        localStorage.setItem('role','');
        localStorage.setItem("id",'')
        navigate("/")
    }
    return(
        <AuthContext.Provider value={{ isAuth,setAuth,nama,id,setId,setNama,login,role,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const Auth=AuthContext
export default AuthContextProvider

