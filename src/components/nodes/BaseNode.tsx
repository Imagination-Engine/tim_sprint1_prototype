import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { MoreHorizontal } from 'lucide-react';
import clsx from 'clsx';

interface BaseNodeProps {
  title: string;
  children: React.ReactNode;
  selected?: boolean;
  type?: string;
}

const BaseNode = ({ title, children, selected }: BaseNodeProps) => {
  return (
    <div
      className={clsx(
        "bg-white border-2 rounded-lg shadow-sm min-w-[250px] transition-colors",
        selected ? "border-primary shadow-md" : "border-gray-200",
        "flex flex-col overflow-hidden"
      )}
    >
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-b border-gray-100">
        <span className="font-semibold text-sm text-gray-700">{title}</span>
        <MoreHorizontal className="w-4 h-4 text-gray-400" />
      </div>
      
      <div className="p-3 text-sm text-gray-600 bg-white">
        {children}
      </div>

      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-gray-400" />
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-gray-400" />
    </div>
  );
};

export default memo(BaseNode);
