import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import { Navbar, Typography, Button, IconButton, MobileNav } from "@material-tailwind/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function BgdcNav() {
    const [openNav, setOpenNav] = useState(false)

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 text-center lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex flex-row items-center p-1 text-xl font-normal"
            >
                <Link href={"/#about-bgdc"}>About</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex flex-row items-center p-1 text-xl font-normal"
            >
                <Link href={"/#activities"}>Activities</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex flex-row items-center p-1 text-xl font-normal"
            >
                <Link href={"/#events"}>Events</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex flex-row items-center p-1 text-xl font-normal"
            >
                <Link href={"/find-us"}>Find Us</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 text-xl font-normal"
            >
                <Link href="/faq" className="flex items-center">
                    FAQ
                    <ArrowUpRightIcon className="h-5 w-5" />
                </Link>
            </Typography>
        </ul>
    )
    return (
        <Navbar
            blurred={false}
            className="sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
        >
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link href="/">
                    <div className="flex flex-row items-center gap-5">
                        <Image
                            className=""
                            src="/bgdc-logo_small.png"
                            width={50}
                            height={50}
                            alt="BGDC Logo"
                        />

                        <Typography
                            variant="small"
                            className="mr-4 cursor-pointer py-1.5 font-medium lg:text-xs xl:text-xl"
                        >
                            Binus Game Development Club
                        </Typography>
                    </div>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <Link href="/daftar">
                        <Button color="orange" size="lg" className="hidden lg:inline-block">
                            <span>Join Up</span>
                        </Button>
                    </Link>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Link href="/daftar">
                    <Button color="orange" size="sm" fullWidth className="mb-2">
                        <span>Join Up</span>
                    </Button>
                </Link>
            </MobileNav>
        </Navbar>
    )
}
