import {addThousandsSeparator} from "../util/util.js";


const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white shadow-xl rounded-xl p-3 border border-slate-200">
                <p className="text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {payload[0].name}
                </p>
                <p className="text-sm text-slate-600">
                    Amount: <span className="text-sm font-semibold text-slate-900">&#8377;{addThousandsSeparator(payload[0].value)}</span>
                </p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;