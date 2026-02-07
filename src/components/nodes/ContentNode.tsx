import { memo } from 'react';
import BaseNode from './BaseNode';
import type { NodeProps } from 'reactflow';

const ContentNode = ({ data, selected }: NodeProps) => {
  return (
    <BaseNode title="Content Block" selected={selected}>
      <div className="space-y-2">
         <p className="text-gray-500 italic">{data.content || "Write your content here..."}</p>
      </div>
    </BaseNode>
  );
};

export default memo(ContentNode);
