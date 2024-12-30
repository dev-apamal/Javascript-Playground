export default function TextForm() {
  return (
    <form className="flex justify-between flex-col sm:flex-row gap-4">
      <div className="flex flex-col gap-2 w-full sm:w-1/2">
        <label for="top-text">Top Text</label>
        <input
          className="px-4 py-4 border border-gray-500 rounded"
          type="text"
          id="top-text"
          placeholder="Shut up"
        />
      </div>
      <div className="flex flex-col gap-2 w-full sm:w-1/2">
        <label for="bottom-text">Bottom Text</label>
        <input
          className="px-4 py-4 border border-gray-500 rounded"
          type="text"
          id="bottom-text"
          placeholder="and take the money"
        />
      </div>
    </form>
  );
}
