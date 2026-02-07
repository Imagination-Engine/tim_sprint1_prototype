import React, { useCallback, useRef, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
  BackgroundVariant,
  Panel,
  type Connection,
  type Node,
} from 'reactflow';
import 'reactflow/dist/style.css';

import ContentNode from './nodes/ContentNode';
import CodeNode from './nodes/CodeNode';
import ImageNode from './nodes/ImageNode';
import ChatNode from './nodes/ChatNode';

const nodeTypes = {
  contentNode: ContentNode,
  codeNode: CodeNode,
  imageNode: ImageNode,
  chatNode: ChatNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'chatNode',
    position: { x: 250, y: 5 },
    data: { label: 'Chat Agent' },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const CanvasContent = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      // project was renamed to screenToFlowPosition in 11.x, but checking instance existence first
      if (!reactFlowInstance || !reactFlowWrapper.current) return;

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes],
  );

  return (
    <div className="w-full h-full bg-gray-50" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls className="bg-white border-gray-200 shadow-sm" />
        <MiniMap className="border border-gray-200 shadow-sm rounded-lg overflow-hidden" zoomable pannable />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        
        <Panel position="top-right" className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 text-xs text-gray-500">
          <div>Canvas Mode: <strong>Edit</strong></div>
          <div>Agents Active: <strong>1</strong></div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

const Canvas = () => (
  <ReactFlowProvider>
    <CanvasContent />
  </ReactFlowProvider>
);

export default Canvas;
