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
                            <p className="text-neon-cyan text-xs sm:text-sm md:text-base font-bold tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase mb-2 whitespace-nowrap">
                                YouTubeをご覧いただいている方向けにご案内しています。
                            </p>
                            <h1 className="flex flex-col items-center gap-3 font-black italic uppercase">
                                <span className="text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-blue drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] tracking-tight px-2">
                                    あなただけの
                                </span>
                                <span className="text-4xl sm:text-5xl md:text-7xl text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] leading-[0.85] tracking-tighter whitespace-nowrap">
                                    資産を育てるつむぎ
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
                            「資産を育てるつむぎ」をあなたの手に。
                        </p>
                        <p className="text-base md:text-lg text-gray-300 leading-loose mb-4">
                            地政学・統計学・世界情勢を統合した<br />
                            「資産を育てるつむぎ」の専用プロンプト。
                        </p>
                        <p className="text-base md:text-lg text-gray-300 leading-loose">
                            <span className="sm:hidden">
                                もう情報に振り回されるのではなく、<br />
                                世界を構造的に捉えるための視点を<br />
                                整理することを目的としています。
                            </span>
                            <span className="hidden sm:inline">
                                もう情報に振り回されるのではなく、<br />
                                世界を構造的に捉えるための視点を整理することを目的としています。
                            </span>
                        </p>
                    </div>

                    {/* CV强化 1行 */}
                    <div className="mx-auto mb-10 text-center w-full px-2">
                        <p className="whitespace-normal sm:whitespace-nowrap text-neon-fuchsia/90 text-[11px] xs:text-xs sm:text-sm md:text-base font-bold tracking-widest sm:tracking-wide border border-neon-fuchsia/30 rounded-xl px-3 sm:px-6 py-2 sm:py-3 inline-block"
                            style={{ background: 'rgba(255,0,255,0.05)' }}>
                            すでにYouTubeでつむぎを見ている方のために、<br className="sm:hidden" />この専用プロンプトを公開しました。
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col items-center justify-center gap-4 pb-8">
                        <button
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="cyber-button text-base xs:text-lg md:text-2xl px-6 xs:px-10 py-4 xs:py-5 group overflow-hidden relative"
                        >
                            <span className="relative z-10 font-black whitespace-nowrap">「資産を育てるつむぎ」を購入する →</span>
                        </button>
                        <p className="text-neon-fuchsia/80 text-sm font-bold tracking-widest animate-pulse">
                            ※動画を視聴した後に押してください
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
                        こんな経験は<span className="text-neon-fuchsia drop-shadow-[0_0_10px_#FF00FF]">ありませんか？</span>
                    </h2>

                    <ul className="space-y-5 mb-12">
                        {[
                            'ニュースを見ても、本質が分からない',
                            '情報が多すぎて、何を信じればいいか分からない',
                            '将来に対する漠然とした不安がある',
                            'もっと深く、世界の構造を理解したいと思っている',
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
                            その感覚は、正しいものです。
                        </p>
                        <p className="text-gray-300 text-sm xs:text-base md:text-lg leading-loose">
                            <span className="sm:hidden block text-[13px] xs:text-base">
                                多くの情報は断片的であり、<br />
                                本質を理解するには、構造的な視点が必要です。
                            </span>
                            <span className="hidden sm:inline">
                                多くの情報は断片的であり、<br />
                                本質を理解するには、<strong className="text-white">構造的な視点</strong>が必要です。
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
                        <span className="text-[17px] xs:text-xl md:text-4xl whitespace-nowrap">「資産を育てるつむぎ」について、</span>
                        <span className="text-[17px] xs:text-xl md:text-4xl text-neon-cyan whitespace-nowrap">より詳しく知りたい方へ</span>
                    </h2>
                    <p className="text-gray-400 text-center mb-10">以下の動画をご覧ください。</p>

                    {/* Video Player */}
                    <div className="relative w-full max-w-5xl mx-auto mb-16">
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-fuchsia via-neon-blue to-neon-cyan rounded-2xl blur opacity-30"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video border-2 border-white/10 z-[10] isolation-auto">
                            <video
                                src="/saisindouga.mp4"
                                className="w-full h-full relative z-10"
                                controls
                                playsInline
                                poster="/haikei.png"
                            >
                                <p>お使いのブラウザは動画再生に対応していません。</p>
                            </video>
                        </div>
                    </div>

                    {/* CTA Button under video */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="cyber-button text-lg xs:text-xl px-12 py-5 group overflow-hidden relative"
                        >
                            <span className="relative z-10 font-black whitespace-nowrap">「資産を育てるつむぎ」を購入する</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
