import { MailIcon, MapPinIcon, LinkedInIcon, GithubIcon} from "../icons";

export function PersonalInfo() {
  return (
    <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-5xl">John Lorenz Solmeron</h1>
          <p className="mb-8 text-xl text-gray-600">
            Web Developer Team Lead &amp; AI Automation Specialist
          </p>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <a
              href="mailto:alex.morgan@email.com"
              className="flex items-center gap-2 transition-colors hover:text-gray-900"
            >
              <MailIcon className="h-4 w-4" />
              <span>jlvsolmeron@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4" />
              <span>Davao city, Philippines</span>
            </div>
            <a
              href="https://www.linkedin.com/in/jlvsolmeron/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-gray-900"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/jlslmrn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-gray-900"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

  );
}
