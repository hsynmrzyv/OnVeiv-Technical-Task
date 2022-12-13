// Styles
import "./App.css";

// Hooks
import { useState, useEffect } from "react";

// Components
import Button from "./components/Button/Button";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";

const App = () => {
  const [list, setList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const fetchData = async (params = "", checked = []) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts${params}`
    );

    const data = await res.json();
    const newList = data.slice(0, 5);

    const updatedList = newList.filter((post) => {
      return !checked.includes(post.id);
    });

    setList(updatedList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const checkedItemHandler = (id) => {
    let newItems;
    if (checkedItems.includes(id)) {
      newItems = checkedItems.filter((itemId) => +itemId === id);
      setCheckedItems(newItems);
    } else {
      setCheckedItems((prev) => [...prev, +id]);
    }

    console.log(checkedItems);
  };

  const reloadHandler = () => {
    fetchData();
    setCheckedItems([]);
  };

  const cleanHandler = () => {
    const cleanedList = [];
    for (let i = 0; i < list.length; i++) {
      cleanedList.push({});
    }
    setList(cleanedList);
    setCheckedItems([]);
  };

  const deleteHandler = () => {
    fetchData("", checkedItems);
  };

  const getDataHandler = (postId, userId) => {
    if (postId && userId) fetchData(`?userId=${userId}&id=${postId}`);
    else fetchData();
  };

  return (
    <div className="app">
      <div className="app__actions">
        <Button onClick={reloadHandler}>Reload</Button>
        <Button onClick={cleanHandler}>Clean</Button>
        <Button onClick={deleteHandler}>Delete</Button>
      </div>
      <Table checkedItemHandler={checkedItemHandler} data={list} />
      <Form submit={getDataHandler} />
    </div>
  );
};

export default App;
