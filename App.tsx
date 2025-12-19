
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AIGateway from './components/AIGateway';
import AuditLogs from './components/AuditLogs';
import RepositoryExport from './components/RepositoryExport';
import Mission from './components/Mission';
import { ShieldCheck, Database, Users, Gavel } from 'lucide-react';

const PlaceholderContent: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] border-2 border-dashed border-slate-800 rounded-3xl p-12 text-center animate-in fade-in zoom-in duration-500">
    <div className="bg-slate-900 p-6 rounded-full border border-slate-700 mb-6 group-hover:border-emerald-500/50 transition-all">
      {React.cloneElement(icon as React.ReactElement, { className: "w-12 h-12 text-slate-500" })}
    </div>
    <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
    <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
      This module is currently initializing in high-compliance sovereign mode. 
      Full integration with Elmahrosa International's civic blockchain core is pending protocol validation.
    </p>
    <button className="mt-8 px-6 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-sm font-semibold transition-all">
      Check Status
    </button>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'mission':
        return <Mission />;
      case 'gateway':
        return <AIGateway />;
      case 'governance':
        return <PlaceholderContent title="Data Governance Engine" icon={<Database />} />;
      case 'identity':
        return <PlaceholderContent title="Civic Identity Hub" icon={<Users />} />;
      case 'compliance':
        return <PlaceholderContent title="Global Compliance Map" icon={<Gavel />} />;
      case 'logs':
        return <AuditLogs />;
      case 'export':
        return <RepositoryExport />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
