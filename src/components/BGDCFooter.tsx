import { ChevronUpIcon } from "@heroicons/react/24/solid"
import { Typography } from "@material-tailwind/react"
import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaItchIo, FaLinkedin, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa"

export default function BgdcFooter() {
    return (
        <footer className="w-full bg-gray-800 p-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                <li>
                    <a href="https://www.instagram.com/binusgdc/" target="_blank">
                        <FaInstagram className="h-10 w-10" />
                    </a>
                </li>
                <li>
                    <a href="https://bgdc.itch.io/" target="_blank">
                        <FaItchIo className="h-10 w-10" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/company/binus-game-development-club/"
                        target="_blank"
                    >
                        <FaLinkedin className="h-10 w-10" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@binusgdc" target="_blank">
                        <FaYoutube className="h-10 w-10" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/binusgdc" target="_blank">
                        <FaTwitter className="h-10 w-10" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/BinusGDC/" target="_blank">
                        <FaFacebook className="h-10 w-10" />
                    </a>
                </li>
            </ul>

            <hr className="my-8 border-blue-gray-50" />
            <div className="flex flex-col items-center justify-start gap-5">
                <Typography color="white" className="text-center font-normal">
                    &copy; 2024 Binus Game Development Club
                </Typography>
            </div>
        </footer>
    )
}
