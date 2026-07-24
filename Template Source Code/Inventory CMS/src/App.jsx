import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InventoryProvider } from './context/InventoryContext';
import AppLayout from './components/layout/AppLayout';

import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import Inventory from './pages/Inventory';
import Warehouse from './pages/Warehouse';
import PurchaseOrders from './pages/PurchaseOrders';
import SalesOrders from './pages/SalesOrders';
import Customers from './pages/Customers';
import Suppliers from './pages/Suppliers';
import Reports from './pages/Reports';
import Analytics from './pages/Analytics';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import HelpCenter from './pages/HelpCenter';
import Categories from './pages/Categories';
import Brands from './pages/Brands';
import Transfers from './pages/Transfers';

export default function App() {
  return (
    <InventoryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="categories" element={<Categories />} />
            <Route path="brands" element={<Brands />} />
            <Route path="warehouse" element={<Warehouse />} />
            <Route path="transfers" element={<Transfers />} />
            <Route path="purchase-orders" element={<PurchaseOrders />} />
            <Route path="sales-orders" element={<SalesOrders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="reports" element={<Reports />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<HelpCenter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </InventoryProvider>
  );
}
