import React from "react";

const MoneyAnimation = () => {
  return (
    <div className="relative w-32 h-32 flex-shrink-0 hidden sm:block">
      {/* Wallet */}
      <svg viewBox="0 0 80 80" className="w-full h-full">
        {/* Wallet body */}
        <rect x="15" y="35" width="50" height="30" rx="4" fill="#1c1917" stroke="#292524" strokeWidth="1.5" />
        {/* Wallet flap */}
        <path d="M15 40 Q15 35 20 35 L60 35 Q65 35 65 40" fill="#292524" stroke="#44403c" strokeWidth="1" />
        {/* Wallet clasp */}
        <circle cx="62" cy="50" r="3" fill="#a8a29e" />
        <rect x="58" y="47" width="8" height="6" rx="1" fill="#d6d3d1" />

        {/* Coin 1 */}
        <circle className="coin coin-1" cx="30" cy="15" r="6" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
        <text className="coin-text coin-text-1" x="30" y="18" textAnchor="middle" fontSize="7" fill="#713f12" fontWeight="bold">$</text>

        {/* Coin 2 */}
        <circle className="coin coin-2" cx="45" cy="10" r="5" fill="#facc15" stroke="#eab308" strokeWidth="1" />
        <text className="coin-text coin-text-2" x="45" y="13" textAnchor="middle" fontSize="6" fill="#713f12" fontWeight="bold">$</text>

        {/* Coin 3 */}
        <circle className="coin coin-3" cx="37" cy="18" r="4" fill="#fde047" stroke="#facc15" strokeWidth="1" />
        <text className="coin-text coin-text-3" x="37" y="20.5" textAnchor="middle" fontSize="5" fill="#713f12" fontWeight="bold">$</text>
      </svg>

      <style jsx>{`
        .coin {
          animation: coinDrop 2s ease-in infinite;
        }
        .coin-1 { animation-delay: 0s; }
        .coin-2 { animation-delay: 0.5s; }
        .coin-3 { animation-delay: 1s; }

        .coin-text {
          animation: coinDrop 2s ease-in infinite;
          pointer-events: none;
        }
        .coin-text-1 { animation-delay: 0s; }
        .coin-text-2 { animation-delay: 0.5s; }
        .coin-text-3 { animation-delay: 1s; }

        @keyframes coinDrop {
          0% {
            transform: translateY(-8px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(22px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MoneyAnimation;
