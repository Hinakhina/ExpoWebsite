import { ArrowUpRightIcon, ExclamationCircleIcon, MapPinIcon } from "@heroicons/react/24/solid"
import { Alert, Button, Card, Typography } from "@material-tailwind/react"
import { WarningRounded } from "@mui/icons-material"
import { useState } from "react"
import { Toaster, toast } from "react-hot-toast"
import { FaCopy, FaDiscord, FaLine, FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import BgdcFooter from "~/components/BGDCFooter"
import BgdcNav from "~/components/BGDCNav"

export default function Daftar() {
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
            <main id="daftar" className="flex min-h-screen flex-col items-center gap-5 px-2 py-5">
                <div className="flex flex-col items-center">
                    <Typography variant="h1" className="text-center font-serif font-medium outline-text-3">
                        Level Up with BGDC
                    </Typography>
                    <hr className="mx-auto my-3 h-1 w-full max-w-sm rounded border-0 bg-gray-100" />
                    <div className="flex w-full flex-col items-center gap-2">
                        <Typography variant="small" className="text-center font-semibold">
                            Contact Person:
                        </Typography>
                        <div className="flex w-full max-w-md flex-row justify-between gap-4">
                            <div className="flex flex-col items-start gap-1">
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
                <div className="flex flex-row-reverse flex-wrap-reverse justify-center gap-10">
                    <Card className="relative min-h-[570px] w-[90vw] max-w-sm bg-white opacity-100 shadow-2xl">
                        {/* <Typography
                            variant="lead"
                            color="black"
                            className="absolute top-1/2 w-full text-center font-serif text-4xl opacity-100"
                        >
                            CLOSED
                        </Typography> */}
                        <div className="flex h-full flex-col items-center justify-between gap-5 p-5">
                            <div className="flex flex-col items-center gap-2">
                                <Typography
                                    variant="h2"
                                    color="black"
                                    className="text-center font-serif text-2xl font-medium"
                                >
                                    Open Registration
                                </Typography>
                                <div className="flex flex-col items-center gap-2">
                                    <Image
                                    className="rounded-lg aspect-rectangle object-cover"
                                    src={"/playbannerfrfr.png"}
                                    width={1600}
                                    height={400}
                                    alt="Banner Nama"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <Alert
                                        className="p-2"
                                        color="blue-gray"
                                        icon={<ExclamationCircleIcon className="h-5 w-5" />}
                                    >
                                        <Typography variant="small" className="text-xs">
                                            - Registering onsite? Please check your WoW schedule.
                                            <br />- {"Don't forget to join the "}
                                            <a
                                                href="https://binusgdc.com/link/events"
                                                target="_blank"
                                                className="underline"
                                            >
                                                {"event server."}
                                            </a>
                                        </Typography>
                                    </Alert>
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center gap-5"></div>
                            <div className="flex w-full flex-col items-center gap-5">
                                <div className="w-full">
                                    <Typography variant="small" className="my-1 w-full text-left">
                                        Registration fee details:
                                    </Typography>
                                    <div className="flex w-fit flex-col items-stretch text-left">
                                        <div className="flex flex-col text-left">
                                            <Typography variant="small">
                                                Nominal Transfer:
                                            </Typography>
                                            <Typography variant="small" className="font-bold">
                                                Rp 100.000
                                            </Typography>
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <Typography variant="small">Nomor Rekening:</Typography>
                                            <Typography variant="small" className="font-bold">
                                                BCA 5272071187
                                            </Typography>
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <Typography variant="small">Atas Nama:</Typography>
                                            <Typography variant="small" className="font-bold">
                                                INDRA C D DAN MARCELLO A
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    // disabled
                                    size="sm"
                                    className="flex flex-row items-center gap-2"
                                    onClick={() => {
                                        void navigator.clipboard.writeText("5272071187")
                                        toast.success("copied '5272071187'")
                                    }}
                                >
                                    <FaCopy /> Copy Nomor Rekening
                                </Button>
                                <a
                                    href="https://forms.gle/Qhz1QHTHPsMAuquN7"
                                    target="_blank"
                                >
                                <Button
                                    // disabled
                                    color="deep-purple"
                                    size="lg"
                                    className="flex flex-row items-center gap-2"
                                >
                                    Registration Form B28 <ArrowUpRightIcon className="h-4 w-4" />
                                </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </main>
            <BgdcFooter />
        </>
    )
}
