import {Layers2, Pencil} from "lucide-react";

const CategoryList = ({categories, onEditCategory}) => {
    return (
        <div className="card p-4">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-slate-800">Category Sources</h4>
            </div>

            {/* Category list */}
            {categories.length === 0 ? (
                <p className="text-slate-500">
                    No categories added yet. Add some to get started!
                </p>
            ): (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 border border-transparent hover:border-indigo-100 transition-all duration-200">
                            {/* Icon/Emoji disply*/}
                            <div className="w-12 h-12 flex items-center justify-center text-xl text-slate-800 bg-gradient-to-br from-slate-100 to-slate-50 rounded-full group-hover:from-indigo-100 group-hover:to-purple-100 transition-all duration-200 shadow-sm">
                                {category.icon ? (
                                    <span className="text-2xl">
                                        <img src={category.icon} alt={category.name} className="h-5 w-5" />
                                    </span>
                                ): (
                                    <Layers2 className="text-indigo-600 group-hover:text-indigo-700 transition-colors" size={24} />
                                )}
                            </div>


                            {/* Category Details*/}
                            <div className="flex-1 flex items-center justify-between">
                                {/* Category name and type*/}
                                <div>
                                    <p className="text-sm text-slate-700 font-semibold group-hover:text-slate-900 transition-colors">
                                        {category.name}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1 capitalize">
                                        {category.type}
                                    </p>
                                </div>
                                {/* Action buttons*/}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => onEditCategory(category)}
                                        className="text-slate-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-all cursor-pointer p-1.5 hover:bg-indigo-100 rounded-lg">
                                        <Pencil size={18} />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CategoryList;