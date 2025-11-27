const Help = () => {
    return (
        <div>
            {/* Instructions/Help section */}
            <div className='p-6 sm:p-8 bg-linear-to-r from-purple-900/30 via-pink-900/30 to-purple-900/30 border-t border-purple-500/10'>
                {/* Section heading */}
                <h3 className='font-black text-lg sm:text-xl text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-pink-300 mb-4 flex items-center gap-2'>
                    <span className='text-2xl'>📝</span>
                    কিভাবে ব্যবহার করবেন:
                </h3>
                {/* Instructions list - responsive grid layout */}
                <ul className='grid sm:grid-cols-2 gap-3 text-sm sm:text-base'>
                    {/* প্রতিটি instruction item */}
                    {[
                        {
                            icon: '✓',
                            color: 'purple',
                            text: 'প্রথমে উপরে থেকে ভাষা নির্বাচন করুন',
                        },
                        {
                            icon: '✓',
                            color: 'pink',
                            text: '"রেকর্ডিং শুরু করুন" বাটনে ক্লিক করুন',
                        },
                        {
                            icon: '✓',
                            color: 'blue',
                            text: 'মাইক্রোফোনে স্পষ্ট করে কথা বলুন',
                        },
                        {
                            icon: '✓',
                            color: 'cyan',
                            text: 'শেষ হলে "রেকর্ডিং বন্ধ করুন" ক্লিক করুন',
                        },
                        {
                            icon: '✓',
                            color: 'green',
                            text: '"কপি করুন" দিয়ে টেক্সট কপি করুন',
                        },
                        {
                            icon: '✓',
                            color: 'yellow',
                            text: 'প্রয়োজনে টেক্সট সংশোধন করে নিন',
                        },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className='flex items-start gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-all'
                        >
                            <span
                                className={`text-${item.color}-400 font-bold shrink-0 text-lg`}
                            >
                                {item.icon}
                            </span>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Help;
