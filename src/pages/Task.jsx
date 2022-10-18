import { Box, Flex, Text, Checkbox, Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import AddTask from "../components/AddTask";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";

const Task = () => {
  const [showAddNewTaskPopup, setShowAddNewTaskPopup] = useState(false);
  const closePopup = () => {
    setShowAddNewTaskPopup(false);
  };

  const [tasks, setTasks] = useState([]);
  const toast = useToast();
  const showError = (message) => {
    toast({
      description: message,
      status: "error",
      duration: 1500,
      isClosable: true,
    });
  };
  const addNewTask = (task) => {
    if (!task) {
      showError("enter task");

      return false;
    } else {
      toast({
        description: "Task added successfully",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      const newTask = {
        id: tasks.length + 1,
        task,
        complete: false,
      };
      setTasks([...tasks, newTask]);

      return true;
    }
  };

  function complete(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          complete: !task.complete,
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <>
      <DashboardLayout>
        <Flex pl={"20px"}>
          <AddTask
            isOpen={showAddNewTaskPopup}
            closePopup={closePopup}
            addNewTask={addNewTask}
          />

          <Flex direction={"column"}>
            <Button
              mt={"20px"}
              bg={"#176fe4"}
              onClick={() => setShowAddNewTaskPopup(true)}
              w={"150px"}
            >
              Add New Task
            </Button>
            <Box mt={"20px"}>
              <Text>Tasks</Text>
              {tasks
                .filter((task) => !task.complete)
                .map((t) => (
                  <Box key={t.id}>
                    <Flex alignItems={"center"} gap={"5px"}>
                      <BsCheckCircle
                        onClick={() => {
                          complete(t.id);
                        }}
                      />
                      <Text>{t.task}</Text>
                    </Flex>
                  </Box>
                ))}
            </Box>

            <Box mt={"20px"}>
              <Text>Completed</Text>

              {tasks
                .filter((task) => task.complete)
                .map((t) => (
                  <Flex gap={"5px"} alignItems={"center"} key={t.id}>
                    <BsCheckCircleFill
                      checked={t.complete}
                      onClick={() => {
                        complete(t.id);
                      }}
                    />
                    <Text textDecoration={"line-through"}>{t.task}</Text>
                  </Flex>
                ))}
            </Box>
          </Flex>
        </Flex>
      </DashboardLayout>
    </>
  );
};

export default Task;
