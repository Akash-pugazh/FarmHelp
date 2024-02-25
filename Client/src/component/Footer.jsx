import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <div className="bg-black font-semibold flex justify-end items-center gap-5 text-white py-3 w-full px-10 text-end underline underline-offset-2">
        <a href="https://twitter.com/akash_pugazh">
          <FaTwitter size={'1.4rem'} />
        </a>
        <a href="https://github.com/Akash-pugazh/FarmHelp">
          <FaGithub size={'1.4rem'} />
        </a>
        <p>&#169; Made with ❤️ from Farmhelp</p>
      </div>
    </footer>
  )
}

export default Footer
