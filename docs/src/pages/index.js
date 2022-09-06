/* eslint-disable @next/next/no-img-element */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const img = "/documentation/img/cute-astronaut.svg";
import styles from "./index.module.css";

const links = [
	{
		emoji: "📜",
		name: "guides",
		url: "/docs/intro",
	},
	{
		emoji: "🧑‍💻",
		name: "blog",
		url: "/blog/",
	},
	{
		emoji: "📁",
		name: "components",
		url: "http://localhost:6006/",
	},
];

function Homepage() {
	return (
		<header className={clsx("hero", styles.wrapper)}>
			<div className="container">
				<div className="row">
					<div className={clsx("col col--6")}>
						<div className={clsx(styles.imageContainer)}>
							<img src={img} role="img" width={350} alt="" />
						</div>
					</div>
					<div className={clsx("col col--6")}>
						<div>
							<h1 className="hero__title">
								<span className={clsx(styles.highlightColor)}>
									{"<"}
								</span>{" "}
								Frontend Doc{" "}
								<span className={clsx(styles.highlightColor)}>
									{">"}
								</span>
							</h1>
							<p
								className={clsx(
									"hero__subtitle",
									styles.highlightColor
								)}
							>
								{"{"}
							</p>
							{links.map((link) => (
								<p
									key={link.emoji}
									className={clsx(
										"hero__subtitle",
										styles.insideBrackets
									)}
								>
									{link.emoji}:{" "}
									<Link to={link.url}>{link.name}</Link>
								</p>
							))}

							<p
								className={clsx(
									"hero__subtitle",
									styles.highlightColor
								)}
							>
								{"}"}
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<div className={clsx(styles.home)}>
			<Layout title={siteConfig.title} description="Home Frontend Doc">
				<Homepage />
			</Layout>
		</div>
	);
}
