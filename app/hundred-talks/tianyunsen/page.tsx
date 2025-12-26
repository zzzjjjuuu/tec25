import React from 'react';
import Link from 'next/link';

export default function TianyunsenPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* 返回按钮 */}
      <div className="px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/hundred-talks" passHref>
          <div className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
            <span className="mr-2">←</span>
            <span>返回百言堂</span>
          </div>
        </Link>
      </div>

      {/* 标题区域 */}
      <header className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">22级田云森说</h1>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
              <span className="font-medium">田</span>
            </div>
            <div>
              <p className="text-lg font-semibold">田云森</p>
              <p className="text-gray-400">22级学生</p>
            </div>
          </div>
        </div>
      </header>

      {/* 内容区域 */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* 内容即将填充 */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-gray-400 italic">你的建设将成为历史</p>
          </div>
        </div>
      </main>
    </div>
  );
}