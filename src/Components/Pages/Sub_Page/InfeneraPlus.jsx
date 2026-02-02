import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Activity, Zap, Microscope, 
  Target, Globe, Brain, HeartPulse, 
  Award, Clock, PhoneCall, ChevronRight,
  Fingerprint, Sparkles, BarChart3
} from "lucide-react";

const InfeneraPlus = () => {
  return (
    <div className="min-h-screen  relative top-10 md:top-16 bg-[#050505] text-zinc-400 font-sans p-4 md:p-8">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 relative z-10">
        
        {/* --- SECTION 1: THE COMMAND HEADER (COL 12) --- */}
        <div className="lg:col-span-12 bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] backdrop-blur-3xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-black shadow-lg shadow-amber-500/20">
              <Activity size={24} strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tighter uppercase italic leading-none">
                Infenera<span className="text-amber-500">Plus</span>
              </h1>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] mt-1">Medical Sovereignty Node</p>
            </div>
          </div>
          
          <div className="flex gap-8 items-center border-l border-white/10 pl-8">
            <div className="text-right">
              <p className="text-[9px] font-black text-amber-500 uppercase tracking-widest">Emergency Dispatch</p>
              <p className="text-lg font-black text-white">+91 33 2400 5000</p>
            </div>
            <button className="bg-white text-black px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-amber-500 transition-all shadow-xl shadow-white/5">
              Secure Appointment
            </button>
          </div>
        </div>

        {/* --- SECTION 2: HERO BRAIN (COL 8) --- */}
        <div className="lg:col-span-8 bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-12 md:p-16 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
            <Brain size={280} strokeWidth={0.5} className="text-amber-500" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-amber-500 mb-8">
              <Sparkles size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">Advancing Human Performance</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase italic mb-10">
              The Gold <br /> Standard of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Precision.</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl font-medium leading-relaxed mb-12">
              InfeneraPlus operates at the frontier of regenerative medicine and autonomous surgery. Our institutional protocols are engineered for 100% diagnostic accuracy.
            </p>
            <div className="flex gap-4">
              <div className="bg-zinc-800/50 px-6 py-4 rounded-2xl border border-white/5">
                <p className="text-2xl font-black text-white">450+</p>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Elite Surgeons</p>
              </div>
              <div className="bg-zinc-800/50 px-6 py-4 rounded-2xl border border-white/5">
                <p className="text-2xl font-black text-white">128</p>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Global Patents</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: THE HIGH-VAL ADVERT (COL 4) --- */}
        <div className="lg:col-span-4 bg-amber-500 p-1 rounded-[3rem] shadow-2xl shadow-amber-500/10 transition-transform hover:scale-[1.01]">
          <div className="bg-[#080808] h-full rounded-[2.8rem] p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full" />
            
            <div className="relative z-10">
              <div className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-1 rounded-full w-fit text-[9px] font-black tracking-widest uppercase mb-6">
                Institutional Offer
              </div>
              <h3 className="text-3xl font-black text-white italic leading-tight uppercase mb-4">Executive <br /> Bio-Mapping</h3>
              <p className="text-zinc-500 text-sm font-bold mb-8 uppercase tracking-tighter">Complete 256-parameter diagnostic including MRI, DNA, and Stress Analytics.</p>
              
              <ul className="space-y-3 mb-12">
                {["Priority 1-Hour Admission", "Luxury Private Suite", "Global Specialist Sync"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-bold text-zinc-300 uppercase">
                    <ShieldCheck size={14} className="text-amber-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-white italic">$1,499</span>
                <span className="text-zinc-700 text-sm line-through font-bold">$3,200</span>
              </div>
              <button className="w-full bg-amber-500 text-black py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase hover:bg-white transition-all">
                Reserve Protocol
              </button>
            </div>
          </div>
        </div>

        {/* --- SECTION 4: DEPARTMENTAL MATRIX (COL 12) --- */}
        <div className="lg:col-span-12 py-10">
          <div className="flex justify-between items-end mb-8 px-4">
            <div>
              <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] mb-2">Clinical Units</h4>
              <p className="text-2xl font-black text-white italic uppercase">Centers of Absolute Distinction</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-600">
               <span className="text-[10px] font-bold uppercase">Grid Status: Operational</span>
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: "Neuro-Trauma", icon: <Brain />, stats: "Sub-4ms Response", tag: "Alpha" },
              { name: "Cardiac Surgery", icon: <HeartPulse />, stats: "Robotic Precision", tag: "Beta" },
              { name: "Onco-Genetics", icon: <Microscope />, stats: "Cellular Repair", tag: "Gamma" },
              { name: "Bio-Diagnostics", icon: <Target />, stats: "Zero-Error Logic", tag: "Delta" }
            ].map((dept, i) => (
              <div key={i} className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] hover:border-amber-500/40 transition-all group">
                <div className="text-zinc-700 group-hover:text-amber-500 transition-colors mb-6">
                  {React.cloneElement(dept.icon, { size: 32, strokeWidth: 1.5 })}
                </div>
                <h5 className="text-lg font-black text-white uppercase italic mb-1">{dept.name}</h5>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">{dept.stats}</p>
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
                   <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">Unit {dept.tag}</span>
                   <ChevronRight size={16} className="text-zinc-800 group-hover:text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 5: THE MEMBERSHIP VAULT (COL 12) --- */}
        <div className="lg:col-span-12 bg-white/5 border border-white/10 rounded-[3rem] p-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          
          <div className="max-w-2xl text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start text-amber-500 mb-6">
              <Fingerprint size={24} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Black Tier</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
              Exclusive <span className="text-zinc-600">Bio-Security</span> Membership
            </h2>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest leading-loose">
              Join the elite circle for autonomous health monitoring, private medical jet access, and a lifetime biological data vault. Only 500 licenses issued annually.
            </p>
          </div>

          <div className="bg-black/40 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl text-center min-w-[300px]">
             <BarChart3 className="mx-auto text-amber-500 mb-4" />
             <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">Annual Licensing</p>
             <p className="text-6xl font-black text-white italic mb-8">$12,000</p>
             <button className="w-full bg-white text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-amber-500 transition-all">
               Apply for Clearance
             </button>
          </div>
        </div>

      </div>

      {/* COPYRIGHT STAMP (INSTEAD OF FOOTER) */}
      <div className="max-w-[1400px] mx-auto mt-12 mb-8 flex justify-between items-center px-4 text-[9px] font-black text-zinc-800 uppercase tracking-[0.6em]">
        <p>© 2026 INFENERA PLUS GLOBAL MEDICAL AUTHORITY</p>
        <p>ENCRYPTION: AES-256 ACTIVE</p>
      </div>

    </div>
  );
};

export default InfeneraPlus;