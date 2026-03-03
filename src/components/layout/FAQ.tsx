"use client";
import React, { useState } from 'react';

const faqs = [
    {
        q: '全くの初心者でも、3ヶ月でハック（成果）が可能ですか？',
        a: 'はい。カリキュラムは「自分のリソース（糸）」を検知し、ハイパーネットワークに最適化するところからスタートします。段階的な同期プロセスにより、基礎から上位階層まで迷わずアップグレードできる設計になっています。'
    },
    {
        q: '既存のジョブを続けながらでも参加可能ですか？',
        a: 'ポジティブです。ネットワーク完結型のカリキュラムに加え、サブスク型プランではご自身の稼働プロトコルに合わせて学習を同期いただけます。'
    },
    {
        q: 'どのようなサポート・プロトコルがありますか？',
        a: '24時間常時接続のDiscordサーバー、週1回の同期会議、そしてマスターによる直接のコード・フィードバック体制が構築されています。'
    },
    {
        q: '暗号資産（Crypto）での支払いは可能ですか？',
        a: '承認済みです。BTC, ETH, USDCでの決済に対応しています。暗号化された請求書を発行します。'
    },
    {
        q: 'プロトコルの中断（返金）は可能ですか？',
        a: 'はい。初期同期から14日間は、システムの不適合を感じた場合、理由を問わず全額返金（ロールバック）いたします。'
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="bg-bg-dark py-32 relative overflow-hidden" id="faq">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>

            <div className="container-premium max-w-4xl relative z-10">
                <div className="text-left mb-20 border-l-4 border-neon-cyan pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
                        <span className="text-neon-fuchsia drop-shadow-[0_0_10px_#FF00FF]">よくある質問</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`cyber-card !p-0 overflow-hidden transition-all duration-300 ${openIndex === i ? 'ring-1 ring-neon-cyan/50 shadow-[0_0_15px_rgba(0,255,255,0.1)]' : ''}`}>
                            <button
                                onClick={() => toggle(i)}
                                className="w-full p-8 text-left flex justify-between items-center group"
                            >
                                <span className={`font-bold tracking-tight transition-colors duration-300 ${openIndex === i ? 'text-neon-cyan' : 'text-white'}`}>
                                    <span className="font-mono mr-4 opacity-30">[{i + 1}]</span>
                                    {faq.q}
                                </span>
                                <div className={`flex items-center justify-center w-8 h-8 rounded border border-white/20 group-hover:border-neon-cyan transition-all duration-300 ${openIndex === i ? 'rotate-180 bg-neon-cyan text-bg-dark' : 'text-white'}`}>
                                    <span className="font-bold">{openIndex === i ? '−' : '＋'}</span>
                                </div>
                            </button>
                            <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-height-[500px] opacity-100' : 'max-height-0 opacity-0 overflow-hidden'}`}>
                                <div className="p-8 pt-0 text-text-dim font-mono text-sm leading-relaxed border-t border-white/5 bg-white/5">
                                    <p className="border-l-2 border-neon-fuchsia/50 pl-6 py-2">
                                        {`>>`} 回答: {faq.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
