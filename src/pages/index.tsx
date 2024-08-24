import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Carousel,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Timeline,
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography,
} from "@material-tailwind/react"
import {
    BeakerIcon,
    CodeBracketIcon,
    PaintBrushIcon,
    CubeIcon,
    SpeakerWaveIcon,
    ChevronDownIcon,
    MapPinIcon,
    CalendarDaysIcon,
    Squares2X2Icon,
    WrenchIcon,
} from "@heroicons/react/24/solid"
import Image from "next/image"
import BgdcNav from "~/components/BGDCNav"
import Link from "next/link"
import BgdcFooter from "~/components/BGDCFooter"
import { useState } from "react"
import { FaCopy, FaDiscord, FaLine, FaWhatsapp } from "react-icons/fa"
import toast, { Toaster } from "react-hot-toast"
import { SquareOutlined } from "@mui/icons-material"
import { Hidden } from "@mui/material"

export default function Home() {
    const [lineHover, setLineHover] = useState(false)
    const [whatsAppHover1, setWhatsAppHover1] = useState(false)
    const [whatsAppHover2, setWhatsAppHover2] = useState(false)
    const [discordHover1, setDiscordHover1] = useState(false)
    const [discordHover2, setDiscordHover2] = useState(false)

    return (
        <>
            <div>
                <Toaster position="bottom-center" />
            </div>
            <BgdcNav />
            <main id="index">
                <div
                    id="landing"
                    className="flex max-h-[110vh] min-h-[900px] flex-col items-center justify-between px-8 pb-16 pt-2 lg:h-[90vh]"
                >
                    <div className="flex w-full max-w-5xl flex-col items-center lg:flex-grow lg:flex-row-reverse lg:items-center lg:justify-between">
                        <Image
                            className="hidden object-center lg:block"
                            src="/BGDCIdolFront2024.png"
                            width={408}
                            height={503}
                            alt={"BGDC sticker"}
                        />
                        <Image
                            className="object-center lg:hidden"
                            src="/BGDCIdolFront2024.png"
                            width={204}
                            height={501}
                            alt={"BGDC sticker"}
                        />
                        <div className="my-5 flex max-w-[480px] flex-grow flex-col items-center gap-4 text-center lg:justify-center lg:text-left">
                            <Typography
                                variant="h1"
                                color="white"
                                className="font-serif font-medium lg:text-7xl outline-text-3"
                            >
                                Games are dreams to life
                            </Typography>
                            <Typography
                                variant="lead"
                                color="amber"
                                className="w-full font-semibold outline-text-2"
                            >
                                Binus Game Development Club
                            </Typography>
                            <Typography variant="h5" color="white" className="text-2xl font-medium">
                                A community that celebrates games and creative passion.
                            </Typography>
                            <div className="my-1 flex w-full flex-row items-center justify-center gap-x-10 px-10 lg:justify-start lg:px-0 lg:pr-20">
                                <a href="#find-us" className="flex-grow">
                                    <Button fullWidth color="cyan" size="lg" className="sm:text-xl">
                                        Find Us
                                    </Button>
                                </a>
                                <Link
                                    href="https://bgdc.itch.io/"
                                    className="flex-grow"
                                    target="_blank"
                                >
                                    <Button
                                        fullWidth
                                        color="deep-orange"
                                        size="lg"
                                        className="sm:text-xl"
                                    >
                                        Our Games
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex w-full flex-col gap-1">
                                <Typography
                                    variant="small"
                                    className="mb-1 text-center lg:text-left"
                                >
                                    Contact Person:
                                </Typography>
                            <div className="flex w-full max-w-md flex-row justify-between gap-4">
                                <div className="flex flex-col items-start gap-2">
                                    <div className="flex flex-row items-center gap-2">
                                        <FaWhatsapp />
                                        <Typography
                                            className={
                                                whatsAppHover1
                                                    ? "hover:cursor-pointer"
                                                    : "hover:cursor-default"
                                            }
                                            variant="small"
                                            onMouseEnter={() => setWhatsAppHover1(true)}
                                            onMouseLeave={() => setWhatsAppHover1(false)}
                                            onClick={async () => {
                                                if (!whatsAppHover1) {
                                                    return
                                                }
                                                await navigator.clipboard.writeText(
                                                    "081378633352"
                                                )
                                                setWhatsAppHover1(false)
                                                toast.success("WhatsApp number copied")
                                            }}
                                        >
                                            Virly: 081378633352
                                        </Typography>
                                        <FaCopy
                                            className={`${
                                                whatsAppHover1 ? `opacity-100` : `opacity-0`
                                            } transition-opacity`}
                                        />
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <FaDiscord />
                                        <Typography
                                            className={
                                                discordHover1
                                                    ? "hover:cursor-pointer"
                                                    : "hover:cursor-default"
                                            }
                                            variant="small"
                                            onMouseEnter={() => setDiscordHover1(true)}
                                            onMouseLeave={() => setDiscordHover1(false)}
                                            onClick={async () => {
                                                if (!discordHover1) {
                                                    return
                                                }
                                                await navigator.clipboard.writeText("hina.akhina")
                                                setDiscordHover1(false)
                                                toast.success("Discord username copied")
                                            }}
                                        >
                                            hina.akhina
                                        </Typography>
                                        <FaCopy
                                            className={`${
                                                discordHover1 ? `opacity-100` : `opacity-0`
                                            } transition-opacity`}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <FaWhatsapp />
                                        <Typography
                                            className={
                                                whatsAppHover2
                                                    ? "hover:cursor-pointer"
                                                    : "hover:cursor-default"
                                            }
                                            variant="small"
                                            onMouseEnter={() => setWhatsAppHover2(true)}
                                            onMouseLeave={() => setWhatsAppHover2(false)}
                                            onClick={async () => {
                                                if (!whatsAppHover2) {
                                                    return
                                                }
                                                await navigator.clipboard.writeText(
                                                    "085156292898"
                                                )
                                                setWhatsAppHover2(false)
                                                toast.success("WhatsApp number copied")
                                            }}
                                        >
                                            Raul: 085156292898
                                        </Typography>
                                        <FaCopy
                                            className={`${
                                                whatsAppHover2 ? `opacity-100` : `opacity-0`
                                            } transition-opacity`}
                                        />
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <FaDiscord />
                                        <Typography
                                            className={
                                                discordHover2
                                                    ? "hover:cursor-pointer"
                                                    : "hover:cursor-default"
                                            }
                                            variant="small"
                                            onMouseEnter={() => setDiscordHover2(true)}
                                            onMouseLeave={() => setDiscordHover2(false)}
                                            onClick={async () => {
                                                if (!discordHover2) {
                                                    return
                                                }
                                                await navigator.clipboard.writeText("yuukito2")
                                                setDiscordHover1(false)
                                                toast.success("Discord username copied")
                                            }}
                                        >
                                            yuukito2
                                        </Typography>
                                        <FaCopy
                                            className={`${
                                                discordHover2 ? `opacity-100` : `opacity-0`
                                            } transition-opacity`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <br></br>
                    <Typography
                        variant="h2"
                        color="white"
                        className="text-center underline lg:text-5xl"
                    >
                        OPEN FOR ALL REGIONS
                    </Typography>
                    <a className="hidden" href="#">
                        <ChevronDownIcon className="h-6 w-6" />
                    </a>
                </div>
                <div
                    id="about-bgdc"
                    className="relative flex flex-col items-center px-5 py-20"
                >
                    <Image
                        className="left-10 top-80 hidden 2xl:absolute 2xl:block"
                        src={"/IdolPlay.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <Typography
                        variant="h2"
                        className="text-center font-serif text-5xl font-medium outline-text-3"
                    >
                        About BGDC
                    </Typography>
                    <Typography variant="small" color="light-gray" className="text-center">
                        Play. Observe. Develop.
                    </Typography>
                    <br />
                    <div className="flex w-full max-w-3xl flex-col items-center justify-start gap-14 2xl:gap-10">
                        <div className="grid w-full grid-cols-1 place-items-stretch gap-10 2xl:h-80 2xl:grid-cols-2">
                            <div className="order-last 2xl:order-none">
                                <Typography
                                    variant="h3"
                                    className="mb-1 text-left font-serif font-medium outline-text-3"
                                >
                                    A Passion for Games
                                </Typography>
                                <Typography variant="paragraph" className="pr-5">
                                    Founded in 2013, BGDC is a welcoming and supportive place for
                                    people passionate and creative about games. We strive to unlock
                                    the potential of the game development industry in Indonesia
                                    through education, public events and member activities.
                                </Typography>
                            </div>
                            <div className="mx-auto max-h-96 w-full max-w-md rounded-xl bg-[#62afe7]">
                                <Image
                                    className="h-full w-full rounded-xl object-scale-down object-center"
                                    src="/play-observe-develop-1.jpg"
                                    alt="mascots: play, observe, develop"
                                    width={1500}
                                    height={900}
                                />
                            </div>
                        </div>
                        <hr className="mx-auto h-1 w-full max-w-sm rounded border-0 bg-gray-100 2xl:hidden" />
                        <div className="grid h-fit w-full grid-cols-1 place-items-stretch gap-10 2xl:h-80 2xl:grid-cols-2">
                            <Carousel
                                className="mx-auto max-h-96 max-w-md"
                                navigation={(_props) => <></>}
                                loop
                                autoplay
                                autoplayDelay={10000}
                            >
                                <div className="flex h-full w-full flex-col items-stretch gap-2">
                                    <Image
                                        className="h-full w-full rounded-xl object-cover"
                                        src="/boms-polka.png"
                                        alt="BGDC Minecraft Skyblock"
                                        width={1080}
                                        height={720}
                                    />
                                    <Typography variant="small" color="white">
                                        {"BGDC Minecraft Skyblock. Credit: Xevi"}
                                    </Typography>
                                </div>
                                <div className="flex h-full w-full flex-col items-stretch gap-2">
                                    <Image
                                        className="h-full w-full rounded-xl object-cover"
                                        src="/gathering-omega-strikers.png"
                                        alt="Omega Strikers Gathering"
                                        width={1080}
                                        height={720}
                                    />
                                    <Typography variant="small" color="white">
                                        {"Gathering: Omega Strikers"}
                                    </Typography>
                                </div>
                                <div className="flex h-full w-full flex-col items-stretch gap-2">
                                    <Image
                                        className="h-full w-full rounded-xl object-cover"
                                        src="/ikea-raid-1.jpg"
                                        alt="BGDC Ikea Raid 2022"
                                        width={1080}
                                        height={720}
                                    />
                                    <Typography variant="small" color="white">
                                        {"BGDC Ikea Raid 2022"}
                                    </Typography>
                                </div>
                            </Carousel>
                            <div className="order-last 2xl:order-none">
                                <Typography
                                    variant="h3"
                                    className="mb-1 text-left font-serif font-medium outline-text-3"
                                >
                                    Community
                                </Typography>
                                <Typography variant="paragraph" className="pr-5">
                                    {`Community is the lifeblood of BGDC. Join a vibrant and diverse collection of enthusiasts who love to share their many passions. 
                                        Connect with fellow writers, designers, artists, programmers and more, some of which have industry experience.
                                        Bond with monthly member gatherings and subcommunities. There's a little something for everyone here.`}
                                </Typography>
                            </div>
                        </div>
                        <hr className="mx-auto h-1 w-full max-w-sm rounded border-0 bg-gray-100 2xl:hidden" />
                    </div>
                </div>
                <div
                    id="activities"
                    className="relative flex flex-col items-center px-5 py-20"
                >
                    <Image
                        className="right-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/IdolObs.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <div className="flex max-w-5xl flex-col gap-3">
                        <Typography
                            variant="h2"
                            className="text-center font-serif text-6xl font-medium outline-text-3"
                        >
                            Activities!
                        </Typography>
                        <Typography
                            variant="lead"
                            className="my-2 text-center sm:text-3xl lg:text-4xl"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident? Nihil enim, harum accusantium qui laudantium esse ratione omnis error soluta nobis magni! Facere illo ut officiis, illum quisquam quod!
                        </Typography>
                        <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                        <div className="justify-center flex">
                            <div className="max-w-3xl">
                                <div className="w-full place-items-stretch gap-10 2xl:grid-cols-2">
                                    <div className="order-last 2xl:order-none">
                                        <Typography
                                            variant="h3"
                                            className="text-center font-serif font-medium sm:text-5xl outline-text-3"
                                        >
                                            Kelas
                                        </Typography>
                                        <Typography variant="paragraph" className="pr-5">
                                            {`Kelas BGDC lorem`}
                                        </Typography>
                                    </div>
                                    <Carousel
                                        className="rounded-xl"
                                        navigation={(_props) => <></>}
                                        loop
                                        autoplay
                                        autoplayDelay={10000}
                                    >
                                        <div className="flex-w-3xl">
                                            <Image
                                                className="h-full w-full rounded-xl object-cover"
                                                src="/2d-art-1.png"
                                                alt="Kelas 2d art"
                                                width={1080}
                                                height={900}
                                            />
                                            <Typography variant="small" color="white">
                                                {"Kelas 2d art"}
                                            </Typography>
                                        </div>
                                        <div className="flex-w-3xl">
                                            <Image
                                                className="h-full w-full rounded-xl object-cover"
                                                src="/3d-art-1.png"
                                                alt="Kelas 3d art"
                                                width={1080}
                                                height={900}
                                            />
                                            <Typography variant="small" color="white">
                                                {"Kelas 3d art"}
                                            </Typography>
                                        </div>
                                        <div className="flex-w-3xl">
                                            <Image
                                                className="h-full w-full rounded-xl object-cover"
                                                src="/oogpclass.png"
                                                alt="Kelas OOGP"
                                                width={1080}
                                                height={900}
                                            />
                                            <Typography variant="small" color="white">
                                                {"Kelas OOGP"}
                                            </Typography>
                                        </div>
                                        <div className="flex-w-3xl">
                                            <Image
                                                className="h-full w-full rounded-xl object-cover"
                                                src="/class-prog-1.png"
                                                alt="Kelas Programming"
                                                width={1080}
                                                height={900}
                                            />
                                            <Typography variant="small" color="white">
                                                {"Kelas Programming"}
                                            </Typography>
                                        </div>
                                        <div className="flex-w-3xl">
                                            <Image
                                                className="h-full w-full rounded-xl object-cover"
                                                src="/game-design-1.png"
                                                alt="Kelas Game Design"
                                                width={1080}
                                                height={900}
                                            />
                                            <Typography variant="small" color="white">
                                                {"Kelas Game Design"}
                                            </Typography>
                                        </div>
                                        <div className="flex-w-3xl">
                                            <Image
                                                className="h-full w-full rounded-xl object-cover"
                                                src="/sound-1.png"
                                                alt="Kelas Game Sound"
                                                width={1080}
                                                height={900}
                                            />
                                            <Typography variant="small" color="white">
                                                {"Kelas Game Sound"}
                                            </Typography>
                                        </div>
                                    </Carousel>
                                </div>
                                <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                                <div className="w-full place-items-stretch gap-10 2xl:grid-cols-2">
                                    <div className="order-last 2xl:order-none">
                                        <Typography
                                            variant="h3"
                                            className="text-center font-serif font-medium sm:text-5xl outline-text-3"
                                        >
                                            Gathering
                                        </Typography>
                                        <Typography variant="paragraph" className="pr-5">
                                            {`Gathering BGDC lorem`}
                                        </Typography>
                                    </div>
                                    <Carousel
                                        className="rounded-xl"
                                        navigation={(_props) => <></>}
                                        loop
                                        autoplay
                                        autoplayDelay={10000}
                                    >
                                        <div className="flex-w-3xl">
                                            <Image
                                                className="h-full w-full rounded-xl object-cover"
                                                src="/IdolPlay.png"
                                                alt="Play"
                                                width={1080}
                                                height={900}
                                            />
                                            <Typography variant="small" color="white">
                                                {"Kelas 2d art"}
                                            </Typography>
                                        </div>
                                        <div className="flex-w-3xl">
                                            <Image
                                                className="h-full w-full rounded-xl object-cover"
                                                src="/IdolObs.png"
                                                alt="Obs"
                                                width={1080}
                                                height={900}
                                            />
                                            <Typography variant="small" color="white">
                                                {"Kelas 3d art"}
                                            </Typography>
                                        </div>
                                        <div className="flex-w-3xl">
                                            <Image
                                                className="h-full w-full rounded-xl object-cover"
                                                src="/IdolDev.png"
                                                alt="Dev"
                                                width={1080}
                                                height={900}
                                            />
                                            <Typography variant="small" color="white">
                                                {"Kelas OOGP"}
                                            </Typography>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="events"
                    className="relative flex flex-col items-center px-5 py-20"
                >
                    <Image
                        className="left-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/IdolDev.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <div className="flex max-w-5xl flex-col gap-3">
                        <Typography
                            variant="h2"
                            className="text-center font-serif font-medium sm:text-6xl outline-text-3"
                        >
                            Events
                        </Typography>
                        <Typography
                            variant="lead"
                            className="my-2 text-center sm:text-3xl lg:text-4xl"
                        >
                            Events are the heartbeat of BGDC, bringing together our community in exciting and dynamic ways. Our calendar is packed with opportunities to grow, learn, and celebrate our shared passion for game development.{" "}
                        </Typography>
                    </div>
                    <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                    <div className="max-w-3xl">
                        {[
                            {
                                eventTitle: "BGDJam",
                                screenshotRefs: [
                                    "/BGDJamPreview.png",
                                ],
                                description:
                                    "BGDjam is a game development competition organized by BGDC, where participants are challenged to create a game within a limited time based on a specific theme. This event encourages creativity, teamwork, and technical skills, providing developers with an opportunity to bring innovative game ideas to life under time constraints.",
                            },
                            {
                                eventTitle: "Company Visit",
                                screenshotRefs: [
                                    "/ComVisPreview1.webp",
                                    "/ComVisPreview2.webp",
                                    "/ComVisPreview3.png",
                                ],
                                description:
                                    "Company Visit is an annual event organized by BGDC, where members visit game companies in Indonesia. Last year, we conducted a virtual visit to Glory Jam, and this year, the event will be held offline, allowing participants to visit the companies in person. This activity offers a unique opportunity to gain insights into the game development industry and connect with professionals in the field.",
                            },
                            {
                                eventTitle: "Indienesia Game Festival",
                                screenshotRefs: [
                                    "/IGFGloryJam2024.png",
                                    "/IGFJitok2024.png",
                                    "/IGFSamudra2024.png",
                                    "/IGFWebinar2024.png",
                                    "/IGFWebinar22024.png",
                                    "/IGFWinners2024.png",
                                ],
                                description:
                                    "Indienesia Game Festival (IGF) is BGDC's largest annual event that lasts three days. This virtual festival features game developers from across Indonesia showcasing their games, offering participants the chance to interact directly with the creators. In addition to the exhibition, the event also includes webinars that delve into various aspects of game development.",
                            },
                        ].map((element, i) => (
                            <div key={i}>
                                <div className="flex flex-col items-center gap-3 text-center">
                                    <div>
                                        <Typography
                                            variant="h3"
                                            className="text-center font-serif font-medium sm:text-5xl outline-text-3"
                                        >
                                            {element.eventTitle}
                                        </Typography>
                                    </div>
                                    <Carousel
                                        className="rounded-xl"
                                        autoplayDelay={8000 + i * 1000}
                                        autoplay
                                        loop
                                    >
                                        {element.screenshotRefs.map((ssRef, i) => (
                                            <Image
                                                key={i}
                                                src={ssRef}
                                                alt={`${element.eventTitle}-screenshot${(
                                                    i + 1
                                                ).toString()}`}
                                                className="h-full w-full object-cover"
                                                width={1200}
                                                height={720}
                                            />
                                        ))}
                                    </Carousel>
                                    <Typography variant="paragraph" className="w-full text-left">
                                        {element.description}
                                    </Typography>
                                </div>
                                <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                            </div>
                        ))}
                    </div>
                </div>
                
                <div id="footer"></div>
            </main>
            <BgdcFooter />
        </>
    )
}
