export default function Footer(){
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(99,102,241,.25),transparent_60%)] pointer-events-none"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-8">
          <div className="grid md:grid-cols-3 gap-6 text-white/70">
            <div>
              <h3 className="text-white font-semibold mb-2">Aurora AI Tools</h3>
              <p className="text-sm">Premium tools for creators and teams. Build faster with the power of AI.</p>
            </div>
            <div className="text-sm space-y-1">
              <p>Privacy</p>
              <p>Terms</p>
              <p>Security</p>
            </div>
            <div className="text-sm space-y-1">
              <p>Twitter</p>
              <p>GitHub</p>
              <p>Support</p>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Aurora Labs. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
