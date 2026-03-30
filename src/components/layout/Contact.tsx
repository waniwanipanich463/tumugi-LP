'use client';

import React, { useState } from 'react';

export const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const form = new FormData(e.currentTarget);
        // ユーザーから提供された新しい Formspree ID: mzdjzawj
        const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mzdjzawj';

        // Formspree に提出
        try {
            const res = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: form
            });

            if (res.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                const data = await res.json();
                console.error('Formspree Error:', data);
                setStatus('error');
            }
        } catch (err) {
            console.error('Network Error:', err);
            setStatus('error');
        }
    }

    const inputStyle: React.CSSProperties = {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(0,245,255,0.2)',
        borderRadius: '10px',
        color: 'white',
        padding: '14px 18px',
        width: '100%',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        fontFamily: 'inherit',
    };

    return (
        <section className="bg-bg-dark py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,245,255,0.04)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

            <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white text-center mb-4">
                    ご不明な点が<span className="text-neon-cyan drop-shadow-[0_0_10px_#00FFFF]">ある場合</span>
                </h2>
                <p className="text-gray-400 text-center leading-relaxed mb-10">
                    <span className="sm:hidden block text-[11px] xs:text-sm">
                        「資産を育てるつむぎ」についてのご質問や不明点がある場合は、<br />
                        以下の送信フォームよりお問い合わせください。
                    </span>
                    <span className="hidden sm:inline text-sm md:text-base">
                        「資産を育てるつむぎ」についてのご質問や不明点がある場合は、<br />
                        以下の送信フォームよりお問い合わせください。
                    </span>
                </p>

                {/* Form */}
                <div
                    className="rounded-2xl p-8 md:p-10 mb-8"
                    style={{
                        background: 'rgba(5,5,20,0.8)',
                        border: '1px solid rgba(0,245,255,0.15)',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 0 30px rgba(0,245,255,0.05)',
                    }}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-neon-cyan tracking-widest uppercase">
                                お名前 <span className="text-gray-500 font-normal normal-case">（任意）</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="山田 翔太"
                                style={inputStyle}
                                onFocus={(e) => { e.target.style.borderColor = 'rgba(0,245,255,0.6)'; }}
                                onBlur={(e) => { e.target.style.borderColor = 'rgba(0,245,255,0.2)'; }}
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-neon-cyan tracking-widest uppercase">
                                メールアドレス <span className="text-neon-fuchsia text-xs">*必須</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="example@gmail.com"
                                required
                                style={inputStyle}
                                onFocus={(e) => { e.target.style.borderColor = 'rgba(0,245,255,0.6)'; }}
                                onBlur={(e) => { e.target.style.borderColor = 'rgba(0,245,255,0.2)'; }}
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-neon-cyan tracking-widest uppercase">
                                問い合わせ内容 <span className="text-neon-fuchsia text-xs">*必須</span>
                            </label>
                            <textarea
                                name="message"
                                placeholder="ご質問やご不明な点をご記入ください..."
                                required
                                rows={6}
                                style={{ ...inputStyle, resize: 'vertical' }}
                                onFocus={(e) => { e.target.style.borderColor = 'rgba(0,245,255,0.6)'; }}
                                onBlur={(e) => { e.target.style.borderColor = 'rgba(0,245,255,0.2)'; }}
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="cyber-button w-full text-base mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? '送信中...' : 'お問い合わせを送信する →'}
                        </button>

                        {/* Status messages */}
                        {status === 'success' && (
                            <p className="text-center text-sm font-bold py-3 rounded-lg"
                                style={{ background: 'rgba(0,245,255,0.1)', color: '#00f5ff', border: '1px solid rgba(0,245,255,0.3)' }}>
                                送信しました。ありがとうございます。折り返しご連絡いたします。
                            </p>
                        )}
                        {status === 'error' && (
                            <div className="flex flex-col gap-2">
                                <p className="text-center text-sm font-bold py-3 rounded-lg"
                                    style={{ background: 'rgba(255,0,100,0.1)', color: '#ff6080', border: '1px solid rgba(255,0,100,0.3)' }}>
                                    送信に失敗しました（設定の反映待ちか、エラーです）。
                                </p>
                                <p className="text-center text-xs text-gray-500 italic">
                                    しばらく経っても解決しない場合は、直接 money.revenge001@gmail.com までご連絡ください。
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-fuchsia/30 to-transparent" />
        </section>
    );
};
