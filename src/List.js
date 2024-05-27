const List = ({ todolist, deleteHandler }) => {
  return (
    <div>
      {todolist.map((to, index) => (
        <div key={index}>
          <h5>
            {to} &nbsp;{" "}
            <button onClick={() => deleteHandler(index)}>Delete</button>{" "}
          </h5>
        </div>
      ))}
    </div>
  );
};
export default List;
