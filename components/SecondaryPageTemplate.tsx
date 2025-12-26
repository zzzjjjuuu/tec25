import React from 'react';

interface SecondaryPageTemplateProps {
  title: string;
  subtitle: string;
}

const SecondaryPageTemplate: React.FC<SecondaryPageTemplateProps> = ({ title, subtitle }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Page Header */}
      <header className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-400">{subtitle}</p>
        </div>
      </header>

      {/* Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800">
          {/* Placeholder Content */}
          <div className="flex flex-col items-center justify-center text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">你的建设将成为历史</h2>
          </div>



          {/* Markdown Content Placeholder */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6">内容预览</h3>
            <div className="space-y-4 text-gray-300">
              <p>这里将展示丰富的{title}内容，包括详细的说明、使用指南和相关资源。</p>
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="font-medium">注意事项：</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>内容将定期更新</li>
                  <li>请确保使用最新版本</li>
                  <li>如有疑问，请联系管理员QQ1737193525</li>
                </ul>
              </div>
              <p>我们致力于为您提供高质量的{title}，感谢您的支持和耐心等待！</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecondaryPageTemplate;