import { ArrowUpRightIcon, ExclamationCircleIcon, MapPinIcon } from "@heroicons/react/24/solid"
import { Alert, Button, Card, Typography } from "@material-tailwind/react"
import { WarningRounded } from "@mui/icons-material"
import { useState } from "react"
import { Toaster, toast } from "react-hot-toast"
import { FaCopy, FaDiscord, FaLine } from "react-icons/fa"
import BgdcFooter from "~/components/BGDCFooter"
import BgdcNav from "~/components/BGDCNav"

export default function Daftar() {
    const [lineHover, setLineHover] = useState(false)
    const [discordHover, setDiscordHover] = useState(false)
    return (
        <>
            <div>
                <Toaster position="bottom-center" />
            </div>
            <BgdcNav />
            <main className="flex min-h-screen flex-col items-center gap-5 bg-magenta px-2 py-5">
                <div className="flex flex-col items-center">
                    <Typography variant="h1" className="text-center font-serif font-medium">
                        Level Up with BGDC
                    </Typography>
                    <hr className="mx-auto my-3 h-1 w-full max-w-sm rounded border-0 bg-gray-100" />
                    <div className="flex w-full flex-col items-center gap-2">
                        <Typography variant="small" className="text-center font-semibold">
                            Contact:
                        </Typography>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex flex-row items-center gap-2">
                                <FaLine />
                                <Typography
                                    className={
                                        lineHover ? "hover:cursor-pointer" : "hover:cursor-default"
                                    }
                                    variant="small"
                                    onMouseEnter={() => setLineHover(true)}
                                    onMouseLeave={() => setLineHover(false)}
                                    onClick={async () => {
                                        if (!lineHover) {
                                            return
                                        }
                                        await navigator.clipboard.writeText("reynaldochandra61103")
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
                <div className="flex flex-row-reverse flex-wrap-reverse justify-center gap-10">
                    <Card className="relative min-h-[570px] w-[90vw] max-w-sm bg-white opacity-60 shadow-2xl">
                        <Typography
                            variant="lead"
                            color="black"
                            className="absolute top-1/2 w-full text-center font-serif text-4xl opacity-100"
                        >
                            CLOSED
                        </Typography>
                        <div className="flex h-full flex-col items-center justify-between gap-5 p-5">
                            <div className="flex flex-col items-center gap-2">
                                <Typography
                                    variant="h2"
                                    color="black"
                                    className="text-center font-serif text-2xl font-medium"
                                >
                                    Week of Welcoming (B27)
                                </Typography>
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
                                                BCA 5272020647
                                            </Typography>
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <Typography variant="small">Atas Nama:</Typography>
                                            <Typography variant="small" className="font-bold">
                                                IDA BAGUS K G P & MARY R
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    disabled
                                    size="sm"
                                    className="flex flex-row items-center gap-2"
                                >
                                    <FaCopy /> Copy Nomor Rekening
                                </Button>
                                <Button
                                    disabled
                                    color="deep-purple"
                                    size="lg"
                                    className="flex flex-row items-center gap-2"
                                >
                                    Registration Form B27 <ArrowUpRightIcon className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                    <Card className="relative flex min-h-[570px] w-[90vw] max-w-sm flex-col items-center gap-5 bg-white p-5 opacity-60 shadow-2xl">
                        <div className="flex h-full w-full flex-col items-center justify-between gap-5">
                            <div className="flex flex-col items-center gap-2">
                                <Typography
                                    variant="h2"
                                    color="black"
                                    className="text-center font-serif text-2xl font-medium"
                                >
                                    Open Registration
                                </Typography>
                                <Alert
                                    className="my-1 p-2"
                                    color="blue"
                                    icon={<ExclamationCircleIcon className="h-5 w-5" />}
                                >
                                    <Typography variant="small" className="">
                                        Open until 11 September 2023 for all active Binusian
                                        (B24-B27)
                                    </Typography>
                                </Alert>
                            </div>
                            <div className="flex w-full flex-col items-center gap-2">
                                <div className="w-full">
                                    <Typography variant="small" className="my-1 w-full text-left">
                                        How to Register:
                                    </Typography>
                                    <ul className="flex w-fit flex-col items-stretch text-left">
                                        <Typography
                                            variant="small"
                                            as="li"
                                            className="list-item list-inside list-disc"
                                        >
                                            Transfer registration fee.
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            as="li"
                                            className="list-item list-inside list-disc"
                                        >
                                            Save proof of transfer.
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            as="li"
                                            className="list-item list-inside list-disc"
                                        >
                                            Fill details in the form below.
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            as="li"
                                            className="list-item list-inside list-disc"
                                        >
                                            Upload proof at the end of the form.
                                        </Typography>
                                    </ul>
                                </div>
                            </div>
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
                                                BCA 5272020647
                                            </Typography>
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <Typography variant="small">Atas Nama:</Typography>
                                            <Typography variant="small" className="font-bold">
                                                IDA BAGUS K G P & MARY R
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    disabled
                                    size="sm"
                                    className="flex flex-row items-center gap-2"
                                >
                                    <FaCopy /> Copy Nomor Rekening
                                </Button>
                                <Button
                                    disabled
                                    color="deep-purple"
                                    size="lg"
                                    className="flex flex-row items-center gap-2"
                                >
                                    Open Registration Form <ArrowUpRightIcon className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="absolute left-0 top-1/2 flex w-full flex-grow items-center justify-center"></div>
                    </Card>
                </div>
            </main>
            <BgdcFooter />
        </>
    )
}
