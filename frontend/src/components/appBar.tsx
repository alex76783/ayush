import { Avatar } from "./Blog";

export default function AppBar() {
  return (
    <div className="flex justify-between items-center border-b px-10 py-2 w-full">
      <div className="font-bold">Medium</div>
      <div>
        <Avatar AuthorName="Sisyphus"  size="big"/>
      </div>
    </div>
  )
}
