import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-bg-dark py-20 border-t border-white/5 relative overflow-hidden">
            <div className="container-premium">

                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="text-[10px] text-text-dim/40 font-mono tracking-widest uppercase text-center">
                        Copyright © 2026 つむぎ. All Rights Reserved.
                    </div>
                </div>
            </div>

            {/* Ambient Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-neon-cyan/20 blur-md"></div>
        </footer>
    );
};
