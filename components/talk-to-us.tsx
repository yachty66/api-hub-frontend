import Script from "next/script";

export default function TalkToUs() {
  return (
    <section className="py-20 px-4 bg-black border-t border-white/10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Talk to Us</h2>
        <div className="max-w-3xl mx-auto">
          <Script
            src="https://static.zcal.co/embed/v1/embed.js"
            strategy="lazyOnload"
          />
          <div className="zcal-inline-widget">
            <a href="https://zcal.co/i/UBmeShzv">
              15 minute call - Schedule a meeting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}