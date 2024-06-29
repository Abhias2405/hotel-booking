export type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-6">
      <ul className="flex border border-secondary-300 rounded-lg overflow-hidden">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-4 py-2 cursor-pointer ${
              page === number
                ? "bg-accent hover:bg-hover text-white font-bold"
                : "bg-primary-200 hover:bg-primary-300 text-secondary"
            }`}
          >
            <button
              className="w-full h-full focus:outline-none"
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
