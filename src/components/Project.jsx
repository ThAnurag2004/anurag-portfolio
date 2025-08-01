import { PROJECTS } from '../constants/Index'
import { motion } from 'framer-motion'


function Project() {
  return (
    <div className='pb-4'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-20 text-center text-5xl'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='md-8 w-auto h-auto flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className='w-full lg:w-1/4'>
                        <img src={project.image}
                            
                            alt={project.title}
                            className='mb-6 mt-8 w-[300px] h-auto rounded-xl' />
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className='w-full max-w-xl lg:w-3/4'>
                        <a href={project.link} target="_blank"><h3 className='mb-2 font-semibold text-2xl'>
                            {project.title}
                        </h3></a>
                        <p className='mb-4 text-stone-400'>{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span className='mr-2 rounded bg-stone-900 p-2 stext-sm font-medium text-stone-300' key={index}>
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project
