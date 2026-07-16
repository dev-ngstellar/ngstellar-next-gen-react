import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiSliders, FiCheck, FiChevronRight } from 'react-icons/fi';
import { getProfessionById } from '../../data/professions';
import { industryThemes } from '../../data/industryThemes';
import { usePortfolio } from '../../context/PortfolioContext';
import { useTheme } from '../../context/ThemeContext';
import LayoutResolver from '../../layouts/LayoutResolver';
import LiveCustomizer from '../../components/common/LiveCustomizer';
import { FaCode } from 'react-icons/fa';

import {
  FaLaptopCode, FaPaintBrush, FaServer, FaBrain, FaShieldAlt,
  FaChartBar, FaFlask, FaFigma, FaPalette, FaCamera, FaVideo, FaYoutube,
  FaStar, FaRocket, FaBuilding, FaBriefcase, FaChartLine, FaHandshake,
  FaGraduationCap, FaChalkboardTeacher, FaUniversity, FaDraftingCompass,
  FaCouch, FaHardHat, FaCogs, FaUserMd, FaDumbbell, FaBalanceScale,
  FaMicrophone,
} from 'react-icons/fa';

const iconMap = {
  FaCode, FaLaptopCode, FaPaintBrush, FaServer, FaBrain, FaShieldAlt,
  FaChartBar, FaFlask, FaFigma, FaPalette, FaCamera, FaVideo, FaYoutube,
  FaStar, FaRocket, FaBuilding, FaBriefcase, FaChartLine, FaHandshake,
  FaGraduationCap, FaChalkboardTeacher, FaUniversity, FaDraftingCompass,
  FaCouch, FaHardHat, FaCogs, FaUserMd, FaDumbbell, FaBalanceScale,
  FaMicrophone,
};

export default function PortfolioPreviewPage() {
  const { industry } = useParams();
  const navigate = useNavigate();
  
  const { 
    switchIndustry, 
    switchProfession,
    selectedIndustry, 
    selectedProfession 
  } = usePortfolio();
  
  const { switchTheme } = useTheme();

  // Load industry theme config and set default theme
  useEffect(() => {
    if (industry) {
      switchIndustry(industry);
      const matchedIndustry = industryThemes.find(t => t.slug === industry);
      if (matchedIndustry && matchedIndustry.theme) {
        switchTheme(matchedIndustry.theme);
      }
    }
  }, [industry]);

  // Handle case where industry is invalid
  const matchedIndustry = industryThemes.find(t => t.slug === industry);
  if (!matchedIndustry || !selectedIndustry || !selectedProfession) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg)',
        paddingTop: '80px'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>😕</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
          Industry Portfolio Not Found
        </h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          The industry theme "{industry}" does not exist in our catalog.
        </p>
        <Link to="/portfolio" className="btn-primary">← Browse All Themes</Link>
      </div>
    );
  }

  const Icon = iconMap[selectedProfession.icon] || FaCode;

  // Convert role name to role ID
  const getRoleId = (roleName) => {
    return roleName.toLowerCase().replace(/\s+/g, '-');
  };

  const handleRoleChange = (roleName) => {
    const roleId = getRoleId(roleName);
    switchProfession(roleId);
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      
      {/* Top Header Bar */}
      <div style={{
        position: 'fixed',
        top: '72px',
        left: 0,
        right: 0,
        zIndex: 40,
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        padding: '0.75rem 0',
        backdropFilter: 'blur(8px)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          
          <button
            onClick={() => navigate('/portfolio')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-muted)',
              fontSize: '0.875rem',
              fontWeight: 500
            }}
          >
            <FiArrowLeft size={16} />
            Back to Themes
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              {selectedIndustry.title}
            </span>
            <FiChevronRight size={14} color="var(--color-text-subtle)" />
            <Icon size={16} color="var(--color-primary)" />
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text)' }}>
              {selectedProfession.label}
            </span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button 
              className="btn-secondary" 
              style={{ fontSize: '0.8rem', padding: '0.5rem 0.875rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}
              onClick={() => document.getElementById('live-customizer-toggle')?.click()}
            >
              <FiSliders size={14} /> Customize
            </button>
            <a href="#" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1.125rem' }}>
              <FiDownload size={14} /> Use This Template
            </a>
          </div>
        </div>
      </div>

      {/* Role Selector Ribbon Bar */}
      <div style={{
        position: 'fixed',
        top: '124px',
        left: 0,
        right: 0,
        zIndex: 35,
        background: 'var(--color-surface-alt)',
        borderBottom: '1px solid var(--color-border)',
        padding: '0.5rem 0',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        scrollbarWidth: 'none', // hide firefox scrollbar
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            color: 'var(--color-text-subtle)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginRight: '0.5rem'
          }}>
            Active Role:
          </span>
          {selectedIndustry.supportedRoles.map((role) => {
            const roleId = getRoleId(role);
            const isSelected = selectedProfession.id === roleId || 
                              selectedProfession.id === getProfessionById(roleId)?.id;
            return (
              <button
                key={role}
                onClick={() => handleRoleChange(role)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.875rem',
                  borderRadius: '100px',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                  background: isSelected ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: isSelected ? 'white' : 'var(--color-text-muted)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {isSelected && <FiCheck size={12} />}
                {role}
              </button>
            );
          })}
        </div>
      </div>

      {/* Spacer to push down content since header & ribbon are fixed */}
      <div style={{ height: '108px' }} />

      {/* Dynamic Master Layout */}
      <LayoutResolver />

      {/* Live Customizer Side Panel */}
      <LiveCustomizer />
    </div>
  );
}
