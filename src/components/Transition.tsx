"use client"

import {motion} from "framer-motion"

export const Transition = () => {
    const TransitionVariants = {
        initial: {
            y: "100%",
            height: '100%'
        },
        
        animate: {
            y: "0%",
            height: '0%'
        },
        
        exit: {
            y: ["0%","100%"],
            height: ["0%","100%"]
        },
        
    }
  
    return (
    <div>
        <motion.div className="fixed right-0 h-screen w-screen bottom-full z-[30] bg-cyan-900 " variants={TransitionVariants} initial="initial" exit="exit" animate="animate" transition={{delay: 0.2, duration:0.6, ease:"easeInOut"}}/>

        <motion.div className="fixed right-0 h-screen w-screen bottom-full z-[20] bg-cyan-800 " variants={TransitionVariants} initial="initial" exit="exit" animate="animate" transition={{delay: 0.4, duration:0.6, ease:"easeInOut"}}/>

        <motion.div className="fixed right-0 h-screen w-screen bottom-full z-[10] bg-cyan-700 " variants={TransitionVariants} initial="initial" exit="exit" animate="animate" transition={{delay: 0.6, duration:0.6, ease:"easeInOut"}}/>
    </div>
  )
}
