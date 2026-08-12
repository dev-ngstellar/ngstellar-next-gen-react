import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { Clock, User, MapPin, Sparkles } from 'lucide-react';
import { timetableData } from '../../data/timetable';

export default function Timetable() {
  const [selectedDay, setSelectedDay] = useState('All');

  const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];

  const filteredTimetable = selectedDay === 'All'
    ? timetableData
    : timetableData.filter(item => item.day === selectedDay);

  return (
    <section className="py-14 md:py-20 bg-[#101214] relative overflow-hidden" id="timetable">
      <Container>
        <SectionTitle
          label="WEEKLY SCHEDULE"
          title="Class Timetable"
          subtitle="Find a class time that fits your weekly routine. All classes take place in our climate-controlled studios."
          align="center"
          className="mb-12"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedDay === day
                  ? 'bg-[#C99683] text-[#101214] font-bold shadow-lg shadow-[#C99683]/20'
                  : 'bg-[#1B1B1D] text-[#A39E98] hover:bg-[#151719] hover:text-[#F7F4F0] border border-[#282523]'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTimetable.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#C99683]/10 text-[#C99683] text-xs font-bold uppercase tracking-wider border border-[#C99683]/30">
                    {item.day}
                  </span>
                  <span className="text-xs font-semibold text-[#A39E98] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C99683]" />
                    {item.time}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#F7F4F0] group-hover:text-[#C99683] transition-colors">
                  {item.className}
                </h3>

                <div className="space-y-2 text-xs text-[#A39E98] pt-2 border-t border-[#282523]">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#C99683] shrink-0" />
                    <span>Instructor: <strong className="text-[#F7F4F0]">{item.instructor}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C99683] shrink-0" />
                    <span>{item.room} • Harmony Studio Facility</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#282523] flex items-center justify-between text-xs text-[#A39E98]">
                <span className="flex items-center gap-1 text-[#D6A08D] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Spots Available
                </span>
                <Link
                  to={{
                    pathname: '/contact',
                    search: `?class=${item.className.toLowerCase().replace(/\s+/g, '-')}`,
                    hash: '#enquiry-form',
                    state: { className: item.className, scrollToForm: true }
                  }}
                  className="font-semibold text-[#F7F4F0] hover:text-[#C99683] transition-colors underline underline-offset-4"
                >
                  Reserve Spot
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
