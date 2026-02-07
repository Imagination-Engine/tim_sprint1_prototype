import { memo } from 'react';
import BaseNode from './BaseNode';
import type { NodeProps } from 'reactflow';
import { Image as ImageIcon } from 'lucide-react';

const ImageNode = ({ data, selected }: NodeProps) => {
  return (
    <BaseNode title="Image Block" selected={selected}>
      <div className="flex items-center justify-center bg-gray-100 h-32 rounded border border-dashed border-gray-300">
        {data.url ? (
            <img src={data.url} alt="Generated" className="h-full w-full object-cover rounded" />
        ) : (
            <div className="flex flex-col items-center text-gray-400">
                <ImageIcon size={24} />
                <span className="text-xs mt-1">Image Placeholder</span>
            </div>
        )}
      </div>
    </BaseNode>
  );
};

export default memo(ImageNode);
