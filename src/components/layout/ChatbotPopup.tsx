'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type Message = {
    role: 'user' | 'assistant';
    content: string;
    isCTA?: boolean;
    ctaLabel?: string;
    ctaAction?: 'video' | 'buy';
};

const FAQ_DATA: Record<string, { answer: string; nextOptions: string[] }> = {
    '初心者でも使えますか？': {
        answer: 'はい、初心者の方でも問題なく使用できます。\nプロンプトをChatGPTやGeminiに入力するだけで、強みの分析や収益化の方向性を導き出すことができます。',
        nextOptions: ['具体的に何ができますか？', '自分に向いているか知りたい', '購入を検討したい']
    },
    '何ができるのですか？': {
        answer: 'このプロンプトでは、以下が可能になります：\n\n・強みの分析\n・コンセプト設計\n・商品アイデア生成\n・収益化導線の設計\n\n多くの方は「何をすればいいか分からない」状態から抜け出しています。',
        nextOptions: ['自分に向いていますか？', 'どんな人が使っていますか？', '購入について知りたい']
    },
    '自分に向いているか知りたい': {
        answer: '以下に当てはまる方に特におすすめです：\n\n・収益化の方向性が分からない\n・自分の強みが分からない\n・発信や商品を作りたい\n・AIを活用したい\n\nすでに多くの方が、自分の価値を明確にしています。',
        nextOptions: ['購入方法を見る', 'もう少し詳しく知る']
    },
    'ChatGPT無料版でも使えますか？': {
        answer: '無料版でも使用可能です。\nただし、より精度の高い結果を得たい場合は、ChatGPT Plusなどの有料プランを推奨しています。\n\nGeminiでも同様に使用可能です。',
        nextOptions: ['具体的に何ができますか？', '購入について知りたい']
    },
    '購入方法について': {
        answer: '購入後はすぐにコピーして使用できる形式で提供されます。\n特別な設定や準備は必要ありません。無期限で何度でも繰り返し使用できます。',
        nextOptions: ['価格を確認する', 'すぐに始める']
    },
    'まだ迷っています': {
        answer: '多くの方が、同じように迷われます。ですが、自分の価値を言語化できた瞬間に、方向性が明確になります。\n\nまずは限定動画をご覧ください。',
        nextOptions: ['限定動画を見る']
    },
    '具体的に何ができますか？': {
        answer: '以下のことが可能になります：\n\n・あなたの強みや価値の分析\n・収益化できるコンセプトの生成\n・発信内容の方向性の明確化\n・商品アイデアの生成\n・販売導線の設計\n\n「何をすればいいか分からない」状態から抜け出すための設計になっています。',
        nextOptions: ['自分に向いていますか？', '購入について知りたい']
    },
    '自分に向いていますか？': {
        answer: '「方向性を明確にして、AIを味方につけて個人で収益を作りたい」と考えている方なら、必ず役に立つはずです。\n\n価値の言語化の構造を知るだけで、景色は一変します。',
        nextOptions: ['価値の構造とは？', '購入方法を見る']
    },
    'どんな人が使っていますか？': {
        answer: '副業を始めたい会社員の方から、自身のサービスを構築したいフリーランスの方、AIを活用して効率化したい方まで、幅広く活用いただいています。',
        nextOptions: ['自分に向いていますか？', '購入について知りたい']
    },
    '購入について知りたい': {
        answer: '一度購入すれば、追加費用なしでずっとお使いいただけます。\n価値の発見から収益化までを一貫して設計された、他にないプロンプトです。',
        nextOptions: ['購入方法を見る', '限定動画を見る']
    },
    '価格を確認する': {
        answer: '料金プランセクションにて、現在の特別価格をご確認いただけます。',
        nextOptions: ['購入方法を見る', '動画を見てから決める']
    },
    'もう少し詳しく知る': {
        answer: '多くの人が収益化できない理由は、能力ではなく「価値の言語化の構造」を知らないことです。\n\nこのプロンプトは、その構造を再現できるよう設計されています。',
        nextOptions: ['購入方法を見る', '限定動画を見る']
    },
};

const FINAL_OPTIONS = ['限定動画を見る', 'プランを見る', '他の質問をする'];
const INITIAL_OPTIONS = ['まだよく分かっていない', '内容は理解している', '購入を検討している', '他の質問がある'];

