/* eslint-disable @typescript-eslint/no-explicit-any */


import {
  createContext,
  useContext,
  useState,
  useEffect,
  
} from 'react';
import type { ReactNode } from 'react';
import api from '../api/axios';

export type TipoRole= "ADMIN" | "FUNCIONARIO" | "TECNICO";

export interface Usuario{
    id:number;
    nome:string;
    email:string;
    role:{nome:TipoRole};
}

interface AuthContextType {
    usuario:Usuario |null;
    carregando: boolean;
    login:(email:string,password:string)=>Promise<void>;
    logout:()=>Promise<void>;
}
const AuthContext=createContext<AuthContextType | null>(null);

export function AuthProvider({children}:{children:ReactNode}){
    const [usuario,setUsuario]=useState<Usuario |null>(null);
    const[carregando,setCarregando]=useState(true);

useEffect(()=>{
    api
    .get("/auth/me")
    .then((res)=>setUsuario(res.data))
    .catch(()=>setUsuario(null))
    .finally(()=>setCarregando(false));
    
},[]);
const login = async (email: string, password: string) => {
  
  try {
    const res = await api.post('/auth/login', { email, password });
    console.log('✅ Resposta:', res.data);
    setUsuario(res.data.usuario);
  } catch (err: any) {
    console.log('❌ Erro no login:', err?.response?.data ?? err?.message ?? err);
    throw err; // 👈 importante — relança o erro para o Login.tsx apanhar
  }
};


const logout=async()=>{
    await api.post("/auth/logout");
    setUsuario(null);
}

return(
    <AuthContext.Provider value={{usuario,carregando,login,logout}}>
        {children}
    </AuthContext.Provider>
)

}
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(){
    const context=useContext(AuthContext);
    if(!context){
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}