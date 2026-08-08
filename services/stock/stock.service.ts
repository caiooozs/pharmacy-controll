import { supabase } from "@/supabase/client";
import { toast } from "sonner";

export function StockService() {
  async function getStock() {
    try {
      const { data, error } = await supabase.from("stock").select("*");
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching stock:", error);
      toast.error("Erro ao buscar estoque");
    }
  }
  async function getCategories() {
    try {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Erro ao buscar categorias");
    }
  }

  async function getMovements() {
    try {
      const { data, error } = await supabase.from("movements").select("*");
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching movements:", error);
      toast.error("Erro ao buscar movimentações");
    }
  }

  return {
    getStock,
    getCategories,
    getMovements,
  };
}
