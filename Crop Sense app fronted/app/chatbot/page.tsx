

import Chatbot from '@/components/Chatbot';
import { Navigation } from '@/components/navigation';

export default function Page() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Chatbot />
        </div>
      </div>
    </>
  );
}