import { RouteButtons } from "@/components/Buttons/RouteButtons";
import { config } from "@/utils/site-config";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ml-8">
      {/* <h1 className="text-4xl font-bold">Welcome to fundpoint</h1> */}
      <div className="flex flex-col items-center space-y-4">
        <img
          src="/logo-black2.png"
          alt="cashproof"
          className="my-4"
          width={400}
        />
        <RouteButtons />
      </div>
      <p className="text-lg pt-8 text-center">{config.description}.</p>
    </main>
  );
}
