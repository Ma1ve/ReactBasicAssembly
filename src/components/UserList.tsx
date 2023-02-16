import { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);

  const { fetchUsers } = useActions();
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>LOADING....</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
