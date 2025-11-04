export default function Step4() {
  return (
    <main className="pt-24 md:pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <div className="uppercase tracking-[0.2em] text-xs text-[#434545]/70 mb-3">Step 4</div>
        <h1 className="text-4xl md:text-6xl font-semibold text-[#434545] leading-tight">
          Thank you — watch this quick video
        </h1>
        <p className="text-base md:text-lg text-[#434545]/80 mt-4">
          This short video will help you get the most from our call.
        </p>
        <div className="mt-10 aspect-video rounded-lg shadow-sm border border-[#434545]/10 overflow-hidden">
          <iframe
            title="PB Launch Video"
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
