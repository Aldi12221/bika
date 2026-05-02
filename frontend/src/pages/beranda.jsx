import React from 'react';
import siswa from '../assets/siswa.png';
import { 
  FiArrowRight, 
  FiPlayCircle, 
  FiBookmark, 
  FiPlay, 
  FiSend, 
  FiSmile 
} from 'react-icons/fi';

export default function Beranda() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      {/* --- BACKGROUND ORNAMENTS --- */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-red-50/50 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-100">
              <span className="text-blue-600 animate-pulse text-lg">📢</span>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Selamat datang di BIKA</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-blue-950 leading-[1.05] tracking-tight">
              Bangun Masa <br className="hidden lg:block"/> Depanmu Bersama <br />
              <span className="text-red-500 relative">
                BIKA
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" stroke="#EF4444" strokeWidth="2" fill="none" opacity="0.3"/></svg>
              </span>
            </h1>

            <p className="text-slate-500 text-xl max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
              Platform digital siswa SMK untuk menemukan peluang kerja, magang, belajar skill baru, dan konsultasi mentor.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <button className="bg-blue-600 text-white px-10 py-5 rounded-[22px] font-bold flex items-center gap-3 hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 active:scale-95 text-lg">
                Mulai Sekarang <FiArrowRight strokeWidth={3} />
              </button>
              <button className="bg-white text-blue-950 px-8 py-5 rounded-[22px] font-bold flex items-center gap-3 hover:bg-slate-50 transition-all border border-slate-200 text-lg shadow-sm">
                Pelajari Lebih Lanjut <FiPlayCircle size={24} className="text-blue-600" />
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-5 pt-6 border-t border-slate-100 max-w-sm mx-auto lg:mx-0">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="user" />
                ))}
              </div>
              <div className="text-left leading-tight">
                <p className="font-black text-blue-950 text-lg">10.000+</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Siswa SMK Bergabung</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative w-full group">
            <div className="absolute inset-0 bg-blue-200/20 rounded-full blur-3xl scale-75 group-hover:scale-90 transition-transform duration-700"></div>
            {/* Floating Badges */}
            <div className="absolute -top-4 -left-4 bg-white p-5 rounded-[24px] shadow-2xl z-20 animate-bounce transition-all">💼</div>
            <div className="absolute bottom-10 -left-8 bg-white p-5 rounded-[24px] shadow-2xl z-20 animate-pulse">▶️</div>
            <div className="absolute top-1/4 -right-4 bg-red-500 p-5 rounded-[24px] shadow-2xl text-white z-20 animate-bounce [animation-delay:1s]">💬</div>
            
            <img src={siswa} alt="BIKA Students" className="w-full relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]" />
          </div>
        </div>
      </section>

      {/* 2. FEATURE CARDS */}
      <section className="px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard 
            title="Masa Depan" 
            desc="Temukan lowongan kerja, magang, dan peluang usaha terbaik untukmu." 
            icon="💼" color="bg-blue-600" shadow="shadow-blue-100" textColor="text-blue-600"
          />
          <FeatureCard 
            title="Tutorial" 
            desc="Belajar berbagai skill melalui video tutorial yang mudah dipahami." 
            icon="▶️" color="bg-red-500" shadow="shadow-red-100" textColor="text-red-500"
          />
          <FeatureCard 
            title="Konsultasi" 
            desc="Tanya jawab langsung dengan guru atau mentor berpengalaman." 
            icon="💬" color="bg-blue-500" shadow="shadow-blue-200" textColor="text-blue-500"
          />
        </div>
      </section>

      {/* 3. CONTENT GRID */}
      <section className="px-6 lg:px-12 py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Lowongan */}
          <div className="space-y-8">
            <SectionHeader title="Lowongan Terbaru" icon="💼" />
            <div className="space-y-4">
              <JobItem title="Junior Web Developer" company="Telkom Indonesia" type="Full Time" color="text-blue-600 bg-blue-50" />
              <JobItem title="UI/UX Design Intern" company="Tokopedia" type="Magang" color="text-red-500 bg-red-50" />
              <JobItem title="Customer Support" company="DANA Indonesia" type="Full Time" color="text-blue-600 bg-blue-50" />
            </div>
            <button className="w-full py-5 border-2 border-dashed border-slate-200 rounded-[24px] text-blue-600 font-black hover:bg-blue-50 hover:border-blue-200 transition-all">
              Lihat Semua Lowongan →
            </button>
          </div>

          {/* Tutorial */}
          <div className="space-y-8">
            <SectionHeader title="Tutorial Terbaru" icon="🎓" />
            <div className="space-y-6">
              <TutorialItem title="Membuat Website Portofolio" cat="Web Dev" time="12:45" />
              <TutorialItem title="Belajar Figma Dasar" cat="UI/UX" time="15:30" />
              <TutorialItem title="Microsoft Excel Dasar" cat="Produktivitas" time="10:20" />
            </div>
          </div>

          {/* Konsultasi / Chat */}
          <div className="space-y-8">
            <SectionHeader title="Konsultasi" icon="💬" isChat />
            <div className="bg-white border border-slate-100 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col h-[450px] overflow-hidden">
              <div className="flex-1 p-8 space-y-6 overflow-y-auto bg-slate-50/20">
                <div className="flex gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-100 shrink-0"></div>
                   <div className="bg-white p-4 rounded-3xl rounded-tl-none shadow-sm text-sm text-slate-600 max-w-[85%] leading-relaxed">
                      Halo! Ada yang bisa saya bantu hari ini?
                   </div>
                </div>
                <div className="flex flex-row-reverse gap-3">
                   <div className="bg-blue-600 p-4 rounded-3xl rounded-tr-none text-white text-sm max-w-[85%] shadow-lg shadow-blue-100 leading-relaxed">
                      Saya ingin bertanya tentang cara membuat CV yang baik, Pak.
                   </div>
                </div>
              </div>
              <div className="p-5 bg-white border-t border-slate-50 flex items-center gap-3">
                <button className="p-2 text-slate-400 hover:text-blue-600"><FiSmile size={20} /></button>
                <input type="text" placeholder="Ketik pesan..." className="flex-1 text-sm outline-none font-medium" />
                <button className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-100"><FiSend size={18}/></button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

