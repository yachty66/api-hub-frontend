import Script from "next/script";

export default function TalkToUs() {
  return (
    <section
      id="talk-to-us"
      className="py-20 px-4 bg-black border-t border-white/10"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Talk to Us</h2>
        <div className="flex justify-center items-center">
          <Script
            src="https://static.zcal.co/embed/v1/embed.js"
            strategy="lazyOnload"
          />
          <iframe
            src="https://zcal.co/i/UBmeShzv?embed=1&view=month"
            className="w-full"
            style={{
              border: "none",
              height: "800px",
              width: "1000px",
              maxWidth: "100%",
              overflow: "hidden",
            }}
            loading="lazy"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
