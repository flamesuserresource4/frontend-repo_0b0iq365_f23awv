export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#434545]/10 py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm text-[#434545]/70">
          <span className="font-semibold text-[#434545]">PBL</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="text-xs text-[#434545]/60">
          Minimal, high-conversion design system — clarity first.
        </div>
      </div>
    </footer>
  );
}
