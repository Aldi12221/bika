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

      {/* 1. HERO SECTION - Padding diperkecil agar lebih rapat ke atas */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 relative z-10">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100">
              <span className="text-blue-600 text-base">📢</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Selamat datang di BIKA</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-blue-950 leading-[1.1] tracking-tight">
              Bangun Masa <br className="hidden lg:block"/> Depanmu Bersama <br />
              <span className="text-red-500">BIKA</span>
            </h1>

            <p className="text-slate-500 text-lg max-w-lg leading-relaxed mx-auto lg:mx-0 font-medium">
              Platform digital siswa SMK untuk menemukan peluang kerja, magang, belajar skill baru, dan konsultasi mentor.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-[20px] font-bold flex items-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95 text-base">
                Mulai Sekarang <FiArrowRight strokeWidth={3} />
              </button>
              <button className="bg-white text-blue-950 px-7 py-4 rounded-[20px] font-bold flex items-center gap-3 hover:bg-slate-50 transition-all border border-slate-200 text-base shadow-sm">
                Pelajari Lebih Lanjut <FiPlayCircle size={22} className="text-blue-600" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative w-full max-w-lg">
            <div className="absolute inset-0 bg-blue-200/20 rounded-full blur-3xl scale-75"></div>
            <img src={siswa} alt="BIKA Students" className="w-full relative z-10 drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 2. FEATURE CARDS - Margin negatif lebih besar agar 'menusuk' ke Hero section */}
      <section className="px-6 lg:px-12 py-8 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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
            icon="💬" color="bg-blue-500" shadow="shadow-blue-100" textColor="text-blue-500"
          />
        </div>
      </section>

      {/* 3. CONTENT GRID - Jarak antar elemen tutorial/job dipersempit */}
      <section className="px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Lowongan */}
          <div className="space-y-6">
            <SectionHeader title="Lowongan Terbaru" icon="💼" />
            <div className="space-y-3">
              <JobItem title="Junior Web Developer" company="Telkom Indonesia" type="Full Time" color="text-blue-600 bg-blue-50" />
              <JobItem title="UI/UX Design Intern" company="Tokopedia" type="Magang" color="text-red-500 bg-red-50" />
            </div>
            <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-[20px] text-blue-600 font-bold hover:bg-blue-50 transition-all text-sm">
              Lihat Semua Lowongan →
            </button>
          </div>

          {/* Tutorial */}
          <div className="space-y-6">
            <SectionHeader title="Tutorial Terbaru" icon="🎓" />
            <div className="space-y-4">
              <TutorialItem title="Membuat Website Portofolio" cat="Web Dev" time="12:45" />
              <TutorialItem title="Belajar Figma Dasar" cat="UI/UX" time="15:30" />
            </div>
          </div>

          {/* Konsultasi / Chat */}
          <div className="space-y-6">
            <SectionHeader title="Konsultasi" icon="💬" isChat />
            <div className="bg-white border border-slate-100 rounded-[32px] shadow-xl flex flex-col h-[380px] overflow-hidden">
              <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-slate-50/20 text-xs">
                 <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 shrink-0"></div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-slate-600 max-w-[80%]">
                       Halo! Ada yang bisa saya bantu hari ini?
                    </div>
                 </div>
                 <div className="flex flex-row-reverse gap-2">
                    <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-white max-w-[80%] shadow-md shadow-blue-50">
                       Saya ingin bertanya tentang CV, Pak.
                    </div>
                 </div>
              </div>
              <div className="p-4 bg-white border-t border-slate-50 flex items-center gap-2">
                <input type="text" placeholder="Ketik pesan..." className="flex-1 text-[13px] outline-none font-medium px-2" />
                <button className="p-2 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-100"><FiSend size={16}/></button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

// Sub-komponen tetap sama, hanya padding internal yang disesuaikan sedikit agar lebih ringkas.
function FeatureCard({ title, desc, icon, color, shadow, textColor }) {
  return (
    <div className="group bg-white p-8 rounded-[36px] border border-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className={`w-12 h-12 ${color} ${shadow} rounded-2xl flex items-center justify-center text-xl mb-6 shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-black text-blue-950 mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{desc}</p>
      <div className={`font-black text-[12px] flex items-center gap-2 ${textColor} uppercase tracking-widest`}>
        Jelajahi <FiArrowRight className="group-hover:translate-x-1 transition-transform"/>
      </div>
    </div>
  );
}

function SectionHeader({ title, icon, isChat }) {
  return (
    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
      <h3 className="font-black text-xl text-blue-950 flex items-center gap-2 tracking-tight">
        <span className="text-blue-600">{icon}</span> {title}
      </h3>
      {isChat ? (
        <div className="flex items-center gap-2 bg-green-50 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">Online</span>
        </div>
      ) : (
        <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Lihat Semua</button>
      )}
    </div>
  );
}

function JobItem({ title, company, type, color }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-[24px] border border-slate-50 hover:shadow-md transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-lg">🏢</div>
        <div>
          <h4 className="text-[13px] font-black text-blue-950 mb-0.5 leading-tight">{title}</h4>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{company}</p>
        </div>
      </div>
      <span className={`text-[9px] font-black px-2 py-1 rounded-lg ${color} uppercase tracking-tighter`}>{type}</span>
    </div>
  );
}

function TutorialItem({ title, cat, time }) {
  return (
    <div className="flex gap-4 items-center group cursor-pointer">
      <div className="relative w-20 h-16 bg-slate-200 rounded-[16px] overflow-hidden shrink-0 shadow-sm">
        <img src={`https://picsum.photos/seed/${title}/150/100`} alt="thumb" className="w-full h-full object-cover" />
        <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[8px] px-1.5 py-0.5 rounded-md font-black">{time}</span>
      </div>
      <div className="space-y-1">
        <h4 className="text-[13px] font-black text-blue-950 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">{title}</h4>
        <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{cat}</p>
      </div>
    </div>
  );
}