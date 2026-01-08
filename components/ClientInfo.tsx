import React from 'react';
import Section from './Section';
import TextInput from './TextInput';

interface ClientInfoProps {
  clientSite: string; setClientSite: (value: string) => void;
  address: string; setAddress: (value: string) => void;
  date: string; setDate: (value: string) => void;
  startTime: string; setStartTime: (value: string) => void;
  endTime: string; setEndTime: (value: string) => void;
  staffAssigned: string; setStaffAssigned: (value: string) => void;
}

const ClientInfo: React.FC<ClientInfoProps> = (props) => {
  return (
    <Section title="Client & Job Details">
      <div className="grid md:grid-cols-2 gap-4">
        <TextInput label="Client / Site" id="clientSite" value={props.clientSite} onChange={(e) => props.setClientSite(e.target.value)} placeholder="e.g., Acme Corp Headquarters" required />
        <TextInput label="Address" id="address" value={props.address} onChange={(e) => props.setAddress(e.target.value)} placeholder="e.g., 123 Main St" required />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <TextInput label="Date" id="date" type="date" value={props.date} onChange={(e) => props.setDate(e.target.value)} required />
        <TextInput label="Start Time" id="startTime" type="time" value={props.startTime} onChange={(e) => props.setStartTime(e.target.value)} required />
        <TextInput label="End Time" id="endTime" type="time" value={props.endTime} onChange={(e) => props.setEndTime(e.target.value)} required />
      </div>
      <TextInput label="Staff Assigned" id="staffAssigned" value={props.staffAssigned} onChange={(e) => props.setStaffAssigned(e.target.value)} placeholder="e.g., John Doe, Jane Smith" required />
    </Section>
  );
};

export default ClientInfo;