export const ChatbotPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: 'こんにちは。\n「資産を育てるつむぎ」について、目的に合わせてご案内できます。\n今、どの段階ですか？',
        },
    ]);
    const [currentOptions, setCurrentOptions] = useState<string[]>(INITIAL_OPTIONS);
    const [isTyping, setIsTyping] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(false);
    const [autoPrompted, setAutoPrompted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setHasNewMessage(false);
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [isOpen, messages]);

    // Show initial notification after 3s
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen && !autoPrompted) setHasNewMessage(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, [isOpen, autoPrompted]);

    // 45-second auto-prompt
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!autoPrompted) {
                setAutoPrompted(true);
                if (!isOpen) {
                    setHasNewMessage(true);
                    setIsOpen(true); // Auto open
                }
                setMessages(prev => [
                    ...prev,
                    { role: 'assistant', content: '迷っている方へ\nまずは限定動画で設計思想を確認することをおすすめします。' }
                ]);
                setCurrentOptions(['買い切りを見る', '限定動画を見る']);
            }
        }, 45000);
        return () => clearTimeout(timer);
    }, [autoPrompted, isOpen]);

    const handleOptionClick = (option: string) => {
        // User message
        const userMsg: Message = { role: 'user', content: option };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            let assistantMsg: Message;
            let nextOps: string[] = [];

            switch (option) {
                // ---- STEP 1: Initial Options (A, B, C, D) ----
                case 'まだよく分かっていない':
                    assistantMsg = { role: 'assistant', content: '「資産を育てるつむぎ」は、\n思考を構造的に整理するための専用プロンプトです。\nまずは設計思想を確認しますか？' };
                    nextOps = ['限定動画を見る', '何ができるか知りたい'];
                    break;
                case '内容は理解している':
                    assistantMsg = { role: 'assistant', content: '現在どの段階でしょうか？' };
                    nextOps = ['自分に向いているか知りたい', '価格について知りたい', '購入方法を見る'];
                    break;
                case '購入を検討している':
                    assistantMsg = { role: 'assistant', content: 'ご不安な点はありますか？' };
                    nextOps = ['自分に合うか不安', '高額なので迷っている', '返金や解約について', '今すぐ始めたい'];
                    break;
                case '他の質問がある':
                case '他の質問をする':
                    assistantMsg = { role: 'assistant', content: 'こんにちは。\n「資産を育てるつむぎ」について、目的に合わせてご案内できます。\n今、どの段階ですか？' };
                    nextOps = INITIAL_OPTIONS;
                    break;

                // ---- STEP 2 & 3: Branches ----
                case '自分に向いているか知りたい':
                case '自分に合うか不安':
                    assistantMsg = { role: 'assistant', content: '以下に当てはまりますか？\n・方向性を整理したい\n・AIを活用したい\n・長期視点を持ちたい\n\n当てはまる場合は適しています。\n即効性を求める場合は向いていません。' };
                    nextOps = ['プランを見る', 'もう少し詳しく知る'];
                    break;
                case '高額なので迷っている':
                    assistantMsg = { role: 'assistant', content: '価格は安くありません。\n\nこの商品は、\n短期的な成果ではなく\n長期的な思考基盤への投資を前提としています。' };
                    nextOps = ['買い切りを見る', '限定動画を見る'];
                    break;
                case '返金や解約について':
                    assistantMsg = { role: 'assistant', content: '買い切りはデジタル商品のため原則返金不可となります。ご不明な点があれば事前にお問い合わせください。' };
                    nextOps = ['特商法を見る', 'プランに進む'];
                    break;

                // ---- Direct Actions (Scrolls & Links) ----
                case '限定動画を見る':
                case '何ができるか知りたい':
                case 'もう少し詳しく知る':
                    document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
                    assistantMsg = { role: 'assistant', content: '動画セクションへ表示を移動しました。' };
                    nextOps = FINAL_OPTIONS;
                    break;

                case 'プランを見る':
                case '価格について知りたい':
                case '購入方法を見る':
                case '買い切りを見る':
                case 'プランに進む':
                case '今すぐ始めたい':
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                    assistantMsg = { role: 'assistant', content: '料金プランセクションへ移動しました。' };
                    nextOps = FINAL_OPTIONS;
                    break;

                case '特商法を見る':
                    window.open('/legal', '_blank');
                    assistantMsg = { role: 'assistant', content: '特定商取引法に基づく表記を新しいタブで開きました。' };
                    nextOps = FINAL_OPTIONS;
                    break;

                // FAQ Fallbacks
                default:
                    const data = FAQ_DATA[option];
                    if (data) {
                        assistantMsg = { role: 'assistant', content: data.answer };
                        nextOps = data.nextOptions;
                    } else {
                        assistantMsg = { role: 'assistant', content: 'ご質問ありがとうございます。より詳細な相談が必要な場合は、LINEサポートもご活用ください。' };
                        nextOps = FINAL_OPTIONS;
                    }
            }

            setMessages(prev => [...prev, assistantMsg]);
            setCurrentOptions(nextOps);
            setIsTyping(false);
        }, 800);
    };

    const handleCTA = (action: 'video' | 'buy') => {
        if (action === 'video') {
            document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Floating Button with Label */}
            <div className="fixed bottom-6 right-6 z-[10001] flex flex-col items-end gap-3">
                {/* Notification bubble */}
                {hasNewMessage && !isOpen && (
                    <div
                        className="relative bg-black/80 backdrop-blur-md border border-neon-cyan/40 text-white text-sm px-4 py-2 rounded-2xl rounded-br-sm shadow-lg animate-fade-in"
                        style={{ boxShadow: '0 0 15px rgba(0,255,255,0.2)' }}
                    >
                        <p className="leading-snug">
                            {autoPrompted ? '限定動画はご覧になりましたか？' : '何かご質問はありますか？'}
                        </p>
                        <div className="absolute -bottom-2 right-4 w-3 h-3 bg-black/80 border-r border-b border-neon-cyan/40 rotate-45 translate-y-1" />
                    </div>
                )}

                <div className="flex items-center gap-3">
                    <span className="text-neon-cyan text-xs font-bold tracking-widest bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neon-cyan/30 shadow-[0_0_10px_rgba(0,245,255,0.1)]">
                        つむぎサポート
                    </span>
                    <button
                        onClick={() => {
                            setIsOpen((prev) => !prev);
                            setHasNewMessage(false);
                        }}
                        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, #00f5ff, #bf00ff)',
                            boxShadow: '0 0 20px rgba(0,245,255,0.5), 0 0 40px rgba(191,0,255,0.3)',
                        }}
                    >
                        {isOpen ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                        )}
                        {!isOpen && <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: 'linear-gradient(135deg, #00f5ff, #bf00ff)' }} />}
                        {hasNewMessage && !isOpen && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-black animate-bounce" />}
                    </button>
                </div>
            </div>

            {/* Chat Window */}
            <div
                className={`fixed bottom-24 right-6 z-[10001] w-[340px] sm:w-[400px] transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
                <div
                    className="rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                    style={{
                        background: 'rgba(5, 5, 20, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(0,245,255,0.3)',
                        boxShadow: '0 0 30px rgba(0,245,255,0.15)',
                        maxHeight: '600px',
                    }}
                >
                    {/* Header */}
                    <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ background: 'linear-gradient(90deg, rgba(0,245,255,0.1), rgba(191,0,255,0.1))', borderColor: 'rgba(0,245,255,0.2)' }}>
                        <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-black/40 border border-neon-cyan/40">
                            <Image
                                src="/fabicon.png"
                                alt="つむぎサポート"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">つむぎサポート</p>
                            <p className="text-neon-cyan text-[10px] tracking-widest">ご質問にお答えできます</p>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4" style={{ minHeight: '300px', maxHeight: '350px' }}>
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                <div
                                    className={`max-w-[90%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${msg.role === 'user' ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/30 text-white rounded-br-sm' : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-sm'}`}
                                >
                                    {msg.content}
                                </div>
                                {msg.isCTA && msg.ctaLabel && (
                                    <button
                                        onClick={() => handleCTA(msg.ctaAction!)}
                                        className="mt-3 px-6 py-2.5 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full text-black font-black text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,245,255,0.4)]"
                                    >
                                        {msg.ctaLabel}
                                    </button>
                                )}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex gap-1 items-center p-3 bg-white/5 rounded-2xl w-14">
                                {[0, 1, 2].map(i => <span key={i} className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />)}
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Options Area */}
                    <div className="p-4 bg-white/5 border-t border-white/10">
                        <div className="flex flex-wrap gap-2">
                            {currentOptions.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => handleOptionClick(opt)}
                                    className="px-3 py-2 text-[11px] font-medium rounded-lg bg-black/40 border border-white/10 text-gray-300 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all"
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
