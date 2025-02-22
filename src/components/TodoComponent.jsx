import { useState } from "react";
import toast from "react-hot-toast";
import { Ban } from "lucide-react";

const TodoComponent = () => {
  const [todos, setTodo] = useState([]);

  const [addTask, setAddTask] = useState({
    title: "",
    description: "",
  });

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    setTodo([...todos, addTask]);
    setAddTask({ title: "", description: "" });
    toast.success("Successfully Added Task");
  };

  return (
    <div className="grid sm:grid-1 lg:grid-cols-2">
      {/* Left Container */}
      <div className="flex  justify-center bg-neutral-content min-h-screen p-5">
        <div className="w-full max-w-full">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center">Add New Todo</h2>
              <form onSubmit={handleTodoSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    className="input input-bordered w-full "
                    value={addTask.title}
                    onChange={(e) =>
                      setAddTask({ ...addTask, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    className="input input-bordered w-full"
                    value={addTask.description}
                    onChange={(e) =>
                      setAddTask({ ...addTask, description: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-neutral w-full">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div className="h-screen bg-primary p-2 flex flex-col gap-2">
        {todos && todos.length > 0 ? (
          todos.map((todo, i) => (
            <div
              className="card bg-base-100 card-sm shadow-sm h-20 w-full"
              key={i}
            >
              <div className="card-body">
                <h2 className="card-title">{todo.title}</h2>
                <p>{todo.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-3xl text-neutral-content">
            <div>
              <Ban className="size-10" />
            </div>
            <div>
              <h1 className=" w-full"> No task available</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoComponent;
/*  
 - git config --global core.autocrlf true,
 - npm install gh-pages --save,
 - "homepage":"https://Hiiex09.github.io/todo-project",
 - "predeploy":"npm run build",
 - "deploy": "gh-pages -d dist",
 - npm run build
 - npm run deploy
 */
