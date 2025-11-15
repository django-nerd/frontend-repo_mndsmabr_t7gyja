import { Link, NavLink } from 'react-router-dom'
import { Menu, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({isActive})=>`px-4 py-2 rounded-xl transition-colors ${isActive? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
      onClick={()=>setOpen(false)}
    >{label}</NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-400 via-fuchsia-500 to-cyan-400 flex items-center justify-center ring-1 ring-white/20 shadow-[0_0_40px_0_rgba(168,85,247,.45)]">
                <Sparkles className="h-5 w-5 text-white"/>
              </div>
              <span className="text-white font-semibold tracking-tight">Aurora AI Tools</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItem('/tools', 'Tools')}
              {navItem('/pricing', 'Pricing')}
              {navItem('/login', 'Login')}
              <Link to="/signup" className="ml-2 inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white font-medium shadow-[0_10px_30px_rgba(59,130,246,.25)] hover:opacity-95 transition">
                Start Free
              </Link>
            </nav>

            <button onClick={()=>setOpen(!open)} className="md:hidden text-white/90 p-2 rounded-xl hover:bg-white/10">
              <Menu/>
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
              {navItem('/tools', 'Tools')}
              {navItem('/pricing', 'Pricing')}
              {navItem('/login', 'Login')}
              <Link to="/signup" className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white font-medium">
                Start Free
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
