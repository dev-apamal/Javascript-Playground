export default function EmptyState() {
  return (
    <section className="emptyState p-6 flex flex-col gap-4 items-center justify-center">
      <img
        src="./src/assets/illustrations/making-task-list.svg"
        alt="to-do-image"
        className="w-full"
      />
      <h2 className="text-xl font-semibold text-center">
        What do you need to get done today?
      </h2>
      <p className="text-sm font-normal text-gray-500 text-center">
        By default, tasks added here will be scheduled for today.
      </p>
    </section>
  );
}
