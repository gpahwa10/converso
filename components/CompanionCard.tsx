import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}
const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return <article className="companion-card" style={{backgroundColor: color}}>
    <div className="flex justify-between items-center">
      <div className="subject-badge">{subject}</div>
      <Button className="compnanion-bookmark">
        <Image src="/icons/bookmark.svg" alt="" width={12.5} height={15}></Image>
      </Button>
    </div>
    <h2 className="text-2xl font-bold">Topic:{name}</h2>
    <p className="text-sm">Topic: {topic}</p>
    <div className="flex items-center gap-2">
      <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5}></Image>
      <p className="text-sm"> {duration} mins</p>
    </div>
    <Link href={`/companions/${id}`} className="w-full bg-{#FE5933}"> <Button className="btn-primary w-full justify-center">Launch Lesson</Button></Link>
  </article>
};

export default CompanionCard;
