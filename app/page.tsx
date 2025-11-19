import LayeredCard from "./components/reusable/layered-card";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LayeredCard>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-black">Hello World</h1>
        </div>
      </LayeredCard>
    </div>
  );
}