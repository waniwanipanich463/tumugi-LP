'use client';

import React from 'react';

const plans = [
    {
        title: '月額プラン（サブスクリプション）',
        price: '20,000円',
        unit: '/ 月',
        desc: '柔軟に始めたい方向けのプラン。最新アップデートを継続的に受け取ることができます。',
        features: [
            { text: '専用プロンプトへのアクセス', included: true },
            { text: '最新アップデートの受け取り', included: true },
            { text: 'スタンダードサポート', included: true },
            { text: 'いつでも解約可能', included: true },
            { text: '　', included: false }, // 高さ揃え用のダミー行
        ],
        buttonText: 'つむぎを専属パートナーとして使用する',
        highlighted: true,
    },
    {
        title: '買い切りプラン',
        price: '300,000円',
        unit: '',
        desc: '長期的に「つむぎ」を活用したい方向け。すべてのアップデートを追加費用なしで利用可能。',
        features: [
            { text: '専用プロンプトへのアクセス', included: true },
            { text: 'すべてのアップデートが追加費用なし', included: true },
            { text: '優先サポート', included: true },
            { text: '永久アクセス権', included: true },
            { text: '一度の支払いで完結', included: true },
        ],
        buttonText: 'つむぎを専属パートナーとして使用する',
        highlighted: false,
    },
];

export const Pricing = () => {
    return (
        <>
            <section className="bg-bg-dark py-32 cyber-grid relative" id="pricing">
                <div className="container-premium">

                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
                            style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.4)' }}>
                            <span className="text-[#FFD700] text-sm font-black tracking-widest uppercase">
                                YouTube視聴者限定で公開しています
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 italic uppercase tracking-tighter">
                            あなたの目的に<br className="sm:hidden" />合わせて<span className="text-neon-cyan drop-shadow-[0_0_10px_#00FFFF]">選ぶ</span>
                        </h2>
                        <p className="text-text-dim max-w-2xl mx-auto text-lg font-mono mb-2">
                        // まずは試したい方にはサブスクリプション。
                        </p>
                        <p className="text-text-dim max-w-2xl mx-auto text-lg font-mono">
                        // 長期的に活用したい方には買い切りプラン。
                        </p>
                    </div>

                    {/* Pricing Grid — pt-10でバッジ用のスペース確保 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto pt-10">
                        {plans.map((plan, i) => (
                            <div key={i} className="relative flex flex-col">

                                {/* おすすめバッジ */}
                                {plan.highlighted && (
                                    <div className="absolute -top-6 left-0 right-0 flex justify-center"
                                        style={{ zIndex: 20 }}>
                                        <span
                                            className="px-6 py-1.5 rounded-full text-sm font-black tracking-widest text-black"
                                            style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }}
                                        >
                                            おすすめ
                                        </span>
                                    </div>
                                )}

                                {/* グロー枠（おすすめのみ） */}
                                {plan.highlighted && (
                                    <div
                                        className="absolute -inset-[3px] rounded-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, #00f5ff, #bf00ff)',
                                            opacity: 0.6,
                                            zIndex: 0,
                                        }}
                                    />
                                )}

                                {/* カード本体 */}
                                <div
                                    className={`relative flex flex-col flex-1 cyber-card transition-all duration-500 cursor-pointer
                                    ${plan.highlighted
                                            ? 'border-transparent shadow-[0_0_40px_rgba(0,245,255,0.2),0_0_80px_rgba(191,0,255,0.15)] hover:shadow-[0_0_60px_rgba(0,245,255,0.4),0_0_120px_rgba(191,0,255,0.3)]'
                                            : 'border-white/5 hover:border-neon-cyan hover:shadow-[0_0_50px_rgba(0,255,255,0.4)]'
                                        }`}
                                    style={{ zIndex: 1 }}
                                >
                                    <div className="mb-12">
                                        <h3 className="text-xs font-black text-neon-cyan tracking-[0.3em] mb-6 uppercase">{plan.title}</h3>
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <span className="text-6xl font-black text-white tracking-tighter italic">{plan.price}</span>
                                            <span className="text-text-dim font-mono text-sm uppercase">{plan.unit}</span>
                                        </div>
                                        <p className="text-text-dim text-sm leading-relaxed font-serif italic opacity-70 border-l-2 border-neon-cyan/20 pl-4">{plan.desc}</p>
                                    </div>

                                    <ul className="space-y-5 mb-12 flex-grow">
                                        {plan.features.map((f, j) => (
                                            <li key={j} className={`flex items-center text-xs font-mono tracking-tight ${f.included ? 'text-white' : 'opacity-0 pointer-events-none'}`}>
                                                <span className={`mr-4 ${f.included ? 'text-neon-cyan' : ''}`}>
                                                    {f.included ? '[√]' : '　'}
                                                </span>
                                                <span>{f.text}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`cyber-button w-full text-sm md:text-base mt-auto ${plan.highlighted ? '!border-neon-fuchsia !text-neon-fuchsia hover:!bg-neon-fuchsia hover:!text-white hover:shadow-[0_0_20px_#FF00FF]' : ''}`}>
                                        {plan.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ====== FINAL CLOSING ====== */}
            <section className="bg-bg-dark py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.06)_0%,rgba(191,0,255,0.04)_40%,transparent_70%)] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-fuchsia/40 to-transparent"></div>

                <div className="container-premium max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Side: Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black italic tracking-tighter text-white mb-8">
                                <span className="whitespace-nowrap">つむぎを、</span><br />
                                <span className="text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] whitespace-nowrap">あなたの専属に。</span>
                            </h2>

                            <div className="space-y-6 mb-12 max-w-xl mx-auto md:mx-0">
                                <p className="text-gray-300 text-base md:text-lg leading-loose">
                                    これは、誰でも使えるAIではありません。
                                </p>
                                <div className="border-l-4 border-neon-cyan/60 pl-6 py-2 text-left">
                                    <p className="text-white font-bold text-xl md:text-2xl">
                                        あなたのための専用プロンプトです。
                                    </p>
                                </div>
                                <p className="text-gray-300 text-base md:text-lg leading-loose">
                                    YouTubeで見ていた「つむぎ」が、<br />
                                    あなたのパートナーとして動き始めます。
                                </p>
                                <p className="text-white font-medium text-base md:text-lg leading-loose">
                                    この機会に、つむぎをあなたの手に。
                                </p>
                            </div>

                            <div className="flex flex-col items-center md:items-start gap-4">
                                <p className="text-neon-fuchsia/80 text-sm font-bold tracking-widest">
                                    つむぎを専属パートナーとして使用する
                                </p>
                                <button
                                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="cyber-button text-xl px-12 py-5 group overflow-hidden relative"
                                >
                                    <span className="relative z-10 font-black">プランを選んで始める →</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="flex-1 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 to-neon-fuchsia/20 blur-3xl opacity-50"></div>
                            <img
                                src="/gazou_1.png"
                                alt="つむぎ 専属パートナー"
                                className="relative z-10 w-full max-w-[500px] mx-auto h-auto rounded-2xl shadow-[0_0_50px_rgba(0,245,255,0.15)] border border-white/10"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
