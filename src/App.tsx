import { CheckCircle, Copy, Mic, MicOff, Sparkles, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import SpeechRecognition, {
    useSpeechRecognition,
} from 'react-speech-recognition';
import BrowserSupportsSpeechRecognition from './components/BrowserSupportsSpeechRecognition';
import Help from './components/Help';
import { languagesName } from './components/languages';

function App() {
    const {
        transcript,
        listening,
        resetTranscript,
        // browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    const [language, setLanguage] = useState('bn-BD');
    const [copied, setCopied] = useState(false);
    const [displayText, setDisplayText] = useState(transcript);

    useEffect(() => {
        setDisplayText(transcript);
    }, [transcript]);

    const startListening = () =>
        SpeechRecognition.startListening({ continuous: true, language });

    const stopListening = () => SpeechRecognition.stopListening();

    //handle copy function
    const handleCopy = () => {
        navigator.clipboard.writeText(displayText || '');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    //handle clear function
    const handleClear = () => {
        resetTranscript();
        setDisplayText('');
    };

    <BrowserSupportsSpeechRecognition />;

    return (
        <div className='min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative'>
            <div className='fixed inset-0 opacity-20'>
                <div className='absolute top-0 -left-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob'></div>
                <div className='absolute top-0 -right-4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000'></div>
                <div className='absolute -bottom-8 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000'></div>
            </div>

            <div className='relative z-10 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8'>
                <div className='max-w-5xl w-full'>
                    <div className='text-center mb-8 sm:mb-12 animate-fade-in-down'>
                        <div className='flex items-center justify-center gap-3 mb-4'>
                            <Sparkles
                                className='text-yellow-400 animate-pulse'
                                size={32}
                            />
                            <h1 className='text-4xl sm:text-5xl md:text-7xl font-black bg-linear-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent leading-tight'>
                                মুখে বলি
                            </h1>
                            <Sparkles
                                className='text-yellow-400 animate-pulse'
                                size={32}
                            />
                        </div>
                        <p className='text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4'>
                            বাংলা বা ইংরেজিতে কথা বলুন এবং তৎক্ষণাৎ লিখিত রূপ
                            পান।
                            <br />
                            <span className='text-purple-400 font-semibold'>
                                {' '}
                                স্মার্ট, দ্রুত এবং নির্ভুল।
                            </span>
                        </p>
                    </div>

                    <div className='bg-white/5 backdrop-blur-2xl rounded-3xl border border-purple-500/20 shadow-2xl overflow-hidden'>
                        <div className='p-6 sm:p-8 border-b border-purple-500/10 bg-linear-to-r from-purple-900/20 to-pink-900/20'>
                            <div className='flex items-center gap-2 mb-4'>
                                <label className='text-sm sm:text-base font-bold text-purple-300'>
                                    ভাষা নির্বাচন করুন:
                                </label>
                            </div>
                            <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3'>
                                {languagesName.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-bold transition-all text-xs sm:text-sm transform hover:scale-105 active:scale-95 ${
                                            language === lang.code
                                                ? `bg-linear-to-r ${lang.color} text-white shadow-lg shadow-purple-500/50 border border-white/20`
                                                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                                        }`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Recording control section */}
                        <div className='p-6 sm:p-10 text-center'>
                            <div className='flex justify-center mb-6'>
                                <button
                                    onClick={() =>
                                        listening
                                            ? stopListening()
                                            : startListening()
                                    }
                                    className={`relative group px-8 sm:px-12 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg transition-all transform hover:scale-110 active:scale-95 shadow-2xl ${
                                        listening
                                            ? 'bg-linear-to-r from-red-600 via-pink-600 to-red-600 text-white shadow-red-500/50 animate-pulse'
                                            : 'bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 text-white shadow-purple-500/50 hover:shadow-purple-500/70'
                                    }`}
                                >
                                    <div className='flex items-center gap-3'>
                                        {listening ? (
                                            <MicOff size={24} />
                                        ) : (
                                            <Mic size={24} />
                                        )}
                                        {listening
                                            ? 'রেকর্ডিং বন্ধ করুন'
                                            : 'রেকর্ডিং শুরু করুন'}
                                    </div>

                                    <div className='absolute bottom-0 left-0 right-0 h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform'></div>
                                </button>
                            </div>

                            {listening && (
                                <div className='mb-6 inline-flex items-center gap-2 px-5 py-2.5 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm'>
                                    <span className='relative flex h-3 w-3'>
                                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
                                        <span className='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
                                    </span>

                                    <span className='text-red-300 font-bold text-sm'>
                                        শুনছি... কথা বলুন
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Transcript display section */}
                        <div className='px-6 sm:px-8 pb-6'>
                            <label className='block text-sm sm:text-base font-bold text-purple-300 mb-3 items-center gap-2'>
                                <span className='w-2 h-2 bg-purple-400 rounded-full'></span>
                                ট্রান্সক্রিপ্ট:
                            </label>

                            <textarea
                                value={displayText}
                                onChange={(e) => setDisplayText(e.target.value)}
                                placeholder='আপনার কথা এখানে দেখা যাবে... ✨'
                                className='w-full h-48 sm:h-64 p-4 sm:p-5 bg-slate-900/50 border-2 border-purple-500/30 rounded-2xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20 resize-none transition-all text-sm sm:text-base'
                                style={{
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: '#9333ea #1e293b',
                                }}
                            />
                            {/* Character count indicator */}
                            <div className='text-right mt-2 text-xs text-gray-500'>
                                {displayText.length} অক্ষর
                            </div>
                        </div>

                        {/* Action buttons section */}
                        <div className='px-6 sm:px-8 pb-8 flex flex-col sm:flex-row gap-3'>
                            <button
                                onClick={handleCopy}
                                disabled={!displayText}
                                className='flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/50'
                            >
                                {copied ? (
                                    <>
                                        <CheckCircle size={20} /> কপি হয়েছে ✓
                                    </>
                                ) : (
                                    <>
                                        <Copy size={20} /> কপি করুন
                                    </>
                                )}
                            </button>

                            <button
                                onClick={handleClear}
                                disabled={!displayText}
                                className='flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-500/50'
                            >
                                <Trash2 size={20} /> মুছে ফেলুন
                            </button>
                        </div>

                        <Help />
                    </div>

                    {/* Footer text */}
                    <div className='text-center mt-8 sm:mt-12'>
                        <p className='text-gray-400 text-sm sm:text-base flex items-center justify-center gap-2'>
                            <span className='text-xl'>🎯</span>
                            <span>
                                আপনার কণ্ঠস্বরকে শক্তিতে রূপান্তরিত করুন
                            </span>
                        </p>
                        <p className='text-gray-500 text-xs mt-2'>
                            Made with ❤️ By Md Asraful
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
