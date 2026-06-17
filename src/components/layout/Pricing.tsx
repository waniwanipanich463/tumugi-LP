'use client';

import React from 'react';

const plans = [
    {
        title: 'プランA',
        price: '--,---円',
        unit: '',
        desc: (
            <>
                <span className="sm:hidden text-[12px] leading-relaxed block">
                    プランAの詳細説明テキストが<br />
                    ここに入ります。<br />
                    レイアウトとデザインを<br />
                    確認するためのダミーです。
                </span>
                <span className="hidden sm:inline">プランAの詳細説明テキストがここに入ります。レイアウトとデザインを確認するためのダミーです。</span>
            </>
        ),
        features: [
            { text: '提供される機能やサービスの内容1', included: true },
            { text: '提供される機能やサービスの内容2', included: true },
            { text: '提供される機能やサービスの内容3', included: true },
            { text: '提供される機能やサービスの内容4', included: true },
            { text: '提供される機能やサービスの内容5', included: true },
        ],
        buttonText: (
            <>
                <span className="sm:hidden leading-tight block">
                    プランAに申し込む
                </span>
                <span className="hidden sm:inline">プランAに申し込む</span>
            </>
        ),
        highlighted: true,
        note: '',
    },
    {
        title: 'プランB',
        price: '--,---円',
        unit: '/ 月',
        desc: (
            <>
                <span className="sm:hidden text-[12px] leading-relaxed block">
                    プランBの詳細説明テキストが<br />
                    ここに入ります。<br />
                    レイアウトとデザインを<br />
                    確認するためのダミーです。
                </span>
                <span className="hidden sm:inline">プランBの詳細説明テキストがここに入ります。レイアウトとデザインを確認するためのダミーです。</span>
            </>
        ),
        features: [
            { text: '提供される機能やサービスの内容1', included: true },
            { text: '提供される機能やサービスの内容2', included: true },
            { text: '提供される機能やサービスの内容3', included: true },
            { text: '提供される機能やサービスの内容4', included: true },
            { text: '提供される機能やサービスの内容5', included: true },
        ],
        buttonText: (
            <>
                <span className="sm:hidden leading-tight block">
                    プランBに申し込む
                </span>
                <span className="hidden sm:inline">プランBに申し込む</span>
            </>
        ),
        highlighted: false,
        note: '※サブスクリプション形式の注記',
    },
];

export const Pricing = () => {
    return (
        <section className="bg-bg-dark py-32 cyber-grid relative" id="pricing">
            <div className="container-premium">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[28px] xs:text-3xl md:text-7xl font-black text-white mb-8 italic uppercase tracking-tighter">
                        サービスプランのご案内
                    </h2>
                    <p className="text-text-dim max-w-2xl mx-auto text-[13px] xs:text-lg font-mono whitespace-nowrap overflow-hidden text-ellipsis">
                        目的に応じたプランを用意しております。
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 pt-10">
                    {plans.map((plan, i) => (
                        <div key={i} className="relative flex flex-col">
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
                                className={`relative flex flex-col flex-1 cyber-card transition-all duration-500
                                ${plan.highlighted
                                        ? 'border-transparent shadow-[0_0_40px_rgba(0,245,255,0.2),0_0_80px_rgba(191,0,255,0.15)] hover:shadow-[0_0_60px_rgba(0,245,255,0.4),0_0_120px_rgba(191,0,255,0.3)]'
                                        : 'border-white/5 hover:border-neon-cyan hover:shadow-[0_0_50px_rgba(0,255,255,0.4)]'
                                    }`}
                                style={{ zIndex: 1 }}
                            >
                                <div className="mb-12">
                                    <h3 className="text-[11px] xs:text-xs font-black text-neon-cyan tracking-[0.1em] xs:tracking-[0.3em] mb-6 uppercase whitespace-nowrap overflow-hidden text-ellipsis">{plan.title}</h3>
                                    <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2 whitespace-nowrap overflow-hidden">
                                        <span className="text-4xl xs:text-6xl font-black text-white tracking-tighter italic">{plan.price}</span>
                                        <span className="text-text-dim font-mono text-xs xs:text-sm uppercase">{plan.unit}</span>
                                    </div>
                                    {plan.note && (
                                        <p className="text-[10px] text-text-dim/60 mb-6 font-mono tracking-tighter">
                                            {plan.note}
                                        </p>
                                    )}
                                    <p className="text-text-dim text-sm leading-relaxed font-serif italic opacity-70 border-l-0 sm:border-l-2 border-neon-cyan/20 pl-0 sm:pl-4 text-center sm:text-left">{plan.desc}</p>
                                </div>

                                <ul className="space-y-4 mb-12 flex-grow">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className={`flex items-start text-xs font-mono tracking-tight ${f.included ? 'text-white' : 'opacity-0 pointer-events-none'}`}>
                                            <span className={`mr-3 mt-1 ${f.included ? 'text-neon-cyan' : ''}`}>
                                                ✔
                                            </span>
                                            <span className="leading-relaxed">{f.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => alert('現在、お申し込みは受け付けておりません。')}
                                    className={`cyber-button w-full text-[10px] xs:text-[11px] sm:text-[12px] md:text-sm lg:text-base tracking-tighter mt-auto px-1 whitespace-normal py-4 ${plan.highlighted ? '!border-neon-fuchsia !text-neon-fuchsia hover:!bg-neon-fuchsia hover:!text-white hover:shadow-[0_0_20px_#FF00FF]' : ''}`}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
