import CategoryItem from './CategoryItem';
import { Category } from '../../../types/categories';

const Directory = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="flex flex-wrap justify-between w-full">
      {categories.map((category: Category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
