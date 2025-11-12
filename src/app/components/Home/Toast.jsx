// components/Toast.jsx
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ toasts, removeToast }) {
  return (
    <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 shadow-xl rounded-lg p-4 w-72"
          >
            <h4 className="font-semibold text-gray-800 text-sm">
              💸 New Transaction
            </h4>
            <p className="text-gray-600 text-sm mt-1">
              {toast.message}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
