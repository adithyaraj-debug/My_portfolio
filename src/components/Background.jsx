export default function Background() {
  return (
    <div className="site-bg" aria-hidden="true">
      {/* High-Tech Cyber Grid */}
      <div className="site-bg__grid" />

      {/* Cosmic Purple & Indigo Gradient Auras from Reference Design */}
      <div className="site-bg__top-gradient" />
      <div className="site-bg__glow site-bg__glow--purple-hero" />
      <div className="site-bg__glow site-bg__glow--cyan" />
      <div className="site-bg__glow site-bg__glow--magenta" />
      <div className="site-bg__glow site-bg__glow--emerald" />

      {/* Ambient Moving Beam Streaks */}
      <div className="site-bg__laser-beam site-bg__laser-beam--1" />
      <div className="site-bg__laser-beam site-bg__laser-beam--2" />

      {/* High-Tech Scanline Texture */}
      <div className="site-bg__scanlines" />
    </div>
  );
}
