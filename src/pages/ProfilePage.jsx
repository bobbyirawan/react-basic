import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();

  return (
    <div>
      <h1>username: {username}</h1>
    </div>
  );
};

export default ProfilePage;
