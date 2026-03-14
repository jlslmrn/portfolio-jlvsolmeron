
type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
};

export function Education() {
  const education: EducationItem[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Ateneo de Davao University",
      location: "Davao city, PH",
      period: "2017 - 2021",
      details: "I worked on a special paper which aimed to classify non-biodegradable waste using Deep learning-based Neural Networks.",
    },
  ];

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl">Education</h1>
        <div className="space-y-8">
          {education.map((item) => (
            <div key={item.degree} className="border-l-2 border-gray-200 pl-6">
              <h3 className="mb-1 text-xl">{item.degree}</h3>
              <p className="mb-1 text-gray-900">{item.institution}</p>
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
