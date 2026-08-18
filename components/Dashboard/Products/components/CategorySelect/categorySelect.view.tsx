import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryViewProps } from "./categorySelect.model";

const CategorySelectView = ({
  items,
  value,
  onValueChange,
  invalid,
}: CategoryViewProps) => {
  return (
    <>
      <div>
        {/* `items` faz o trigger exibir o nome da categoria em vez do id. */}
        <Select items={items} value={value} onValueChange={onValueChange}>
          <SelectTrigger
            className="w-full border-white/10 sm:w-48"
            aria-invalid={invalid}
          >
            <SelectValue placeholder="Selecionar Categoria" />
          </SelectTrigger>
          <SelectContent className="border-white/10 bg-[#16211c] text-slate-100">
            {items.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default CategorySelectView;
