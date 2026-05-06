import { Todos } from "./todos";
const MenuData: Array<[string, string, ...string[]]> = [
  ["Renfo Training page", "renfo-training"],
  ["Exercise page", "sets", "Exercise Reference"],
  ["Exercise Reference", "exerciseRef"],
];

const MenuLink = ({ label, href }: { label: string; href: string }) => (
  <a
    key={href}
    href={`dashboard/${href}`}
    className="text-blue-500 hover:underline m-4 block"
  >
    {label}
  </a>
);
// const Menu = (data: Array) => data[0].map(<MenuLink key={data[1]} label={data[0]} href={data[1]} />);
// TODO fix me
// data.map is undefined
const Menu = (data: typeof MenuData) => {
  console.log(data[0]);

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {data.map(([label, href]) => (
        <MenuLink key={href} label={label} href={href} />
      ))}
    </div>
  );
};

export default async function Page() {
  return (
    <div className="space-y-3">
      <div className="pb-6 text-center">
        <h1 className="text-3xl font-black tracking-tight text-black">
          Dashboard
        </h1>
        <h2 className="text-2xl font-black tracking-tight text-black mt-10">
          Pages
        </h2>
        {/* <Menu data={MenuData} /> */}

        {[
          ["Renfo Training page", "renfo-training"],
          ["Exercise page", "sets", "Exercise Reference"],
          ["Exercise Reference", "exerciseRef"],
        ].map(([label, link]) => (
          <a
            key={link}
            href={`dashboard/${link}`}
            className="text-blue-500 hover:underline m-4 block"
          >
            {label}
          </a>
        ))}
        <h2 className="text-2xl font-black tracking-tight text-black mt-10">
          Todos
        </h2>
        <p className="text-black/60">
          The todos you add below are created inside your own database.
        </p>
      </div>
      <Todos />
    </div>
  );
}
