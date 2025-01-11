export default function Home() {
  return (
    <main className="px-4">
      <div className="heroContainer flex flex-col">
        <div className="heroImage h-96 border w-full mb-4">
          <img src="" alt="Hero Image" className="w-full" />
        </div>
        <div className="heroText">
          <h5 className="font-medium mb-3">Nike Shoes</h5>
          <h1 className="font-black text-5xl mb-3 ">
            GET COMFORTABLE WITH WINNING
          </h1>
          <p className="font-normal mb-3">
            Comfort you want with support you need to power your wins
          </p>
          <button className="rounded-full text-white px-4 py-2 bg-black hover:bg-neutral-800 font-medium">
            Shop Shoes
          </button>
        </div>
      </div>
    </main>
  );
}
