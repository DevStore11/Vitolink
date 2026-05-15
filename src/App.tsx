import React from 'react'
import './App.css'
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import FuncionarioDashboard from "./pages/dashboard/FuncionarioDashboard";
import TecnicoDashboard from "./pages/dashboard/TecnicoDashboard";
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

export const App: React.FC = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            {/* Pública — página inicial */}
            <Route path="/" element={<Home />} />

            {/* Pública — login */}
            <Route path="/login" element={<Login />} />

            {/* Protegidas por role */}
            <Route path="/dashboard/admin" element={
              <ProtectedRoute roles={['ADMIN']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />

            <Route path="/dashboard/funcionario" element={
              <ProtectedRoute roles={['FUNCIONARIO']}>
                <FuncionarioDashboard />
              </ProtectedRoute>
            } />

            <Route path="/dashboard/tecnico" element={
              <ProtectedRoute roles={['TECNICO']}>
                <TecnicoDashboard />
              </ProtectedRoute>
            } />

            {/* Qualquer rota inválida → home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}