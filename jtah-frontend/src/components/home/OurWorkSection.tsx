'use client';

import Link from 'next/link';
import { MoveRight } from 'lucide-react';

interface Program {
  title: string;
  description: string;
  bg: string;
  href: string;
}

const PROGRAMS: Program[] = [
  {
    title: 'Education & Skills',
    description: 'Equipping individuals with the knowledge and skills for a brighter future.',
    bg: 'linear-gradient(135deg, #c48b60 0%, #9e643c 100%)',
    href: '#education',
  },
  {
    title: 'Women Empowerment',
    description: 'Creating opportunities for women to lead, thrive, and build stronger communities.',
    bg: 'linear-gradient(135deg, #749377 0%, #517155 100%)',
    href: '#women',
  },
  {
    title: 'Health & Wellbeing',
    description: 'Improving access to healthcare and mental wellness support for vulnerable communities.',
    bg: 'linear-gradient(135deg, #9175b5 0%, #684a91 100%)',
    href: '#health',
  },
  {
    title: 'Advocacy & Awareness',
    description: 'Amplifying voices, driving change, and influencing policies for a more inclusive society.',
    bg: 'linear-gradient(135deg, #2c334d 0%, #1f2336 100%)',
    href: '#advocacy',
  },
];

export function OurWorkSection() {
  return (
    <section id="work" className="py-16 sm:py-20 lg:py-28 bg-[#eeecf7]/30 border-b border-[#3a3560]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#7c74b2]">WHAT WE DO</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3a3560] tracking-tight">Our Work</h2>
          </div>
          <Link
            href="#programs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7c74b2] hover:text-[#3a3560] transition-colors group"
          >
            Explore All Programs
            <MoveRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.title}
              className="group bg-white rounded-2xl overflow-hidden border border-[#3a3560]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Hover zoom on image */}
              <div className="overflow-hidden">
                <div
                  className="w-full h-44 sm:h-48 group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{ background: prog.bg }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-[#3a3560] leading-snug group-hover:text-[#7c74b2] transition-colors duration-200">
                    {prog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3a3560]/70 leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                <Link
                  href={prog.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7c74b2] hover:text-[#3a3560] transition-colors group/link pt-2"
                >
                  Learn More
                  <MoveRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}