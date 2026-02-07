import { memo } from 'react';
import BaseNode from './BaseNode';
import type { NodeProps } from 'reactflow';
import { Code } from 'lucide-react';

const CodeNode = ({ data, selected }: NodeProps) => {
  return (
    <BaseNode title="Code Block" selected={selected}>
      <div className="font-mono text-xs bg-gray-900 text-green-400 p-2 rounded">
        <div className="flex items-center gap-2 mb-1 border-b border-gray-700 pb-1">
            <Code size={12} />
            <span>script.py</span>
        </div>
        <pre>{data.code || "# Write some python code\ndef main():\n    print('Hello World')\n"}</pre>
      </div>
    </BaseNode>
  );
};

export default memo(CodeNode);

