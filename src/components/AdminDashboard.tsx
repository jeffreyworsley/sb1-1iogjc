import React from 'react';
import { Users, FileText, Clock } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DashboardCard
          title="Manage Employees"
          icon={<Users size={24} />}
          description="Add, edit, or remove employee accounts"
        />
        <DashboardCard
          title="Time Codes & Departments"
          icon={<Clock size={24} />}
          description="Manage time codes and department assignments"
        />
        <DashboardCard
          title="Generate Reports"
          icon={<FileText size={24} />}
          description="Run reports on individual or all employees"
        />
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; icon: React.ReactNode; description: string }> = ({
  title,
  icon,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 text-white p-3 rounded-full mr-4">{icon}</div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        Go to {title}
      </button>
    </div>
  );
};

export default AdminDashboard;