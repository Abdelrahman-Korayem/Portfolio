import MainContent from '../components/MainContent'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="min-h-screen pb-24">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* Sidebar */}
        <aside className="w-full lg:w-80 lg:sticky lg:top-4">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="w-full lg:flex-1">
          <MainContent />
        </main>
      </div>
    </div>
  )
}