interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = ({ params }: UserPageProps) => {
  return <div>Username: {params.username}</div>;
};

export default UserPage;
