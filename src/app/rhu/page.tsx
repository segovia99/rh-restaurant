"use client";
import Card from "@/app/components/card";
import { Chart, CategoryScale, BarElement, LinearScale } from "chart.js";
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);

export default function rhuPage() {
  const data = {
    labels: ["Deposito a empleados", "Deposito a planilla única"],
    datasets: [{
      label: "Resumen",
      data: [1462.62, 544.29]
    }]
  }
  
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-2 p-8 border shadow-sm rounded-[10px]">
          <Bar data={ data } />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-8">
          <div>
            <Card title="Empleados registrados" value="2"/>
          </div>
          <div>
            <Card title="Periodo actual" value="1" />
          </div>
          <div>
            <Card title="Total deposito a empleados" value="$1462.62" />
          </div>
          <div>
            <Card title="Total deposito a planilla única" value="$544.29" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <Card title="Inicio del periodo" value="1/5/2024"/>
        </div>
        <div>
          <Card title="Fin del periodo" value="31/5/2024"/>
        </div>
      </div>
    </div>
  );
}
