import Link from 'next/link'
import ViteLogo from '../../public/assets/vite.svg'
import ReactLogo from '../../public/assets/react.svg'
import SupabaseLogo from '../../public/assets/supabase.svg'
import TailwindcssLogo from '../../public/assets/tailwindcss.svg'
import {AiFillGithub} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { Router , useRouter} from 'next/router'
import Features from '@/components/Features'
import Subscribe from './api/subscribe'
import FormSub from '@/components/FormSubs'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Subs from '@/components/Subs'
import Banner from '@/components/Banner'
import Example from '@/components/Team'
import Mashkabet from '@/components/Maskabet'
import Contact from '@/components/Contact'

//<span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2">

export default function IndexPage({ textToCopy = 'npm create-rvtcs@latest my-app' }) {
  const [copied, setCopied] = useState(false);
  const router = useRouter()


  

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopied(true);
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };
  const btnStyle = copied ? "bg-gray-500 text-white" : "";
  return (

    <div className='flex flex-col justify-center items-center gap-10 my-10'>
      {/* <Banner/> */}
      

    <section className="container grid items-center justify-center my-10 gap-6 pb-8 pt-6 md:py-10">
      
      
      <div className='flex justify-center items-center  gap-10'>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="" >
         <ViteLogo /> 
         
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer" className="">
          <ReactLogo />
      
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"  className="">

          <TailwindcssLogo  />

       
       
        </a>
        <a href="https://supabase.com" target="_blank" rel="noreferrer"  className="">
          <SupabaseLogo />
          
         
        </a>
        
        <a href="https://clerk.com/" rel="noreferrer"  target="_blank" >
          
          <img src={'https://clerk.com/_next/image?url=%2Fimages%2Fclerk-logomark-square.svg&w=1920&q=75'} width={40} height={40} className=''   alt="React logo" />
        </a>
      </div>
      <div className="title flex justify-center items-center my-3 py-3">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500  to-red-400 bg-clip-text text-transparent to-small">Vite ➕ React ➕ Tailwindcss ➕ Supabase ➕ Clerk</h1>
      </div>


      <div className="flex max-w-[980px] flex-col items-center justify-center text-center gap-2">
        
       
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl ">
          <span className="modern block bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent px-10 py-1">
            
             A  Modern and Elegant way <br className="hidden sm:inline" />
            of creating Fullstack Application
        </span>
          </h1>
          
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl ">
          Lets help you and make your journey faster as much as possible by providing you a very hands down docs that can help you to start building projects with everything setup from frontend to backend.
        </p>
      </div>
      <div className="flex justify-center items-center  gap-10">
    <div className='bg-white  outline outline-2  outline-offset-2  rounded-md px-3 py-2 text-black'>
    
          
        <Link
          href={'/docs'}
          target="_blank"
          rel="noreferrer"
          className='bg-white'
          // className={buttonVariants({ size: "lg" })}
        >
          {/**Thsis ia place for the ccomment. */}
          Documentation
        </Link>
        </div>
        <div className='bg-white flex flex-row justify-center items-center gap-3 outline outline-2  outline-offset-2  rounded-md px-3 py-2 text-black'>
        <AiFillGithub />
        <Link
          target="_blank"
          rel="noreferrer"
          href='https://github.com/Kinfe123/RVTCS-Starter-Kit'
          // className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
        </div>
      </div>
      <div className="text-center my-1">
      <button
        onClick={copyToClipboard}
        className={
          btnStyle +
          " text-sm border w-36 border-gray-500 rounded-md p-3 transition w-fit"
        }
      >
        {copied ? "Copied ✅" : "npx create-rvtcs@latest my-app 📋"}
      </button>
    </div>
    </section>
        <Features />
        <Faq />
        <Example />
        <Mashkabet />
        <Contact />
        <FormSub />
      

        <Footer />
   
    </div>
  )
}
