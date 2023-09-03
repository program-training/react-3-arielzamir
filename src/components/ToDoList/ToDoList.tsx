import { useEffect, useState } from "react";

interface UserTasksProps {
  userId: number;
}

const UserTasks: React.FC<UserTasksProps> = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTasks(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [userId]);

  return (
    <div>
      <h3>User's Tasks</h3>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserTasks;
