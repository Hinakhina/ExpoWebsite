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
import { FaCopy, FaDiscord, FaLine, FaWhatsapp } from "react-icons/fa"
import toast, { Toaster } from "react-hot-toast"

export default function FindUs() {
    const [lineHover, setLineHover] = useState(false)
    const [whatsAppHover1, setWhatsAppHover1] = useState(false)
    const [whatsAppHover2, setWhatsAppHover2] = useState(false)
    const [discordHover1, setDiscordHover1] = useState(false)
    const [discordHover2, setDiscordHover2] = useState(false)
    
    return(
        <>
            <BgdcNav />
                <main>
                    <div
                    id="find-us"
                    className="relative flex flex-col items-center px-5 py-20"
                    >
                    <div className="w-full max-w-4xl">
                        <div>
                            <Typography
                                variant="h2"
                                className="text-center font-serif text-5xl font-medium outline-text-3"
                            >
                                {"Find Us at Expo!"}
                            </Typography>
                        </div>
                        <Tabs className="my-2" value="KMG">
                            <TabsHeader
                                className="bg-background"
                                indicatorProps={{
                                    className: "bg-cyan-90 shadow-none",
                                }}
                            >
                                {[
                                    {
                                        shortLabel: "KMG",
                                        fullLabel: "Kemanggisan",
                                    },
                                    {
                                        shortLabel: "SNY",
                                        fullLabel: "Senayan",
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
                                            className="hidden text-2xl font-semibold md:block outline-text-2"
                                        >
                                            {element.fullLabel}
                                        </Typography>
                                    </Tab>
                                ))}
                            </TabsHeader>
                            <hr className=" my-2 h-1 w-full rounded border-0 bg-gray-100 md:my-4" />
                            <TabsBody>
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
                                            Balkon Lantai 3 (#7)
                                        </Typography>
                                    </div>
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center"
                                            src={"/DenahKMG2024.png"}
                                            alt={"position of BGDC in kemanggisan expo"}
                                            width={1213}
                                            height={559}
                                        />
                                </TabPanel>
                                <TabPanel value={"SNY"} className="p-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <Typography
                                            variant="h4"
                                            className="text-center"
                                            color="white"
                                        >
                                            Senayan Campus
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            className="text-center text-gray-200"
                                        >
                                            Senayan Campus Lantai 3 (#19)
                                        </Typography>
                                    </div>
                                        <Image
                                            className="h-full w-full rounded-xl object-center"
                                            src={"/DenahSNY2024.png"}
                                            alt={"position of BGDC in Senayan expo"}
                                            width={1000}
                                            height={816}
                                        />
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
                                            GOR Alam Sutera (#37)
                                        </Typography>
                                    </div>
                                        <Image
                                            className="h-full w-full rounded-xl object-scale-down object-center"
                                            src={"/DenahALS2024.png"}
                                            alt={"position of BGDC in alam sutera expo"}
                                            width={1267}
                                            height={631}
                                        />
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
            </main>
        <BgdcFooter />
    </>
)
}