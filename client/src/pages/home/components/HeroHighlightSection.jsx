import { motion } from "framer-motion";
import {
  HeroHighlight,
  Highlight,
} from "../../../components/ui/hero-highlight.jsx";

export function HeroHighlightSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl flex flex-col gap-y-2 px-4 md:text-5xl lg:text-7xl font-bold text-purple-200 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto font-jersey "
      >
        Blogify
        <Highlight className="text-white/80 py-3 px-4 dark:text-white text-center  font-jersey md:text-4xl lg:text-5xl">
          Explore, learn, and grow with every post.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
