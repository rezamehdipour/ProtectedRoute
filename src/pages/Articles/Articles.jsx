import { useEffect, useState } from "react";
import axios from "axios";

// Images
import loadingGif from "../../images/loading.gif";

// CSS
import "./Articles.scss";

const Articles = (props) => {
	const [articles, setArticles] = useState([]);
	const handleFetchArticles = async () => {
		try {
			let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
			let reducedData = data.slice(0, 10);
			setArticles(reducedData);
		} catch (error) {
			console.log(error);
			handleFetchArticles();
		}
	};
	useEffect(() => {
		handleFetchArticles();
	}, []);

	return (
		<div className="ArticlesPage">
			{articles.length < 1 ? (
				<img src={loadingGif} alt="loading" className="loading" />
			) : (
				<ul>
					{articles.map(({ title, body }, index) => (
						<li key={index} className="article">
							<h2>{title}</h2>
							<p>{body}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Articles;
