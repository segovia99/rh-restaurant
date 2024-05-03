import { Input } from "@/components/ui/input";

export default function SettingsPage() {
	return (
		<div className="grid grid-cols-1">
      <div className="grid grid-cols-4 gap-8">
        <div className="border rounded-[10px] shadow-sm p-8">
          <div>
            <h3 className="text-lg font-medium">Configuración del sistema</h3>
            <p className="text-sm text-muted-foreground">Área de modificación de prestaciones, descuentos y montos de hoja</p>
          </div>
          <div data-orientation="horizontal" role="none" className="mt-6 shrink-0 bg-border h-[1px] w-full"></div>
          <form action="" className="mt-8">
            <label className="text-sm font-medium">Porcentaje AFP patrono</label>
            <Input className="mt-2 mb-8" placeholder="8.75%" />

            <label className="text-sm font-medium">Porcentaje AFP empleado</label>
            <Input className="mt-2 mb-8" placeholder="7.25%" />

            
          </form>
        </div>

        <div className="">
          <form action="" className="border rounded-[10px] shadow-sm p-8">
            <label className="text-sm font-medium">Porcentaje ISSS patrono</label>
            <Input className="mt-2 mb-8" placeholder="7.5%" />

            <label className="text-sm font-medium">Porcentaje ISSS empleado</label>
            <Input className="mt-2 mb-8" placeholder="3%" />
          </form>
        </div>

        <div className="">
          <form action="" className="border rounded-[10px] shadow-sm p-8">
            
            <label className="text-sm font-medium">Días vacaciones</label>
            <Input className="mt-2 mb-8" placeholder="15" />

            <label className="text-sm font-medium">Porcentaje bono vacaciones</label>
            <Input className="mt-2 mb-8" placeholder="30%" />
          </form>
        </div>

        <div className="">
          <form action="" className="border rounded-[10px] shadow-sm p-8">
            
            <label className="text-sm font-medium">Rango superior ISSS patrono</label>
            <Input className="mt-2 mb-8" placeholder="1000" />

            <label className="text-sm font-medium">Rango superior ISSS empleado</label>
            <Input className="mt-2 mb-8" placeholder="1000" />
          </form>
        </div>
      </div>
		</div>
  )
}
