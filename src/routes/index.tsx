import AboutMe from '@/components/AboutMe'
import Games from '@/components/Games'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <main className="mx-64 flex gap-8 flex-col main-content">
        <Games />
      </main>
    </>
  )
}
