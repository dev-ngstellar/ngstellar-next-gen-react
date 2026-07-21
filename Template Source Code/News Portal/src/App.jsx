import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import FrontendLayout from './components/layout/FrontendLayout';
import AdminLayout from './components/layout/AdminLayout';

import Home from './pages/Home';
import Categories from './pages/Categories';
import ArticleDetails from './pages/ArticleDetails';
import Authors from './pages/Authors';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogArchive from './pages/BlogArchive';

import Dashboard from './pages/admin/Dashboard';
import AdminArticles from './pages/admin/AdminArticles';
import AdminCategories from './pages/admin/AdminCategories';
import MediaLibrary from './pages/admin/MediaLibrary';

// Admin Pages Placeholders (Remaining)
const AdminAuthors = () => <div className="p-4"><h2>Manage Authors</h2></div>;
const AdminSettings = () => <div className="p-4"><h2>Settings</h2></div>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Frontend Routes */}
        <Route element={<FrontendLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/article/:slug" element={<ArticleDetails />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/archive" element={<BlogArchive />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="articles" element={<AdminArticles />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="authors" element={<AdminAuthors />} />
          <Route path="media" element={<MediaLibrary />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
