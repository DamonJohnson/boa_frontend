import React from 'react'

const Login = () => {
    return (
        <>
            <section>
                <div className="py-8 lg:py-16 px-2 mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-secondary">
                        Login
                    </h2>
                    <form action="#" className="space-y-8">
                        <div>
                            <label
                                for="email"
                                className="block mb-2 text-sm font-medium text-secondary"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="password"
                                className="block mb-2 text-sm font-medium text-secondary"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="shadow-sm bg-pale-grey border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-primary-500 block w-full p-2.5 "
                                placeholder="********"
                                required
                            />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" className="ml-2 text-sm font-medium text-secondary">Remember me</label>
                            </div>
                            <a href="#" className="ml-auto text-sm font-medium text-secondary hover:underline">Lost password?</a>
                        </div>
                        <div className="flex flex-col items-center">
                            <button
                                type="submit"
                                className="py-3 px-10 text-sm font-medium text-center text-white rounded-lg  bg-secondary sm:w-fit  hover:ring-1"
                            >
                                Login to your account
                            </button>
                            <div className="text-sm pt-14 font-medium text-secondary">
                            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login