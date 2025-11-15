import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative min-h-[92vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_60%_0%,rgba(56,189,248,.25),transparent_60%),radial-gradient(60%_50%_at_10%_30%,rgba(99,102,241,.35),transparent_60%),radial-gradient(60%_50%_at_90%_80%,rgba(168,85,247,.25),transparent_60%)]"/>
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/30 to-cyan-400/40 blur-3xl opacity-60 pointer-events-none"/>
        <div className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-3xl opacity-60 pointer-events-none"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:.7}}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-xl mb-6">
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"/>
              <span className="text-xs text-white/80">New: Aurora 2.0 – Faster, Smarter, Prettier</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Build, Explore & Use the Future of AI Tools
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              One platform. Unlimited AI creation. Craft content, images, code, audio and video with premium-grade tools powered by cutting-edge models.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link to="/signup" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white font-semibold shadow-[0_10px_40px_rgba(99,102,241,.35)] hover:opacity-95 transition flex items-center gap-2">
                Start Free
                <ArrowRight className="h-4 w-4"/>
              </Link>
              <Link to="/tools" className="px-6 py-3 rounded-xl bg-white/10 text-white backdrop-blur-xl ring-1 ring-white/20 hover:bg-white/15 transition">View Tools</Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {[
                ['200k+','creators'],
                ['99.9%','uptime'],
                ['50+','AI tools']
              ].map(([k,v])=> (
                <div key={k} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur-xl">
                  <div className="text-2xl font-bold">{k}</div>
                  <div className="text-white/60 text-sm">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:.9, delay:.1}}
            className="h-[520px] lg:h-[640px] relative rounded-3xl overflow-hidden ring-1 ring-white/10 bg-black/30 backdrop-blur-xl"
          >
            <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
