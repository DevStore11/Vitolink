import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-xs font-bold">
            A
          </div>
          <span className="font-semibold text-slate-200">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 text-sm">Olá, <span className="text-white font-medium">{usuario?.nome}</span></span>
          <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/20">
            ADMIN
          </span>
          <button onClick={handleLogout}
            className="px-3 py-1.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
            Sair
          </button>
        </div>
      </nav>

      {/* Conteúdo */}
      <main className="p-6">
        <h2 className="text-xl font-bold mb-6 text-slate-100">Visão Geral</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Utilizadores', valor: '—', cor: 'cyan' },
            { label: 'Tickets Abertos', valor: '—', cor: 'violet' },
            { label: 'Clientes', valor: '—', cor: 'emerald' },
          ].map((card) => (
            <div key={card.label}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <p className="text-slate-400 text-sm">{card.label}</p>
              <p className="text-3xl font-bold mt-2 text-white">{card.valor}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}