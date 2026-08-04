import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="font-mono text-sm text-ink-muted tracking-[0.3em]">
              INITIALIZING
            </div>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-neutral-500"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
            <div className="font-display text-lg gradient-text font-semibold uppercase tracking-wider">
              DUDEKULA ASIF BABA
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
