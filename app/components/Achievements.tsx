import { AwardIcon } from "../icons";

type AchievementItem = {
  title: string;
  organization: string;
  description: string;
};

export function Achievements() {
  const achievements: AchievementItem[] = [
    {
      title: "Best Innovation Award",
      organization: "Tech Innovation Summit 2024",
      description: "Recognized for developing an AI-powered accessibility tool",
    },
    {
      title: "Speaker at React Conference",
      organization: "React Summit 2023",
      description: "Presented on modern state management patterns",
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      description: "Over 500 contributions to popular open-source projects",
    },
    {
      title: "Dean's List",
      organization: "UC Berkeley",
      description: "Achieved Dean's List all four years of undergraduate study",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl">Achievements</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item) => (
            <div key={item.title} className="rounded-lg bg-white p-6">
              <div className="flex items-start gap-3">
                <AwardIcon className="mt-1 h-5 w-5 shrink-0 text-gray-400" />
                <div>
                  <h3 className="mb-1 text-lg">{item.title}</h3>
                  <p className="mb-2 text-sm text-gray-900">
                    {item.organization}
                  </p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
