import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="text-center py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    Take Control of Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Finances</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
                    Your foundation for secure, intelligent financial management. Effortlessly track your income and expenses to achieve your financial goals.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link
                        to="/signup"
                        className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Start Tracking for Free
                    </Link>
                    <Link
                        to="/signup"
                        className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 px-8 py-3.5 rounded-lg font-semibold text-lg hover:border-indigo-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                    >
                        Learn More <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;