const SortButtons = () => {
  return (
    <div className="bg-ex-blue-500 font-bold flex justify-center gap-5 p-3 text-ex-grayBlue-300 absolute bottom-0 left-0 w-full rounded-lg md:p-0 md:static md:flex-1">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};

export default SortButtons;
