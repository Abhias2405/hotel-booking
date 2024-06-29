type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
      <h4 className="text-lg font-bold text-secondary mb-4">Max Price</h4>
      <select
        className="p-3 bg-white border border-secondary-300 rounded-lg focus:ring-2 focus:ring-accent w-full"
        value={selectedPrice}
        onChange={(event) =>
          onChange(
            event.target.value ? parseInt(event.target.value) : undefined
          )
        }
      >
        <option value="" className="text-secondary">
          Select Max Price
        </option>
        {[50, 100, 200, 300, 500].map((price) => (
          <option
            key={price}
            value={price}
            className="text-secondary hover:bg-primary-200"
          >
            {price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
