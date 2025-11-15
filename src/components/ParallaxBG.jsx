import { useEffect, useRef } from 'react'

export default function ParallaxBG(){
  const ref = useRef(null)
  useEffect(()=>{
    const el = ref.current
    const onMove = (e)=>{
      const { innerWidth:w, innerHeight:h } = window
      const x = (e.clientX - w/2) / (w/2)
      const y = (e.clientY - h/2) / (h/2)
      el.style.transform = `translate3d(${x*-10}px, ${y*-8}px, 0)`
    }
    window.addEventListener('mousemove', onMove)
    return ()=> window.removeEventListener('mousemove', onMove)
  },[])
  return <div ref={ref} className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_30%_at_20%_20%,rgba(56,189,248,.15),transparent_60%),radial-gradient(30%_30%_at_80%_30%,rgba(168,85,247,.12),transparent_60%),radial-gradient(40%_40%_at_50%_80%,rgba(99,102,241,.1),transparent_60%)]"/>
}
