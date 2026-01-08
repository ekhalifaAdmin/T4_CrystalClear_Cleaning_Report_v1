import React from 'react';
import Section from './Section';
import TextInput from './TextInput';

interface NotesSectionProps {
    clientFeedback: string;
    setClientFeedback: (value: string) => void;
    supervisorNotes: string;
    setSupervisorNotes: (value: string) => void;
}

const NotesSection: React.FC<NotesSectionProps> = (props) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Section title="Client Feedback (optional)">
        <TextInput 
            label=""
            id="clientFeedback"
            as="textarea"
            rows={4}
            value={props.clientFeedback}
            onChange={(e) => props.setClientFeedback(e.target.value)}
            placeholder="Enter any feedback from the client..."
        />
      </Section>
      <Section title="Supervisor Notes">
        <TextInput
            label=""
            id="supervisorNotes"
            as="textarea"
            rows={4}
            value={props.supervisorNotes}
            onChange={(e) => props.setSupervisorNotes(e.target.value)}
            placeholder="Enter any internal notes for the job..."
        />
      </Section>
    </div>
  );
};

export default NotesSection;
