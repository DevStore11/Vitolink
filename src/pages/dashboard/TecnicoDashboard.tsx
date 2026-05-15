import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function TecnicoDashboard() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-xs font-bold">
            T
          </div>
          <span className="font-semibold text-slate-200">Técnico Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 text-sm">Olá, <span className="text-white font-medium">{usuario?.nome}</span></span>
          <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full border border-orange-500/20">
            TECNICO
          </span>
          <button onClick={handleLogout}
            className="px-3 py-1.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
            Sair
          </button>
        </div>
      </nav>
      <main className="p-6">
        <h2 className="text-xl font-bold mb-6 text-slate-100">Chamadas Técnicas</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-400 text-sm">
          Nenhuma chamada técnica pendente.
        </div>
      </main>
    </div>
  );
}