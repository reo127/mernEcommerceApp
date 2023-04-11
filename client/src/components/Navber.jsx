import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import cartLogo from '../assets/images/cart.svg'
import { useGetProfileQuery, useLogoutMutation } from '../reduxToolKit/services/userAPI';

const Navber = () => {
    const navigate = useNavigate()
    const [productName, setProductName] = useState('')
    const { data } = useGetProfileQuery();
    const [logout] = useLogoutMutation();

    const handleLogout = () => {
        logout()
        document.location.reload()
    }

    

    return (
        <>
            <header className="text-gray-600 body-font bg-blue-500">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-500">
                    <div className='flex items-center justify-center'>
                        <img className='cursor-pointer' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nN2YS08TURiGm8hO/RleokZ/AhuhM+0UV0ZRo2zAJcjNBSZubDu3kuiic0zQBJdsIFHDQgQ04JyZ6cLAAsQbakTDRuhMq4Y2x7xtA0JBpqWdEk/yJpNpe3j4znc9Pt//uhqj9Awv6V2Cao0KqrHIyTTlF/UMhGdBNT/iM7+od+K7nkA1SVOHeZH2BhXjS1MsYbc9evvz1pNlJk0k2T39N4tbmZzwjHd9T5ZZ26N36aZ+yw4o9DMn0+762xOHKg5Wf3uijhNpNy8bdsvD+VT4+QojiaxraYksC4+tsJYH8w72gOWxZ0XgGsPTxwXFXLh8f9ZWXzolgZFtpLxwWLM2awcV841fmjq2J7iATM8FZMO5ObKU3SsY2aLe4a9Z7N0QfRUqC44TjWtB1UhFx5MVBSN/KTq+yoKKkeKj9GrJlgMcjqNacOSvIwdkozQtuPY5mL6aliNbFHm+ygIydfiIcfSfcIgsBEQ1fI7s5pMjS5mAYsz/M7obJb3rEplNeg1HCmrWZhxeNDp3TsKyUZFUQsr1x0mH8bKR3DaZo0IgCdcKjhTUMjDvoOIUAaJ8RcZKqxCkCkLFCajGp82+F6VnUFs1Fxt8t1nZ65vNdt0fDKF+y2kIT59aB0SdReF38x/ij5S7llwAQq2Db9OcSDvWAYV+axRdSa2PlxSELiikmk83/E81F8VJ7xIz2UXieJKFVOv9OmBAog56uFqDkYLuvvrFeJna64DoguNmxtWPqx0kJJFlcXONcRJdKwvQiyCJbwXc90cc3O9BIqjWKEK71mCkoL7HW9IMhpjrLhO1F0HSNriQ5iW9faOSyPppjIbaPggSDaUuZjl+0Ti5qR4LMXMRhbrWx3vn2Y/iZiFvRdqNubXWgNcG5hw0zkWAaBLRsHoxKJEdJE/auYa1QXl9sAgwl7BlvbNZq03LryWy7EJ8xtnUxWxjxTpM/BiqvQbsGf6KoWnu/NDQgR0Bc1aUpo7lx85Vz+AiYyuMl6hzVtKP+NwsXEcEFG8Gdzk3uJtpv0iDvlIWriMAiaG6mpYLqkaKk/UrvnIWriMw8fdU2Ce1gs/hWEu2XJElI8ZRTPzN2oyNuXXPRzpps4vajI2AcO1zri4wJXoDOarlwZyDiqOVaLHw2EouCWMPv6S37xqtZYIeQsUJKvRTU8yyMX2hC0J7lLsCNjM54Rnv0JW0Di6kQzHTEVRzERWiKlfA2y0Uc06kHYJqPhVU80Pen/KX6GiA8Q4tE77DhekJT6Bqsf4AKusqYO+qxoQAAAAASUVORK5CYII=" alt='Menubar' />

                        <Link className="flex title-font font-bold items-center text-white mb-4 md:mb-0" to='/' >
                            <span className="ml-3 text-xl">FastCart</span>
                        </Link>
                    </div>

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <fieldset className="w-full space-y-1 text-gray-800" >
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            navigate(`/search/${productName}`)
                            }}>
                            <label htmlFor="Search" className="hidden">Search</label>
                            <div className="relative" >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="button" title="search" className="p-1 focus:outline-none focus:ring" >
                                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input type="search" name="Search" placeholder="Search..." className="w-72 py-2 pl-10 text-sm rounded-md  focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-blue-600" onChange={(e) => setProductName(e.target.value)} value={productName} />
                            </div>
                        </form>
                        </fieldset>
                    </nav>
                    <div className="flex items-center">
                        {
                            !(data?.success) ? <>
                                <Link to='/signup'><button className=" inline-flex items-center bg-gray-100 border-0 font-semibold py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Register </button></Link>
                                <Link to='/login'><button className="ml-4 inline-flex items-center font-semibold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Login </button></Link></> :
                                <>
                                    <Link to='/cart' className=" mr-4 ">
                                        <p className='absolute bg-[#FF9F00] rounded-full w-5 h-4 font-bold text-sm pb-5 text-center'> 3 </p>
                                        <img src={cartLogo} alt="cart" className='max-w-[80%] ' />
                                    </Link>
                                    <button className="ml-4 inline-flex items-center font-semibold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleLogout}> Logout </button>
                                </>
                        }
                    </div>
                </div>
            </header>


        </>
    )
}

export default Navber