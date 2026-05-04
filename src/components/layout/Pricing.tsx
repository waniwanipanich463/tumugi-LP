'use client';

import React from 'react';

const plans = [
    {
        title: '買い切りプラン',
        price: '300,000円',
        unit: '',
        desc: (
            <>
                <span className="sm:hidden text-[12px] leading-relaxed block">
                    長期的に活用することを<br />
                    前提としたプランです。<br />
                    継続利用を想定した設計思想と<br />
                    今後のアップデートを含めて提供します。
                </span>
                <span className="hidden sm:inline">長期的に活用することを前提としたプランです。継続利用を想定した設計思想と今後のアップデートを含めて提供します。</span>
            </>
        ),
        features: [
            { text: '専用プロンプトへのアクセス', included: true },
            { text: '今後のアップデート追加費用なし', included: true },
            { text: '優先サポート', included: true },
            { text: 'サービス継続期間中の永続アクセス', included: true },
            { text: '一度の支払いで完結', included: true },
        ],
        buttonText: (
            <>
                <span className="sm:hidden leading-tight block">
                    100歳まで安心するための<br />
                    “出口戦略”を今すぐ受け取る
                </span>
                <span className="hidden sm:inline">100歳まで安心するための“出口戦略”を今すぐ受け取る</span>
            </>
        ),
        highlighted: true,
        note: '',
        priceId: 'price_1T5gTqFu22Cfk29Fcs4MuzJB',
        mode: 'payment',
    },
    {
        title: '育成プラン',
        price: '20,000円',
        unit: '/ 月',
        desc: (
            <>
                <span className="sm:hidden text-[12px] leading-relaxed block">
                    継続的な学習とアップロードを求める<br />
                    初心者向けのサービスです。<br />
                    システムへの常時接続が<br />
                    可能になります。
                </span>
                <span className="hidden sm:inline">継続的な学習とアップロードを求める初心者向けのサービスです。システムへの常時接続が可能になります。</span>
            </>
        ),
        features: [
            { text: '継続的な学習サポート', included: true },
            { text: 'システムへの常時接続', included: true },
            { text: '初心者向けサポート', included: true },
            { text: '定期的なアップデート', included: true },
            { text: '優先サポート', included: true },
        ],
        buttonText: (
            <>
                <span className="sm:hidden leading-tight block">
                    100歳まで安心するための<br />
                    “出口戦略”を今すぐ受け取る
                </span>
                <span className="hidden sm:inline">100歳まで安心するための“出口戦略”を今すぐ受け取る</span>
            </>
        ),
        highlighted: false,
        note: '※毎月のサブスクリプション形式',
        priceId: 'price_1T5gRNFu22Cfk29F93bhfOXU',
        mode: 'subscription',
    },
];

