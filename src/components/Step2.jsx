export default function Step2() {
  return (
    <main className="pt-24 md:pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center">
          <div className="uppercase tracking-[0.2em] text-xs text-[#434545]/70 mb-3">Step 2</div>
          <h1 className="text-4xl md:text-6xl font-semibold text-[#434545] leading-tight">
            Your booking is confirmed
          </h1>
          <p className="text-base md:text-lg text-[#434545]/80 mt-4">
            Please check your email for the calendar invite and next steps.
          </p>
        </div>

        <div className="mt-10 p-6 rounded-lg shadow-sm border border-[#434545]/10 bg-white">
          <h2 className="text-xl font-semibold text-[#434545]">What happens next</h2>
          <ul className="mt-4 space-y-2 text-[#434545]/80 text-sm leading-6">
            <li>• Add the event to your calendar.</li>
            <li>• Prepare any links or examples you want to share.</li>
            <li>• Join the call a few minutes early to test audio/video.</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a href="/step-4" className="inline-flex items-center justify-center rounded-[30px] shadow-md bg-[#CCFF00] text-[#434545] px-8 py-3 font-medium hover:brightness-95 transition">
            Continue
          </a>
        </div>
      </div>
    </main>
  );
}
