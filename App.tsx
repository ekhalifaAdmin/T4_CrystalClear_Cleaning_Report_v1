import React, { useState } from 'react';
import Header from './components/Header';
import ClientInfo from './components/ClientInfo';
import TaskList from './components/TaskList';
import PhotoUpload from './components/PhotoUpload';
import MaterialsUsed from './components/MaterialsUsed';
import NotesSection from './components/NotesSection';
import SignatureSection from './components/SignatureSection';
import { Task, Material } from './types';
import { INITIAL_TASKS } from './constants';

const App: React.FC = () => {
  const [clientSite, setClientSite] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [staffAssigned, setStaffAssigned] = useState('');

  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [materials, setMaterials] = useState<Material[]>([
    { id: 1, item: 'Disinfectant', quantity: '1L' },
    { id: 2, item: 'Paper Towels', quantity: '2 rolls' },
  ]);

  const [beforePhoto, setBeforePhoto] = useState<File | null>(null);
  const [afterPhoto, setAfterPhoto] = useState<File | null>(null);

  const [clientFeedback, setClientFeedback] = useState('');
  const [supervisorNotes, setSupervisorNotes] = useState('');
  
  const [supervisorName, setSupervisorName] = useState('');
  const [supervisorDate, setSupervisorDate] = useState(new Date().toISOString().split('T')[0]);
  const [clientRepName, setClientRepName] = useState('');
  const [clientRepDate, setClientRepDate] = useState(new Date().toISOString().split('T')[0]);

  const handleTaskToggle = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
        clientSite, address, date, startTime, endTime, staffAssigned,
        tasks, materials, beforePhoto, afterPhoto,
        clientFeedback, supervisorNotes,
        supervisorName, supervisorDate, clientRepName, clientRepDate
    };
    console.log('Form Submitted:', formData);
    alert('Service report submitted successfully! Check the console for the data.');
  };

  return (
    <div className="min-h-screen font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        <Header />
        <form className="p-6 md:p-8 space-y-8" onSubmit={handleFormSubmit}>
          <ClientInfo
            clientSite={clientSite} setClientSite={setClientSite}
            address={address} setAddress={setAddress}
            date={date} setDate={setDate}
            startTime={startTime} setStartTime={setStartTime}
            endTime={endTime} setEndTime={setEndTime}
            staffAssigned={staffAssigned} setStaffAssigned={setStaffAssigned}
          />
          <TaskList tasks={tasks} onToggle={handleTaskToggle} />
          <div className="grid md:grid-cols-2 gap-8">
            <PhotoUpload title="Before Photo" photo={beforePhoto} setPhoto={setBeforePhoto} />
            <PhotoUpload title="After Photo" photo={afterPhoto} setPhoto={setAfterPhoto} />
          </div>
          <MaterialsUsed materials={materials} setMaterials={setMaterials} />
          <NotesSection 
            clientFeedback={clientFeedback} setClientFeedback={setClientFeedback}
            supervisorNotes={supervisorNotes} setSupervisorNotes={setSupervisorNotes}
          />
          <SignatureSection
            supervisorName={supervisorName} setSupervisorName={setSupervisorName}
            supervisorDate={supervisorDate} setSupervisorDate={setSupervisorDate}
            clientRepName={clientRepName} setClientRepName={setClientRepName}
            clientRepDate={clientRepDate} setClientRepDate={setClientRepDate}
          />
          <div className="pt-4 border-t border-slate-200">
            <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-teal-300">
              Complete & Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
