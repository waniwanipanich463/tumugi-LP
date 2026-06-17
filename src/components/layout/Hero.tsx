'use client';

import React from 'react';

export const Hero = () => {
    return (
        <>
            {/* ====== FIRST VIEW ====== */}
            <section className="relative text-center cyber-grid overflow-hidden">
                {/* Background Glows removed as per user request */}

                {/* Background Image */}
                <div className="relative w-full">
                    <img
                        src="/haikei.png"
                        alt=""
                        className="w-full h-auto block pointer-events-none"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Title overlaid on image */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="flex flex-col items-center w-full max-w-5xl gap-4 px-6 text-center">
                            <h1 className="flex flex-col items-center gap-3 font-black italic uppercase">
                                <span className="text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-blue drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] tracking-tight px-2">
                                    ーーー
                                </span>
                                <span className="text-4xl sm:text-5xl md:text-7xl text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] leading-[0.85] tracking-tighter whitespace-nowrap">
                                    ーーー
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Below-image content */}
                <div className="py-12 px-4">
                    {/* Lead copy */}
                    <div className="max-w-3xl mx-auto mb-12 text-center">
                        <p className="text-lg xs:text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 whitespace-nowrap">
                            「ーーー」のご紹介。
                        </p>
                        <p className="text-base md:text-lg text-gray-300 leading-loose mb-4">
                            ーーー<br />
                            ーーー
                        </p>
                        <p className="text-base md:text-lg text-gray-300 leading-loose">
                            <span className="sm:hidden">
                                ーーー
                            </span>
                            <span className="hidden sm:inline">
                                ーーー
                            </span>
                        </p>
                    </div>


                </div>
            </section>

            {/* ====== EMPATHY SECTION ====== */}
            <section className="bg-bg-dark py-24 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-fuchsia/30 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.04)_0%,transparent_70%)] pointer-events-none"></div>

                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-[22px] xs:text-2xl md:text-5xl font-black italic text-white text-center mb-12 tracking-tight whitespace-nowrap">
                        ーーー
                    </h2>

                    <ul className="space-y-5 mb-12">
                        {[
                            'ーーー',
                            'ーーー',
                            'ーーー',
                            'ーーー',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm xs:text-base md:text-lg text-gray-200 leading-relaxed whitespace-nowrap overflow-hidden"
                                style={{ background: 'rgba(0,245,255,0.04)', border: '1px solid rgba(0,245,255,0.12)', borderRadius: '12px', padding: '12px 16px' }}>
                                <span className="text-neon-cyan font-black text-lg mt-0.5 flex-shrink-0">・</span>
                                <span className="truncate">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="border-l-0 sm:border-l-4 border-neon-cyan/60 pl-0 sm:pl-6 mb-8 text-center sm:text-left">
                        <p className="text-white font-bold text-xl md:text-2xl mb-4">
                            ーーー
                        </p>
                        <p className="text-gray-300 text-sm xs:text-base md:text-lg leading-loose">
                            <span className="sm:hidden block text-[13px] xs:text-base">
                                ーーー
                            </span>
                            <span className="hidden sm:inline">
                                ーーー
                            </span>
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
            </section>

            {/* ====== VIDEO SECTION ====== */}
            <section className="bg-bg-dark py-16 px-4 relative" id="video">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl md:text-4xl font-black italic text-white text-center mb-4 tracking-tight flex flex-col gap-2">
                        <span className="text-[17px] xs:text-xl md:text-4xl whitespace-nowrap">「ーーー」について、</span>
                        <span className="text-[17px] xs:text-xl md:text-4xl text-neon-cyan whitespace-nowrap">紹介動画</span>
                    </h2>
                    <p className="text-gray-400 text-center mb-10">（動画は準備中です）</p>

                    {/* Video Player Placeholder */}
                    <div className="relative w-full max-w-5xl mx-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-fuchsia via-neon-blue to-neon-cyan rounded-2xl blur opacity-30"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black/40 aspect-video border-2 border-white/10 z-[10] flex items-center justify-center">
                            <span className="text-gray-500 font-mono text-sm tracking-widest uppercase">// VIDEO PLACEHOLDER</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
