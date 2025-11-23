import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/AboutMe')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/AboutMe"!</div>
}
