"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductsViewProps } from "./products.model";
import { Button } from "@/components/ui/button";
import { FaPencil } from "react-icons/fa6";
import { DeleteButton } from "./components/DeleteButton/deleteButton";

const ProductsView = ({ products, error, isLoading }: ProductsViewProps) => {
  return (
    <div className="p-8">
      <h1 className="p-2">Relação de produtos</h1>
      <Card className="">
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-10">
              <Spinner className="size-6 text-muted-foreground" />
            </div>
          ) : error ? (
            <p className="py-10 text-center text-sm text-destructive">
              Erro ao carregar os produtos.
            </p>
          ) : !products || products.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">
              Nenhum produto cadastrado.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="text-center">
                  <TableHead className="">Nome</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead className="">Quantidade</TableHead>
                  <TableHead className="">Validade</TableHead>
                  <TableHead>Cadastrado em</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{product.category.name}</Badge>
                    </TableCell>
                    <TableCell className="">{product.quantity}</TableCell>
                    <TableCell>
                      {product.isExpired ? (
                        <span className="inline-flex items-center gap-2">
                          {product.validity}
                          <Badge variant="destructive">Vencido</Badge>
                        </span>
                      ) : (
                        product.validity
                      )}
                    </TableCell>
                    <TableCell>{product.registeredAt}</TableCell>
                    <TableCell className="flex items-center gap-2 justify-right">
                      <DeleteButton id={product.id} />
                      <Button variant={"outline"}>
                        <FaPencil />
                      </Button>
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
