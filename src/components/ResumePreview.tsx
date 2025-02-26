
import { ResumeData } from "@/data/defaultResumeData";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview = ({ resumeData }: ResumePreviewProps) => {
  const { personalInfo, aboutMe, education, experience, skills, awards, volunteering, interests, training } = resumeData;

  return (
    <div className="bg-white p-8 font-sans text-sm antialiased">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <header className="border-b pb-4 border-gray-200">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{personalInfo.name}</h1>
            <p className="text-gray-500 mt-1">{personalInfo.title}</p>
          </header>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 uppercase">About Me</h2>
            <p className="text-gray-700 leading-relaxed">{aboutMe}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 uppercase">Experience</h2>
            <ul className="space-y-4">
              {experience.map((exp) => (
                <li key={exp.id}>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-900">{exp.company}</h3>
                    <div className="flex justify-between">
                      <span className="text-gray-700">{exp.position}</span>
                      <span className="text-gray-500 text-sm">{exp.duration}</span>
                    </div>
                    <p className="text-gray-600 mt-1 text-sm">{exp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 uppercase">Skills</h2>
            <ul className="list-disc pl-5 space-y-1">
              {skills.map((skill) => (
                <li key={skill.id} className="text-gray-700">{skill.skill}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 uppercase">Training</h2>
            <ul className="space-y-2">
              {training.map((train) => (
                <li key={train.id}>
                  <h3 className="font-semibold text-gray-900">{train.course}</h3>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{train.institution}</span>
                    <span className="text-gray-500 text-sm">{train.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          {personalInfo.profileImage && (
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          )}

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 uppercase">Education</h2>
            <ul className="space-y-3">
              {education.map((edu) => (
                <li key={edu.id}>
                  <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{edu.degree}</span>
                    <span className="text-gray-500 text-sm">{edu.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 uppercase">Awards</h2>
            <ul className="space-y-3">
              {awards.map((award) => (
                <li key={award.id}>
                  <h3 className="font-semibold text-gray-900">{award.title}</h3>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{award.organization}</span>
                    <span className="text-gray-500 text-sm">{award.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 uppercase">Volunteering</h2>
            <ul className="space-y-3">
              {volunteering.map((vol) => (
                <li key={vol.id}>
                  <h3 className="font-semibold text-gray-900">{vol.role}</h3>
                  <p className="text-gray-700">{vol.organization}</p>
                  {vol.description && (
                    <p className="text-gray-600 text-sm mt-1">{vol.description}</p>
                  )}
                  <p className="text-gray-500 text-sm">{vol.year}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 uppercase">Interests</h2>
            <p className="text-gray-700 leading-relaxed">{interests}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
