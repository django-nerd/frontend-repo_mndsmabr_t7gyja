import { motion } from 'framer-motion'
import { Wand2, Image as ImageIcon, Code2, Mic, Video, Bot } from 'lucide-react'

const tools = [
  {slug:'chat', name:'AI Chatbot', icon: Bot, desc:'Conversational agent for research and ideation.'},
  {slug:'image', name:'AI Image Generator', icon: ImageIcon, desc:'Create art and product shots from prompts.'},
  {slug:'code', name:'AI Code Helper', icon: Code2, desc:'Explain, refactor and generate code.'},
  {slug:'audio', name:'AI Audio Transcriber', icon: Mic, desc:'Transcribe meetings and podcasts accurately.'},
  {slug:'video', name:'AI Video Enhancer', icon: Video, desc:'Upscale and enhance footage with AI.'},
  {slug:'writer', name:'AI Writer', icon: Wand2, desc:'Blogs, emails and more in seconds.'},
]

export default function Tools(){
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <div className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold">Explore Tools</h1>
        <p className="mt-2 text-white/70">All the building blocks for your creative workflow.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t,i)=> (
            <motion.a key={t.slug} href={`/tools/${t.slug}`} initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{delay:i*0.04}} className="group relative rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-6 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center ring-1 ring-white/20">
                  <t.icon className="h-6 w-6"/>
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-white/70">{t.desc}</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 pointer-events-none"/>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
