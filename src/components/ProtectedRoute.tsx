/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate } from 'react-router-dom';
import { useAuth, type TipoRole } from '../context/AuthContext';
import LoadingScreen from './LoadingScreen';

interface  Props{
   children:React.ReactNode;
   roles?:TipoRole[];

}
export default function ProtectedRoute({children,roles}:Props){
    const {usuario,carregando}=useAuth();
    if(carregando){
        return <LoadingScreen/>;
    }
    if(!usuario){
        return <Navigate to="/login" replace/>;
    }
    if(roles && !roles.includes(usuario.role.nome)){
        return <Navigate to={getRolePath(usuario.role.nome)} replace/>;
    }
    return <>{children}</>;
}
function getRolePath(role:TipoRole){
    const paths:Record<TipoRole,string>={
        ADMIN:'/dashboard/admin',
        FUNCIONARIO:'/dashboard/funcionario',
        TECNICO:'/dashboard/tecnico',
    };
    return paths[role];
}