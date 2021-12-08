import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Typography } from "@material-ui/core";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

import wordsToNumbers from "words-to-numbers";
import useStyles from "./styles";

const alankey =
	"948a3e8d1ee20f69d6303168955508842e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
	const [newsArticles, setNewsArticles] = useState([]);
	const [activeArticle, setActiveArticle] = useState(-1);
	const [isOpen, setIsOpen] = useState(false);
	const classes = useStyles();
	useEffect(() => {
		alanBtn({
			key: alankey,
			onCommand: ({ command, articles, number }) => {
				if (command === "newHeadlines") {
					setNewsArticles(articles);
				} else if (command === "highlight") {
					setActiveArticle((prev) => prev + 1);
				} else if (command === "open") {
					console.log(number);
					const parsedNumber =
						number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : null;
					const article = articles[parsedNumber - 1];
					if (parsedNumber > 20) {
						alanBtn().playText("Please try that again.");
					} else if (article) {
						window.open(article.url, "_blank");
						alanBtn.playText("Opening...");
					}
				}
			},
		});
	}, []);

	return (
		<div>
			<div className={classes.logoContainer}>
				<Typography variant="h6" className={classes.title}>
					Voice Assistant Application. Use the voice <br /> button below for
					AI-assisted features in this App
				</Typography>
			</div>
			<NewsCards articles={newsArticles} activeArticle={activeArticle} />

			<footer className={classes.footer}>
				<div className={classes.socialApps}>
					<div className={classes.socialIcons}>
						{" "}
						<a
							href="https://www.facebook.com/theophilus.boakye.102/?_rdc=1&_rdr"
							target="_blank"
							rel="noreferrer"
						>
							<FaFacebookF className={classes.icons} />
						</a>
					</div>
					<div className={classes.socialIcons}>
						{" "}
						<a
							href="https://www.linkedin.com/in/theophilus-boakye-yiadom-142a071a3/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedinIn className={classes.icons} />
						</a>
					</div>
					<div className={classes.socialIcons}>
						{" "}
						<a
							href="https://github.com/THEO-184"
							target="_blank"
							rel="noreferrer"
						>
							<BsGithub className={classes.icons} />
						</a>
					</div>
					<div className={classes.socialIcons}>
						{" "}
						<a href="/" target="_blank">
							<AiOutlineMail className={classes.icons} />
						</a>
					</div>
				</div>
			</footer>
			<div className="about-creator">
				<h3>
					App Created By
					<a
						href="https://www.linkedin.com/in/theophilus-boakye-yiadom-142a071a3/"
						rel="noreferrer"
						target="_blank"
					>
						Theophilus Boakye Yiadom
					</a>
				</h3>
			</div>
		</div>
	);
};

export default App;
