import React from 'react';
import Link from 'next/link';

export default function LegalPage() {
    const legalData = [
        { label: "販売事業者名", content: "五日市翔太" },
        { label: "所在地", content: "請求があった場合、遅滞なく開示いたします。" },
        { label: "電話番号", content: "請求があった場合、遅滞なく開示いたします。" },
        { label: "メールアドレス", content: "sho.itsuka122@gmail.com" },
        { label: "販売価格", content: "各商品ページに表示された価格に準じます。" },
        { label: "商品代金以外の必要料金", content: "インターネット接続に関わる通信費等はお客様のご負担となります。" },
        { label: "支払方法", content: "クレジットカード決済 等（使用サービスに合わせて記載）" },
        { label: "支払時期", content: "ご購入時に決済が確定します。" },
        { label: "商品の引き渡し時期", content: "決済完了後、即時ダウンロードまたは閲覧可能となります。" },
        { label: "返品・キャンセルについて", content: "デジタル商品の特性上、購入後の返品・返金は原則お受けしておりません。" },
    ];

    return (
        <main className="min-h-screen bg-bg-dark text-text-primary cyber-grid pb-20">
            {/* Header / Navigation Link */}
            <div className="container-premium pt-10 mb-20">
                <Link
                    href="/"
                    className="text-neon-cyan hover:text-white transition-colors flex items-center gap-2 group font-mono text-sm tracking-widest"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO HOME
                </Link>
            </div>

            <div className="container-premium max-w-3xl">
                {/* Title Section */}
                <div className="relative mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 glitch-text" data-text="LEGAL NOTICE">
                        特定商取引法に基づく表記
                    </h1>
                    <div className="h-1 w-24 bg-neon-cyan mx-auto"></div>
                </div>

                {/* Content Section */}
                <div className="space-y-12">
                    <div className="cyber-card backdrop-blur-sm border-white/5">
                        <div className="grid gap-10">
                            {legalData.map((item, index) => (
                                <div key={index} className="group border-b border-white/5 pb-6 last:border-0 last:pb-0">
                                    <h2 className="text-neon-fuchsia font-mono text-xs tracking-[0.2em] uppercase mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                                        // {item.label}
                                    </h2>
                                    <p className="text-lg leading-relaxed whitespace-pre-wrap font-medium">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Disclaimer Section */}
                    <div className="cyber-card border-neon-cyan/20 bg-neon-cyan/5">
                        <h2 className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-neon-cyan animate-pulse"></span>
                            【免責事項】
                        </h2>
                        <div className="space-y-4 text-sm text-text-dim leading-relaxed">
                            <p>本商品は収益や成果を保証するものではありません。</p>
                            <p>成果には個人差があり、取り組み方や状況により結果は異なります。</p>
                            <p>本商品は情報提供および自己分析支援を目的としています。</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decoration */}
            <div className="fixed top-0 right-0 w-64 h-64 bg-neon-cyan/5 blur-[120px] -z-10 animate-pulse"></div>
            <div className="fixed bottom-0 left-0 w-96 h-96 bg-neon-fuchsia/5 blur-[150px] -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </main>
    );
}
