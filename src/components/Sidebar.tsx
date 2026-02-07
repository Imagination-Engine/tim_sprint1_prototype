import React from 'react';
import { FileText, Code, Image as ImageIcon, MessageSquare } from 'lucide-react';

const Sidebar = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const items = [
    { type: 'contentNode', label: 'Content', icon: FileText, desc: 'Rich text & markdown' },
    { type: 'codeNode', label: 'Code', icon: Code, desc: 'Execute code snippets' },
    { type: 'imageNode', label: 'Image', icon: ImageIcon, desc: 'Generate & edit images' },
    { type: 'chatNode', label: 'Chat Agent', icon: MessageSquare, desc: 'Conversational agent' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full shadow-sm z-10">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded text-white flex items-center justify-center text-xs">B</span>
            Balnce AI
        </h1>
        <p className="text-xs text-gray-500 mt-1">Imagination Canvas</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Block Library</h3>
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.type}
              className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-teal-50 cursor-grab transition-all bg-white shadow-sm"
              onDragStart={(event) => onDragStart(event, item.type)}
              draggable
            >
              <div className="p-2 bg-gray-100 rounded text-gray-600">
                <item.icon size={16} />
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700">{item.label}</span>
                <span className="block text-xs text-gray-500">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Systems Operational
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
