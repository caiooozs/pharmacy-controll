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
          variant={"ghost"}
          size={"icon-sm"}
          onClick={handleDelete}
          disabled={isPending}
          aria-label="Excluir produto"
          className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
        >
          {isPending ? <Spinner /> : <FaTrashAlt />}
        </Button>
      </div>
    </>
  );
}
