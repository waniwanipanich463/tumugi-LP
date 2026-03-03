'use client';

import React from 'react';

export const Hero = () => {
    return (
        <>
            {/* ====== FIRST VIEW ====== */}
            <section className="relative text-center cyber-grid overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-fuchsia/20 blur-[120px] rounded-full pointer-events-none z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 blur-[120px] rounded-full pointer-events-none z-10"></div>

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
                            <p className="text-neon-cyan text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-2">
                                YouTube視聴者限定で公開
                            </p>
                            <h1 className="flex flex-col items-center gap-3 font-black italic uppercase">
                                <span className="text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-blue drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] tracking-tight glitch-text" data-text="あなただけの">
                                    あなただけの
                                </span>
                                <span className="text-5xl md:text-[8rem] text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] leading-[0.85] tracking-tighter glitch-text" data-text="専属パートナー">
                                    専属パートナー
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Below-image content */}
                <div className="py-12 px-4">
                    {/* Lead copy */}
                    <div className="max-w-3xl mx-auto mb-12 text-left md:text-center">
                        <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                            YouTubeで見ていた「つむぎ」を、あなたの専属に。
                        </p>
                        <p className="text-base md:text-lg text-gray-300 leading-loose mb-4">
                            地政学・統計学・世界情勢を統合した<br />
                            AIパートナー「つむぎ」の専用プロンプト。
                        </p>
                        <p className="text-base md:text-lg text-gray-300 leading-loose">
                            もう情報に振り回されるのではなく、<br />
                            世界を構造的に捉えるための視点を整理することを目的としています。
                        </p>
                    </div>

                    {/* CV强化 1行 */}
                    <div className="mx-auto mb-10 overflow-x-auto">
                        <p className="whitespace-nowrap text-neon-fuchsia/90 text-sm md:text-base font-bold tracking-wide border border-neon-fuchsia/30 rounded-xl px-6 py-3 inline-block"
                            style={{ background: 'rgba(255,0,255,0.05)' }}>
                            すでにYouTubeでつむぎを見ている方のために、この専用プロンプトを公開しました。
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col items-center justify-center gap-4 pb-8">
                        <button
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="cyber-button text-xl md:text-2xl px-10 py-5 group overflow-hidden relative"
                        >
                            <span className="relative z-10 font-black">つむぎを専属パートナーとして使用する →</span>
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
                    <h2 className="text-3xl md:text-5xl font-black italic text-white text-center mb-12 tracking-tight">
                        こんな経験は<span className="text-neon-fuchsia drop-shadow-[0_0_10px_#FF00FF]">ありませんか？</span>
                    </h2>

                    <ul className="space-y-5 mb-12">
                        {[
                            'ニュースを見ても、本質が分からない',
                            '情報が多すぎて、何を信じればいいか分からない',
                            '将来に対する漠然とした不安がある',
                            'もっと深く、世界の構造を理解したいと思っている',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-base md:text-lg text-gray-200 leading-relaxed"
                                style={{ background: 'rgba(0,245,255,0.04)', border: '1px solid rgba(0,245,255,0.12)', borderRadius: '12px', padding: '16px 20px' }}>
                                <span className="text-neon-cyan font-black text-xl mt-0.5 flex-shrink-0">・</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="border-l-4 border-neon-cyan/60 pl-6 mb-8">
                        <p className="text-white font-bold text-xl md:text-2xl mb-4">
                            その感覚は、正しいものです。
                        </p>
                        <p className="text-gray-300 text-base md:text-lg leading-loose">
                            多くの情報は断片的であり、<br />
                            本質を理解するには、<strong className="text-white">構造的な視点</strong>が必要です。
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
            </section>

            {/* ====== VIDEO SECTION ====== */}
            <section className="bg-bg-dark py-16 px-4 relative" id="video">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-black italic text-white text-center mb-4 tracking-tight">
                        つむぎについて、<span className="text-neon-cyan">より詳しく知りたい方へ</span>
                    </h2>
                    <p className="text-gray-400 text-center mb-10">以下の動画をご覧ください。</p>

                    {/* Video Player */}
                    <div className="relative w-full max-w-5xl mx-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-fuchsia via-neon-blue to-neon-cyan rounded-2xl blur opacity-30"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video border-2 border-white/10">
                            <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,2px_100%] opacity-20"></div>
                            <iframe
                                src="https://www.youtube.com/embed/RZXdvAsQH5w?rel=0&modestbranding=1"
                                title="つむぎ 紹介動画"
                                className="w-full h-full relative z-10"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
