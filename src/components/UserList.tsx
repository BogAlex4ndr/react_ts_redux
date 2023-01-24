import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <div>
      {users.map((user) => (
        <div>
          {user.name} - username: {user.username}
          <div>phone number: {user.phone}</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
