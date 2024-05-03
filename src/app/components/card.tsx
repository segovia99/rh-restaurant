type propsCard = {
  title: string,
  value: string
}

export default function Card({ title, value }: propsCard) {
  return (
    <div className="flex flex-col border shadow-sm rounded-[10px] p-[20px]">
      <div>
        <h1 className="font-bold text-muted-foreground text-center mb-4">{ title }</h1>
      </div>
      <div className="border-b"></div>
      <div>
        <h1 className="text-[50px] font-medium text-center">{ value }</h1>
      </div>
    </div>
  );
}
