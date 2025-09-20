export default function Hero() {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/burj-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for dark effect */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>
    </header>
  );
}
