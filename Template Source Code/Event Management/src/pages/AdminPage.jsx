import React, { useState } from 'react';
import { AdminLayout } from '../components/admin/AdminLayout';
import { AdminDashboardView } from '../components/admin/AdminDashboardView';
import { AdminEventsView } from '../components/admin/AdminEventsView';
import { AdminGenericView } from '../components/admin/AdminGenericView';

export const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'dashboard' && <AdminDashboardView onNavigate={(tab) => setActiveTab(tab)} />}
      {activeTab === 'events' && <AdminEventsView />}
      {activeTab === 'bookings' && <AdminGenericView title="Bookings & Invoices" subtitle="Transaction logs and payment receipts" type="bookings" />}
      {activeTab === 'tickets' && <AdminGenericView title="Ticket Passes" subtitle="Tiered access and capacity limits" type="tickets" />}
      {activeTab === 'attendees' && <AdminGenericView title="Attendees & Check-in" subtitle="Live mobile QR ticket validation" type="attendees" />}
      {activeTab === 'venues' && <AdminGenericView title="Venues Directory" subtitle="Arena capacity and daily rental rates" type="venues" />}
      {activeTab === 'speakers' && <AdminGenericView title="Speakers Directory" subtitle="Keynote rosters and bio profiles" type="speakers" />}
      {activeTab === 'sponsors' && <AdminGenericView title="Sponsor Packages" subtitle="Corporate visibility and branding tier" type="sponsors" />}
      {activeTab === 'media' && <AdminGenericView title="Media Library" subtitle="High-res photos, 4K videos, and banners" type="media" />}
      {activeTab === 'blog' && <AdminGenericView title="Blog CMS" subtitle="Publish thought leadership & summit updates" type="blog" />}
      {activeTab === 'analytics' && <AdminGenericView title="Analytics & Funnel" subtitle="Detailed conversion heatmaps and forecast" type="analytics" />}
      {activeTab === 'notifications' && <AdminGenericView title="Notifications" subtitle="SMS, Push, and Email announcements" type="notifications" />}
      {activeTab === 'settings' && <AdminGenericView title="Platform Settings" subtitle="Stripe keys, brand tokens, and roles" type="settings" />}
    </AdminLayout>
  );
};
