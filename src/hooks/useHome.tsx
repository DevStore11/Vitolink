import { useState } from 'react';

export const useHome = () => {
    const [Username,setUsername]=useState<string>("");
    const [acessKey,setAcessKey]=useState<string>("");

    return{Username,setUsername,acessKey,setAcessKey}

    
};
