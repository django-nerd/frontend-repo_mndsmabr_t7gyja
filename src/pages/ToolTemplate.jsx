import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const meta = {
  chat: {title:'AI Chatbot', desc:'Converse with an intelligent assistant for research and creation.'},
  image: {title:'AI Image Generator', desc:'Create stunning images from text prompts.'},
  code: {title:'AI Code Helper', desc:'Explain, refactor and generate code in seconds.'},
  audio: {title:'AI Audio Transcriber', desc:'Transcribe audio with high accuracy.'},
  video: {title:'AI Video Enhancer', desc:'Upscale and enhance videos automatically.'},
  writer: {title:'AI Writer', desc:'Generate blogs, emails and more.'},
}

export default function ToolTemplate(){
  const { slug } = useParams()
  const info = meta[slug] || {title:'Tool', desc:'Powerful AI capability.'}

  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <div className="pt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/tools" className="text-white/70 hover:text-white">← Back to tools</Link>
        <h1 className="mt-4 text-4xl font-extrabold">{info.title}</h1>
        <p className="mt-2 text-white/70 max-w-2xl">{info.desc}</p>

        <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-6">
          <p className="text-white/80">This is a placeholder surface for the tool interface. Plug your UI here.</p>
        </motion.div>
      </div>
    </div>
  )
}
