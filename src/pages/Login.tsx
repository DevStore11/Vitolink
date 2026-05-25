/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, type TipoRole } from '../context/AuthContext';

const roleRedirects: Record<TipoRole, string> = {
  ADMIN: '/dashboard/admin',
  FUNCIONARIO: '/dashboard/funcionario',
  TECNICO: '/dashboard/tecnico',
};

export default function Login() {
  const { login, usuario } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  // ✅ Quando o usuario muda (após login), redireciona automaticamente
  useEffect(() => {
    if (usuario) {
      const destino = roleRedirects[usuario.role.nome];
      navigate(destino, { replace: true });
    }
  }, [usuario, navigate]);

  const handleSubmit = async (e: any) => {
    e?.preventDefault();
   
    setErro('');
    setCarregando(true);

    try {
      await login(email, password); // ← o useEffect acima trata do redirect
    } catch (err: any) {
      const msg =
        err?.response?.data?.message ?? 'Credenciais inválidas. Tenta novamente.';
      setErro(msg);
    } finally {
      setCarregando(false);
    }
  };



    
    return(
        <div className='min-h-screen bg-slate-950 flex items-center justify-center p-4'>
            {/**Fundo decorativo */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <div className='absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl'/>
            <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl'/>
        </div>
        <div className="relative w-full max-w-md">
        {/* Logo / Título */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 mb-4 shadow-lg shadow-emerald-500/20">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">DevNet ISP CRM</h1>
          <p className="text-slate-400 text-sm mt-1">Acede à tua área de trabalho</p>
        </div>

        {/* Card do formulário */}
        <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemplo@empresa.com"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-500
                           focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-500
                           focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200"
              />
            </div>

            {/* Erro */}
            {erro && (
              <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-400 text-sm">{erro}</p>
              </div>
            )}

            {/* Botão */}
          <button
  type="submit"
  disabled={carregando}
  className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500
             text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20
             disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
>
  {carregando ? (
    <>
      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      <span>A entrar...</span>
    </>
  ) : (
    'Entrar'
  )}
</button>
          </form>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6">
          DevNet CRM © {new Date().getFullYear()}
        </p>
      </div>
    </div>



   


    );

  }