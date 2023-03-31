import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [ todos, setTodos ] = useState([]);
	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input type="text"  onKeyPress={(e) => { if (e.key == "Enter") {setTodos(todos.concat(inputValue)); setInputValue("") }}} onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="What do you need to do?"/>
				</li>
				{todos.map((item, index) => (
				<li><span>{item}</span> <i className="fa fa-solid fa-trash" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i></li>
				))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Home;
