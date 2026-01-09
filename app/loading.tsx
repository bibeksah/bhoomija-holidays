export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FAF7F0]">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-[#0B3D91]/20 rounded-full" />
          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-[#0B3D91] rounded-full animate-spin" />
          {/* Inner accent */}
          <div className="absolute inset-2 border-2 border-transparent border-t-[#FF8C00] rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
        </div>

        {/* Text */}
        <p className="text-[#0B3D91] font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
