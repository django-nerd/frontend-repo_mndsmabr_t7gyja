import { motion } from 'framer-motion'
import { Sparkles, Wand2, Image as ImageIcon, Code2, Mic, Video, ShieldCheck, Zap, Stars } from 'lucide-react'

export function Features(){
  const items = [
    {icon: <Wand2/>, title:'AI Writer', desc:'Blogs, emails and marketing copy in seconds.'},
    {icon: <ImageIcon/>, title:'Image Generator', desc:'Crystal-clear, high-res art and assets.'},
    {icon: <Code2/>, title:'Code Helper', desc:'Accelerate development with AI pair programming.'},
    {icon: <Mic/>, title:'Audio Transcriber', desc:'Accurate transcripts with speaker labels.'},
    {icon: <Video/>, title:'Video Enhancer', desc:'Upscale, denoise and color-grade with AI.'},
    {icon: <ShieldCheck/>, title:'Enterprise-grade', desc:'Security, SSO and audit logs included.'},
  ]
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_10%_0%,rgba(56,189,248,.2),transparent_60%),radial-gradient(40%_40%_at_90%_0%,rgba(168,85,247,.15),transparent_60%)] pointer-events-none"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-bold text-white text-center">Everything you need to create</motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i)=> (
            <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="group rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 backdrop-blur-xl text-white">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center ring-1 ring-white/20 text-white shadow-[0_10px_30px_rgba(59,130,246,.3)]">
                {it.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pricing(){
  const tiers = [
    {name:'Starter', price:'$0', tagline:'Try the platform', features:['5 tools','Basic models','Community support'], cta:'Start Free'},
    {name:'Pro', price:'$19', tagline:'For creators', features:['All 50+ tools','Priority runs','GPT-4 + Claude'], cta:'Go Pro', highlight:true},
    {name:'Teams', price:'$59', tagline:'For teams', features:['Seats & SSO','Workspace','Audit logs'], cta:'Contact Sales'},
  ]
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(99,102,241,.15),transparent_60%)] pointer-events-none"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Simple, transparent pricing</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t,i)=> (
            <motion.div key={t.name} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className={`rounded-2xl p-6 backdrop-blur-xl ring-1 ring-white/10 ${t.highlight? 'bg-white/10 shadow-[0_20px_60px_rgba(99,102,241,.25)]' : 'bg-white/5'}`}>
              <div className="text-white/80">{t.name}</div>
              <div className="mt-2 text-4xl font-extrabold text-white">{t.price}<span className="text-base font-medium text-white/60">/mo</span></div>
              <div className="text-white/60">{t.tagline}</div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {t.features.map(f=> <li key={f} className="flex items-center gap-2"><Zap className="h-4 w-4 text-cyan-300"/>{f}</li>)}
              </ul>
              <button className={`mt-6 w-full px-4 py-2 rounded-xl ${t.highlight? 'bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white' : 'bg-white/10 text-white ring-1 ring-white/20'}`}>{t.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials(){
  const quotes = [
    {q:'The smoothest AI workflow I have used.', a:'Lena, Product Lead'},
    {q:'Looks and feels like the future.', a:'Marco, Designer'},
    {q:'Replaced 6 tools in our stack.', a:'Priya, Founder'},
  ]
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Loved by creators</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quotes.map((t,i)=> (
            <motion.blockquote key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 backdrop-blur-xl text-white">
              <Stars className="h-5 w-5 text-cyan-300"/>
              <p className="mt-3">“{t.q}”</p>
              <footer className="mt-4 text-white/60">— {t.a}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
