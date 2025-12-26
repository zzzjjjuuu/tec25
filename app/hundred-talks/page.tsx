import React from 'react';
import Link from 'next/link';

export default function HundredTalksPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* 顶部介绍区域 */}
      <header className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">百言堂</h1>
          <p className="text-xl text-gray-400">分享你的想法与见解</p>
        </div>
      </header>

      {/* 内容区域 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* 可跳转的子页面链接卡片 */}
          <Link href="/hundred-talks/tianyunsen" passHref>
            <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">22级田云森说</h2>
                  <p className="text-gray-400">点击查看详情</p>
                </div>
                <div className="text-blue-500 text-2xl">→</div>
              </div>
            </div>
          </Link>

          {/* 预留其他发言卡片的位置 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800 opacity-60">
              <h2 className="text-2xl font-semibold mb-2">预留发言卡片</h2>
              <p className="text-gray-400">这里将显示其他发言内容</p>
            </div>
            <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800 opacity-60">
              <h2 className="text-2xl font-semibold mb-2">预留发言卡片</h2>
              <p className="text-gray-400">这里将显示其他发言内容</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}