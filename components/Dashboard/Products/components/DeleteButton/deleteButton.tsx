"use client";

import { useDeleteButtonViewModel } from "./deleteButton.viewmodel";
import { DeleteButtonView } from "./deleteButton.view";

export function DeleteButton({ id }: { id: number }) {
  const deleteButtonLogic = useDeleteButtonViewModel(id);
  return <DeleteButtonView {...deleteButtonLogic} />;
}
