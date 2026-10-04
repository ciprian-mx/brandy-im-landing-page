'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md bg-dark-800 border border-brand-purple/20 rounded-lg shadow-lg p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-1">
          <div className="text-yellow-400 font-mono text-lg">
            (ಥ﹏ಥ)
          </div>
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm text-gray-300">
            We use cookies. But not the creepy ones. No data shared with Zuck.
          </p>
          <div className="mt-3 flex space-x-3">
            <button
              onClick={() => setIsVisible(false)}
              className="text-xs font-medium text-gray-300 hover:text-brand-purple transition-colors"
            >
              Fine
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-xs font-medium text-gray-300 hover:text-brand-purple transition-colors"
            >
              Whatever
            </button>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-3 flex-shrink-0 text-gray-400 hover:text-brand-purple transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}