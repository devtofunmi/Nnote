import { Box, Flex, Text, Checkbox } from "@chakra-ui/react";
import React, { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "i wanna code",
      complete: false,
    },
    {
      id: 2,
      title: "i wanna watch movies",
      complete: false,
    },
    {
      id: 3,
      title: "i wanna chat with the she",
      complete: false,
    },
    {
      id: 4,
      title: "i wanna eat",
      complete: false,
    },
  ]);

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
        <Flex>
          <Flex direction={"column"}>
            <Box>
              <Text>Tasks</Text>
              {tasks
                .filter((task) => !task.complete)
                .map((t) => (
                  <Box key={t.id}>
                    <Flex>
                      <Checkbox
                        onChange={() => {
                          complete(t.id);
                        }}
                      />
                      <Text>{t.title}</Text>
                    </Flex>
                  </Box>
                ))}
            </Box>

            <Box mt={"20px"}>
              <Text>Completed</Text>

              {tasks
                .filter((task) => task.complete)
                .map((t) => (
                  <Flex key={t.id}>
                    <Checkbox
                      checked={t.complete}
                      onChange={() => {
                        complete(t.id);
                      }}
                    />
                    <Text textDecoration={"line-through"}>{t.title}</Text>
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
