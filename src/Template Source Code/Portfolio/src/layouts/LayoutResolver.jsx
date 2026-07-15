import React from 'react';
import TechnologyPortfolio from './TechnologyPortfolio';
import CreativePortfolio from './CreativePortfolio';
import BusinessPortfolio from './BusinessPortfolio';
import AcademicPortfolio from './AcademicPortfolio';
import EngineeringPortfolio from './EngineeringPortfolio';
import HealthcarePortfolio from './HealthcarePortfolio';
import LegalPortfolio from './LegalPortfolio';
import FinancePortfolio from './FinancePortfolio';
import MarketingPortfolio from './MarketingPortfolio';
import SportsPortfolio from './SportsPortfolio';
import { usePortfolio } from '../context/PortfolioContext';

export default function LayoutResolver() {
  const { selectedLayout } = usePortfolio();

  switch (selectedLayout) {
    case 'technology':
    case 'developer':
      return <TechnologyPortfolio />;
    case 'creative':
      return <CreativePortfolio />;
    case 'business':
      return <BusinessPortfolio />;
    case 'academic':
      return <AcademicPortfolio />;
    case 'engineering':
      return <EngineeringPortfolio />;
    case 'healthcare':
      return <HealthcarePortfolio />;
    case 'legal':
      return <LegalPortfolio />;
    case 'finance':
      return <FinancePortfolio />;
    case 'marketing':
      return <MarketingPortfolio />;
    case 'sports':
      return <SportsPortfolio />;
    default:
      return <TechnologyPortfolio />;
  }
}
