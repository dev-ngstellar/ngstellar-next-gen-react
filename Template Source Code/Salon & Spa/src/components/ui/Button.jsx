import { forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

const Button = forwardRef(({ className, variant = "primary", size = "md", children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_4px_14px_0_rgba(var(--primary-rgb),0.39)] hover:shadow-[0_6px_20px_rgba(var(--primary-rgb),0.23)] hover:-translate-y-[1px]",
    secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl hover:-translate-y-[1px]",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-text hover:bg-black/5 dark:hover:bg-white/10",
    glass: "glass-effect text-text hover:bg-surface/80"
  }
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-14 px-10 text-lg",
    icon: "h-12 w-12"
  }

  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
})

Button.displayName = "Button"

export default Button
