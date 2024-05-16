function Table() {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const hours = ['7:00 A.M', '8:00 A.M', '9:00 A.M', '10:00 A.M', '11:00 A.M', '12:00 P.M', '13:00 P.M', '14:00 P.M', '15:00 P.M', '16:00 P.M', '17:00 P.M', '18:00 P.M', '19:00 P.M', '20:00 P.M', '21:00 P.M', '22:00 P.M'];

    return (
        <div className="relative rounded-xl overflow-auto">
            <div className="px-4 py-8 sm:px-8">
               <h1 className="text-center uppercase text-4xl py-4 font-sans font-semibold text-slate-700 ">Registro de lugares</h1>
                <table className="border border-[#CDD5DB] border-separate border-spacing-2 w-full  dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm font-serif">
                    <thead className="bg-slate-400 dark:bg-slate-700">
                        <tr>
                            <th className="w-[14%] border border-slate-700 text-slate-700 uppercase bg-none bg-amber-50">Actividad</th>
                            {days.map((day, index) => (
                                <th key={index} className="text-center border border-slate-300 dark:border-slate-600 font-semibold p-4 text-white dark:text-slate-200">{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {hours.map((hour, hourIndex) => (
                            <tr key={hourIndex}>
                                <td className="border border-slate-400 dark:border-slate-700 px-4 font-bold text-slate-500 bg-indigo-50 text-center">{hour}</td>
                                {days.map((day, dayIndex) => (
                                    <td key={dayIndex} className="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400 font-serif">
                                        <div className="grid grid-cols-3 gap-1">
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => (
                                                <button key={index} type="" className="w-[30px] h-[30px] border border-indigo-200 rounded-full text-center m-auto">{num}</button>
                                            ))}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
