import { ListTodo } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral shadow-sm">
      <ListTodo className="size-7 text-white mx-1" />
      <a className="text-neutral-content text-xl">Todo List Project</a>
    </div>
  );
};

export default Navbar;
