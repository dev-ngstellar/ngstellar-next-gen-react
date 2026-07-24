import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Plus,
  LayoutGrid,
  List,
  Table as TableIcon,
  CreditCard,
  Edit,
  Eye,
  Trash2,
  Copy,
  ChevronDown,
  Download,
  Upload,
  SlidersHorizontal,
  CheckSquare,
  Square,
  AlertTriangle,
  ArrowUpDown,
  Tag,
  Building2,
  Boxes,
} from 'lucide-react';
import { useInventory } from '../context/InventoryContext';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const { products, categories, brands, setSelectedProductDetail, addToast } = useInventory();
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState('table'); // table, grid, list, card
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.barcode.includes(searchTerm);
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || p.brand === selectedBrand;
    const matchesStatus = selectedStatus === 'All' || p.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesBrand && matchesStatus;
  });

  const toggleSelectProduct = (id) => {
    if (selectedProductIds.includes(id)) {
      setSelectedProductIds(selectedProductIds.filter((item) => item !== id));
    } else {
      setSelectedProductIds([...selectedProductIds, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedProductIds.length === filteredProducts.length) {
      setSelectedProductIds([]);
    } else {
      setSelectedProductIds(filteredProducts.map((p) => p.id));
    }
  };

  const handleBulkExport = () => {
    addToast('Export Initiated', `Exported ${selectedProductIds.length || filteredProducts.length} items to CSV.`, 'success');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-txt-heading">Products Catalog</h1>
          <p className="text-xs text-txt-muted">
            Manage your global catalog, multi-view inventories, pricing, and stock levels.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleBulkExport}
            className="px-3 py-2 rounded-xl bg-bg-card border border-border-main text-txt-heading text-xs font-semibold hover:bg-bg-hover transition-colors flex items-center space-x-1.5"
          >
            <Download className="w-4 h-4 text-txt-muted" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => navigate('/products/add')}
            className="px-4 py-2 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
          >
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Filter & View Mode Controls Bar */}
      <div className="p-4 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-txt-muted absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Product Name, SKU, or Barcode..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-medium"
          />
        </div>

        {/* Category, Brand & Status Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none font-medium"
          >
            <option value="All">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-3 py-2 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none font-medium"
          >
            <option value="All">All Brands</option>
            {brands.map((b) => (
              <option key={b.id} value={b.name}>
                {b.name}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none font-medium"
          >
            <option value="All">All Stock Statuses</option>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center p-1 bg-bg-surface border border-border-main rounded-xl">
            {[
              { id: 'table', icon: TableIcon, label: 'Table' },
              { id: 'grid', icon: LayoutGrid, label: 'Grid' },
              { id: 'list', icon: List, label: 'List' },
              { id: 'card', icon: CreditCard, label: 'Card' },
            ].map((mode) => {
              const Icon = mode.icon;
              return (
                <button
                  key={mode.id}
                  onClick={() => setViewMode(mode.id)}
                  className={`p-1.5 rounded-lg text-xs transition-all ${
                    viewMode === mode.id
                      ? 'bg-accent-primary text-white shadow-sm font-bold'
                      : 'text-txt-muted hover:text-txt-heading'
                  }`}
                  title={`${mode.label} View`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bulk Action Bar (when items are selected) */}
      {selectedProductIds.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-between text-xs font-bold text-txt-heading"
        >
          <div className="flex items-center space-x-2">
            <span className="w-5 h-5 rounded-full bg-accent-primary text-white flex items-center justify-center text-[10px]">
              {selectedProductIds.length}
            </span>
            <span>Items Selected</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleBulkExport}
              className="px-3 py-1.5 rounded-lg bg-bg-card border border-border-main text-txt-heading hover:bg-bg-hover"
            >
              Bulk Export
            </button>
            <button
              onClick={() => {
                addToast('Bulk Delete', `Removed ${selectedProductIds.length} items.`, 'danger');
                setSelectedProductIds([]);
              }}
              className="px-3 py-1.5 rounded-lg bg-accent-danger text-white hover:bg-accent-danger/90"
            >
              Delete Selected
            </button>
          </div>
        </motion.div>
      )}

      {/* VIEW MODE 1: TABLE VIEW */}
      {viewMode === 'table' && (
        <div className="p-4 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border-main text-txt-muted font-bold uppercase text-[10px]">
                <th className="py-3 px-3 w-10">
                  <button onClick={toggleSelectAll}>
                    {selectedProductIds.length === filteredProducts.length && filteredProducts.length > 0 ? (
                      <CheckSquare className="w-4 h-4 text-accent-primary" />
                    ) : (
                      <Square className="w-4 h-4 text-txt-muted" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-3">Product Name</th>
                <th className="py-3 px-3">SKU / Barcode</th>
                <th className="py-3 px-3">Category</th>
                <th className="py-3 px-3">Warehouse</th>
                <th className="py-3 px-3">On Hand</th>
                <th className="py-3 px-3">Selling Price</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {filteredProducts.map((p) => {
                const isSelected = selectedProductIds.includes(p.id);
                return (
                  <tr
                    key={p.id}
                    className={`group hover:bg-bg-hover/60 transition-colors ${
                      isSelected ? 'bg-accent-primary/5' : ''
                    }`}
                  >
                    <td className="py-3 px-3">
                      <button onClick={() => toggleSelectProduct(p.id)}>
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-accent-primary" />
                        ) : (
                          <Square className="w-4 h-4 text-txt-muted" />
                        )}
                      </button>
                    </td>
                    <td className="py-3 px-3">
                      <div
                        onClick={() => setSelectedProductDetail(p)}
                        className="flex items-center space-x-3 cursor-pointer group-hover:text-accent-primary transition-colors"
                      >
                        <img src={p.image} alt="" className="w-10 h-10 rounded-xl object-cover ring-1 ring-border-main" />
                        <div>
                          <p className="font-bold text-txt-heading group-hover:text-accent-primary transition-colors">
                            {p.name}
                          </p>
                          <p className="text-[10px] text-txt-muted">{p.brand}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px]">
                      <p className="font-bold text-txt-heading">{p.sku}</p>
                      <p className="text-[10px] text-txt-muted">{p.barcode}</p>
                    </td>
                    <td className="py-3 px-3 text-txt-muted">{p.category}</td>
                    <td className="py-3 px-3 text-txt-muted truncate max-w-[140px]">{p.warehouse}</td>
                    <td className="py-3 px-3">
                      <span className="font-extrabold text-txt-heading">{p.quantity}</span>
                      <span className="text-[10px] text-txt-muted block">Available: {p.available}</span>
                    </td>
                    <td className="py-3 px-3 font-bold text-accent-primary">${p.sellingPrice.toFixed(2)}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                          p.status === 'In Stock'
                            ? 'bg-accent-success/20 text-accent-success'
                            : p.status === 'Low Stock'
                            ? 'bg-accent-warning/20 text-accent-warning'
                            : 'bg-accent-danger/20 text-accent-danger'
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => setSelectedProductDetail(p)}
                          className="p-1.5 rounded-lg hover:bg-bg-card text-txt-muted hover:text-accent-primary transition-colors"
                          title="View Product Drawer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => addToast('Edit Product', `Editing ${p.name}`, 'info')}
                          className="p-1.5 rounded-lg hover:bg-bg-card text-txt-muted hover:text-txt-heading transition-colors"
                          title="Edit Product"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* VIEW MODE 2: GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProductDetail(p)}
              className="p-4 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card cursor-pointer flex flex-col justify-between space-y-3 group"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-bg-surface">
                <img src={p.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span
                  className={`absolute top-2 right-2 px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    p.status === 'In Stock'
                      ? 'bg-accent-success text-white'
                      : p.status === 'Low Stock'
                      ? 'bg-accent-warning text-white'
                      : 'bg-accent-danger text-white'
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent-primary">{p.category}</span>
                <h3 className="text-sm font-bold text-txt-heading line-clamp-1 group-hover:text-accent-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-[11px] font-mono text-txt-muted mt-0.5">{p.sku}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-xs">
                <div>
                  <span className="text-[10px] text-txt-muted block">Stock / Avail</span>
                  <span className="font-bold text-txt-heading">{p.quantity} units</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-txt-muted block">Price</span>
                  <span className="font-extrabold text-accent-primary">${p.sellingPrice.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* VIEW MODE 3: LIST VIEW */}
      {viewMode === 'list' && (
        <div className="space-y-3">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedProductDetail(p)}
              className="p-3.5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card cursor-pointer flex items-center justify-between gap-4 hover:border-accent-primary/40 transition-all group"
            >
              <div className="flex items-center space-x-3 overflow-hidden">
                <img src={p.image} alt="" className="w-12 h-12 rounded-xl object-cover shrink-0" />
                <div className="truncate">
                  <h3 className="text-sm font-bold text-txt-heading group-hover:text-accent-primary transition-colors truncate">
                    {p.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-[11px] text-txt-muted">
                    <span className="font-mono">{p.sku}</span>
                    <span>•</span>
                    <span>{p.category}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 shrink-0 text-xs">
                <div className="hidden sm:block">
                  <span className="text-[10px] text-txt-muted block">Warehouse</span>
                  <span className="font-semibold text-txt-heading">{p.warehouse.split(' ')[0]}</span>
                </div>
                <div>
                  <span className="text-[10px] text-txt-muted block">Stock</span>
                  <span className="font-extrabold text-txt-heading">{p.quantity}</span>
                </div>
                <div>
                  <span className="text-[10px] text-txt-muted block">Price</span>
                  <span className="font-bold text-accent-primary">${p.sellingPrice.toFixed(2)}</span>
                </div>
                <Eye className="w-4 h-4 text-txt-muted group-hover:text-accent-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW MODE 4: CARD VIEW */}
      {viewMode === 'card' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedProductDetail(p)}
              className="p-5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card cursor-pointer flex gap-4 hover:border-accent-primary/40 transition-all"
            >
              <img src={p.image} alt="" className="w-24 h-24 rounded-xl object-cover shrink-0" />
              <div className="flex-1 flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-accent-primary uppercase">{p.brand}</span>
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-accent-primary/10 text-accent-primary rounded-full">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-txt-heading line-clamp-1">{p.name}</h3>
                  <p className="text-[11px] font-mono text-txt-muted">{p.sku}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-xs">
                  <span className="font-extrabold text-accent-primary">${p.sellingPrice.toFixed(2)}</span>
                  <span className="text-[11px] text-txt-muted">{p.quantity} units in stock</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
