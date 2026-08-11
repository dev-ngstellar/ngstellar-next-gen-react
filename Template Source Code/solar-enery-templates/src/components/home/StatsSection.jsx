import React from 'react';
import { Container } from '../common/Container';
import { StatCard } from '../common/StatCard';
import { companyData } from '../../data/company';

export const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.stats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
