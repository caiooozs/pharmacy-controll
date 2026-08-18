import { Card } from "@/components/ui/card";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <nav className="p-6 flex justify-center items-center">
        <Card className="w-1/2 py-2">
          <div className="flex w-full items-center justify-center gap-6 text-sm">
            <Link
              href="/dashboard"
              className="transition-all transform hover:font-semibold"
            >
              Início
            </Link>
            <Link
              href="/dashboard/movements"
              className="transition-all transform hover:font-semibold"
            >
              Movimentações
            </Link>
            <Link
              href="/dashboard/categories"
              className="transition-all transform hover:font-semibold"
            >
              Categorias
            </Link>
            <Link
              href="/dashboard/charts"
              className="transition-all transform hover:font-semibold"
            >
              Gráficos
            </Link>
          </div>
        </Card>
      </nav>
    </>
  );
};
