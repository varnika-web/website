import { InfiniteLoader } from "./components/InfiniteLoader";

export default function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-3xl flex-col items-center justify-center text-center">
      <h1 className="font-semibold text-neutral-700">VRWealth</h1>
      <p className="mb-8 text-neutral-700">
        Updating Soon. This might take 24 to 48 hours.
      </p>
      <InfiniteLoader />
    </div>
  );
}
