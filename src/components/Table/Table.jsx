import "./Table.css";

const Table = ({ data, checkedItemHandler }) => {
  const inputChangeHandler = (e) => {
    checkedItemHandler(e.target.id);
  };

  return (
    <table className="app__table">
      <thead>
        <tr>
          <th>Post ID</th>
          <th>User ID</th>
          <th>Titles</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={item.id ? item.id : index}>
            <td>{item?.id}</td>
            <td>{item?.userId}</td>
            <td>{item?.title?.substring(0, 20)}</td>
            <td>
              <input
                id={item.id}
                onChange={inputChangeHandler}
                className="checkbox"
                type="checkbox"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
