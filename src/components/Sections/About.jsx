import ReviewOnScroll from "../ReviewOnScroll.jsx";


const About = () => {

	const FrontendSkills = ['React', 'TypeScript', 'TailwindCss','Bootstrap']
	const BackendSkills = ['Api', 'NodeJs', 'Python', 'Django','AWS','PostgreSQL']

	return (
		<section id='about' className='min-h-screen flex items-center justify-center py-20'>
			<ReviewOnScroll>
				<div className="max-w-3xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
						About Me
					</h2>

					<div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
						<p className="text-gray-300 mb-6">
							Passionate dev with expertise in building scalable web applications and creating innovative solutions.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="rounded-xl hover:-translate-y-1 transition-all">
								<h3 className=" text-xl font-bold mb-4  ">Frontend</h3>
								<div className="flex flex-wrap gap-2 ">
									{FrontendSkills.map((skill,key) => (
										<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
										 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
											{skill}
										</span>
									))}
								</div>
							</div>

							<div className="rounded-xl hover:-translate-y-1 transition-all">
								<h3 className=" text-xl font-bold mb-4  ">Backend</h3>
								<div className="flex flex-wrap gap-2 ">
									{BackendSkills.map((skill,key) => (
										<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
										 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
						<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
							<h3 className='text-xl font-bold mb-4'>Education</h3>
							<ul className="list-disc list-inside text-gray-300 space-y-2 ">
								<li className="">
									<strong className="">B.S. in Information Systems</strong> - KYU (2016-2020)
								</li>
								<li className="">
									Relevant CourseWork: Data Structures, Web Development, Cloud Computing...
								</li>
							</ul>
						</div>

						<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
							<h3 className='text-xl font-bold mb-4'>Work Experience</h3>
							<div className="space-y-4 text-gray-300">
								<div className="">
									<h4 className="font-semibold">SoftWare Engnieer at Uplift (2020-present)</h4>
									<p className="">
										Developed and maintained micro services for cloud-based applications.
									</p>
								</div>

								<div className="">
									<h4 className="font-semibold">Intern at Refactory (2019)</h4>
									<p className="">
										Assisted in building frontend components and integration of REST APIs
									</p>
								</div>
							</div>
						</div>
				</div>
			</div>
			</ReviewOnScroll>
		</section>
	)
}

export default About;