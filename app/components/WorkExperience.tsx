type WorkExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  details: string;
};

export function WorkExperience() {
  const workExperience: WorkExperienceItem[] = [
    {
      role: "Frontend Developer",
      company: "Company Name Placeholder",
      location: "City, Country",
      period: "Month YYYY - Present",
      details:
        "Placeholder summary of your responsibilities and key outcomes for this role.",
    },
    {
      role: "Full Stack Developer",
      company: "Company Name Placeholder",
      location: "City, Country",
      period: "Month YYYY - Month YYYY",
      details:
        "Placeholder summary of the products you built, technologies used, and impact delivered.",
    },
    {
      role: "Software Engineer Intern",
      company: "Company Name Placeholder",
      location: "City, Country",
      period: "Month YYYY - Month YYYY",
      details:
        "Placeholder summary of internship projects, contributions, and learning outcomes.",
    },
  ];

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl">Work Experience</h1>
        <div className="space-y-8">
          {workExperience.map((item) => (
            <div key={`${item.role}-${item.company}`} className="border-l-2 border-gray-200 pl-6">
              <h3 className="mb-1 text-xl">{item.role}</h3>
              <p className="mb-1 text-gray-900">{item.company}</p>
              <p className="mb-2 text-sm text-gray-600">
                {item.location} &bull; {item.period}
              </p>
              <p className="text-gray-600">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
