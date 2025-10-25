import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$projectSlug/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello /projects/$projectSlug/!</div>;
}
