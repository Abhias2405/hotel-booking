type Props = {
  selectedStars: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StarRatingFilter = ({ selectedStars, onChange }: Props) => {
  return (
    <div className="bg-primary-100 p-6 rounded-lg shadow-lg border border-secondary-300">
      <h4 className="text-lg font-bold text-secondary mb-4">Property Rating</h4>
      <div className="space-y-2">
        {["5", "4", "3", "2", "1"].map((star) => (
          <label
            key={star}
            className="flex items-center gap-3 text-secondary hover:text-secondary-800 cursor-pointer"
          >
            <input
              type="checkbox"
              className="rounded border-secondary-300 text-accent focus:ring-accent"
              value={star}
              checked={selectedStars.includes(star)}
              onChange={onChange}
            />
            <span className="font-medium text-sm">{star} Stars</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default StarRatingFilter;
