import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAppwrite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { animate, motion } from "framer-motion";
import { IoLogoVercel } from "react-icons/io5";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


function Technologies() {
  return (
    <div className="pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-5xl">Technologies</motion.h2>
        <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                >
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div className="p-4"
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            >
                <TbBrandFramerMotion className="text-7xl " />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                 className="p-3">
                <DiNodejs className="text-8xl text-green-300" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4">
                <SiMongodb className="text-7xl text-green-300" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-300" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4">
                <SiMysql className="text-7xl" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
                <IoLogoFirebase className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4">
                <SiAppwrite className="text-7xl text-pink-500"/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4">
                <FaGitAlt className="text-7xl text-orange-300"/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4">
                <IoLogoVercel className="text-7xl"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