// --- SUB-COMPONENTS DENGAN STYLING YANG DIPERHALUS ---

function FeatureCard({ title, desc, icon, color, shadow, textColor }) {
  return (
    <div className="group bg-white p-12 rounded-[48px] border border-slate-50 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500 cursor-pointer">
      <div className={`w-16 h-16 ${color} ${shadow} rounded-[24px] flex items-center justify-center text-2xl mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
        {icon}
      </div>
      <h3 className="text-2xl font-black text-blue-950 mb-4">{title}</h3>
      <p className="text-slate-500 text-[15px] leading-relaxed mb-8 font-medium">{desc}</p>
      <div className={`font-black text-sm flex items-center gap-2 ${textColor} uppercase tracking-widest`}>
        Jelajahi <FiArrowRight className="group-hover:translate-x-2 transition-transform"/>
      </div>
    </div>
  );
}

function SectionHeader({ title, icon, isChat }) {
  return (
    <div className="flex justify-between items-end pb-2">
      <div className="space-y-1">
        <p className="text-blue-600 text-2xl">{icon}</p>
        <h3 className="font-black text-2xl text-blue-950 tracking-tight">{title}</h3>
      </div>
      {isChat ? (
        <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full mb-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Online</span>
        </div>
      ) : (
        <button className="text-xs font-black text-blue-600 uppercase tracking-widest pb-1 border-b-2 border-blue-100 hover:border-blue-600 transition-all">Lihat Semua</button>
      )}
    </div>
  );
}

function JobItem({ title, company, type, color }) {
  return (
    <div className="flex items-center justify-between p-5 bg-white rounded-[28px] border border-slate-50 hover:shadow-xl hover:border-white transition-all cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏢</div>
        <div>
          <h4 className="text-sm font-black text-blue-950 mb-1">{title}</h4>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">{company}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <span className={`text-[10px] font-black px-3 py-1.5 rounded-xl ${color} uppercase tracking-tighter shadow-sm`}>{type}</span>
        <FiBookmark className="text-slate-200 group-hover:text-blue-600 transition-colors" size={18} />
      </div>
    </div>
  );
}

function TutorialItem({ title, cat, time }) {
  return (
    <div className="flex gap-5 items-center group cursor-pointer p-2 rounded-3xl hover:bg-slate-50 transition-all">
      <div className="relative w-28 h-20 bg-slate-200 rounded-[20px] overflow-hidden shrink-0 shadow-sm">
        <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"><FiPlay className="text-white fill-white" size={24} /></div>
        <img src={`https://picsum.photos/seed/${title}/200/150`} alt="thumb" className="w-full h-full object-cover" />
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded-lg font-black backdrop-blur-sm z-20">{time}</span>
      </div>
      <div className="space-y-2">
        <h4 className="text-[15px] font-black text-blue-950 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">{title}</h4>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest">{cat}</p>
        </div>
      </div>
    </div>
  );
}