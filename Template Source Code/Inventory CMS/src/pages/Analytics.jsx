import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, BarChart3, PieChart as PieIcon, Zap, AlertTriangle, ArrowUpRight } from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { useInventory } from '../context/InventoryContext';

const monthlyDemandData = [
  { month: 'Jan', actual: 420, forecast: 410 },
  { month: 'Feb', actual: 580, forecast: 560 },
  { month: 'Mar', actual: 650, forecast: 670 },
  { month: 'Apr', actual: 780, forecast: 790 },
  { month: 'May', actual: 920, forecast: 900 },
  { month: 'Jun', actual: 1100, forecast: 1120 },
  { month: 'Jul', actual: 1340, forecast: 1380 },
];

export default function Analytics() {
  const { products } = useInventory();

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-txt-heading">Analytics & Demand Forecasts</h1>
        <p className="text-xs text-txt-muted">
          AI-driven inventory forecasting, stock velocity analysis, and demand trend projections.
        </p>
      </div>

      {/* AI Forecast Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-gradient-to-tr from-accent-primary/20 via-bg-card to-bg-card border border-accent-primary/30 shadow-card-glow glass-card space-y-2">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-accent-primary" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-accent-primary">AI Stock Velocity</span>
          </div>
          <div className="text-2xl font-extrabold text-txt-heading">+24.5% Demand</div>
          <p className="text-xs text-txt-muted">High demand predicted for Mechanical Keyboards & Monitors next month.</p>
        </div>

        <div className="p-5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-2">
          <span className="text-xs font-bold text-txt-muted uppercase tracking-wider">Turnover Rate</span>
          <div className="text-2xl font-extrabold text-accent-success">6.2x / Year</div>
          <p className="text-xs text-txt-muted">Top 10% benchmark for computer peripheral distributors.</p>
        </div>

        <div className="p-5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-2">
          <span className="text-xs font-bold text-txt-muted uppercase tracking-wider">Out-of-Stock Risk Score</span>
          <div className="text-2xl font-extrabold text-accent-warning">Low (12%)</div>
          <p className="text-xs text-txt-muted">Automated PO triggers active for low stock items.</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Actual vs AI Forecast Line Chart */}
        <div className="p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-txt-heading">Demand Forecast vs Actual Sales</h3>
              <p className="text-xs text-txt-muted">Units sold comparison with predictive ML model</p>
            </div>
            <span className="text-xs font-bold text-accent-primary">98.2% Accuracy</span>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyDemandData}>
                <XAxis dataKey="month" stroke="var(--color-muted)" fontSize={11} />
                <YAxis stroke="var(--color-muted)" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    borderColor: 'var(--color-border)',
                    borderRadius: '12px',
                    fontSize: '12px',
                  }}
                />
                <Line type="monotone" dataKey="actual" stroke="var(--color-primary)" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="forecast" stroke="var(--color-accent)" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Stock Velocity Bar Chart */}
        <div className="p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-4">
          <div>
            <h3 className="text-base font-extrabold text-txt-heading">Fastest Moving Products</h3>
            <p className="text-xs text-txt-muted">Monthly units dispatch frequency</p>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={products.slice(0, 5)}>
                <XAxis dataKey="brand" stroke="var(--color-muted)" fontSize={11} />
                <YAxis stroke="var(--color-muted)" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    borderColor: 'var(--color-border)',
                    borderRadius: '12px',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="quantity" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
