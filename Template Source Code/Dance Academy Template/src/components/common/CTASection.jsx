import React from 'react';
import Container from './Container';
import Button from './Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection({
  heading,
  description,
  buttonText = "Explore Classes",
  buttonHref = "/classes",
  className = ""
}) {
  return (
    <section className={`py-10 md:py-14 relative overflow-hidden bg-[#101214] ${className}`}>
      <Container>
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden bg-gradient-to-br from-[#1B1B1D] via-[#151719] to-[#101214] border border-[#282523] text-center shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C99683]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#D6A08D]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C99683]/10 border border-[#C99683]/30 text-[#C99683] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Begin Your Journey</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4F0] tracking-tight leading-tight">
              {heading}
            </h2>

            {description && (
              <p className="mt-4 text-base sm:text-lg text-[#A39E98] max-w-xl leading-relaxed font-light">
                {description}
              </p>
            )}

            <div className="mt-8">
              <Button
                to={{
                  pathname: buttonHref,
                  hash: buttonHref === '/contact' ? '#enquiry-form' : '',
                  state: buttonHref === '/contact' ? { scrollToForm: true } : undefined
                }}
                variant="primary"
                size="lg"
                className="group"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
