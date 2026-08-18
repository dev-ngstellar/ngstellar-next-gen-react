import React from 'react';
import { Container } from '../common/Container';
import { ScrollReveal } from '../common/ScrollReveal';

export const WhatWeBelieve: React.FC = () => {
  return (
    <section className="py-14 md:py-18 bg-[#FAF7F2] relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Narrative Editorial Content */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left order-2 lg:order-1">
            <ScrollReveal animation="slide-left">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A35D] font-semibold block">
                  Our Philosophy
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#2D2927] font-serif leading-[1.15]">
                  Every Celebration<br className="hidden sm:inline" /> Should Feel Personal
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
                  <span className="h-[1px] w-10 bg-[#C9A35D]/50" />
                  <span className="text-[#C9A35D] text-sm">♡</span>
                  <span className="h-[1px] w-10 bg-[#C9A35D]/50" />
                </div>
              </div>

              <p className="text-sm sm:text-base font-light text-[#756D67] leading-relaxed pt-1 max-w-lg mx-auto lg:mx-0">
                There is no single formula for a perfect wedding. Some couples imagine grand celebrations filled with elaborate details, while others prefer something intimate and understated. Our role is to understand that vision and bring it to life with care.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Newly Generated Ultra-Luxury Wedding Arch Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <ScrollReveal animation="slide-right">
              <div className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-soft group">
                <img
                  src="/assets/luxury_wedding_arch_ceremony.jpg"
                  alt="Luxury wedding ceremony arch"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Horizontal Champagne Separator Line with Center ♡ */}
        <div className="pt-14 flex items-center justify-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9A35D]/40 to-[#C9A35D]/60" />
          <span className="text-[#C9A35D] text-sm px-2">♡</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C9A35D]/60 via-[#C9A35D]/40 to-transparent" />
        </div>
      </Container>
    </section>
  );
};
