import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Auth({mode='login'}){
  const [isLogin, setIsLogin] = useState(mode==='login')
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="rounded-3xl p-8 bg-white/5 ring-1 ring-white/10 backdrop-blur-2xl">
          <h1 className="text-3xl font-extrabold text-center">{isLogin? 'Welcome back' : 'Create account'}</h1>
          <p className="text-white/70 text-center mt-1">Aurora AI Tools</p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 outline-none focus:ring-cyan-300/50 placeholder:text-white/40" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm text-white/70">Password</label>
              <input type="password" className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 outline-none focus:ring-cyan-300/50 placeholder:text-white/40" placeholder="••••••••" />
            </div>
            {!isLogin && (
              <div>
                <label className="text-sm text-white/70">Company</label>
                <input type="text" className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 outline-none focus:ring-cyan-300/50 placeholder:text-white/40" placeholder="Aurora Labs" />
              </div>
            )}
            <button type="button" className="w-full mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white font-semibold">{isLogin? 'Sign in' : 'Create account'}</button>
          </form>

          <button onClick={()=>setIsLogin(!isLogin)} className="mt-6 w-full text-white/70 hover:text-white text-sm">{isLogin? 'New here? Create an account' : 'Already have an account? Sign in'}</button>
        </motion.div>
      </div>
    </div>
  )
}
