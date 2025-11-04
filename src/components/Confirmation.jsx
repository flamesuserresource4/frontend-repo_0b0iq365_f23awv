export default function Confirmation() {
  return (
    <main className="pt-28 md:pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <div className="uppercase tracking-[0.2em] text-xs text-[#434545]/70 mb-3">Scheduled</div>
        <h1 className="text-4xl md:text-6xl font-semibold text-[#434545] leading-tight">
          Your call is confirmed. Watch this quick video.
        </h1>
        <p className="text-base md:text-lg text-[#434545]/80 mt-4">
          This 2-minute overview will help you prepare and get the most from our conversation.
        </p>
        <div className="mt-10 aspect-video border border-[#434545]/20">
          <iframe
            title="Confirmation Video"
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="mt-8">
          <a href="/" className="text-[#434545] underline underline-offset-4">Back to Home</a>
        </div>
      </div>
    </main>
  );
}
