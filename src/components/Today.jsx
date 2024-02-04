import React from "react";
import { Delete, Edit, Add, PlusCircle } from "./Icons";
import { format, startOfWeek, endOfWeek, parseISO } from "date-fns";

const Today = ({
  openAddModal,
  handleUpdateDone,
  openDeleteModal,
  openEditModal,
  tasks,
  tasksForToday,
  searchQuery,
  filteredTasks,
}) => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex justify-between">
        <div className="text-white font-bold text-lg">Today</div>
      </div>
      <div className="items-center">
        {tasksForToday.length === 0 && !searchQuery ? (
          <>
            <div className="text-center flex flex-col p-[20%] gap-2">
              <p className="text-gray-500">Hurray! No more todos for today!</p>
              <div className="w-2rem">
                <button
                  className="bg-gray-400 rounded py-1 px-2 hover:bg-slate-900 hover:text-white"
                  onClick={openAddModal}
                >
                  Add Todo
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <ul className="text-white w-full flex flex-col gap-2 ">
              {searchQuery ? (
                filteredTasks.map(
                  (task, index) =>
                    format(new Date(), "yyyy-MM-dd") === task.dueDate && (
                      // Display filtered tasks
                      <li
                        key={index}
                        className={`p-3 flex justify-between gap-2 bg-slate-900 rounded-lg group ${
                          task.done ? "opacity-[70%]" : ""
                        } `}
                        style={{
                          overflow: "hidden",
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                        }}
                      >
                        <div
                          className="flex items-center gap-2"
                          onClick={() => {
                            handleUpdateDone(task._id, task.task);
                            task.done = !task.done;
                          }}
                        >
                          <div className="flex items-center">
                            <button
                              className={`rounded-full border-2 h-5 w-5 ${
                                task.done ? "bg-teal-600" : ""
                              }`}
                            >
                              {/* {task.done && (
                                      <span className="bg-teal-600 text-white text-xs h-5 w-5 rounded-full">
                                        &#x2713;
                                      </span>
                                    )} */}
                            </button>
                          </div>
                          <div className={`${task.done ? "line-through" : ""}`}>
                            {task.task}
                          </div>
                        </div>
                        <div className="hidden group-hover:flex ">
                          <div className="font-bold ">
                            {/* &#8285; */}
                            <div className="flex gap-2">
                              <div>
                                <button onClick={() => openDeleteModal(task)}>
                                  <Delete />
                                </button>
                              </div>
                              <div>
                                <button onClick={() => openEditModal(task)}>
                                  <Edit />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                )
              ) : (
                <>
                  {tasksForToday.map((task, index) => (
                    <li
                      key={index}
                      className={`p-3 flex justify-between gap-2 bg-slate-900 rounded-lg group ${
                        task.done ? "opacity-[70%]" : ""
                      } text-wrap`}
                      style={{
                        overflow: "hidden",
                        whiteSpace: "normal",
                        wordWrap: "break-word",
                      }}
                    >
                      <div
                        className="flex items-center gap-2"
                        onClick={() => handleUpdateDone(task._id, task.task)}
                      >
                        <div className="flex items-center">
                          <button
                            className={`rounded-full border-2 h-5 w-5 ${
                              task.done ? "bg-teal-600" : ""
                            }`}
                          >
                            {/* {task.done && (
                                      <span className="bg-teal-600 text-white text-xs h-5 w-5 rounded-full">
                                        &#x2713;
                                      </span>
                                )} */}
                          </button>
                        </div>

                        <div
                          className={` ${task.done ? "line-through" : ""} `}
                          // style={{
                          //   flexShrink: 1,
                          //   minWidth: 0,
                          // }}
                        >
                          {task.task}
                        </div>
                      </div>

                      <div className="hidden group-hover:flex">
                        <div className="font-bold ">
                          {/* &#8285; */}
                          <div className="flex gap-2">
                            <div>
                              <button onClick={() => openDeleteModal(task)}>
                                <Delete />
                              </button>
                            </div>
                            <div>
                              <button onClick={() => openEditModal(task)}>
                                <Edit />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}

                  {tasksForToday.length != 0 && (
                    <div className="flex justify-center items-center p-[7%]">
                      <button
                        className="hover:text-slate-900 text-gray-200"
                        onClick={openAddModal}
                      >
                        <PlusCircle />
                      </button>
                    </div>
                  )}
                </>
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Today;
