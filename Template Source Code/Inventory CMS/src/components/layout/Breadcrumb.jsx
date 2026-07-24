import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const pathNameMap = {
  products: 'Products Catalog',
  add: 'Add New Product',
  inventory: 'Stock Inventory',
  categories: 'Product Categories',
  brands: 'Brands & Manufacturers',
  warehouse: 'Warehouses & Storage',
  transfers: 'Stock Transfers',
  'purchase-orders': 'Purchase Orders',
  'sales-orders': 'Sales Orders',
  suppliers: 'Suppliers Directory',
  customers: 'Customer CRM',
  reports: 'Reports & Exports',
  analytics: 'Analytics & Forecasts',
  notifications: 'Notifications Center',
  settings: 'System Settings',
  help: 'Help Center & Documentation',
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center space-x-1.5 text-xs text-txt-muted font-medium mb-4">
      <Link
        to="/"
        className="flex items-center space-x-1 hover:text-accent-primary transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Dashboard</span>
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = pathNameMap[value] || value;

        return (
          <React.Fragment key={to}>
            <ChevronRight className="w-3 h-3 text-txt-muted/60" />
            {isLast ? (
              <span className="text-txt-heading font-bold capitalize">{displayName}</span>
            ) : (
              <Link to={to} className="hover:text-accent-primary transition-colors capitalize">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
