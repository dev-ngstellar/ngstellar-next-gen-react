import React from 'react';
import Container from '../common/Container';
import ClassCard from './ClassCard';
import { classesData } from '../../data/classes';

export default function ClassGrid() {
  return (
    <section className="py-14 md:py-20 bg-[#101214]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classesData.map((danceClass) => (
            <ClassCard key={danceClass.id} danceClass={danceClass} />
          ))}
        </div>
      </Container>
    </section>
  );
}
