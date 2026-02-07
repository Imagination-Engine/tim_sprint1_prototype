import { memo } from 'react';
import BaseNode from './BaseNode';
import type { NodeProps } from 'reactflow';
import { MessageSquare } from 'lucide-react';

const ChatNode = ({ selected }: NodeProps) => {
  return (
    <BaseNode title="Chat Agent" selected={selected}>
      <div className="space-y-2">
        <div className="flex gap-2 text-xs">
            <div className="bg-blue-100 text-blue-800 p-1.5 rounded-lg rounded-tl-none max-w-[80%]">
                Can you help me build a business?
            </div>
        </div>
        <div className="flex gap-2 text-xs flex-row-reverse">
            <div className="bg-gray-100 text-gray-800 p-1.5 rounded-lg rounded-tr-none max-w-[80%]">
                Sure! Let's start with a market research block.
            </div>
        </div>
        <div className="flex items-center gap-1 text-gray-400 border-t pt-1 mt-1">
            <MessageSquare size={12} />
            <span className="text-[10px]">Chat Agent active</span>
        </div>
      </div>
    </BaseNode>
  );
};

export default memo(ChatNode);
