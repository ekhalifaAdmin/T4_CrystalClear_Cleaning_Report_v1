import React from 'react';
import Section from './Section';

interface SignatureInputProps {
    label: string;
    nameValue: string;
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dateValue: string;
    onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignatureInput: React.FC<SignatureInputProps> = ({label, nameValue, onNameChange, dateValue, onDateChange}) => {
    const signatureInputClass = "font-serif italic text-lg w-full py-2 border-b-2 border-slate-300 focus:outline-none focus:border-teal-500 transition-colors";
    const nameInputClass = "w-full py-2 border-b-2 border-slate-300 focus:outline-none focus:border-teal-500 transition-colors";
    const dateInputClass = "w-full py-2 border-b-2 border-slate-300 focus:outline-none focus:border-teal-500 transition-colors";
    
    return (
        <div className="space-y-6">
            <h3 className="font-semibold text-slate-700">{label}</h3>
            <div className="grid grid-cols-2 gap-8 items-end">
                <div>
                    <input type="text" placeholder="Type name to sign" className={signatureInputClass} />
                    <label className="text-xs text-slate-500">Signature</label>
                </div>
                <div>
                     <input type="date" value={dateValue} onChange={onDateChange} className={dateInputClass} />
                    <label className="text-xs text-slate-500">Date</label>
                </div>
            </div>
            <div>
                 <input type="text" value={nameValue} onChange={onNameChange} placeholder="Print Name" className={nameInputClass} />
                <label className="text-xs text-slate-500">Name</label>
            </div>
        </div>
    );
};


interface SignatureSectionProps {
    supervisorName: string;
    setSupervisorName: (value: string) => void;
    supervisorDate: string;
    setSupervisorDate: (value: string) => void;
    clientRepName: string;
    setClientRepName: (value: string) => void;
    clientRepDate: string;
    setClientRepDate: (value: string) => void;
}

const SignatureSection: React.FC<SignatureSectionProps> = (props) => {
  return (
    <Section title="Signatures">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <SignatureInput 
                label="Supervisor"
                nameValue={props.supervisorName}
                onNameChange={(e) => props.setSupervisorName(e.target.value)}
                dateValue={props.supervisorDate}
                onDateChange={(e) => props.setSupervisorDate(e.target.value)}
            />
            <SignatureInput 
                label="Client Representative"
                nameValue={props.clientRepName}
                onNameChange={(e) => props.setClientRepName(e.target.value)}
                dateValue={props.clientRepDate}
                onDateChange={(e) => props.setClientRepDate(e.target.value)}
            />
        </div>
    </Section>
  );
};

export default SignatureSection;
