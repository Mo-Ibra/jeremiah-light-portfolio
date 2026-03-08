const AnnouncementBar = () => {
  return (
    < div className="w-full md:h-8 h-7 bg-primary flex items-center justify-center text-white md:text-sm text-xs font-medium z-50 relative" >
      <span className="flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        Partnering with<span className="font-semibold text-white">1 more new brand</span>this month
      </span>
    </div >
  )
}

export default AnnouncementBar;