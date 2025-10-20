const InfoCard = ({icon, label, value, color}) => {
    return(
        <div className="flex gap-6 bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
            <div className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full shadow-lg`}>
                {icon}
            </div>
            <div>
                <h6 className="text-sm text-slate-500 mb-1 font-medium">{label}</h6>
                <span className="text-[22px] font-semibold text-slate-900">&#8377;{value}</span>
            </div>
        </div>
    )
}

export default InfoCard;