import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryViewProps } from "./categorySelect.model";

const CategorySelectView = ({ data, error, isLoading }: CategoryViewProps) => {
  return (
    <>
      <div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full border-white/10 bg-[#0b1210] text-slate-200 sm:w-48">
            <SelectValue placeholder="Selecionar Categoria" />
          </SelectTrigger>
          <SelectContent className="border-white/10 bg-[#16211c] text-slate-100">
            {data &&
              data.map((category) => (
                <SelectItem key={category.name} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default CategorySelectView;
