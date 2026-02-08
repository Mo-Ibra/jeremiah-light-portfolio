const AnnouncementBar = () => {
  return (
    < div className="w-full h-10 bg-primary flex items-center justify-center text-white text-sm font-medium z-50 relative" >
      <span className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        Partnering with <span className="font-bold text-white">1 more new brand</span> this month
      </span>
    </div >
  )
}

export default AnnouncementBar;