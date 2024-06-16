export interface CategoryItemProps {
  category: Category;
}

export interface Category {
  id: number;
  imageUrl: string;
  title: string;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { imageUrl, title } = category;
  return (
    <div className="relative min-w-[30%] h-[240px] flex-1 flex items-center justify-center border border-black m-[0_7.5px_15px] overflow-hidden hover:cursor-pointer group">
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="absolute select-none h-[90px] p-[0_25px] flex flex-col items-center justify-center border border-black bg-white opacity-70 group-hover:opacity-90">
        <h2 className="font-bold m-[0_6px_0] text-[22px] text-[#4a4a4a]">
          {title}
        </h2>
        <p className="font-extralight text-[16px]">SEE MORE</p>
      </div>
    </div>
  );
};

export default CategoryItem;
