const InfoCard = ({ label, icon, value, className }) => {
  return (
    <div
      className={`w-[10rem] inline-block overflow-hidden font-poppins shadow-sm h-[10rem] rounded-md ${className}`}>
      <div className="text-4xl flex items-center justify-center py-5">
        {icon}
      </div>
      <p className="text-center text-lg font-medium">{label}</p>
      <p className="text-center text-xl font-medium">{value}</p>
    </div>
  )
}

export default InfoCard
