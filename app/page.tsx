export default function Home() {
  const features = [
    {
      id: 1,
      title: "学习资料",
      link: "/learning-materials"
    },
    {
      id: 2,
      title: "辅学资料",
      link: "/supplementary-materials"
    },
    {
      id: 3,
      title: "校园生活",
      link: "/campus-life"
    },
    {
      id: 4,
      title: "百言堂",
      link: "/hundred-talks"
    },
    {
      id: 5,
      title: "本站说明",
      link: "/about"
    }
  ];

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 text-center bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-6xl font-bold mb-4 text-white">欢迎来到TEC25</h1>
        <h2 className="text-4xl font-semibold mb-4 text-gray-200">你我共建</h2>
        <h3 className="text-2xl text-gray-400">打造吴忠中学人的网站</h3>
      </section>

      {/* Announcement Section */}
      <section className="py-6 bg-gray-800 border-y border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <span className="text-yellow-400 font-bold">公告</span>
            <p className="text-gray-300">欢迎使用TEC25网站，更多功能即将上线，敬请期待！</p>
          </div>
        </div>
      </section>

      {/* Feature Introduction Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden">
            <div className="flex space-x-8 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth">
              {features.map((feature) => (
                <a
                  key={feature.id}
                  href={feature.link}
                  className="flex-shrink-0 w-72 h-72 bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 snap-center cursor-pointer flex items-center justify-center border border-gray-700 hover:border-blue-500"
                >
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
