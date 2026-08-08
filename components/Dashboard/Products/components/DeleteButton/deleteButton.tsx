"use client";

import { useDeleteButtonViewModel } from "./deleteButton.viewmodel";
import { DeleteButtonView } from "./deleteButton.view";

export function DeleteButton() {
  const deleteButtonLogic = useDeleteButtonViewModel();
  return <DeleteButtonView {...deleteButtonLogic} />;
}
