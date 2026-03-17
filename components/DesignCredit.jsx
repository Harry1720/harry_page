import { Heart } from "lucide-react";

const DesignCredit = () => {
  return (
    <>
      <div className="hidden lg:block fixed left-3 bottom-6 z-30 pointer-events-none">
        <p
          className="text-white/70 uppercase tracking-[0.1em] text-[11px] font-medium border border-white/15 rounded-full px-4 py-2 bg-black/20 backdrop-blur-sm flex items-center justify-center gap-1"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Made by Harry Dev & AI Tools with 
            <Heart size={16} className="text-white/70 fill-white/70" style={{transform:"rotate(90deg)"}} />
        </p>
      </div>

      <div className="lg:hidden pt-4 border-t border-white/25 text-center">
        <p className="text-[12px] uppercase tracking-[0.18em] text-white/80 flex items-center justify-center gap-1">
          Made by Harry Dev & AI Tools with 
            <Heart size={16} className="text-white/80 fill-white/80" />
        </p>
      </div>
    </>
  );
};

export default DesignCredit;
