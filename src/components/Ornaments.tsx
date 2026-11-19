export function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c.6 6.2 2.6 9.8 12 12-9.4 2.2-11.4 5.8-12 12-.6-6.2-2.6-9.8-12-12C9.4 9.8 11.4 6.2 12 0z" />
    </svg>
  )
}

export function Divider({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-3 text-gold ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
      <svg viewBox="0 0 48 32" className="h-5 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M24 4c3 6 3 12 0 18-3-6-3-12 0-18zM24 22c-6-1-10-5-12-11 6 0 10 4 12 11zM24 22c6-1 10-5 12-11-6 0-10 4-12 11z" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
    </div>
  )
}
