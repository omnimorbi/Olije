import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <a href="/admin" className="block hover:text-blue-400">Dashboard</a>
          <a href="/admin/content" className="block hover:text-blue-400">Content</a>
          <a href="/admin/settings" className="block hover:text-blue-400">Settings</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
