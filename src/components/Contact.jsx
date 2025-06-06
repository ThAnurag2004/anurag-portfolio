import { CONTACT } from "../constants/Index"
import { motion } from "framer-motion"


function Contact() {
  return (
    <div className="border-t border-stone-900 pb-20">
        <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-10 text-center text-5xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="my-4">
                {CONTACT.address}
            </motion.p>
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className="my-4">
                {CONTACT.phoneNo}
            </motion.p>
            <a href="mailto:anuragsingh04204@gmail.com?subject=Hello%20Anurag&body=I%20wanted%20to%20connect%20with%20you." className="border-b">
                {CONTACT.email}
            </a>
        </div>
    </div>
  )
}

export default Contact
