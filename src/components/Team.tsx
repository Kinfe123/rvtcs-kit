const people = [
  {
    name: 'KINFEMICHAEL TARIKU',
    role: 'Certified Farmer - Tech',
    imageUrl:
      'https://media.licdn.com/dms/image/C4E03AQEp4JlItzd3bA/profile-displayphoto-shrink_800_800/0/1667893294780?e=1690416000&v=beta&t=iXNl2dqj_m2mUyjk1Un79NistCMWKFJQz2p_IVXdWVU',
  },
  // More people...
]


export default function Example() {
  return (
    <div className="bg-white dar py-24 sm:py-32 bg-transparent  bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
      <div className="text-gray-900 dark:text-white  mx-auto grid max-w-7xl gap-x-7 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
          "Effective leadership in tech requires a combination of technical expertise, strategic thinking, and strong communication skills to inspire and guide teams towards achieving innovative solutions and driving positive change in the industry."
           
          </p>
        </div>
   
        <ul role="list" className="grid gap-10  gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 ">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div className=''>
                  <h3 className="text-base font-semibold leading-7 tracking-tight">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  <i>"Try to Farm Always Before Optimizing Stuffs."</i>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

  