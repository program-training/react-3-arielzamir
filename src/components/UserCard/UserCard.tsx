import { useState } from "react";
import UserTasks from "../ToDoList/ToDoList";

interface UserCardProps {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [showTasks, setShowTasks] = useState(false);

  const handleToggleTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>UserName: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleToggleTasks}>
        {showTasks ? "Hide Tasks" : "Show Tasks"}
      </button>
      {showTasks && <UserTasks userId={user.id} />}
    </div>
  );
};

export default UserCard;
