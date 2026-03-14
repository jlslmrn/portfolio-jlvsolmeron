type SkillGroup = {
  title: string;
  skills: string[];
};

export function Skills() {
  const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Figma", "Agile/Scrum"],
  },
];

  return (
    <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl">Skills</h1>
          <div className="grid gap-8 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-lg text-gray-900">{group.title}</h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

  );
}
