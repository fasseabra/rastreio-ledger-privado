import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";
import { Architecture } from "@/components/sections/architecture";
import { Closing } from "@/components/sections/closing";
import { Consensus } from "@/components/sections/consensus";
import { Flow } from "@/components/sections/flow";
import { Hero } from "@/components/sections/hero";
import { Lab } from "@/components/sections/lab";
import { Problem } from "@/components/sections/problem";
import { Results } from "@/components/sections/results";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Shell>
      <Hero />
      <Problem />
      <Architecture />
      <Flow />
      <Consensus />
      <Results />
      <Lab />
      <Closing />
    </Shell>
  );
}
