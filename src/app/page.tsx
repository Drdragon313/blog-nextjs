import styles from "@/app/ui/styles/home.module.css";
import Image from "next/image";
export default function Home() {
	return (
		<main
			className={`flex items-center justify-center min-h-screen ${styles.bg_home}`}
		>
			<div className="container mx-auto p-4 relative">
				<div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:flex-col">
					<div className="relative justify-center items-center md:hidden flex">
						<Image
							alt="img"
							src="/bg_blog_mb.jpg"
							width={1000}
							height={760}
							className="z-10 rounded-lg"
						/>
					</div>
					<div className="flex flex-col justify-center">
						<div className="border bottom-2 p-4 rounded-lg border-purple-400">
							<h1 className={`text-4xl font-bold mb-4 ${styles.text_home}`}>
								Welcome
							</h1>
							<p className="text-lg text-gray-700 mb-4">
								This is my blog site you can visit any time you want. <br></br>{" "}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
								velit amet nesciunt illo maxime excepturi exercitationem
								numquam, sint consequatur ipsum nulla. Voluptatibus ea vitae rem
								nulla accusantium sapiente est numquam?
							</p>
							<a
								href="/blog/posts"
								className={`outline outline-1 outline-offset-2 border-purple-700 text-purple-700 hover:text-white py-2 px-4 rounded hover:bg-purple-800 md:w-auto ${styles.fit_content_home}`}
							>
								Go to Blog
							</a>
						</div>
					</div>
					<div className="relative justify-center items-center md:flex hidden">
						<Image
							alt="img"
							src="/bg_blog.jpg"
							width={1000}
							height={760}
							className="z-10 rounded-full"
						/>
					</div>
				</div>
			</div>
			<div className="bg-purple-800 hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0"></div>
		</main>
	);
}
