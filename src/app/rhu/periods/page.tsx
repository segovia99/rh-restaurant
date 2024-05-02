import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function EmployeesPage() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="">
        <div>
          <div className="p-8 rounded-[10px] shadow border">
            <div>
              <h3 className="text-lg font-medium">Información del Periodo</h3>
              <p className="text-sm text-muted-foreground">Información correspondiente al periodo</p>
            </div>
            <div data-orientation="horizontal" role="none" className="mt-6 shrink-0 bg-border h-[1px] w-full"></div>
            <form action="" className="mt-8">
              <label className="text-sm font-medium">Fecha de inicio</label>
              <Input className="mt-2 mb-8" type="date" />

              <label className="text-sm font-medium">Fecha de cierre</label>
              <Input className="mt-2 mb-8" type="date" />
              
              <div className="flex gap-4">
                <Button>Agregar</Button>
                <Button>Guardar cambios</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="shadow-md rounded-[10px] border pb-4 col-span-3">
        <Table className="border-b">
          <TableCaption>Periodos en el sistema</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Fecha de inicio</TableHead>
              <TableHead>Fecha de cierre</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>0</TableCell>
              <TableCell className="font-medium">20-02-2024</TableCell>
              <TableCell>20-5-2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell className="font-medium">20-02-2024</TableCell>
              <TableCell>20-5-2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
