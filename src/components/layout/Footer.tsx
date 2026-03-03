import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-bg-dark py-20 border-t border-white/5 relative overflow-hidden">
            <div className="container-premium">

                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="text-[10px] text-text-dim/40 font-mono tracking-widest uppercase text-center">
                        © 2026 つむぎ部屋
                    </div>
                    <div className="text-[10px] text-text-dim/40 font-mono tracking-widest uppercase text-center hover:text-neon-cyan transition-colors">
                        <a href="/legal">特定商取引法に基づく表記</a>
                    </div>
                </div>
            </div>

            {/* Ambient Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-neon-cyan/20 blur-md"></div>
        </footer>
    );
};
