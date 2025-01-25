const PagenotFound = () => {
  return (
    <div>
    <div class="flex items-center justify-center w-10/12 m-auto">
            <div class="hidden md:flex md:w-1/2 p-8">
                
            </div>
    
                <div class="my-[13rem] w-full md:w-1/2 p-4 md:p-8">
                <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">404 Not Found</h1>
                <p class="text-lg md:text-xl text-gray-200 mb-8">Oops! The page you are looking for could not be found.</p>
                <a href="/" class="px-6 py-3 bg-purple text-white rounded-lg inline-block hover:bg-purple transition duration-300 ease-in-out">Go to Home</a>
            </div>
        </div></div>
  )
}

export default PagenotFound