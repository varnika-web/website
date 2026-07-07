export function InfiniteLoader() {
  return (
    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden relative">
      <div className="absolute top-0 h-full w-2/5 rounded-full bg-blue-500 animate-loader-slide" />
      <style>{`
        @keyframes loader-slide {
          0% { left: -40%; }
          100% { left: 100%; }
        }
        .animate-loader-slide {
          animation: loader-slide 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
