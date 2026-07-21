import React from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const AdminCategories = () => {
  const categories = [
    { id: 1, name: 'Technology', slug: 'technology', color: 'bg-blue-500', count: 142 },
    { id: 2, name: 'Business', slug: 'business', color: 'bg-emerald-500', count: 89 },
    { id: 3, name: 'Politics', slug: 'politics', color: 'bg-rose-500', count: 115 },
    { id: 4, name: 'Science', slug: 'science', color: 'bg-purple-500', count: 64 },
    { id: 5, name: 'Health', slug: 'health', color: 'bg-teal-500', count: 92 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Categories</h1>
          <p className="text-[var(--color-text-muted)] text-sm">Organize your content with topics.</p>
        </div>
        <Button variant="primary" icon={Plus}>Add Category</Button>
      </div>

      <div className="admin-card overflow-hidden">
        <div className="p-4 border-b border-[var(--color-border)]">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
            <input type="text" placeholder="Search categories..." className="w-full pl-9 pr-4 py-2 text-sm bg-[var(--color-bg-secondary)] border border-transparent focus:border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20 transition-all text-[var(--color-text)]" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                <th className="p-4 font-semibold w-12"><input type="checkbox" className="rounded border-[var(--color-border)]" /></th>
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Slug</th>
                <th className="p-4 font-semibold">Color Tag</th>
                <th className="p-4 font-semibold">Articles</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-[var(--color-bg-secondary)]/50 transition-colors">
                  <td className="p-4"><input type="checkbox" className="rounded border-[var(--color-border)]" /></td>
                  <td className="p-4 font-bold text-[var(--color-text)]">{cat.name}</td>
                  <td className="p-4 text-sm text-[var(--color-text-muted)]">/{cat.slug}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${cat.color}`}></div>
                    </div>
                  </td>
                  <td className="p-4"><Badge>{cat.count}</Badge></td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary-600)] hover:bg-[var(--color-bg-secondary)] rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                      <button className="p-2 text-[var(--color-text-muted)] hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
