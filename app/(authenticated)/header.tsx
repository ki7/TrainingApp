import IconDragon from "@/app/Icon-dragon";
import { UserButton } from "./user-button";

export function Header() {
  return (
    <header className="border-b border-white/5">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a href="/dashboard/" className="flex-1" title="home">
            <IconDragon
              viewBox="0 0 32 32"
              className="max-h-12 mt-[-0.5rem]"
              aria-hidden="true"
            />
          </a>
          <UserButton />
        </div>
      </div>
    </header>
  );
}
