/**
 * DAIDANU Demo Bar & Universal Simulator
 * Menyediakan floating navigation bar untuk dosen penguji, pembimbing, dan pengguna
 * agar dapat beralih peran (Tamu -> Jamaah -> Kiai -> Admin) dalam 1 klik.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Current page filename
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    const barHtml = `
    <div id="demo-role-bar" class="no-print bg-slate-900/95 backdrop-blur text-white px-4 py-2.5 rounded-full shadow-2xl border border-slate-700/80 flex items-center gap-3 text-xs">
        <div class="flex items-center gap-2 border-r border-slate-700 pr-3">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="font-bold text-emerald-400 tracking-wider">DAIDANU PROTOTYPE</span>
        </div>

        <div class="flex items-center gap-1.5 overflow-x-auto">
            <a href="index.html" class="px-2.5 py-1 rounded-md transition ${pageName === 'index.html' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'}">
                🌐 Publik
            </a>
            <a href="kiai-directory.html" class="px-2.5 py-1 rounded-md transition ${pageName === 'kiai-directory.html' || pageName === 'kiai-detail.html' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'}">
                👳 Direktori Dai
            </a>
            <div class="h-4 w-px bg-slate-700"></div>
            <a href="jamaah-konsultasi.html" class="px-2.5 py-1 rounded-md transition ${pageName === 'jamaah-konsultasi.html' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'}">
                💬 Jamaah (Konsul)
            </a>
            <a href="jamaah-ngaturi.html" class="px-2.5 py-1 rounded-md transition ${pageName === 'jamaah-ngaturi.html' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'}">
                🤝 Jamaah (Ngaturi O2O)
            </a>
            <div class="h-4 w-px bg-slate-700"></div>
            <a href="kiai-dashboard.html" class="px-2.5 py-1 rounded-md transition ${pageName === 'kiai-dashboard.html' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'}">
                🕌 Portal Kiai
            </a>
            <div class="h-4 w-px bg-slate-700"></div>
            <a href="admin-dashboard.html" class="px-2.5 py-1 rounded-md transition ${pageName === 'admin-dashboard.html' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'}">
                ⚙️ Admin LDNU
            </a>
        </div>

        <div class="border-l border-slate-700 pl-3 flex items-center gap-2">
            <button onclick="if(confirm('Reset semua data simulasi ke awal?')) { DataStore.resetToDefault(); location.reload(); }" 
                    title="Reset simulasi data ke awal"
                    class="text-slate-400 hover:text-amber-400 transition p-1">
                🔄 Reset Data
            </button>
        </div>
    </div>
    `;

    const container = document.createElement('div');
    container.innerHTML = barHtml;
    document.body.appendChild(container.firstElementChild);

    // Inisialisasi ikon Lucide jika library dimuat
    if (window.lucide) {
        lucide.createIcons();
    }
});
