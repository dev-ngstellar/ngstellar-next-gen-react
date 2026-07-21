import React from 'react';
import { Upload, Search, Folder, Image as ImageIcon, MoreVertical, Trash2 } from 'lucide-react';
import Button from '../../components/ui/Button';

const MediaLibrary = () => {
  const images = Array(12).fill({
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=300&q=80',
    name: 'ai-server-room.jpg',
    size: '1.2 MB',
    date: 'Oct 12'
  });

  return (
    <div className="space-y-6 h-full flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Media Library</h1>
          <p className="text-[var(--color-text-muted)] text-sm">Manage your images, videos, and document assets.</p>
        </div>
        <Button variant="primary" icon={Upload}>Upload Files</Button>
      </div>

      {/* Toolbar */}
      <div className="admin-card p-4 flex flex-col sm:flex-row gap-4 items-center justify-between shrink-0">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
          <input 
            type="text" 
            placeholder="Search media files..." 
            className="w-full pl-9 pr-4 py-2 text-sm bg-[var(--color-bg-secondary)] border border-transparent focus:border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20 transition-all text-[var(--color-text)]"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" size="icon" className="flex-1 sm:flex-none"><Folder className="w-4 h-4" /></Button>
          <Button variant="outline" size="icon" className="flex-1 sm:flex-none"><ImageIcon className="w-4 h-4" /></Button>
        </div>
      </div>

      {/* Media Grid */}
      <div className="admin-card p-6 flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Upload Dropzone */}
          <div className="aspect-square rounded-2xl border-2 border-dashed border-[var(--color-border)] hover:border-[var(--color-primary-500)] bg-[var(--color-bg-secondary)] flex flex-col items-center justify-center cursor-pointer transition-colors group">
            <div className="w-12 h-12 rounded-full bg-[var(--color-bg)] shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Upload className="w-5 h-5 text-[var(--color-primary-500)]" />
            </div>
            <span className="text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-primary-600)]">Drag & Drop</span>
          </div>

          {/* Image Cards */}
          {images.map((img, idx) => (
            <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg transition-all cursor-pointer">
              <img src={img.url} alt={img.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <div className="flex justify-end">
                  <button className="p-1.5 bg-white/20 hover:bg-rose-500 text-white rounded-lg backdrop-blur-sm transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <div className="text-white text-xs font-medium truncate mb-1">{img.name}</div>
                  <div className="text-white/70 text-[10px] flex justify-between">
                    <span>{img.size}</span>
                    <span>{img.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MediaLibrary;
