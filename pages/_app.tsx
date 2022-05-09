import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className="grid justify-center grid-cols-12 gap-6 px-5 py-5 my-5 md:my-32 md:mx-52 sm:px-5">

        <div className="col-span-12 text-center bg-white dark:bg-black lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>

        <div className="col-span-12 overflow-hidden bg-white rounded-2xl dark:bg-black lg:col-span-9 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <Component class {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
