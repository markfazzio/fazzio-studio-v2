import { parseISO, format } from "date-fns";

interface HumanDateProps {
  dateString: string;
}

export default function HumanDate(props: HumanDateProps) {
  const { dateString } = props;

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "MMM	d, yyyy")}</time>;
}
