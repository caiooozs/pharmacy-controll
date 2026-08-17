import { Button } from "@/components/ui/button";
import { DeleteButtonViewProps } from "./deleteButton.model";
import { Trash2 } from "lucide-react";
import { FaTrashAlt } from "react-icons/fa";
import { Spinner } from "@/components/ui/spinner";

export function DeleteButtonView({
  handleDelete,
  isPending,
}: DeleteButtonViewProps) {
  return (
    <>
      <div>
        <Button
          variant={"destructive"}
          onClick={handleDelete}
          disabled={isPending}
        >
          {isPending ? <Spinner /> : <FaTrashAlt />}
        </Button>
      </div>
    </>
  );
}
