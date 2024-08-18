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
} from "@heroicons/react/24/solid"
import Image from "next/image"
import BgdcNav from "~/components/BGDCNav"
import Link from "next/link"
import BgdcFooter from "~/components/BGDCFooter"
import { useState } from "react"
import { FaCopy, FaDiscord, FaLine } from "react-icons/fa"
import toast, { Toaster } from "react-hot-toast"

export default function Home() {
    const [lineHover, setLineHover] = useState(false)
    const [discordHover, setDiscordHover] = useState(false)

    return (
        <>
            <div>
                <Toaster position="bottom-center" />
            </div>
            <BgdcNav />
            <main>
                <div
                    id="landing"
                    className="flex max-h-[110vh] min-h-[900px] flex-col items-center justify-between bg-magenta px-8 pb-16 pt-2 lg:h-[90vh]"
                >
                    <div className="flex w-full max-w-5xl flex-col items-center lg:flex-grow lg:flex-row-reverse lg:items-center lg:justify-between">
                        <Image
                            className="hidden object-center lg:block"
                            src="/expo23totebag.webp"
                            width={408}
                            height={503}
                            alt={"BGDC sticker"}
                        />
                        <Image
                            className="object-center lg:hidden"
                            src="/expo23totebag.webp"
                            width={204}
                            height={501}
                            alt={"BGDC sticker"}
                        />
                        <div className="my-5 flex max-w-[480px] flex-grow flex-col items-center gap-4 text-center lg:justify-center lg:text-left">
                            <Typography
                                variant="h1"
                                color="white"
                                className="font-serif font-medium lg:text-7xl"
                            >
                                Games are dreams to life
                            </Typography>
                            <Typography
                                variant="lead"
                                color="amber"
                                className="w-full font-semibold"
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
                                    Contact:
                                </Typography>
                                <div className="flex flex-col items-center gap-2 lg:items-start lg:px-0">
                                    <div className="flex flex-row items-center gap-2">
                                        <FaLine />
                                        <Typography
                                            className={
                                                lineHover
                                                    ? "hover:cursor-pointer"
                                                    : "hover:cursor-default"
                                            }
                                            variant="small"
                                            onMouseEnter={() => setLineHover(true)}
                                            onMouseLeave={() => setLineHover(false)}
                                            onClick={async () => {
                                                if (!lineHover) {
                                                    return
                                                }
                                                await navigator.clipboard.writeText(
                                                    "reynaldochandra61103"
                                                )
                                                setLineHover(false)
                                                toast.success("LINE ID copied")
                                            }}
                                        >
                                            reynaldochandra61103
                                        </Typography>
                                        <FaCopy
                                            className={`${
                                                lineHover ? `opacity-100` : `opacity-0`
                                            } transition-opacity`}
                                        />
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <FaDiscord />
                                        <Typography
                                            className={
                                                discordHover
                                                    ? "hover:cursor-pointer"
                                                    : "hover:cursor-default"
                                            }
                                            variant="small"
                                            onMouseEnter={() => setDiscordHover(true)}
                                            onMouseLeave={() => setDiscordHover(false)}
                                            onClick={async () => {
                                                if (!discordHover) {
                                                    return
                                                }
                                                await navigator.clipboard.writeText("greyze")
                                                setDiscordHover(false)
                                                toast.success("Discord username copied")
                                            }}
                                        >
                                            greyze
                                        </Typography>
                                        <FaCopy
                                            className={`${
                                                discordHover ? `opacity-100` : `opacity-0`
                                            } transition-opacity`}
                                        />
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
                    className="relative flex flex-col items-center bg-smagenta px-5 py-20"
                >
                    <Image
                        className="left-10 top-80 hidden 2xl:absolute 2xl:block"
                        src={"/PLAYIdolexpobgdc2024.png"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <Typography
                        variant="h2"
                        className="text-center font-serif text-5xl font-medium"
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
                                    className="mb-1 text-left font-serif font-medium"
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
                                    className="mb-1 text-left font-serif font-medium"
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
                        <div className="grid w-full grid-cols-1 place-items-stretch gap-10 2xl:h-80 2xl:grid-cols-2">
                            <div className="order-last 2xl:order-none">
                                <Typography
                                    variant="h3"
                                    className="mb-1 text-left font-serif font-medium"
                                >
                                    Events
                                </Typography>
                                <Typography variant="paragraph" className="pr-5">
                                    {`As a Binus UKM, we hold yearly events to further our vision and
                                    mission, from `}
                                    <Link
                                        href="/#talent-group"
                                        className="underline hover:text-blue-300"
                                    >
                                        mentoring programs
                                    </Link>
                                    {` to webinars to indie game festivals: our contributions to Indonesia's game development industry.
                                    For members, it's a fantastic opportunity to level up critical soft skills and hard skills, and to have fun working together.`}
                                </Typography>
                            </div>
                            <div className="mx-auto flex max-h-96 w-full max-w-md flex-col items-stretch gap-2">
                                <Image
                                    className="h-full w-full rounded-xl object-cover"
                                    src="/webinar-igf-2022.png"
                                    alt="Webinar IGF 2022: Insight on Indonesia's Game Industry"
                                    width={1080}
                                    height={720}
                                />
                                <Typography variant="small" color="white">
                                    {"Webinar IGF 2022: Insight on Indonesia's Game Industry"}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="kelas"
                    className="relative flex flex-col items-center bg-magenta px-8 py-20"
                >
                    <Image
                        className="right-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/OBSIdolexpobgdc2024.png"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <div className="flex max-w-5xl flex-col gap-3">
                        <Typography
                            variant="h2"
                            className="text-center font-serif text-6xl font-medium"
                        >
                            Skill Up!
                        </Typography>
                        <Typography variant="small" color="light-gray" className="text-center">
                            Class
                        </Typography>
                        <Typography
                            variant="lead"
                            className="my-2 text-center sm:text-3xl lg:text-4xl"
                        >
                            One-time price. Unlimited access to mentors and classes for{" "}
                            <strong>all</strong> skillsets, forever*.
                        </Typography>
                        <Typography variant="small" className="w-full text-center text-gray-400">
                            *As long as BGDC exists.
                        </Typography>
                        <hr className="mx-auto my-2 h-1 max-w-md rounded border-0 bg-gray-100 md:my-4" />
                        <div className="flex flex-row flex-wrap justify-center gap-10">
                            {[
                                {
                                    icon: BeakerIcon,
                                    title: "Game Design",
                                    imageRef: "/game-design-1.png",
                                    lead: "Get Creative",
                                    description:
                                        "Discover the essence of what makes games great. Learn about mechanics, story, balance and other key design concepts through vivid case studies.",
                                },
                                {
                                    icon: CodeBracketIcon,
                                    title: "Game Programming",
                                    imageRef: "/class-prog-1.png",
                                    lead: "It's Alive!",
                                    description:
                                        "Bring games to life in 2D and 3D with the Unity game engine and the C# programming language.",
                                },
                                {
                                    icon: PaintBrushIcon,
                                    title: "2D Art & Animation",
                                    imageRef: "/2d-art-1.png",
                                    lead: "Any Pen, Any Paper",
                                    description:
                                        "Our 2D class tutors on 2-dimensional fundamentals, background, character design, and implementing them into Unity.",
                                },
                                {
                                    icon: CubeIcon,
                                    title: "3D Art & Animation",
                                    imageRef: "/3d-art-1.png",
                                    lead: "Sculpt the World",
                                    description:
                                        "Our 3D class tutors modelling with Blender, from the bottom up! Includes objects, environments, characters, and how to import them in Unity.                                    ",
                                },
                                {
                                    icon: SpeakerWaveIcon,
                                    title: "Game Sound",
                                    imageRef: "/sound-1.png",
                                    lead: "Hey, Listen!",
                                    description:
                                        "Compose music and sound effects with Audacity and Ableton. Experiment with various themes and techniques for that immersive player experience.",
                                },
                            ].map((element) => {
                                return (
                                    <Card
                                        key={element.title}
                                        className="w-full max-w-3xl md:flex-row"
                                    >
                                        <CardHeader
                                            shadow={false}
                                            floated={false}
                                            className="m-0 w-full flex-grow rounded-lg md:rounded-r-none"
                                        >
                                            <Image
                                                src={element.imageRef}
                                                alt={element.title}
                                                className="h-full w-full object-cover object-left"
                                                width={1920}
                                                height={1080}
                                            />
                                        </CardHeader>
                                        <CardBody className="sm:w-96">
                                            <div className="mb-4 flex flex-row items-center gap-2">
                                                <element.icon className="h-5 w-5" />
                                                <Typography
                                                    variant="h6"
                                                    color="gray"
                                                    className="uppercase"
                                                >
                                                    {element.title}
                                                </Typography>
                                            </div>
                                            <Typography
                                                variant="h4"
                                                color="blue-gray"
                                                className="mb-2"
                                            >
                                                {element.lead}
                                            </Typography>
                                            <Typography color="gray" className="mb-8 font-normal">
                                                {element.description}
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div
                    id="talent-group"
                    className="relative flex flex-col items-center bg-[#544e67] px-5 py-20"
                >
                    <Image
                        className="left-10 top-1/3 hidden 2xl:absolute 2xl:block"
                        src={"/DEVIdolexpobgdc2024.png"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <div className="flex max-w-5xl flex-col gap-3">
                        <Typography
                            variant="h2"
                            className="text-center font-serif font-medium sm:text-6xl"
                        >
                            Create and Publish Games
                        </Typography>
                        <Typography variant="small" color="light-gray" className="text-center">
                            Talent Group
                        </Typography>
                        <Typography
                            variant="lead"
                            className="my-2 text-center sm:text-3xl lg:text-4xl"
                        >
                            Develop a game with a team from ideation to publishing.{" "}
                            <span className="underline">No experience required.</span>
                        </Typography>
                    </div>
                    <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                    <div className="max-w-3xl">
                        {[
                            {
                                gameTitle: "Shadow of the Relics",
                                studioName: "QuantumGlyph Studio",
                                batch: "6",
                                screenshotRefs: [
                                    "/relics-1.png",
                                    "/relics-2.png",
                                    "/relics-3.png",
                                    "/relics-4.png",
                                    "/relics-5.png",
                                ],
                                description:
                                    "In a world of shadows and secrets, meet Ucup — a thief like no other. For years stealing things with finesse has been Ucup's bread & butter. But life takes a twist when he learns that the things he's stolen belong to his master, Lupin.  Yet it was too late to return it since the prized treasures are now in the hands of the Sinister Shadows. For once our main character, who has been stealing all his life, would use his skills for good. Join Ucup's journey to collect the stolen relics in this 2D side-scrolling platforming adventure game.",
                                itchIoLink: "https://bgdc.itch.io/",
                            },
                            {
                                gameTitle: "Yami Hop",
                                studioName: "Pink Salamander Productions",
                                batch: "6",
                                screenshotRefs: [
                                    "/yami-6.webp",
                                    "/yami-1.webp",
                                    "/yami-2.webp",
                                    "/yami-3.webp",
                                    "/yami-4.webp",
                                    "/yami-5.webp",
                                ],
                                description:
                                    "In this game, the player takes on the character named Yami. She receives a strange vision that she believes to be her mother calling her to the surface. Before she has a chance to reach out, her vision gets increasingly blurry as she wakes up from her slumber. Determined, she has set a new goal to reach the surface to follow the vision that she saw, as she tries to search for her long-lost mother. She gathers all her items along with her trusty staff to try to escape the underworld.",
                                itchIoLink: "https://bgdc.itch.io/",
                            },
                            {
                                gameTitle: "Highway Core",
                                studioName: "Lifelessplay Productions",
                                batch: "5",
                                screenshotRefs: [
                                    "/highway-core-1.png",
                                    "/highway-core-2.png",
                                    "/highway-core-3.png",
                                ],
                                description:
                                    "You are in the middle of a busy highway filled with trucks and cars. Shoot your way through an infinite horde of enemies with the various weapons that you can use! Can you set the highest score out of everyone else?",
                                itchIoLink: "https://bgdc.itch.io/highway-core",
                            },
                        ].map((element, i) => (
                            <div key={i}>
                                <div className="flex flex-col items-center gap-3 text-center">
                                    <div>
                                        <Typography
                                            variant="h3"
                                            className="text-center font-serif font-medium sm:text-5xl"
                                        >
                                            {element.gameTitle}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="sm:text-xl"
                                        >{`${element.studioName} | Batch ${element.batch}`}</Typography>
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
                                                alt={`${element.gameTitle}-screenshot${(
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
                                    <a href={element.itchIoLink} target="_blank">
                                        {/* <Button className="my-2" color="orange">
                                            Try on Itch.io
                                        </Button> */}
                                    </a>
                                </div>
                                <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10" />
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    id="find-us"
                    className="relative flex flex-col items-center bg-magenta px-5 py-20"
                >
                    <div className="w-full max-w-4xl">
                        <div>
                            <Typography
                                variant="h2"
                                className="text-center font-serif text-5xl font-medium"
                            >
                                {"Find Us at Expo!"}
                            </Typography>
                        </div>
                        <Tabs className="my-2" value="Online">
                            <TabsHeader
                                className="bg-background"
                                indicatorProps={{
                                    className: "bg-cyan-90 shadow-none",
                                }}
                            >
                                {[
                                    {
                                        shortLabel: "Online",
                                        fullLabel: "Online",
                                    },
                                    {
                                        shortLabel: "KMG",
                                        fullLabel: "Kemanggisan",
                                    },
                                    {
                                        shortLabel: "BDG",
                                        fullLabel: "Bandung",
                                    },
                                    {
                                        shortLabel: "AS",
                                        fullLabel: "Alam Sutera",
                                    },
                                ].map((element) => (
                                    <Tab key={element.shortLabel} value={element.shortLabel}>
                                        <Typography
                                            variant="h5"
                                            className="font-2xl font-semibold md:hidden"
                                        >
                                            {element.shortLabel}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            className="hidden text-2xl font-semibold md:block"
                                        >
                                            {element.fullLabel}
                                        </Typography>
                                    </Tab>
                                ))}
                            </TabsHeader>
                            <hr className=" my-2 h-1 w-full rounded border-0 bg-gray-100 md:my-4" />
                            <TabsBody>
                                <TabPanel value={"Online"} className="p-2">
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <Typography
                                                variant="h4"
                                                className="text-center"
                                                color="white"
                                            >
                                                Online
                                            </Typography>
                                            <a
                                                href="https://binusgdc.com/link/events"
                                                target="_blank"
                                            >
                                                <Button
                                                    size="lg"
                                                    color="orange"
                                                    className="m-1 flex items-center gap-1"
                                                >
                                                    <MapPinIcon className="h-4 w-4" />
                                                    BGDC Event Server
                                                </Button>
                                            </a>
                                        </div>
                                        <Card className="my-4 max-w-lg bg-purple-90 px-5 py-2">
                                            <Timeline className="my-4">
                                                {[
                                                    {
                                                        title: "Get to Know BGDC",
                                                        timeSub: "29th August 2023 | 19:00 - 20:30",
                                                        body: `BGDC-curious? Have all your questions answered in this live online session with us!`,
                                                    },
                                                    {
                                                        title: "Talent Group Showcase I",
                                                        timeSub: "30th August 2023 | 19:00 - 20:30",
                                                        body: `Talent Group is BGDC's ultimate game dev program. 
                                                        Three teams will share how they went from drawing board to finished game in just three months, and how you could do it too. 
                                                        Ask them anything!`,
                                                    },
                                                    {
                                                        title: "Talent Group Showcase II",
                                                        timeSub: "31st August 2023 | 19:00 - 20:30",
                                                        body: `Talent Group is BGDC's ultimate game dev program. 
                                                        Three teams will share how they went from drawing board to finished game in just three months, and how you could do it too. 
                                                        Ask them anything!`,
                                                    },
                                                    {
                                                        title: "Coffee Talk",
                                                        timeSub:
                                                            "1st September 2023 | 19:00 - 20:30",
                                                        body: `Grab a coffee (or tea) and tune in to our expo finale. Coffee Talk is a gathering format where we come together to chat, share experiences and have a good time. Come sit with us?`,
                                                    },
                                                ].map((element, i, arr) => (
                                                    <TimelineItem key={i}>
                                                        {i == arr.length - 1 ? (
                                                            <></>
                                                        ) : (
                                                            <TimelineConnector />
                                                        )}
                                                        <TimelineHeader className="h-3">
                                                            <TimelineIcon />
                                                            <div>
                                                                <Typography
                                                                    variant="h6"
                                                                    color="white"
                                                                    className="leading-none"
                                                                >
                                                                    {element.title}
                                                                </Typography>
                                                            </div>
                                                        </TimelineHeader>
                                                        <TimelineBody className="pb-8">
                                                            <div className="flex flex-col justify-between">
                                                                <div className="">
                                                                    <div className="flex flex-row items-center gap-1">
                                                                        <CalendarDaysIcon
                                                                            color="white"
                                                                            className="h-5 w-5 -translate-y-0.5"
                                                                        />
                                                                        <Typography
                                                                            variant="small"
                                                                            color="white"
                                                                        >
                                                                            {element.timeSub}
                                                                        </Typography>
                                                                    </div>

                                                                    <Typography
                                                                        variant="small"
                                                                        color="white"
                                                                    >
                                                                        {element.body}
                                                                    </Typography>
                                                                </div>
                                                            </div>
                                                        </TimelineBody>
                                                    </TimelineItem>
                                                ))}
                                            </Timeline>
                                        </Card>
                                    </div>
                                </TabPanel>
                                <TabPanel value={"KMG"} className="p-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <Typography
                                            variant="h4"
                                            className="text-center"
                                            color="white"
                                        >
                                            Anggrek Campus
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="text-center text-gray-200"
                                        >
                                            Balkon Lantai 3 (#8)
                                        </Typography>
                                    </div>
                                    <Carousel className="my-4 w-full">
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src={"/position-kmg-m.webp"}
                                            alt={"position of BGDC in kemanggisan expo"}
                                            width={1213}
                                            height={559}
                                        />
                                    </Carousel>
                                </TabPanel>
                                <TabPanel value={"BDG"} className="p-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <Typography
                                            variant="h4"
                                            className="text-center"
                                            color="white"
                                        >
                                            Bandung Campus
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="text-center text-gray-200"
                                        >
                                            Atrium Lantai 4 (#23)
                                        </Typography>
                                    </div>
                                    <Carousel className="my-4 w-full">
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src={"/position-bdg-m.webp"}
                                            alt={"position of BGDC in bandung expo"}
                                            width={880}
                                            height={495}
                                        />
                                    </Carousel>
                                </TabPanel>
                                <TabPanel value={"AS"} className="p-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <Typography
                                            variant="h4"
                                            className="text-center"
                                            color="white"
                                        >
                                            Alam Sutera Campus
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="text-center text-gray-200"
                                        >
                                            ndak tau kok tanya saya
                                        </Typography>
                                    </div>
                                    <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center shadow-xl"
                                            src="/watesiggma.jpg"
                                            alt={"position of BGDC in alam sutera expo"}
                                            width={1267}
                                            height={631}
                                    />
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
                <div id="footer"></div>
            </main>
            <BgdcFooter />
        </>
    )
}
