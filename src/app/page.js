'use client'
import { useState, useEffect } from "react"
import { useMutation } from "@apollo/client"
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import SVG from '@/app/_libs/svg'

//// COMPONENTS
import Button from '@/app/_components/button'

//// MUTATIONS
import LOGIN from '@/app/_mutations/login'

//// HELPERS
import { changeInputType, verifyEmail } from "./_helpers/forms";

export default function Home() {

  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [login, { dataLoginForm, loadingLoginForm, errorLoginForm }] = useMutation(LOGIN)

  const submitLogin = async () => {
    
    if(!verifyEmail(email)) return setMessage('Email is invalid')
    if(!password) return setMessage('Password is required')
    setLoading(true)
    
    try {
      const response = await login({
        variables: {
          username: email,
          password: password,
          role: 'admin'
        }
      })

      setLoading(false)
      setMessage('')
      setCookie('token', response.data.login.token)
      setCookie('user', response.data.login)

      router.push('/account');
      
    } catch (error) {
      
      console.log(error)
      setLoading(false)
      if(error) setMessage(error.message)
    }
    
  }
  
  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-coverflex justify-center relative "
      style={{ backgroundImage: "url('/assets/loginBackground.png')" }}
    >
      <div className="absolute w-full h-screen bg-gradient-to-l to-gold from-20% from-black opacity-75 -z-5"></div>
      <div className="w-full h-screen flex justify-center items-center">
        <div
          className="w-[500px] h-[600px] bg-white flex justify-center rounded-[20px] shadow-2xl z-10"
        >
          <div className="py-10">
            <img src="./assets/logoTwo.png" alt="Logo" />
            <div className="w-full grid grid-cols-1 gap-x-2 gap-y-4 my-5">
              <h1 className="text-[28px] font-[400] leading-[30px] py-5">Login into Fabworkflow</h1>
              <div className="relative">
                <input 
                  type="text" 
                  id="hs-floating-input-email" 
                  className="
                  peer 
                  p-5 
                  block
                  w-full 
                  border-gold 
                  border-[1px] 
                  rounded-lg 
                  text-sm 
                  placeholder:text-transparent 
                  focus:border-grey 
                  focus:ring-grey 
                  disabled:opacity-50 
                  disabled:pointer-events-none 
                  dark:bg-slate-900 
                  dark:border-gray-700 
                  dark:text-black 
                  dark:focus:ring-gray-600
                  focus:pt-7
                  focus:pb-3
                  [&:not(:placeholder-shown)]:pt-7
                  [&:not(:placeholder-shown)]:pb-3
                  autofill:pt-7
                  autofill:pb-3
                  outline-gold
                  "
                  value={email}
                  onChange={(e) => (setEmail(e.target.value))}
                  placeholder="you@email.com"
                />
                <label htmlFor="hs-floating-input-email" className="absolute top-0 start-0 p-5 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-gray-500
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-gray-500">Email</label>
              </div>
              <div className="relative">
                <input 
                  id="password"
                  type="password" 
                  className="
                  peer 
                  p-5 
                  block
                  w-full 
                  border-gold 
                  border-[1px] 
                  rounded-lg 
                  text-sm 
                  placeholder:text-transparent 
                  focus:border-grey 
                  focus:ring-grey 
                  disabled:opacity-50 
                  disabled:pointer-events-none 
                  dark:bg-slate-900 
                  dark:border-gray-700 
                  dark:text-black 
                  dark:focus:ring-gray-600
                  focus:pt-7
                  focus:pb-3
                  [&:not(:placeholder-shown)]:pt-7
                  [&:not(:placeholder-shown)]:pb-3
                  autofill:pt-7
                  autofill:pb-3
                  outline-gold
                  "
                  placeholder="you@email.com"
                  value={password}
                  onChange={(e) => (setPassword(e.target.value))}
                />
                <label 
                  htmlFor="hs-floating-input-email" 
                  className="absolute top-0 start-0 p-5 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500"
                >
                  Password
                </label>
                <div 
                  className="absolute top-[25%] right-3 hover:cursor-pointer"
                  onClick={() => (changeInputType('password', 'password', 'text'))}
                >
                  <SVG
                    svg={'eye'}
                    alt="Eye"
                    width={25}
                    height={25}
                    schemeOne={'#626262'}
                  />
                </div>
              </div>
              <div 
                className="w-min flex justify-center mt-2"
                onClick={() => submitLogin()}
              >
                <Button 
                  label='Login'
                  backgroundColor={'#000000'}
                  width={50}
                  height={50}
                  font={400}
                  fullWidth={false}
                  textColor={'#FFFFFF'}
                  borderColor={'black'}
                  borderRadius={true}
                  loading={loading}
                  showSVG={false}
                  svg={'arrowRight'}
                  svgColor={'white'}
                  svgBackgroundColor={'#B78514'}
                />
              </div>
              {message && <div className="text-[16px] font-[500]">*{message}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
