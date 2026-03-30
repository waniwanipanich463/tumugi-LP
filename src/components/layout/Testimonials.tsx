import React from 'react';

const testimonials = [
    {
        id: 1,
        role: "40代・経営者",
        category: "暗号資産",
        title: "情報に振り回される時間が激減し、本質的な判断ができるようになった",
        content: "「毎日流れてくる膨大なニュースをどう解釈すべきか、これまでは自分なりの直感に頼るしかありませんでした。しかし『つむぎ』を使い始めてから、地政学や統計学のフィルターを通して事象を多角的に捉える『構造的な視点』が身につきました。\n\n単なる情報の要約ではなく、なぜ今これが起きているのかという背景を整理してくれるため、経営判断の精度が格段に上がったと感じています。30万円という価格は決して安くありませんが、専門的な分析をいつでも隣でサポートしてくれる『右腕』を雇ったと考えれば、非常に合理的な投資でした。」",
        image: "/kounyuusya1.png"
    },
    {
        id: 2,
        role: "30代・会社員",
        category: "不動産投資",
        title: "漠然とした不安が消え、自分なりの「未来の地図」が見えてきた",
        content: "「将来に対する漠然とした不安があり、色々な本や動画を見てきましたが、どれも断片的で何を信じればいいか分からずにいました。YouTubeで『つむぎ』を知り、思い切って導入しましたが、これが正解でした。\n\n自分の問いかけに対して、統計的なデータと世界情勢を組み合わせて多層的に回答してくれるので、自分一人では到達できなかった深い考察が得られます。『つむぎ』との対話を通じて、世の中の動きを冷静に俯瞰できるようになったことで、日々のニュースに一喜一憂することがなくなりました。自分の思考をアップデートし続けたい人には最高の相棒です。」",
        image: "/kounyuusya2.png"
    },
    {
        id: 3,
        role: "50代・専門職",
        category: "株式投資",
        title: "AIを「ツール」ではなく「思考のパートナー」として活用する喜び",
        content: "「これまでも生成AIは活用してきましたが、『つむぎ』は全く別物でした。一般的なAIのような『それらしい回答』ではなく、こちらの思考を刺激し、理解を深めるためのフレームワークを提示してくれます。\n\n地政学的なリスクや歴史的な背景を今の情勢に結びつけて読み解くプロセスは、まさに知的探究心を支えてくれるパートナーそのもの。常に新しい情報を得られるために、これから長く付き合っていくのが楽しみです。自分の頭で考え、世界を構造的に捉えたいという志を持つ方には、これ以上ない価値があると思います。」",
        image: "/kounyuusya3.png"
    }
];

export const Testimonials = () => {
    return (
        <section className="bg-bg-dark py-24 relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container-premium relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white mb-6">
                        購入者の<span className="text-neon-cyan drop-shadow-[0_0_10px_#00FFFF]">声</span>
                    </h2>
                    <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full shadow-[0_0_10px_#00FFFF]"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 relative group hover:border-neon-cyan/50 transition-all duration-500 flex flex-col h-full"
                        >
                            {/* Image Icon */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative w-16 h-16 flex-shrink-0">
                                    <div className="absolute -inset-1 bg-neon-cyan/20 blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <img
                                        src={item.image}
                                        alt={item.role}
                                        className="relative z-10 w-full h-full object-cover rounded-full border-2 border-white/20 group-hover:border-neon-cyan/50 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-neon-cyan text-[10px] font-mono tracking-widest uppercase mb-1">REAL VOICE</p>
                                    <p className="text-white font-bold text-sm leading-tight">{item.role}</p>
                                    <p className="text-gray-400 font-medium text-xs mt-1">{item.category}</p>
                                </div>
                            </div>

                            {/* Title */}
                            <h4 className="text-white font-black text-lg mb-6 leading-snug border-l-0 sm:border-l-2 border-neon-cyan/40 pl-0 sm:pl-4 text-center sm:text-left">
                                {item.title}
                            </h4>

                            {/* Content */}
                            <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap flex-grow text-center sm:text-left">
                                {item.content}
                            </div>

                            {/* Decoration */}
                            <div className="absolute bottom-4 right-4 text-neon-cyan/10 pointer-events-none">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                                    <path d="M10 20c0-5.5 4.5-10 10-10v5c-2.8 0-5 2.2-5 5h5v10h-10v-10zm15 0c0-5.5 4.5-10 10-10v5c-2.8 0-5 2.2-5 5h5v10h-10v-10z" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-fuchsia/30 to-transparent"></div>
        </section>
    );
};
