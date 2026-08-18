"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductsViewProps } from "./products.model";
import { PackageOpenIcon, TriangleAlertIcon } from "lucide-react";
import { DeleteButton } from "./components/DeleteButton/deleteButton";
import NewProduct from "./components/NewProduct/newProduct";

const headCell =
  "h-11 px-6 text-xs font-medium uppercase tracking-wider text-muted-foreground";
const bodyCell = "px-6 py-4";

const ProductsView = ({ products, error, isLoading }: ProductsViewProps) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-border/60 pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Produtos
            </h1>
            {products && products.length > 0 && (
              <Badge
                variant="outline"
                className="border-border/70 text-muted-foreground"
              >
                {products.length}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            Medicamentos cadastrados no estoque da farmácia.
          </p>
        </div>
        <NewProduct />
      </header>

      <Card className="mt-6 gap-0 overflow-hidden bg-linear-to-b from-card to-muted/20 py-0">
        <CardContent className="px-0">
          {isLoading ? (
            /* Linhas fantasma: mantém a altura da tabela enquanto carrega. */
            <div className="divide-y divide-border/60">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-6 px-6 py-4">
                  <div className="h-4 w-1/4 animate-pulse rounded bg-muted" />
                  <div className="h-5 w-24 animate-pulse rounded-full bg-muted" />
                  <div className="h-4 w-12 animate-pulse rounded bg-muted" />
                  <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                  <div className="ml-auto h-8 w-9 animate-pulse rounded-md bg-muted" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-destructive/10">
                <TriangleAlertIcon className="size-6 text-destructive" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Erro ao carregar os produtos</p>
                <p className="text-sm text-muted-foreground">
                  Verifique sua conexão e tente novamente em instantes.
                </p>
              </div>
            </div>
          ) : !products || products.length === 0 ? (
            <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                <PackageOpenIcon className="size-6 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Nenhum produto cadastrado</p>
                <p className="text-sm text-muted-foreground">
                  Cadastre o primeiro medicamento para começar a controlar o
                  estoque.
                </p>
              </div>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-border/60 bg-muted/40 hover:bg-muted/40">
                  <TableHead className={headCell}>Nome</TableHead>
                  <TableHead className={headCell}>Categoria</TableHead>
                  <TableHead className={`${headCell} text-right`}>
                    Quantidade
                  </TableHead>
                  <TableHead className={headCell}>Validade</TableHead>
                  <TableHead className={headCell}>Cadastrado em</TableHead>
                  <TableHead className={`${headCell} text-right`}>
                    Ações
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product.id}
                    className="border-border/60 transition-colors hover:bg-muted/40"
                  >
                    <TableCell className={`${bodyCell} font-medium`}>
                      {product.name}
                    </TableCell>
                    <TableCell className={bodyCell}>
                      <Badge
                        variant="outline"
                        className="border-primary/20 bg-primary/10 text-primary"
                      >
                        {product.category.name}
                      </Badge>
                    </TableCell>
                    <TableCell
                      className={`${bodyCell} text-right font-medium tabular-nums`}
                    >
                      {product.quantity}
                    </TableCell>
                    <TableCell className={bodyCell}>
                      {product.isExpired ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="text-muted-foreground line-through">
                            {product.validity}
                          </span>
                          <Badge variant="destructive">Vencido</Badge>
                        </span>
                      ) : (
                        <span className="text-muted-foreground">
                          {product.validity}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className={`${bodyCell} text-muted-foreground`}>
                      {product.registeredAt}
                    </TableCell>
                    <TableCell className={bodyCell}>
                      <div className="flex justify-end">
                        <DeleteButton id={product.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsView;
