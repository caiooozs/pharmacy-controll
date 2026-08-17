import { supabase } from "@/supabase/client";
import { toast } from "sonner";
import { Category, Movements, Stock } from "./types";
import { waitForDebugger } from "inspector";

export function StockService() {
  async function getStock(): Promise<Stock[]> {
    try {
      const { data, error } = await supabase
        .from("stock")
        .select("*, category:categories(*)");
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching stock:", error);
      toast.error("Erro ao buscar estoque");
      throw error;
    }
  }
  async function getCategories(): Promise<Category[]> {
    try {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Erro ao buscar categorias");
      throw error;
    }
  }

  async function getMovements(): Promise<Movements[]> {
    try {
      const { data, error } = await supabase.from("movements").select("*");
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching movements:", error);
      toast.error("Erro ao buscar movimentações");
      throw error;
    }
  }
  async function createStock(stock: Stock) {
    try {
      const { data, error } = await supabase
        .from("stock")
        .insert(stock)
        .select()
        .single();
      toast.success("Medicamento cadastrado com sucesso.");
      return data;
    } catch (error) {
      console.error("Erro ao cadastrar um medicamento: ", error);
      toast.error("Erro ao cadastrar medicamento.");
    }
  }

  async function createCategory(category: Category) {
    try {
      const { data, error } = await supabase
        .from("categories")
        .insert(category)
        .select()
        .single();
      toast.success("Categoria Cadastrada com sucesso.");
      return data;
    } catch (error) {
      console.error("Erro ao cadastrar uma categoria: ", error);
      toast.error("Erro ao cadastrar categoria.");
    }
  }

  async function createMovement(movement: Movements): Promise<Movements> {
    try {
      const { data, error } = await supabase
        .from("movements")
        .insert(movement)
        .select()
        .single();
      toast.success("Movimentação cadastrada com sucesso.");
      return data;
    } catch (error) {
      console.error("Erro ao criar uma movimentação: ", error);
      toast.error("Erro ao registrar a movimentação.");
      throw error;
    }
  }

  async function updateStock({
    id,
    stock,
  }: {
    id: string;
    stock: Stock;
  }): Promise<Stock> {
    try {
      const { data, error } = await supabase
        .from("stock")
        .update(stock)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Erro ao atualizar estoque: ", error);
      toast.error("Erro ao atualizar estoque.");
      throw error;
    }
  }
  async function updateCategory({
    id,
    category,
  }: {
    id: string;
    category: Category;
  }): Promise<Category> {
    try {
      const { data, error } = await supabase
        .from("categories")
        .update(category)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Erro ao atualizar estoque: ", error);
      toast.error("Erro ao atualizar estoque.");
      throw error;
    }
  }

  async function updateMovement({
    id,
    movement,
  }: {
    id: string;
    movement: Movements;
  }): Promise<Movements> {
    try {
      const { data, error } = await supabase
        .from("movements")
        .update(movement)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Erro ao atualizar estoque: ", error);
      toast.error("Erro ao atualizar estoque.");
      throw error;
    }
  }

  async function deleteStock(id: number): Promise<void> {
    try {
      const { error } = await supabase.from("stock").delete().eq("id", id);
    } catch (error) {
      console.error("Erro ao deletar medicamento: ", error);
      toast.error("Erro ao deletar medicação.");
      throw error;
    }
  }

  async function deleteCategory(id: string): Promise<void> {
    try {
      const { error } = await supabase.from("categories").delete().eq("id", id);
    } catch (error) {
      console.error("Erro ao deletar categoria: ", error);
      toast.error("Erro ao deletar categoria.");
      throw error;
    }
  }

  async function deleteMovement(id: string): Promise<void> {
    try {
      const { error } = await supabase.from("movements").delete().eq("id", id);
    } catch (error) {
      console.error("Erro ao deletar movimentação: ", error);
      toast.error("Erro ao deletar movimentação.");
      throw error;
    }
  }

  return {
    getStock,
    getCategories,
    getMovements,
    createStock,
    createCategory,
    createMovement,
    updateStock,
    updateCategory,
    updateMovement,
    deleteStock,
    deleteCategory,
    deleteMovement,
  };
}
