import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      titulo: 'Gestão de Subscritores',
      descricao: 'Regista e acompanha todos os clientes de fibra e rádio num só lugar.',
      cor: 'from-emerald-500/20 to-emerald-500/5',
      borda: 'border-emerald-500/20',
      icone: 'text-emerald-400',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      titulo: 'Suporte Técnico',
      descricao: 'Gestão eficiente de avarias e instalações com tickets prioritários.',
      cor: 'from-green-500/20 to-green-500/5',
      borda: 'border-green-500/20',
      icone: 'text-green-400',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titulo: 'Controlo de Redes',
      descricao: 'Monitoria de acessos e permissões para equipas de campo e escritório.',
      cor: 'from-emerald-600/20 to-emerald-600/5',
      borda: 'border-emerald-600/20',
      icone: 'text-emerald-500',
    },
  ];

  const roles = [
    {
      letra: 'A',
      nome: 'Administrador',
      descricao: 'Gestão total da rede, faturação e utilizadores.',
      cor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      anel: 'ring-emerald-500/30',
    },
    {
      letra: 'F',
      nome: 'Comercial',
      descricao: 'Atendimento ao público e novos contratos.',
      cor: 'bg-green-500/10 text-green-400 border-green-500/20',
      anel: 'ring-green-500/30',
    },
    {
      letra: 'T',
      nome: 'Instalador',
      descricao: 'Manutenção de rede e novas instalações no terreno.',
      cor: 'bg-emerald-600/10 text-emerald-500 border-emerald-600/20',
      anel: 'ring-emerald-600/30',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* ── Fundo decorativo ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        {/* Grid pattern subtil */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Navbar ── */}
      <nav className="relative z-10 border-b border-slate-800/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-white tracking-tight">DevNet</span>
              <span className="font-light text-slate-400 ml-1">ISP CRM</span>
            </div>
          </div>

          {/* Botão entrar */}
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-emerald-500 to-green-600
                       hover:from-emerald-400 hover:to-green-500 text-white text-sm font-semibold
                       rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20"
          >
            Entrar no Portal
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30
                        bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ISP Management System - Moçambique
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Conectando Moçambique
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            com Gestão Inteligente
          </span>
        </h1>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Plataforma centralizada para gestão de subscritores, infraestrutura e suporte técnico.
          A solução ideal para ISPs moçambicanos em crescimento.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/login')}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-green-600
                       hover:from-emerald-400 hover:to-green-500 text-white font-semibold rounded-xl
                       transition-all duration-200 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
          >
            Aceder ao Portal
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Acesso seguro com JWT
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.titulo}
              className={`p-6 rounded-2xl border ${f.borda} bg-gradient-to-b ${f.cor} backdrop-blur-sm`}
            >
              <div className={`mb-4 ${f.icone}`}>{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.titulo}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Roles / Perfis ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">Perfis de Acesso</h2>
          <p className="text-slate-400 text-sm">
            Cada colaborador tem a sua área dedicada com permissões específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {roles.map((r) => (
            <div
              key={r.nome}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center
                         hover:border-slate-700 transition-all duration-200"
            >
              <div className={`w-14 h-14 rounded-2xl border ${r.cor} flex items-center justify-center
                              text-xl font-bold mb-4 ring-4 ${r.anel}`}>
                {r.letra}
              </div>
              <h3 className="font-semibold text-white mb-2">{r.nome}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{r.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10
                        border border-slate-800 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para otimizar a sua rede?
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Entra com as tuas credenciais e acede à gestão de clientes e infraestrutura.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="px-10 py-3.5 bg-gradient-to-r from-emerald-500 to-green-600
                       hover:from-emerald-400 hover:to-green-500 text-white font-semibold
                       rounded-xl transition-all duration-200 shadow-xl shadow-emerald-500/20"
          >
            Entrar no Sistema
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-slate-800/60 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            DevNet ISP CRM
          </div>
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} — Sistema Interno. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}