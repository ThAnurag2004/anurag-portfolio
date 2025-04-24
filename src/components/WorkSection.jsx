import FuzzyText from '../reactbits/FuzzyText/FuzzyText'
import { motion } from 'framer-motion'

function WorkSection() {
  return (
    <div className='pb-4 mb-10'>
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 0.5}}
      className='my-20 text-center text-4xl'>Work Experience</motion.h2>
      <div className='flex justify-center'>
      <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.2} 
        enableHover={0.5}
      >
        404 
      </FuzzyText>
      </div>
      
    </div>
  )
}

export default WorkSection
