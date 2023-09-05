import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Alert,
    Avatar,
    Dialog,
    DialogHeader,
    DialogBody,
    Switch,
    Spinner,
    Select,
    Option,
} from "@material-tailwind/react"
import { signIn, useSession } from "next-auth/react"
import { type FormEvent, useState } from "react"
import { z } from "zod"
import { api } from "~/utils/api"

const formDataSchema = z.object({
    name: z.string().nonempty(),
    nim: z.string().nonempty(),
})

type FormData = z.infer<typeof formDataSchema>

export default function DaftarUlang() {
    const { data: sessionData, status: authStatus } = useSession()

    const [hasAttemptedToSubmit, setHasAttemptedToSubmit] = useState(false)

    const [nameError, setNameError] = useState(false)
    const [nimError, setNimError] = useState(false)

    const [successDialogOpen, setSuccessDialogOpen] = useState(false)

    const submitFormMutation = api.reregistrationRouter.submit.useMutation({
        onSuccess(_data, _variables, _context) {
            setSuccessDialogOpen(true)
        },
    })

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (submitFormMutation.isLoading) {
            return
        }

        setNameError(false)
        setNimError(false)

        setHasAttemptedToSubmit(true)

        const data = { ...Object.fromEntries(new FormData(event.target as HTMLFormElement)) }
        console.log(data)
        const parseResult = formDataSchema.safeParse(data)

        let validationErrorOccurred = false

        if (!parseResult.success) {
            validationErrorOccurred = true
            const errorPaths = parseResult.error.errors.flatMap((err) => err.path)
            if (errorPaths.includes("name")) {
                setNameError(true)
            }
            if (errorPaths.includes("nim")) {
                setNimError(true)
            }
        }
        if (parseResult.success) {
            if (!Array.from(parseResult.data.nim).every((char) => char >= "0" && char <= "9")) {
                validationErrorOccurred = true
                setNimError(true)
            }
        }

        if (!parseResult.success || validationErrorOccurred || sessionData === null) {
            return
        }

        submitFormMutation.mutate({
            fullName: parseResult.data.name,
            nim: parseResult.data.nim,
            discordUserName: sessionData.user.name ?? "NO_USERNAME_FOUND",
            discordUserId: sessionData.user.id,
        })
    }

    function handleSuccessDialog() {
        //
    }

    return (
        <>
            <main
                className={`flex min-h-screen w-full min-w-[400px] flex-col items-center bg-magenta py-5`}
            >
                <Card
                    className="flex w-[90vw] min-w-[350px] max-w-md flex-col items-center bg-white p-5"
                    color="transparent"
                    shadow={false}
                >
                    <div className="flex w-full flex-row-reverse items-center">
                        <div className="flex-flow flex items-center gap-3">
                            <Typography>EN</Typography>
                            <Switch />
                            <Typography>ID</Typography>
                        </div>
                    </div>
                    <Typography variant="h3" color="blue-gray" className="font-serif">
                        Register
                    </Typography>
                    {authStatus === "authenticated" && sessionData !== null ? (
                        <>
                            <div className="flex flex-col items-center">
                                <div className="my-2 flex flex-row items-center justify-center gap-2">
                                    <Avatar src={sessionData?.user?.image ?? ""}></Avatar>
                                    <Typography variant="small">
                                        {sessionData?.user?.name ?? ""}
                                    </Typography>
                                </div>
                                <Typography>user id: {sessionData.user.id}</Typography>
                                <Button variant="text" onClick={() => void signIn("discord")}>
                                    Not You? Sign In Again
                                </Button>
                            </div>
                            <form
                                method="post"
                                onSubmit={handleSubmit}
                                className="mb-2 mt-4 w-80 max-w-screen-lg sm:w-96"
                            >
                                <div className="mb-4 flex flex-col gap-6">
                                    <Alert variant="ghost">
                                        <Typography variant="small">
                                            {"Don't forget to fill "}
                                            <a
                                                className="text-cyan-90 hover:underline"
                                                href="https://binusgdc.com/link/daftar"
                                                target="_blank"
                                            >
                                                the Expo Google Form
                                            </a>
                                            {". "}
                                        </Typography>
                                    </Alert>
                                    <Input
                                        name="name"
                                        variant="static"
                                        size="md"
                                        label="Full Name*"
                                        error={nameError}
                                    />
                                    <Input
                                        name="nim"
                                        variant="static"
                                        size="md"
                                        label="NIM*"
                                        error={nimError}
                                    />
                                </div>
                                {submitFormMutation.isLoading ? (
                                    <div className="flex items-center justify-center p-1">
                                        <Spinner color="orange" className="h-14 w-14" />
                                    </div>
                                ) : (
                                    <Button color="orange" type="submit" className="mt-6" fullWidth>
                                        Complete My Registration
                                    </Button>
                                )}
                            </form>
                        </>
                    ) : (
                        <div className="p-5">
                            {authStatus === "unauthenticated" ? (
                                <Button color="teal" onClick={() => void signIn("discord")}>
                                    To continue, please sign in with Discord
                                </Button>
                            ) : (
                                <Spinner className="h-16 w-16" />
                            )}
                        </div>
                    )}
                </Card>
            </main>
            <Dialog
                open={successDialogOpen}
                handler={handleSuccessDialog}
                className="bg-magenta py-5"
            >
                <DialogHeader>
                    <Typography variant="h4" className="w-full text-center text-white">
                        {" "}
                        Registration Complete!{" "}
                    </Typography>{" "}
                </DialogHeader>
                <DialogBody className="flex flex-col items-center">
                    <Button color="orange">
                        <a href="https://binusgdc.com/Discord">Take me to BGDC Server</a>
                    </Button>
                </DialogBody>
            </Dialog>
        </>
    )
}
