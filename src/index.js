import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const Main = () => {
	return (
		<main>
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
			<Section />
		</main>
	);
};

const Section = () => {
	return (
		<section className="book">
			<Image />
			<BookName />
			<Description />
		</section>
	);
};

const Image = () => {
	return (
		<img
			className="image"
			src="https://images-na.ssl-images-amazon.com/images/I/81PNeyIYVfL._AC_UL127_SR127,127_.jpg"
			alt="Greenlights"
		/>
	);
};

const BookName = () => {
	return <h2 className="name">Greenlights</h2>;
};

const Description = () => {
	return <p className="desc">A book about green lights</p>;
};

ReactDom.render(<Main />, document.getElementById("root"));
