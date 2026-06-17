import React from 'react';

export const Partner = () => {
    return (
        <>
            {/* ====== WHAT IS TSUMUGI ====== */}
            <section className="bg-bg-dark py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-fuchsia/30 to-transparent"></div>
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-fuchsia/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container-premium max-w-5xl relative z-10">
                    <h2 className="text-3xl md:text-6xl font-black italic tracking-tighter text-white mb-12 text-center">
                        <span className="whitespace-nowrap sm:whitespace-normal text-[1.35rem] sm:text-3xl md:text-6xl">「資産を育てるつむぎ」とは<span className="text-neon-fuchsia drop-shadow-[0_0_10px_#FF00FF]">何か？</span></span>
                    </h2>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Image */}
                        <div className="flex-shrink-0 w-full md:w-auto relative group">
                            <div className="absolute -inset-4 bg-neon-fuchsia/20 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                            <img
                                src="/gazou.png"
                                alt="つむぎパートナー"
                                className="relative z-10 w-full md:w-80 lg:w-96 h-auto rounded-xl shadow-[0_0_40px_rgba(255,0,255,0.2)] border border-white/10"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex-1 text-center md:text-left space-y-6">
                            <p className="text-[13px] xs:text-base md:text-xl text-gray-200 leading-loose">
                                <span className="sm:hidden">
                                    「資産を育てるつむぎ」は、<br />
                                    地政学・統計学・<br className="xs:hidden" />世界情勢の知識を統合し、<br />
                                    分析・解釈・理解を深めるための<br />
                                    分析フレームを提示します。
                                </span>
                                <span className="hidden sm:inline">
                                    「資産を育てるつむぎ」は、<strong className="text-white">地政学・統計学・世界情勢の知識を統合し、</strong><br />
                                    分析・解釈・理解を深めるための分析フレームを提示します。
                                </span>
                            </p>

                            <div className="border-l-0 sm:border-l-4 border-neon-fuchsia/60 pl-0 sm:pl-6 py-2 text-center sm:text-left">
                                <p className="text-white font-bold text-[12px] xs:text-[13px] sm:text-base md:text-xl md:whitespace-nowrap tracking-tighter md:tracking-normal">
                                    一般的なAIとは異なる設計思想で構築された<br className="sm:hidden" />分析モデルです。
                                </p>
                            </div>


                            <p className="text-[13px] xs:text-base md:text-lg text-gray-300 leading-loose">
                                <span className="sm:hidden">
                                    あなたの質問に対して、<br />
                                    「資産を育てるつむぎ」は<br />
                                    <strong className="text-neon-cyan">あなたの利用目的に合わせて<br />活用できる設計です。</strong>
                                </span>
                                <span className="hidden sm:inline">
                                    あなたの質問に対して、<br />
                                    「資産を育てるつむぎ」は<strong className="text-neon-cyan">あなたの利用目的に合わせて活用できる設計です。</strong>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
            </section>

            {/* ====== BENEFIT SECTION ====== */}
            <section className="bg-bg-dark py-24 px-4 cyber-grid relative overflow-hidden">
                <div className="absolute top-1/4 left-0 w-80 h-80 bg-neon-cyan/8 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 mb-14">
                        {/* Left Side: Header Content */}
                        <div className="flex-1 text-center md:text-left transition-all duration-700">
                            <h2 className="flex flex-col gap-2 font-black italic tracking-tighter text-white mb-6">
                                <span className="text-xl md:text-2xl lg:text-3xl whitespace-nowrap">「資産を育てるつむぎ」を活用すると、</span>
                                <span className="text-neon-cyan drop-shadow-[0_0_10px_#00FFFF] text-5xl md:text-6xl lg:text-[5rem] tracking-tight">何が変わるのか</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-12">
                                <span className="sm:hidden">
                                    「資産を育てるつむぎ」は、<br />
                                    単に情報を提供するだけではありません。<br />
                                    あなたの思考を拡張し、世界を理解するための<br />
                                    パートナーとして機能します。
                                </span>
                                <span className="hidden sm:inline">
                                    「資産を育てるつむぎ」は、単に情報を提供するだけではありません。<br />
                                    あなたの思考を拡張し、世界を理解するためのパートナーとして機能します。
                                </span>
                            </p>

                            {/* Move cards here */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto md:mx-0">
                                {[
                                    '世界情勢を構造的に整理するための補助ツールです。',
                                    '情報の本質を見極める力を養う',
                                    '判断材料を整理するプロセスをサポートします。',
                                    '必要なときに活用できる分析支援ツールです。',
                                ].map((text, i) => (
                                    <div key={i}
                                        className="flex items-start gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] group/card overflow-hidden"
                                        style={{ background: 'rgba(0,245,255,0.04)', border: '1px solid rgba(0,245,255,0.15)' }}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-1.5 shadow-[0_0_8px_#00FFFF] group-hover/card:scale-125 transition-transform flex-shrink-0"></div>
                                        <p className="text-white/90 font-medium text-[11px] xs:text-xs md:text-base leading-relaxed flex-1 text-left">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="w-full md:w-1/2 lg:w-5/12 relative flex-shrink-0">
                            <div className="absolute -inset-4 bg-neon-cyan/20 blur-3xl opacity-40"></div>
                            <img
                                src="/gazou_2.png"
                                alt="つむぎ 変化"
                                className="relative z-10 w-full max-w-[500px] ml-auto h-auto rounded-2xl shadow-[0_0_40px_rgba(0,245,255,0.15)] border border-white/10"
                            />
                        </div>
                    </div>

                    <div className="mt-12 text-center md:text-left">
                        <p className="text-white font-bold text-xl md:text-2xl border-l-0 sm:border-l-4 border-neon-cyan/40 pl-0 sm:pl-6 text-center sm:text-left">
                            <span className="sm:hidden text-[17px] xs:text-xl block">
                                「資産を育てるつむぎ」は、<br />
                                あなたの思考を支える存在になります。
                            </span>
                            <span className="hidden sm:inline">
                                「資産を育てるつむぎ」は、あなたの思考を支える存在になります。
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* ====== HOW IT WORKS ====== */}
            <section className="bg-bg-dark py-24 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-fuchsia/30 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(191,0,255,0.06)_0%,transparent_70%)] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-16 mb-12">
                        {/* Right Side: Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white mb-8 text-center md:text-left">
                                どのように<span className="text-neon-fuchsia drop-shadow-[0_0_10px_#FF00FF]">機能するのか</span>
                            </h2>

                            <p className="text-gray-300 text-base md:text-lg leading-loose text-center md:text-left mb-10">
                                <span className="sm:hidden text-sm xs:text-base">
                                    このシステムを使用することで、<br />
                                    「資産を育てるつむぎ」はあなた専用の<br />
                                    分析パートナーとして機能します。
                                </span>
                                <span className="hidden sm:inline text-[15px] xs:text-base md:text-lg">
                                    このシステムを使用することで、<br />
                                    「資産を育てるつむぎ」はあなた専用の分析パートナーとして機能します。
                                </span>
                            </p>

                            <div className="mb-10">
                                <p className="text-gray-400 text-xs md:text-sm text-center md:text-left mb-6 font-mono border-b border-white/5 pb-2 inline-block">// あなたの質問に対して、以下を統合した視点で回答します</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {[
                                        { label: '地政学', desc: '国家・権力・地理の構造' },
                                        { label: '統計学', desc: 'データで世界を読む視点' },
                                        { label: '世界情勢', desc: 'リアルタイムな情勢分析' },
                                    ].map((item, i) => (
                                        <div key={i}
                                            className="text-center p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                                            style={{ background: 'rgba(0,245,255,0.05)', border: '1px solid rgba(0,245,255,0.2)' }}>
                                            <p className="text-white font-black text-sm mb-1">{item.label}</p>
                                            <p className="text-gray-400 text-[10px] leading-tight">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Left Side: Image */}
                        <div className="flex-1 relative">
                            <div className="absolute -inset-4 bg-neon-fuchsia/20 blur-3xl opacity-40"></div>
                            <img
                                src="/gazou_3.png"
                                alt="つむぎ 機能"
                                className="relative z-10 w-full max-w-[480px] mx-auto h-auto rounded-2xl shadow-[0_0_40px_rgba(255,0,255,0.15)] border border-white/10"
                            />
                        </div>
                    </div>


                    <div className="text-center space-y-3">
                        <p className="text-gray-400 text-base">それは、</p>
                        <p className="text-white font-bold text-lg xs:text-xl md:text-2xl">
                            単なる回答ではなく、<br />
                            <span className="text-neon-cyan sm:hidden text-[15px] xs:text-lg">理解を深めるための<br />分析フレームを提示します。</span>
                            <span className="text-neon-cyan hidden sm:inline">理解を深めるための分析フレームを提示します。</span>
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
            </section>
        </>
    );
};
