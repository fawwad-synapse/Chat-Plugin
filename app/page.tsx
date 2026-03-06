"use client";

import Chat from "./Chat/page";

export default function Home() {
    return (
        <main className="min-h-screen relative bg-gray-50 flex flex-col items-center justify-center p-6 overflow-hidden font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-100/50 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="z-10 text-center space-y-6 max-w-2xl px-4">
                <h1 className="text-6xl font-black text-gray-900 tracking-tighter sm:text-7xl">
                    CHAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE2C34] to-[#3B82F6]">PLUGIN</span>
                </h1>
                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                    This chat window is now a <span className="font-bold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-[#EE2C34] to-[#3B82F6]">Standalone Plugin</span>.
                    You can copy the code from <span className="bg-gray-200 px-2 py-1 rounded">Chat file</span> and use it anywhere!
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <div className="px-6 py-3 bg-white shadow-xl rounded-2xl border border-gray-100 flex items-center gap-2 group hover:scale-105 transition-all cursor-default">
                        <div className="w-2 h-2 bg-[#EE2C34] rounded-full" />
                        <span className="text-sm font-bold text-gray-800 tracking-tight uppercase">No Props Needed</span>
                    </div>
                    <div className="px-6 py-3 bg-white shadow-xl rounded-2xl border border-gray-100 flex items-center gap-2 group hover:scale-105 transition-all cursor-default">
                        <div className="w-2 h-2 bg-[#3B82F6] rounded-full" />
                        <span className="text-sm font-bold text-gray-800 tracking-tight uppercase">Ready to Use</span>
                    </div>
                </div>
            </div>

            {/* Standalone Chat Bot Plugin */}
            <Chat />
        </main>
    );
}
