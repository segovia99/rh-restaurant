import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-3 gap-4 lg:span-row-2">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div className="border rounded-[10px] p-8 mb-4 shadow-md">
              <Image src="/logo_1.svg" alt="profile" width={360} height={360} className="rounded-md object-cover" />
            </div>
            <div className="border rounded-[10px] p-8 shadow-md">
              <Label>Nombre empleado</Label>
              <h2>John Carl</h2>
            </div>
          </div>
        </div>
        
        <div className="col-span-2 grid grid-cols-4 gap-4">
          <div className="col-span-2 p-8 rounded-[10px] shadow border">
            <div>
              <h3 className="text-lg font-medium">Información del Empleado</h3>
              <p className="text-sm text-muted-foreground">Información personal de empleado a agregar o modificar</p>
            </div>
            <div data-orientation="horizontal" role="none" className="mt-6 shrink-0 bg-border h-[1px] w-full"></div>
            <form action="" className="mt-8">
              <label className="text-sm font-medium">Nombre completo</label>
              <Input className="mt-2 mb-8" />

              <label className="text-sm font-medium">DUI</label>
              <Input className="mt-2 mb-8" />
              
              <label className="text-sm font-medium">Fecha de contratación</label>
              <Input className="mt-2 mb-8" type="date" />

              <label className="text-sm font-medium">Salario</label>
              <Input className="mt-2 mb-8" />

            </form>
          </div>

          <div className="col-span-2 p-8 rounded-[10px] shadow border">
            <form action="" className="mt-8">
              <label className="text-sm font-medium">Fecha de nacimiento</label>
              <Input className="mt-2 mb-8" type="date" />

              <label className="text-sm font-medium">Sexo</label>
              <div className="mt-2 mb-8">
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Masculino</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Femenino</Label>
                  </div>
                </RadioGroup>
                
              </div>
              
              <label className="text-sm font-medium">Cargo</label>
              <Input className="mt-2 mb-8" />

              <label className="text-sm font-medium">Salario</label>
              <Input className="mt-2 mb-8" />

              
              <div className="flex gap-4">
                <Button>Agregar</Button>
                <Button>Guardar modificaciones</Button>
              </div>
            </form>
          </div>
          
        </div>
      </div>

      <div className="shadow-md rounded-[10px] border pb-4">
        <Table className="border-b">
          <TableCaption>Empleados en el sistema</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>DUI</TableHead>
              <TableHead>Nombre completo</TableHead>
              <TableHead>Fecha de ingreso</TableHead>
              <TableHead className="text-right">Salario mensual</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">0000000-00</TableCell>
              <TableCell>John</TableCell>
              <TableCell>20-5-2024</TableCell>
              <TableCell className="text-right">$400.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">0000000-00</TableCell>
              <TableCell>Elain</TableCell>
              <TableCell>19-5-2024</TableCell>
              <TableCell className="text-right">$520.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
