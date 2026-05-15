export default function LoadingScreen(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
         <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"/>   
        <p className="text-slate-400 text-sm tracking-windest uppercase">
            A verificar Sessao</p> 
        </div>   

        </div>

    )
}