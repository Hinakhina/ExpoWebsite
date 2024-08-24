import { ArrowsPointingInIcon, ChevronDownIcon } from "@heroicons/react/24/solid"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
    Card,
} from "@material-tailwind/react"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import BgdcFooter from "~/components/BGDCFooter"
import BgdcNav from "~/components/BGDCNav"

export default function Faq() {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [registrationOpen, setRegistrationOpen] = useState(false)
    const [classOpen, setClassOpen] = useState(false)

    return (
        <>
            <BgdcNav />
            <main id="content" className="flex min-h-screen flex-col items-center 2xl:min-h-[1200px]">
                <div className="relative mt-16 h-full w-full max-w-[1920px] px-5">
                    <Image
                        className="left-5 top-0 hidden translate-y-[100px] 2xl:absolute 2xl:block"
                        src={"/IdolPlay.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <Image
                        className="right-5 top-0 hidden translate-y-[300px] 2xl:absolute 2xl:block"
                        src={"/IdolObs.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <Image
                        className="left-5 top-0 hidden translate-y-[600px]  2xl:absolute 2xl:block"
                        src={"/IdolDev.webp"}
                        width={518 / 2}
                        height={705 / 2}
                        alt=""
                    />
                    <Typography
                        variant="h1"
                        color="white"
                        className="mx-auto w-full text-center font-serif font-medium outline-text-3"
                    >
                        Frequently Asked Questions
                    </Typography>
                    <div id="faq" className="mx-auto w-full max-w-4xl py-6">
                        <Accordion open={aboutOpen}>
                            <AccordionHeader className="" onClick={() => setAboutOpen(!aboutOpen)}>
                                <div className="flex w-full flex-row justify-between">
                                    <Typography variant="h2" color="white">
                                        Tentang BGDC
                                    </Typography>
                                    <ChevronDownIcon
                                        className="h-12 w-12"
                                        color="white"
                                        style={{
                                            transform: `rotate(${aboutOpen ? 180 : 0}deg)`,
                                            transition: "transform 0.2s",
                                        }}
                                    />
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <Card className="bg-faqbg p-5">
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apa itu BGDC?
                                    </Typography>
                                    <Typography
                                        variant="paragraph"
                                        color="white"
                                    >{`BINUS Game Development Club merupakan organisasi kemahasiswaan BINUS yang bergerak dalam memberikan pembelajaran dan aktivitas kepada mahasiswa BINUS untuk mengembangkan game.`}</Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah BGDC itu gaming club?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        {" "}
                                        <strong className="font-semibold">BUKAN.</strong> BGDC merupakan organisasi kemahasiswaan yang bergerak dan berfokus  pada bidang pengembangan game, namun kami juga memiliki sub komunitas yang aktif dalam bermain game.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Kegiatan BGDC apa saja?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        BGDC menyediakan banyak kegiatan untuk member. Beberapa contoh dari kegiatannya adalah Gathering (Coffee Talk, Mabar, Karaoke, dll), Talent Group, dll. Gathering adalah kegiatan yang dilakukan secara bulanan dan diadakan untuk mempererat hubungan antar sesama member BGDC. Sedangkan Talent Group adalah kegiatan dimana member BGDC akan dibentuk menjadi beberapa tim dan membuat game dalam waktu terbatas, lalu game tersebut akan dipajang di bgdc.itch.io.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Acara BGDC apa saja?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Untuk acara, BGDC memiliki acara yang diselenggarakan secara tahunan. Contohnya Indienesia Game Festival (IGF), Webifest, Welcoming Party, dll. IGF adalah acara tahunan BGDC dimana developer indie  beserta kelompok TG melakukan pameran game yang telah dibuat. Webifest adalah acara webinar di zoom meeting selama binus festival berjalan, dimana kalian bisa mendapatkan ilmu tentang game development dari ahlinya. Dan Welcoming Party adalah acara untuk menyambut member baru BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        BGDC membuka cabang di kampus mana saja?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Secara official, UKM kita memiliki cabang di Kemanggisan dan Alam sutera, namun kita juga menerima member dari berbagai region binus.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        BGDC aktif di platform mana saja?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        BGDC paling aktif di server Discord yang menjadi pusat interaksi para anggota. Berbagai channel tersedia di server Discord BGDC untuk membahas berbagai topik menarik. Kemudian di platform lain seperti Instagram, Twitter, YouTube, dan itch.io (wadah publikasi game BGDC).
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah terdapat game BGDC yang sudah memasuki steam, epic games, dll?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Ada 1 game BGDC yang sudah masuk di steam berjudul ‘Project Hypatios’.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah terdapat member atau alumni BGDC yang sudah bekerja di studio/perusahaan game development yang besar/ternama?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Ada alumni BGDC yang sekarang bekerja di Agate membuat game berjudul Mythic Protocol Riftstorm.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah BGDC pernah mengundang atau mengunjungi studio atau company besar pada aktivitas/event? 
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        BGDC pernah mengundang Agate pada event Indienesia Game Festival.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah BGDC pernah bekerja sama dengan studio atau company game development ternama? 
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Pernah, untuk media partner, beberapa contohnya adalah Renala Games, Mojiken Studio, Sanditio Jitok, Khayalan Arts, Glory Jam, dll. Dan special guest yang pernah diundang adalah Head of Agate Academy.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah BGDC memiliki sponsor? 
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Untuk sekarang, kita masih belum memiliki sponsor.
                                    </Typography>
                                </Card>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={registrationOpen}>
                            <AccordionHeader onClick={() => setRegistrationOpen(!registrationOpen)}>
                                <div className="flex w-full flex-row justify-between">
                                    <Typography variant="h2" color="white">
                                        Registrasi
                                    </Typography>
                                    <ChevronDownIcon
                                        className="h-12 w-12"
                                        color="white"
                                        style={{
                                            transform: `rotate(${registrationOpen ? 180 : 0}deg)`,
                                            transition: "transform 0.2s",
                                        }}
                                    />
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <Card className="bg-faqbg p-5">
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Berapa besar biaya pendaftaran member BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Biaya pendaftaran member BGDC sebesar Rp100.000,-.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah binus online learning diperbolehkan untuk mendaftar?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Iya. Binus online learning dapat mendaftar menjadi member
                                        BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apa syarat bergabung BGDC ?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Pendaftaran hanya berlaku untuk mahasiswa baru dan satu angkatan di atasnya, lalu pendaftar sudah membayar biaya pendaftaran.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah alumni Binus diperbolehkan untuk mendaftar dan mengikuti aktivitas maupun event di BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Alumni secara resmi sudah lulus dari Binus dan pendaftaran tidak terbuka untuk mahasiswa yang telah lulus. Tetapi, jika alumni merupakan anggota BGDC, maka alumni diperbolehkan untuk tetap aktif dalam acara dan discord server BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah anak diluar jurusan GAT, DKV, Compsci, dll diperbolehkan untuk mendaftar ke BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Tentu saja! Siapapun dari jurusan manapun diperbolehkan untuk mendaftar ke BGDC. Kami sangat terbuka untuk semua mahasiswa yang memiliki minat dalam pengembangan game.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Jika sudah bergabung dengan UKM lain atau himpunan, apakah
                                        boleh mendaftar di BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Iya, pendaftaran tetap dapat dilakukan meskipun telah
                                        bergabung dengan UKM lain atau himpunan.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Jika saya sudah berpengalaman dalam game development, apa yang BGDC bisa tawarkan untuk saya?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Jika kalian sudah memiliki pengalaman dalam game
                                        development, BGDC memiliki penawaran yang menarik untuk
                                        kalian. Bergabunglah dengan Talent Group dan Jam Buddies
                                        untuk bertemu dengan rekan-rekan sesama game developer. Di
                                        sini, kalian dapat menerapkan dan menguji ilmu serta
                                        pengalaman kalian dalam praktik game development yang nyata.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Pendaftaran akan dibuka sampai kapan?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Pendaftaran akan dibuka sampai [TBA].
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Benefit apa yang didapatkan jika menjadi member BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Jika kalian mengikuti kegiatan-kegiatan BGDC, maka kalian memiliki kesempatan untuk:
                                        <ul>
                                            <li>- Memperoleh SAT melalui partisipasi dalam Talent Group, yaitu program BGDC yang mengelompokkan anggota yang berkomitmen dalam pengembangan game dengan tujuan untuk menciptakan sebuah game dalam beberapa bulan.</li>
                                            <li>- Mendapatkan comserv dengan mendaftar sebagai aktivis dan mengikuti kegiatan PkM (Pengabdian kepada Masyarakat).</li>
                                            <li>- Mengembangkan portofolio melalui pengalaman nyata dalam proyek-proyek game development.</li>
                                            <li>- Mengumpulkan pengalaman baru, peluang jaringan, dan bersenang-senang dengan komunitas BGDC.</li>
                                        </ul>
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah diperbolehkan untuk meninggalkan BGDC setelah
                                        mendaftar?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Secara resmi, anggota UKM tidak dapat keluar dari UKM.
                                        Namun, jika ada member yang ingin keluar dari BGDC, member
                                        diperbolehkan untuk keluar dari server discord BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah uang pendaftaran akan dikembalikan jika meninggalkan
                                        BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Tidak. Jika ada member yang keluar dari BGDC, maka uang
                                        pendaftaran tidak dapat dikembalikan.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apa yang menjadi daya tarik BGDC tersendiri dibandingkan UKM lain?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Game Development Club memberikan wadah bagi mahasiswa untuk menyalurkan kreativitas mereka melalui pembuatan game. Tidak hanya sekadar bermain game, tetapi kita juga belajar bagaimana merancang, mengembangkan, dan memproduksi game yang inovatif dan menarik.
                                    </Typography>
                                </Card>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={classOpen}>
                            <AccordionHeader onClick={() => setClassOpen(!classOpen)}>
                                <div className="flex w-full flex-row justify-between">
                                    <Typography variant="h2" color="white">
                                        Kelas
                                    </Typography>
                                    <ChevronDownIcon
                                        className="h-12 w-12"
                                        color="white"
                                        style={{
                                            transform: `rotate(${classOpen ? 180 : 0}deg)`,
                                            transition: "transform 0.2s",
                                        }}
                                    />
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <Card className="bg-faqbg p-5">
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah ada biaya pendaftaran kelas?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Ada, Biaya pendaftaran kelas BGDC adalah sebesar Rp50.000,-. Untuk seumur hidup.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah biaya kelas sudah termasuk seluruh kelas?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Iya. Jika kalian telah membayar uang kelas, maka kalian akan mendapatkan akses untuk seluruh kelas dan rekaman kelas melalui server Discord BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Kapan pendaftaran kelas dibuka?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Tanggal pendaftaran masih belum ditentukan, tetapi kemungkinan akan dibuka pada pertengahan atau akhir september. Pendaftaran kelas akan diumumkan di main server discord BGDC.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apa saja topik yang akan dibahas dalam kelas game development?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Ada 6 kelas yang ditawarkan oleh BGDC, yaitu:
                                        <ol>
                                            <li>1. game design: mengajarkan cara mendesain game termasuk komponennya melalui pembelajaran teori dan studi kasus. Selain teori, kelas Game Design akan mengajarkan murid untuk menggunakan Unity dan berkolaborasi melalui Github.</li>
                                            <li>2. game programming: mengajarkan cara membuat sebuah game baik 2D maupun 3D menggunakan Unity. Bahasa pemrograman yang akan digunakan di kelas adalah C#.</li>
                                            <li>3. object-oriented game programming: berfokus mengenai konsep yang ada di OOP dan cara mengimplementasikannya untuk menghasilkan struktur program yang baik.</li>
                                            <li>4. game sound: membuat game music dan sound effects. Materi akan diajarkan menggunakan Audacity dan Ableton (diperbolehkan untuk menggunakan software lain). Selain kelas teori, mentor Sound Art juga akan mengadakan kelas praktek dimana murid membuat lagu dengan tema yang telah ditentukan terlebih dahulu.</li>
                                            <li>5. 2D art & animation: mengajarkan cara bagaimana membuat animasi dan gambar dalam sebuah game dan mengimplementasikannya. Kelas 2D mengajarkan apa saja dasar-dasar dari pembuatan gambar dalam bentuk 2D untuk digunakan di dalam game kita.</li>
                                            <li>6. 3D art & animation: mengajarkan 3D modeling menggunakan Blender. Kelas 3D Art BGDC akan mengajarkan 3D modelling dari awal mengunduh dan memasang Blender; dasar dari 3D modelling, sculpting, dan texturing; sampai rendering dan exporting ke Unity.</li>
                                        </ol>
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Bagaimana sistem penentuan jadwal kelas di BGDC?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Penentuan jam kelas akan dilaksanakan melalui sistem voting menggunakan when2meet di server utama (akses voting diperoleh setelah melakukan pembayaran).
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Bagaimana jika jadwal yang ditentukkan tidak sesuai dengan saya?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Untuk masalah jadwal yang masih tidak sesuai, kita memiliki rekaman untuk setiap kelas. Kamu juga bisa bertanya langsung ke mentormu melalui text channel kelas yang sudah disediakan. 
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah semua kelas BGDC wajib diikuti?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Tidak. Kalian bisa mengikuti kelas yang sesuai dengan minat
                                        kalian.
                                    </Typography>
                                    <br />
                                    <Typography variant="h5" color="white" className="font-medium">
                                        Apakah kelas BGDC akan diadakan secara online atau onsite?
                                    </Typography>
                                    <Typography variant="paragraph" color="white">
                                        Untuk saat ini, kelas BGDC akan diadakan secara online
                                        melalui server Discord BGDC.
                                    </Typography>
                                </Card>
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </main>
            <BgdcFooter />
        </>
    )
}
