import Script from "next/script";

export default function TalkToUs() {
  return (
    <section
      id="talk-to-us"
      className="py-20 px-4 bg-black border-t border-white/10"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Talk to Us</h2>
        <div className="max-w-3xl mx-auto flex justify-center items-center">
          <Script
            src="https://static.zcal.co/embed/v1/embed.js"
            strategy="lazyOnload"
          />
          <div
            className="zcal-inline-widget rounded-lg"
            style={{
              minWidth: "280px",
              width: "100%",
              maxWidth: "400px",
              height: "700px",
              overflow: "hidden",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              href="https://zcal.co/i/UBmeShzv"
              className="text-white hover:text-gray-200"
            >
              Loading calendar...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}