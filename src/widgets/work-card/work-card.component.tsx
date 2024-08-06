import Link from "next/link";
import type { ICase } from "@shared/lib/types";
import { useRouter } from "next/router";
import Video from "./video.component";

interface WorkCardProps {
    work: ICase;
    className?: string
}

export default function WorkCard({ work, className }: WorkCardProps) {
    const { locale } = useRouter();
    const cardTitle =
        typeof work?.title === "object" ? (work.title[locale || "ru"] as string) : work.title;
    const categories = work?.categories[locale || "ru"]?.join(", ");

    return (
            <div className={`${className} m-md:mt-10`}>
                <Link href={`/cases/${work?.id}`} className="text-[inherit]">
                    <div className="relative">
                        <div className="
                            text-sm
                            leading-5 
                            rounded-lg 
                            text-[white] 
                            px-3 py-1 
                            bg-tag-background 
                            absolute left-3 top-3"
                            >
                            {work.tag}
                        </div>
                        <Video videoSrc={work.videoPreview || ''} />
                    </div>
                    <div className="mt-5 group">
                        <p className="leading-8 text-2xl font-bold group-hover:text-case-hover">{cardTitle}</p>
                        <p className="opacity-80 leading-6 mt-1 w-92 t-xs:w-auto group-hover:opacity-100">{categories}</p>
                    </div>
                </Link>
            </div>
    )
}