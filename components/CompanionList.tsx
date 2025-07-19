import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CompansionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionList = ({
  title,
  companions,
  classNames,
}: CompansionsListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/3 text-lg">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, subject, name, topic, duration }) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center gap-2">
                    <div
                      className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt="Subject"
                        width={35}
                        height={35}
                      ></Image>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-2xl font-bold">{name}</p>
                      <p className="text-lg">{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                  {subject}
                </div>
                <div
                  className="flex items-center justify-center rounded-lg p-2 w-fit md:hidden"
                  style={{ backgroundColor: getSubjectColor(subject) }}
                >
                <Image src={`/icons/${subject}.svg`} alt="Subject Image" height={18 } width={18}></Image>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 w-full justify-end">
                  <p className="text-2xl">{duration} {' '}</p>
                  <span className="max-md:hidden">Mins</span>
                  <Image src='/icons/clock.svg' alt="minutes" width={14} height={14} className="md:hidden"></Image>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionList;
