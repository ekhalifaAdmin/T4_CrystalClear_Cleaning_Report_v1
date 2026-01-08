import React from 'react';
import Section from './Section';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onToggle: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle }) => {
  return (
    <Section title="Job Description / Tasks Performed">
      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
        {tasks.map((task) => (
          <label key={task.id} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
            />
            <span className={`text-sm ${task.completed ? 'text-slate-500 line-through' : 'text-slate-700'}`}>
              {task.label}
            </span>
          </label>
        ))}
      </div>
    </Section>
  );
};

export default TaskList;
