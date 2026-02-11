export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-black/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
        <span className="font-bold tracking-tighter text-xl">[ W ]</span>
        <div className="flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}