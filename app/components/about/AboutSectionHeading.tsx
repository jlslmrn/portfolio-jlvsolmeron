import type { LucideIcon } from "lucide-react";

type AboutSectionHeadingProps = {
  icon: LucideIcon;
  title: string;
  titleClassName?: string;
  iconClassName?: string;
};

export function AboutSectionHeading({
  icon: Icon,
  title,
  titleClassName = "text-3xl font-bold text-foreground md:text-4xl",
  iconClassName = "h-8 w-8 text-[var(--icon-color)]",
}: AboutSectionHeadingProps) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <Icon className={iconClassName} />
      <h2 className={titleClassName}>{title}</h2>
    </div>
  );
}
