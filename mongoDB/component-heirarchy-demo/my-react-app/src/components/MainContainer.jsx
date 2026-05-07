import UserCard from "./UserCard";

function MainContainer(props) {
  return (
    <div>
      <UserCard user={props.user} />
    </div>
  );
}

export default MainContainer;