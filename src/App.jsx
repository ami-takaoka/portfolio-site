function App() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <p className="font-display text-display text-amber-900">
          Coffee &amp; Code
        </p>
        <h1 className="text-hero text-amber-900">
          Git Coffee
        </h1>
        <p className="mt-4 text-gray-600">
          Web Development & Quality Research
        </p>
        <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
          Welcome
        </button>

        {/* Typography preview */}
        <div className="mt-10 space-y-3 text-left">
          <h2 className="text-section">セクション見出し Section</h2>
          <h3 className="text-subheading">サブ見出し Subheading</h3>
          <h4 className="text-card">カード見出し Card Title</h4>
          <p className="text-body">本文テキストです。読みやすさを重視した行間で表示します。</p>
          <p className="text-caption text-gray-600">補足テキスト Caption</p>
          <nav className="font-heading text-nav">About / Works / Contact</nav>
        </div>
      </div>
    </div>
  )
}

export default App
