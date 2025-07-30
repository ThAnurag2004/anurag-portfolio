import { motion } from "framer-motion"
import intern from '../assets/internship-img.svg'

function WorkSection() {
  return (
    <div className='pb-4 mb-10'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-20 text-center text-5xl'>Internship</motion.h2>
        <div className="w-full rounded-2xl p-3 flex lg:flex-nowrap flex-wrap justify-around gap-2">
         <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className='w-full lg:w-1/4'>
                        <img src={intern} className="h-100" />
                    </motion.div>
          <div className="p-5">
            <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className='w-full max-w-xl lg:w-3/4'>
                        <h1 className='mb-2 font-semibold text-2xl'>
                           Web Development Intern
                        </h1>
                        <h2 className="font-semibold text-lg mb-2"><span className="text-blue-400">IBM</span> – Project-Based Experiential Learning (PBEL)</h2>
                        <h3 className="mb-2">(July 2025 - Present)</h3>
                        <p className='mb-4 text-white'>Collaborated on real-world web development projects and gained hands-on experience in the MERN stack. Built a scalable e-commerce platform as a full-stack project and developed a food ordering platform as a front-end project. Improved user interfaces, optimized performance, and learned industry-standard development practices and workflows.</p>
                    </motion.div>
          </div>
        </div>
    </div>
  )
}

export default WorkSection
