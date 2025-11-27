import { useSpeechRecognition } from 'react-speech-recognition';

const BrowserSupportsSpeechRecognition = () => {
    const { browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return (
            <div className='min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-4'>
                <div className='bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 max-w-lg text-center border border-red-500/20'>
                    <div className='text-8xl mb-6 animate-bounce'>⚠️</div>

                    <h2 className='text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-red-400 to-pink-400 mb-4'>
                        সাপোর্ট নেই
                    </h2>

                    <p className='text-gray-300 text-lg leading-relaxed mb-6'>
                        দুঃখিত, আপনার ব্রাউজার Speech Recognition সাপোর্ট করে
                        না।
                    </p>

                    <div className='flex justify-center gap-3 mb-6'>
                        <span className='px-4 py-2 bg-white/10 rounded-full text-sm text-purple-300'>
                            Chrome
                        </span>
                        <span className='px-4 py-2 bg-white/10 rounded-full text-sm text-purple-300'>
                            Edge
                        </span>
                        <span className='px-4 py-2 bg-white/10 rounded-full text-sm text-purple-300'>
                            Safari
                        </span>
                    </div>
                    <p className='text-purple-400 font-semibold'>
                        দয়া করে উপরের যেকোনো একটি ব্রাউজার ব্যবহার করুন।
                    </p>
                </div>
            </div>
        );
    }

    return null;
};

export default BrowserSupportsSpeechRecognition;
