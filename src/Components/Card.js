import React, { useState } from 'react'
import { BuildingOfficeIcon, IdentificationIcon, LinkIcon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/solid'
import axios from 'axios';

const Card = () => {
    const [user, setuser] = useState();
    const [loader, setloader] = useState(<h1 className='dark:text-white font-bold text-xl'>Search For users Now!</h1>);




    const searchuser = (e) => {
        e.preventDefault()

        if (e.target.value.value) {
            setuser()
            setloader(<><div role="status">
                <svg
                    aria-hidden="true"
                    className="mx-auto my-10 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            </>)
            const api = `https://api.github.com/users/${e.target.value.value}`
            axios.get(api)
                .then(res => {
                    setloader()
                    setuser(res.data)

                }).catch(err => {
                    setloader()
                    console.log(err)
                })
        }
    }

    

    return (
        <div className='w-[95%] max-w-[600px] h-[650px]  sm:h-[440px] flex items-center flex-col justify-between '>
            <form onSubmit={(e) => searchuser(e)} className='h-[12%] p-2 bg-white w-full shadow-lg dark:bg-slate-800 rounded-lg flex justify-around items-center'>

                <MagnifyingGlassIcon  className='w-7  text-sky-600 transition-all duration-300 hover:rotate-[20deg]' />




                <input name='value' type="text" className=' h-[90%] w-[80%] bg-transparent outline-none dark:text-white' placeholder='Search Github Username' />
                <button type='submit' className='py-2 px-3 text-white rounded-md bg-blue-500 hover:bg-blue-600'>Search</button>
            </form>

            <div className='h-[83%] bg-white w-full  sm:block my-3 shadow-lg dark:bg-slate-800 rounded-lg p-6'>

                {loader}

                {user && <>




                    <div className='w-full  flex flex-col sm:flex-row justify-between'>

                        <div className='flex flex-col sm:flex-row items-center'>

                            <img className='w-28 h-28 rounded-full bg-black' src={user.avatar_url} />

                            <div className='flex mx-4 flex-col justify-center  p-2'>
                                <h2 className='self-start text-2xl dark:text-white'>{user.login}</h2>

                                <a className='text-blue-600 self-start text-sm hover:underline cursor-pointer' href={user.html_url}>@{user.login}</a>

                                <p className='text-slate-400 my-5'>{user.bio == null ? 'this profile has no bio' : user.bio}</p>
                            </div>

                        </div>


                        <span className=' text-slate-400'>Joined at {user.created_at.slice(0, 7)}</span>

                    </div>

                    <div className=' w-full py-5 flex justify-end'>

                        <div className='w-full sm:w-[75%] h-20 rounded-md bg-slate-200 dark:bg-slate-900 items-center dark:text-white flex justify-around'>

                            <span>repos <div className='font-bold'>{user.public_repos}</div></span>
                            <span>Followers <div className='font-bold'>{user.followers}</div></span>
                            <span>Following <div className='font-bold'>{user.following}</div></span>

                        </div>

                    </div>

                    <div className='w-full flex  items-center justify-center sm:justify-end '>
                        <div className=' w-full sm:w-[75%]   h-[90px] flex items-center  justify-around'>

                            <div className='  text-sm sm:text-md h-full flex flex-col items-center justify-around pb-6 dark:text-white'>
                                <span  className='flex items-center'> <MapPinIcon className=' w-5 sm:w-6 m-3 inline' />{user.location ? user.location : 'not available'}</span>
                                <a className='hover:underline cursor-pointer flex items-center' href={user.html_url}>  <LinkIcon className=' w-5 sm:w-6 m-3 inline' />{user.html_url.slice(0, 16)}</a>
                            </div>

                            <div className=' text-sm sm:text-md  h-full flex flex-col items-center justify-around pb-6 dark:text-white'>
                                <span className='flex items-center'><BuildingOfficeIcon className=' w-5 sm:w-6 m-3 ' />{user.company ? user.company : 'not available'}</span>
                                <span className='flex items-center'> <IdentificationIcon className=' w-5 sm:w-6 m-3 '/>{user.twitter_username ? user.twitter_username : 'not available'}</span>
                            </div>

                        </div>
                    </div>




                </>}

            </div>
        </div >
    )
}

export default Card