import Card from "@/app/components/card";
import { Button } from "@/components/ui/button";

export default function SpreedsheetsPage() {
  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <div className="border shadow-sm rounded-[10px] grid grid-cols-1 gap-4 p-8">
            <Button>Vista previa</Button>
            <Button>Exportar</Button>
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-8">
          <Card title="Total AFP patronal" value="$224.60" />
          <Card title="Total AFP empleado" value="$164.42" />
          <Card title="Total de hojas" value="4" />
          <Card title="Total ISSS patronal" value="$144.24" />
          <Card title="Total ISSS empleado" value="$92.45" />
          <Card title="Total horas extras diurnas" value="32" />
          <Card title="Total horas extras nocturnas" value="22" />
          <Card title="Total horas extras nocturnas" value="10" />
          <Card title="Total horas nocturnas" value="9" />
        </div>
      </div>
    </div>
  );
}
