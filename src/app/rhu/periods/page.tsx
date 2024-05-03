import Image from "next/image";
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

export default function PeriodsPage() {
  return (
    <div className="grid grid-cols-6 gap-8">
      <div className="col-span-2">
        <div>
          <div className="p-8 rounded-[10px] shadow-sm border">
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
              
              <div className="flex gap-8">
                <Button>Agregar</Button>
                <Button>Guardar cambios</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-span-4">
        <div className="shadow-sm rounded-[10px] border pb-4">
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
                <TableCell className="flex gap-2">
                  <Image className="cursor-pointer" src="/edit_icon.svg" alt="icon" width={30} height={30}></Image>
                  <Image className="cursor-pointer" src="/delete_icon.svg" alt="icon" width={30} height={30}></Image>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell className="font-medium">20-02-2024</TableCell>
                <TableCell>20-5-2024</TableCell>
                <TableCell className="flex gap-2">
                  <Image className="cursor-pointer" src="/edit_icon.svg" alt="icon" width={30} height={30}></Image>
                  <Image className="cursor-pointer" src="/delete_icon.svg" alt="icon" width={30} height={30}></Image>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
