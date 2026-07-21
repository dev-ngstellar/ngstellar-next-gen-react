import React from 'react';
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const AdminArticles = () => {
  const articles = [
    { id: 1, title: 'The AI Revolution in Healthcare', category: 'Health', author: 'Dr. Emily Chen', date: 'Oct 12, 2026', status: 'Published', views: '45.2k' },
    { id: 2, title: 'Global Market Report Q4', category: 'Business', author: 'David Wright', date: 'Oct 11, 2026', status: 'Draft', views: '-' },
    { id: 3, title: 'New Electric Vehicle Policies', category: 'Environment', author: 'Sarah Jenkins', date: 'Oct 10, 2026', status: 'In Review', views: '-' },
    { id: 4, title: 'Space Tourism: Next Steps', category: 'Science', author: 'Dr. Emily Chen', date: 'Oct 09, 2026', status: 'Published', views: '21.5k' },
    { id: 5, title: 'The Future of Remote Work', category: 'Business', author: 'Sarah Jenkins', date: 'Oct 08, 2026', status: 'Published', views: '18.9k' },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Published': return <Badge variant="success">Published</Badge>;
      case 'Draft': return <Badge variant="default">Draft</Badge>;
      case 'In Review': return <Badge variant="warning">In Review</Badge>;
      default: return <Badge variant="default">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Articles</h1>
          <p className="text-[var(--color-text-muted)] text-sm">Manage, edit, and publish your content.</p>
        </div>
        <Button variant="primary" icon={Plus}>Create Article</Button>
      </div>

      {/* Toolbar */}
      <div className="admin-card p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
          <input 
            type="text" 
            placeholder="Search articles by title or author..." 
            className="w-full pl-9 pr-4 py-2 text-sm bg-[var(--color-bg-secondary)] border border-transparent focus:border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20 transition-all text-[var(--color-text)]"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select className="bg-[var(--color-bg-secondary)] border border-transparent rounded-lg px-4 py-2 text-sm text-[var(--color-text)] outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20 cursor-pointer flex-1 sm:flex-none">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
            <option>In Review</option>
          </select>
          <Button variant="outline" size="icon"><Filter className="w-4 h-4" /></Button>
        </div>
      </div>

      {/* Data Table */}
      <div className="admin-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                <th className="p-4 font-semibold w-12"><input type="checkbox" className="rounded border-[var(--color-border)]" /></th>
                <th className="p-4 font-semibold min-w-[300px]">Article Details</th>
                <th className="p-4 font-semibold">Author</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Views</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-[var(--color-bg-secondary)]/50 transition-colors">
                  <td className="p-4"><input type="checkbox" className="rounded border-[var(--color-border)]" /></td>
                  <td className="p-4">
                    <div className="font-bold text-[var(--color-text)] mb-1 leading-snug">{article.title}</div>
                    <div className="text-xs font-semibold text-[var(--color-primary-600)]">{article.category}</div>
                  </td>
                  <td className="p-4 text-sm text-[var(--color-text)] font-medium">{article.author}</td>
                  <td className="p-4">{getStatusBadge(article.status)}</td>
                  <td className="p-4 text-sm text-[var(--color-text-muted)]">{article.date}</td>
                  <td className="p-4 text-sm font-medium text-[var(--color-text)]">{article.views}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary-600)] hover:bg-[var(--color-bg-secondary)] rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                      <button className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary-600)] hover:bg-[var(--color-bg-secondary)] rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                      <button className="p-2 text-[var(--color-text-muted)] hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--color-border)] flex items-center justify-between text-sm text-[var(--color-text-muted)]">
          <div>Showing 1 to 5 of 142 entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded bg-[var(--color-bg-secondary)] hover:bg-[var(--color-border)] transition-colors">Prev</button>
            <button className="px-3 py-1 rounded bg-[var(--color-primary-600)] text-white font-medium">1</button>
            <button className="px-3 py-1 rounded bg-[var(--color-bg-secondary)] hover:bg-[var(--color-border)] transition-colors">2</button>
            <button className="px-3 py-1 rounded bg-[var(--color-bg-secondary)] hover:bg-[var(--color-border)] transition-colors">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminArticles;
