import { useState } from "react"
import axios from 'axios'
function FormSub() {

  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const subscribe = async (e:any) => {
    e.preventDefault()
    setState('Loading')

    try {
      const response = await axios.post('/api/subscribe', { email })

      setState('Success')
      setEmail('')
    } catch (e) {
      
    // setErrorMsg("Error has occured!
     setErrorMsg('Error has occured!')

      setState('Error')
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900 w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <h4 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
      <span className="modern block bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent px-0 py-1">
            
      Subscribe
       </span>
       
      </h4>
      <p className="sub-text">
        Get to notified on quality articles about fullstack development and more
        sent to your inbox. I'll send you an email once a month, no spam.
      </p>
      <form onSubmit={subscribe}>
        <div>
          <div className="form-input flex flex-row justify-start items-center gap-1 my-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <input
              required
              id="email-input"
              name="email"
              type="email"
              className="outline-none px-3 py-4 border-2 rounded-xl w-3/5 my-4 dark:border-0"
              placeholder="What's your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />


            <button
                disabled={state === 'Loading'}
                type="submit"
                className="inline-flex justify-center items-center  text-base font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 px-3 py-4 rounded-xl" 
                onClick={subscribe}
              >
                Subscribe
              </button>


          </div>
          <div className="sub-form-btn">
          
          </div>
        </div>
        {state === 'Error' && (
          <div className="error-state">{errorMsg}</div>
        )}
        {state === 'Success' && (
          <div>Awesome, you've been subscribed!</div>
        )}
      </form>
    </div>
  )
}

export default FormSub
