import ReviewOnScroll from "../ReviewOnScroll.jsx";
import emailjs from 'emailjs-com'
import {useState} from "react";


const Contact = () => {

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})




	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
			alert('Message sent!')
			setFormData({name: '', email: '', message: ''})
		}).catch(() => alert('Try again'))
	}



	return (
		<section id="contact" className='min-h-screen flex items-center justify-center py-20'>
			<ReviewOnScroll>
				<div className="px-4 w-150">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">Get In Touch</h2>
					<form action="" className="space-y-6" onSubmit={handleSubmit}>
						<div className="relative">
							<input type='name' id='name' name='name' required placeholder={'Name...'} value={formData.name}
							       onChange={(e) => setFormData({...formData, name: e.target.value})}
							       className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />

						</div>

						<div className="relative">
							<input type='email' id='email' name='email' required placeholder={'name@email.com'} value={formData.email}
							       onChange={(e) => setFormData({...formData, email: e.target.value})}
							       className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />

						</div>

						<div className="relative">
							<textarea  id='message' name='message' required placeholder={'Your Message...'} value={formData.message}
							           rows={5} onChange={(e) => setFormData({...formData, message: e.target.value})}
							       className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />

						</div>

						<button className={'w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'}>Send Message</button>
					</form>
				</div>
			</ReviewOnScroll>

		</section>
	)
}

export default Contact