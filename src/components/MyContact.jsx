import React, { useState } from "react"
import { FaGithub, FaLinkedin, FaX } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

const CONTACT_EMAIL = "byimbog250@gmail.com"
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        honey: "",
    })
    const [status, setStatus] = useState("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((current) => ({ ...current, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (status === "sending") return

        setStatus("sending")
        setErrorMessage("")

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _honey: formData.honey,
                    _captcha: "false",
                    _template: "table",
                    _subject: formData.subject
                        ? `Portfolio message: ${formData.subject}`
                        : "New message from portfolio contact form",
                }),
            })

            const result = await response.json()
            const succeeded = response.ok && (result.success === true || result.success === "true")

            if (!succeeded) {
                throw new Error(result.message || "Could not send your message.")
            }

            setStatus("success")
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                honey: "",
            })
        } catch (error) {
            setStatus("error")
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please email me directly."
            )
        }
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gradient-to-br dark:from-gray-950 dark:to-black py-20 px-4">
            <div className="max-w-6xl w-full">

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-12">
                    Get In Touch
                </h1>


                <div className="
                    w-full 
                    flex 
                    flex-col 
                    lg:flex-row 
                    gap-6
                    text-slate-900 dark:text-white
                ">


                    {/* FORM */}
                    <div className="
                        w-full 
                        lg:w-[60%]
                    ">

                        <form
                            onSubmit={handleSubmit}
                            className="
                            bg-white dark:bg-gray-800 
                            shadow-sm dark:shadow-none 
                            p-5 
                            md:p-6
                            rounded-xl
                        ">

                            <label htmlFor="contact-name" className="font-semibold mt-3 block">
                                Name
                            </label>

                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="
                                bg-slate-100 dark:bg-gray-900 
                                w-full 
                                px-3 
                                py-3 
                                text-slate-700 dark:text-white/70 
                                mt-2 
                                rounded-lg
                                outline-none
                                focus:ring-2
                                focus:ring-[#80db66]
                                "
                            />


                            <label htmlFor="contact-email" className="font-semibold mt-4 block">
                                Email
                            </label>

                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="youremail@example.com"
                                className="
                                bg-slate-100 dark:bg-gray-900 
                                w-full 
                                px-3 
                                py-3 
                                text-slate-700 dark:text-white/70 
                                mt-2 
                                rounded-lg
                                outline-none
                                focus:ring-2
                                focus:ring-[#80db66]
                                "
                            />


                            <label htmlFor="contact-subject" className="font-semibold mt-4 block">
                                Subject
                            </label>

                            <input
                                id="contact-subject"
                                name="subject"
                                type="text"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="How can I help?"
                                className="
                                bg-slate-100 dark:bg-gray-900 
                                w-full 
                                px-3 
                                py-3 
                                text-slate-700 dark:text-white/70 
                                mt-2 
                                rounded-lg
                                outline-none
                                focus:ring-2
                                focus:ring-[#80db66]
                                "
                            />


                            <label htmlFor="contact-message" className="font-semibold mt-4 block">
                                Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project"
                                className="
                                bg-slate-100 dark:bg-gray-900 
                                w-full 
                                h-32
                                px-3 
                                py-3 
                                text-slate-700 dark:text-white/70 
                                mt-2 
                                rounded-lg
                                resize-none
                                outline-none
                                focus:ring-2
                                focus:ring-[#80db66]
                                "
                            />

                            <input
                                type="text"
                                name="honey"
                                value={formData.honey}
                                onChange={handleChange}
                                tabIndex={-1}
                                autoComplete="off"
                                className="hidden"
                                aria-hidden="true"
                            />


                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="
                                w-full
                                py-3
                                rounded-lg
                                bg-[#80db66]
                                mt-6
                                text-black
                                font-semibold
                                hover:scale-[1.02]
                                transition
                                cursor-pointer
                                disabled:cursor-wait
                                disabled:opacity-70
                                disabled:hover:scale-100
                                "
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>

                            {status === "success" && (
                                <p className="mt-4 text-sm text-[#80db66]">
                                    Message sent. I will get back to you soon.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="mt-4 text-sm text-red-400">
                                    {errorMessage} You can also reach me at{" "}
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="underline"
                                    >
                                        {CONTACT_EMAIL}
                                    </a>.
                                </p>
                            )}


                        </form>

                    </div>



                    {/* RIGHT SIDE */}
                    <div className="
                        w-full 
                        lg:w-[40%]
                        flex
                        flex-col
                        gap-6
                    ">


                        {/* CONNECT */}
                        <div className="
                            bg-white dark:bg-gray-800 
                            shadow-sm dark:shadow-none
                            p-5
                            rounded-xl
                        ">

                            <h2 className="text-xl font-semibold">
                                Let's Connect
                            </h2>


                            <p className="
                                text-slate-600 dark:text-white/80
                                mt-3
                                leading-relaxed
                            ">
                                I'm always open to discussing new projects,
                                creative ideas, or opportunities to be part
                                of your vision.
                            </p>



                            <div className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-3
                                mt-5
                            ">

                                <button className="
                                    flex
                                    items-center
                                    gap-2
                                    bg-slate-100 dark:bg-gray-900
                                    px-4
                                    py-3
                                    rounded-lg
                                ">
                                    <FaGithub />
                                    Github
                                </button>


                                <button className="
                                    flex
                                    items-center
                                    gap-2
                                    bg-slate-100 dark:bg-gray-900
                                    px-4
                                    py-3
                                    rounded-lg
                                ">
                                    <FaLinkedin />
                                    LinkedIn
                                </button>


                                <button className="
                                    flex
                                    items-center
                                    gap-2
                                    bg-slate-100 dark:bg-gray-900
                                    px-4
                                    py-3
                                    rounded-lg
                                ">
                                    <FaX />
                                    X
                                </button>


                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="
                                    flex
                                    items-center
                                    gap-2
                                    bg-slate-100 dark:bg-gray-900
                                    px-4
                                    py-3
                                    rounded-lg
                                ">
                                    <MdEmail />
                                    Email
                                </a>


                            </div>

                        </div>



                        {/* QUICK FACTS */}
                        <div className="
                            bg-white dark:bg-gray-800 
                            shadow-sm dark:shadow-none
                            p-5
                            rounded-xl
                        ">

                            <h2 className="text-xl font-semibold">
                                Quick Facts:
                            </h2>


                            <ul className="
                                mt-5
                                space-y-4
                                text-slate-700 dark:text-white/90
                            ">

                                <li>
                                    🟢 Based in Rwanda, working globally
                                </li>

                                <li>
                                    🟢 Available for freelance projects
                                </li>

                                <li>
                                    🟢 Available for special projects and opportunities
                                </li>

                                <li>
                                    🟢 Response time: Usually within 24 hours
                                </li>

                            </ul>


                        </div>


                    </div>


                </div>

            </div>
        </section>
    )
}