export const Pricing = () => {
    const [loading, setLoading] = React.useState<string | null>(null);
    const [showEmailModal, setShowEmailModal] = React.useState<{ priceId: string, mode: string } | null>(null);
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');

    const handleCheckout = async (priceId: string, mode: string, prefilledEmail?: string) => {
        if (!prefilledEmail) {
            setShowEmailModal({ priceId, mode });
            return;
        }

        setLoading(priceId);
        try {
            const response = await fetch('https://tsumugi-dl-page.vercel.app/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ priceId, mode, customerEmail: prefilledEmail }),
            });
            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                alert('決済画面の作成に失敗しました。');
                console.error('Checkout error:', data);
            }
        } catch (error) {
            alert('通信エラーが発生しました。');
            console.error('Failed to initiate checkout:', error);
        } finally {
            setLoading(null);
        }
    };

    const submitEmail = () => {
        if (!email.toLowerCase().endsWith('@gmail.com')) {
            setEmailError('⚠️ @gmail.com のアドレスを入力してください');
            return;
        }
        setEmailError('');
        if (showEmailModal) {
            handleCheckout(showEmailModal.priceId, showEmailModal.mode, email);
            setShowEmailModal(null);
        }
    };

    return (
        <>
            <section className="bg-bg-dark py-32 cyber-grid relative" id="pricing">
                {/* Email Verification Modal */}
                {showEmailModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <div className="bg-bg-dark border border-neon-cyan/30 rounded-2xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(0,255,255,0.1)] relative">
                            <button
                                onClick={() => setShowEmailModal(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white"
                            >
                                ✕
                            </button>
                            <h3 className="text-xl font-black text-white mb-6 text-center italic">
                                <span className="text-neon-cyan">Gmail</span> アドレスの確認
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                本サービスはGoogleアカウント（Gmail）専用です。権限付与に使用するアドレスを入力してください。
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setEmailError('');
                                        }}
                                        className={`w-full bg-white/5 border ${emailError ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan transition-colors`}
                                    />
                                    {emailError && (
                                        <p className="text-red-500 text-xs mt-2 font-bold animate-pulse">{emailError}</p>
                                    )}
                                </div>
                                <button
                                    onClick={submitEmail}
                                    className="cyber-button w-full py-4 text-base"
                                >
                                    決済に進む →
                                </button>
                                <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest">
                                    ※決済画面に自動で引き継がれます
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="container-premium">

                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
                            style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.4)' }}>
                            <span className="text-[#FFD700] text-[11px] xs:text-sm font-black tracking-widest uppercase whitespace-nowrap">
                                YouTube視聴者限定で公開しています
                            </span>
                        </div>

                        <h2 className="text-[28px] xs:text-3xl md:text-7xl font-black text-white mb-8 italic uppercase tracking-tighter">
                            あなたの人生を<br className="sm:hidden" />加速させる<span className="text-neon-cyan drop-shadow-[0_0_10px_#00FFFF]">相棒</span>
                        </h2>
                        <p className="text-text-dim max-w-2xl mx-auto text-[13px] xs:text-lg font-mono whitespace-nowrap overflow-hidden text-ellipsis">
                            長期的に活用したい方のための買い切りプラン。
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
                                        onClick={() => handleCheckout(plan.priceId, plan.mode)}
                                        disabled={loading !== null}
                                        className={`cyber-button w-full text-[10px] xs:text-[11px] sm:text-[12px] md:text-sm lg:text-base tracking-tighter mt-auto px-1 whitespace-normal py-4 ${plan.highlighted ? '!border-neon-fuchsia !text-neon-fuchsia hover:!bg-neon-fuchsia hover:!text-white hover:shadow-[0_0_20px_#FF00FF]' : ''} ${loading === plan.priceId ? 'opacity-50 cursor-wait' : ''}`}
                                    >
                                        {loading === plan.priceId ? '準備中...' : plan.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Information */}
                    <div className="mt-20 max-w-4xl mx-auto space-y-20">


                        {/* Product Specifications & Support Range */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-neon-cyan text-sm font-black tracking-widest mb-6 uppercase flex items-center gap-4">
                                        <span>【商品仕様】</span>
                                        <div className="h-[1px] flex-grow bg-neon-cyan/20"></div>
                                    </h4>
                                    <ul className="space-y-3 text-gray-400 text-[13px] pl-4 border-l border-neon-cyan/30 text-left">
                                        <li>・提供形式：AIコンテンツ（デジタルコンテンツ）</li>
                                        <li>・提供方法：オンライン上で閲覧・利用可能</li>
                                        <li>・対応AI：Gemini（Gem）</li>
                                        <li>・利用回数：制限なし</li>
                                        <li>・アップデート：提供期間中に限り適用</li>
                                    </ul>
                                    <div className="mt-6 space-y-4 text-gray-500 text-[12px] leading-relaxed">
                                        <p>
                                            ※本商品は、Gemini（Gem）上で利用するAIコンテンツです。<br />
                                            ご利用には各AIサービスのアカウントが必要となります。
                                        </p>
                                        <p>
                                            ※Gemini の Gem 機能について利用環境やプランによっては有料プランが必要となる場合があります。
                                        </p>
                                        <p>
                                            ※AIサービスの利用料金（有料プラン等）が発生する場合は、<br />
                                            各サービス提供元（Google）の料金体系に従います。
                                        </p>
                                        <p>
                                            ※AIサービスの仕様変更や利用環境により、利用条件や出力内容が変更される場合があります。
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-neon-fuchsia text-sm font-black tracking-widest mb-6 uppercase flex items-center gap-4">
                                        <span>【利用に関する注意事項】</span>
                                        <div className="h-[1px] flex-grow bg-neon-fuchsia/20"></div>
                                    </h4>
                                    <div className="space-y-4 text-gray-400 text-[13px] pl-4 border-l border-neon-fuchsia/30 leading-relaxed text-left">
                                        <p>
                                            本商品は、思考整理や分析をサポートするためのツールです。<br />
                                            特定の結果や成果を保証するものではありません。
                                        </p>
                                        <p>
                                            利用結果は、利用環境や活用方法により異なる場合があります。
                                        </p>
                                        <p>
                                            また、本商品は投資助言や金融助言を目的としたものではありません。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-12">
                                {/* Why 300,000 yen? Moved here */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden group h-full">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-neon-fuchsia/10 blur-3xl rounded-full group-hover:bg-neon-fuchsia/20 transition-colors"></div>

                                    <h4 className="text-white text-lg font-black mb-8 flex items-center gap-3 whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span className="text-neon-fuchsia">#</span> 買い切りプランの価値：
                                    </h4>

                                    <div className="space-y-10">
                                        <div className="space-y-6">
                                            <p className="text-gray-300 leading-relaxed text-sm">
                                                <span className="sm:hidden">この価格は「情報の値段」<br />ではありません。</span>
                                                <span className="hidden sm:inline">この価格は「情報の値段」ではありません。</span>
                                            </p>
                                            <ul className="space-y-4 text-gray-400 text-sm border-l-2 border-neon-fuchsia/30 pl-6 text-left">
                                                <li>・設計思想の体系化</li>
                                                <li>・長期的なアップデート</li>
                                                <li>・継続利用を前提とした構造設計</li>
                                            </ul>
                                            <p className="text-gray-300 text-sm">に対する対価です。</p>
                                        </div>
                                        <div className="space-y-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-8">
                                            <p>
                                                専門家へ分析を依頼すれば、<br />
                                                数回で同等以上の費用が発生します。
                                            </p>
                                            <p className="text-xs sm:text-sm">
                                                本商品は、それを自分のペースで<br />
                                                繰り返し活用できる形にしたものです。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Audience Matching */}
                        <div className="pt-20 border-t border-white/5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-8 md:p-10">
                                    <h4 className="text-red-400 text-base xs:text-lg font-black mb-6 flex items-center gap-3 whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span className="w-2 h-2 rounded-full bg-red-400"></span>
                                        こんな方には向いていません：
                                    </h4>
                                    <ul className="space-y-4 text-gray-400 text-xs xs:text-sm md:text-base">
                                        <li className="flex items-start gap-2 whitespace-nowrap overflow-hidden text-ellipsis"><span>・</span>即効性を求める方</li>
                                        <li className="flex items-start gap-2 whitespace-nowrap overflow-hidden text-ellipsis"><span>・</span>投資助言を期待する方</li>
                                        <li className="flex items-start gap-2 whitespace-nowrap overflow-hidden text-ellipsis"><span>・</span>他者の判断をそのまま採用したい方</li>
                                    </ul>
                                </div>

                                <div className="bg-neon-cyan/5 border border-neon-cyan/10 rounded-2xl p-8 md:p-10">
                                    <h4 className="text-neon-cyan text-base xs:text-lg font-black mb-6 flex items-center gap-3 whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span className="w-2 h-2 rounded-full bg-neon-cyan"></span>
                                        向いている人：
                                    </h4>
                                    <ul className="space-y-4 text-gray-300 text-xs xs:text-sm md:text-base">
                                        <li className="flex items-start gap-2 whitespace-nowrap overflow-hidden text-ellipsis"><span>・</span>自分の思考を深めたい方</li>
                                        <li className="flex items-start gap-2 whitespace-nowrap overflow-hidden text-ellipsis"><span>・</span>構造的に世界を理解したい方</li>
                                        <li className="flex items-start gap-2 whitespace-nowrap overflow-hidden text-ellipsis"><span>・</span>長期的視点を持ちたい方</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Definition of Permanent Access */}
                        <div>
                            <h4 className="text-gray-500 text-sm font-black tracking-widest mb-6 uppercase flex sm:flex-row items-center gap-4 text-center sm:text-left">
                                <span className="whitespace-nowrap w-full sm:w-auto">【永続アクセスの定義】</span>
                                <div className="h-[1px] w-full sm:flex-grow bg-white/10 hidden sm:block"></div>
                            </h4>
                            <p className="text-gray-400 text-xs xs:text-sm md:text-base leading-relaxed pl-0 sm:pl-6 border-l-0 sm:border-l border-white/20 text-center sm:text-left">
                                <span className="sm:hidden block">
                                    本サービスが継続して提供される限り<br />
                                    利用可能であることを指します。
                                </span>
                                <span className="hidden sm:inline">
                                    「永続アクセス」とは、本サービスが継続して提供される限り利用可能であることを指します。
                                </span>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ====== FINAL CLOSING ====== */}
            <section className="bg-bg-dark py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.06)_0%,rgba(191,0,255,0.04)_40%,transparent_70%)] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-fuchsia/40 to-transparent"></div>

                <div className="container-premium max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-32">
                        {/* Left Side: Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="flex flex-col gap-2 font-black italic tracking-tighter text-white mb-8">
                                <span className="text-[18px] xs:text-2xl md:text-4xl lg:text-5xl md:whitespace-nowrap">
                                    「資産を育てるつむぎ」を<br className="sm:hidden" />
                                </span>
                                <span className="text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] text-[28px] xs:text-4xl md:text-6xl lg:text-[5.5rem] tracking-tight md:whitespace-nowrap">あなたの手に。</span>
                            </h2>

                            <div className="space-y-6 mb-12 max-w-xl mx-auto md:mx-0">
                                <p className="text-gray-300 text-sm xs:text-base md:text-lg leading-loose">
                                    <span className="sm:hidden block">これは、誰でも使えるAIではありません。</span>
                                    <span className="hidden sm:inline">これは、誰でも使えるAIではありません。</span>
                                </p>
                                <div className="border-l-0 sm:border-l-4 border-neon-cyan/60 pl-0 sm:pl-6 py-2 text-center sm:text-left">
                                    <p className="text-white font-bold text-[15px] xs:text-xl md:text-2xl whitespace-nowrap sm:whitespace-normal">
                                        あなたのための専用プロンプトです。
                                    </p>
                                </div>
                                <p className="text-gray-300 text-sm xs:text-base md:text-lg leading-loose">
                                    <span className="sm:hidden block">
                                        「資産を育てるつむぎ」が、<br />
                                        あなたのパートナーとして<br className="xs:hidden" />
                                        動き始めます。
                                    </span>
                                    <span className="hidden sm:inline">
                                        「資産を育てるつむぎ」が、<br />
                                        あなたのパートナーとして動き始めます。
                                    </span>
                                </p>
                                <p className="text-white font-medium text-sm xs:text-base md:text-lg leading-loose">
                                    この機会に、「資産を育てるつむぎ」をあなたの手に。
                                </p>
                            </div>

                            <div className="flex flex-col items-center md:items-start gap-4 w-full">
                                <button
                                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="cyber-button text-[11px] xs:text-[12px] sm:text-sm md:text-lg px-2 xs:px-4 sm:px-8 md:px-12 py-3 sm:py-5 group overflow-hidden relative w-[95%] sm:w-auto max-w-full mx-auto md:mx-0 whitespace-normal"
                                >
                                    <span className="relative z-10 font-black tracking-tighter leading-tight">
                                        <span className="sm:hidden block">
                                            100歳まで安心するための<br />
                                            “出口戦略”を今すぐ受け取る
                                        </span>
                                        <span className="hidden sm:inline">100歳まで安心するための“出口戦略”を今すぐ受け取る</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="w-full md:w-1/2 lg:w-5/12 relative flex-shrink-0">
                            <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 to-neon-fuchsia/20 blur-3xl opacity-50"></div>
                            <img
                                src="/gazou_1.png"
                                alt="つむぎ 専属パートナー"
                                className="relative z-10 w-full max-w-[500px] ml-auto h-auto rounded-2xl shadow-[0_0_50px_rgba(0,245,255,0.15)] border border-white/10"
                            />
                        </div>
                    </div>

                    {/* Final Philosophical Message */}
                    <div className="max-w-3xl mx-auto text-center border-t border-white/5 pt-24">
                        <div className="space-y-8 text-gray-400 text-sm xs:text-base md:text-lg leading-loose font-serif">
                            <p>
                                <span className="sm:hidden block">
                                    この商品は、<br />
                                    「情報を増やすため」ではなく、<br />
                                    「思考の軸を持つため」に<br />
                                    設計されています。
                                </span>
                                <span className="hidden sm:inline">
                                    この商品は、<br className="sm:hidden" />
                                    「情報を増やすため」ではなく、<br className="sm:hidden" />
                                    「思考の軸を持つため」に設計されています。
                                </span>
                            </p>
                            <p className="text-white font-bold opacity-80">
                                価格は安くありません。
                            </p>
                            <p>
                                <span className="sm:hidden block text-[13px] xs:text-base">
                                    しかし、長期的に思考の質へ<br />
                                    投資と考えれば、<br />
                                    合理的な選択肢の一つです。
                                </span>
                                <span className="hidden sm:inline">
                                    しかし、<br className="sm:hidden" />
                                    長期的に思考の質へ投資すると考えれば、<br className="sm:hidden" />
                                    合理的な選択肢の一つです。
                                </span>
                            </p>
                            <p>
                                <span className="sm:hidden block text-[13px] xs:text-base">
                                    最終的な判断は、あなた自身の<br />
                                    価値基準に委ねます。
                                </span>
                                <span className="hidden sm:inline">最終的な判断は、あなた自身の価値基準に委ねます。</span>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
