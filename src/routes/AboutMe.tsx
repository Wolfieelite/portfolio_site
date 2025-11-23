import { createFileRoute } from '@tanstack/react-router'
import AboutMe from "../components/AboutMe"
export const Route = createFileRoute('/AboutMe')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>

    <AboutMe />
  </div>
}
