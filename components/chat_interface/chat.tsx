'use client'
import { useState } from 'react';

export default function Chat() {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      // Handle send message here
      console.log('Sending:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 md:p-8">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl space-y-4 md:space-y-8">
        {/* Header text */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl font-medium text-white">What do you want to know?</h1>
        </div>
        
        {/* Input container with buttons */}
        <div className="relative w-full">
          <textarea 
            className="w-full h-24 md:h-36 bg-[#202222] p-4 md:p-6 rounded-2xl md:rounded-3xl focus:outline-none 
            resize-none text-white placeholder:text-gray-400 pr-20 text-base md:text-lg"
            rows={3}
            placeholder="Ask anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          
          {/* Left buttons */}
          <div className="absolute left-2 md:left-4 bottom-2 md:bottom-4 flex space-x-1 md:space-x-2">
            <button className="p-1 md:p-2 rounded-2xl md:rounded-3xl bg-[#303030] hover:bg-[#404040] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="currentColor" fill="currentColor">
                <path d="M5.01 17.833h11.023a6.34 6.34 0 0 0 2.91-.676 5.484 5.484 0 0 0 2.274-2.136c.52-.88.783-1.896.783-3.021s-.263-2.14-.782-3.02a5.484 5.484 0 0 0-2.271-2.135 6.348 6.348 0 0 0-2.914-.678H2.018v1.176h14.015c.849 0 1.636.182 2.341.542a4.285 4.285 0 0 1 1.776 1.671l.002.004c.414.7.624 1.52.624 2.44 0 .92-.21 1.741-.625 2.442l-.002.003a4.286 4.286 0 0 1-1.778 1.672c-.702.359-1.49.54-2.338.54H5.011v1.176ZM3.415 9.568c1.209-1.272 3.672-.9 4.537.67.293.48.442 1.072.442 1.762.041 1.78-1.22 3.211-3.054 3.2-.822 0-1.468-.307-1.925-.77-.036-.037-.102-.012-.102.04v3.363H2V9.03h1.312v.5c0 .051.066.076.102.038Zm3.135 4.015c.352-.358.531-.94.531-1.583 0-.645-.178-1.223-.532-1.574-.64-.72-2.126-.712-2.772.001-.697.677-.69 2.475 0 3.156.646.698 2.132.706 2.773 0Zm12.28-3.31c-1.09-1.969-4.506-1.966-5.604 0-.277.48-.418 1.06-.418 1.727-.038 1.88 1.296 3.212 3.225 3.2 1.928.012 3.258-1.333 3.225-3.2 0-.667-.144-1.248-.429-1.727ZM17.944 12c0 .644-.179 1.225-.532 1.583-.64.706-2.127.699-2.773 0-.69-.681-.697-2.48 0-3.155.646-.714 2.132-.721 2.773-.002.354.352.532.929.532 1.573Zm-6.96-2.85c.249-.136.591-.206 1.017-.206h.633v1.276c-.11.002-.227 0-.347-.001-.542-.008-1.152-.016-1.488.318-.222.21-.334.57-.334 1.072v3.423H9.154V9.03h1.312v.5c0 .056.078.078.11.029.127-.197.262-.331.409-.408Z"></path>
              </svg>
            </button>
            <button 
              className="bg-[#303030] hover:bg-[#404040] text-white font-medium px-3 md:px-6 py-1 md:py-2 rounded-2xl md:rounded-3xl transition-colors flex items-center justify-center gap-1 text-sm md:text-base"
              disabled={!inputValue.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 12v.01"></path>
                <path d="M19.071 4.929c-1.562 -1.562 -6 .337 -9.9 4.243c-3.905 3.905 -5.804 8.337 -4.242 9.9c1.562 1.561 6 -.338 9.9 -4.244c3.905 -3.905 5.804 -8.337 4.242 -9.9"></path>
                <path d="M4.929 4.929c-1.562 1.562 .337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561 -1.562 -.338 -6 -4.244 -9.9c-3.905 -3.905 -8.337 -5.804 -9.9 -4.242"></path>
              </svg>
              <span className="hidden md:inline">Deep Research</span>
            </button>
          </div>
          
          {/* Right buttons */}
          <div className="absolute right-2 md:right-4 bottom-2 md:bottom-4 flex space-x-1 md:space-x-2">
            <button className="p-1 md:p-2 rounded-full bg-[#303030] hover:bg-[#404040] transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9851 4.00291C11.9933 4.00046 11.9982 4.00006 11.9996 4C12.001 4.00006 12.0067 4.00046 12.0149 4.00291C12.0256 4.00615 12.047 4.01416 12.079 4.03356C12.2092 4.11248 12.4258 4.32444 12.675 4.77696C12.9161 5.21453 13.1479 5.8046 13.3486 6.53263C13.6852 7.75315 13.9156 9.29169 13.981 11H10.019C10.0844 9.29169 10.3148 7.75315 10.6514 6.53263C10.8521 5.8046 11.0839 5.21453 11.325 4.77696C11.5742 4.32444 11.7908 4.11248 11.921 4.03356C11.953 4.01416 11.9744 4.00615 11.9851 4.00291ZM8.01766 11C8.08396 9.13314 8.33431 7.41167 8.72334 6.00094C8.87366 5.45584 9.04762 4.94639 9.24523 4.48694C6.48462 5.49946 4.43722 7.9901 4.06189 11H8.01766ZM4.06189 13H8.01766C8.09487 15.1737 8.42177 17.1555 8.93 18.6802C9.02641 18.9694 9.13134 19.2483 9.24522 19.5131C6.48461 18.5005 4.43722 16.0099 4.06189 13ZM10.019 13H13.981C13.9045 14.9972 13.6027 16.7574 13.1726 18.0477C12.9206 18.8038 12.6425 19.3436 12.3823 19.6737C12.2545 19.8359 12.1506 19.9225 12.0814 19.9649C12.0485 19.9852 12.0264 19.9935 12.0153 19.9969C12.0049 20.0001 11.9999 20 11.9999 20C11.9999 20 11.9948 20 11.9847 19.9969C11.9736 19.9935 11.9515 19.9852 11.9186 19.9649C11.8494 19.9225 11.7455 19.8359 11.6177 19.6737C11.3575 19.3436 11.0794 18.8038 10.8274 18.0477C10.3973 16.7574 10.0955 14.9972 10.019 13ZM15.9823 13C15.9051 15.1737 15.5782 17.1555 15.07 18.6802C14.9736 18.9694 14.8687 19.2483 14.7548 19.5131C17.5154 18.5005 19.5628 16.0099 19.9381 13H15.9823ZM19.9381 11C19.5628 7.99009 17.5154 5.49946 14.7548 4.48694C14.9524 4.94639 15.1263 5.45584 15.2767 6.00094C15.6657 7.41167 15.916 9.13314 15.9823 11H19.9381Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <button className="p-1 md:p-2 rounded-full bg-[#303030] hover:bg-[#404040] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"></path>
              </svg>
            </button>
            <button 
              className="p-1 md:p-2 rounded-full bg-[#303030] hover:bg-[#404040] transition-colors"
              onClick={inputValue.trim() ? handleSend : undefined}
            >
              {inputValue.trim() ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M19 9a1 1 0 0 1 1 1a8 8 0 0 1 -6.999 7.938l-.001 2.062h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0 -2h3v-2.062a8 8 0 0 1 -7 -7.938a1 1 0 1 1 2 0a6 6 0 0 0 12 0a1 1 0 0 1 1 -1m-7 -8a4 4 0 0 1 4 4v5a4 4 0 1 1 -8 0v-5a4 4 0 0 1 4 -4"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}