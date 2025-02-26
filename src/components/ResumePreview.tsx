
import { ResumeData } from "@/data/defaultResumeData";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview = ({ resumeData }: ResumePreviewProps) => {
  const { personalInfo, aboutMe, education, experience, skills, awards, volunteering, interests, training } = resumeData;

  return (
    <div className="bg-white font-sans text-sm antialiased">
      <div className="grid grid-cols-12">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-6 bg-white p-8 space-y-6">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">{personalInfo.name}</h1>
            <p className="text-gray-600 uppercase tracking-wide">{personalInfo.title}</p>
          </header>

          <section>
            <h2 className="text-lg font-bold text-indigo-900 uppercase mb-2">About Me</h2>
            <p className="text-gray-700 leading-relaxed">{aboutMe}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-indigo-900 uppercase mb-2">Experience</h2>
            <ul className="space-y-3">
              {experience.map((exp) => (
                <li key={exp.id}>
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <h3 className="font-bold text-gray-900">{exp.position}</h3>
                      <span className="text-gray-600 text-sm">{exp.duration}</span>
                    </div>
                    <p className="text-gray-800 mb-1">{exp.company}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-indigo-900 uppercase mb-2">Skills</h2>
            <ul className="list-disc pl-5 space-y-1">
              {skills.map((skill) => (
                <li key={skill.id} className="text-gray-700">{skill.skill}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-indigo-900 uppercase mb-2">Training</h2>
            <ul className="space-y-2">
              {training.map((train) => (
                <li key={train.id}>
                  <h3 className="font-bold text-gray-900">{train.course}</h3>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{train.institution}</span>
                    <span className="text-gray-600 text-sm">{train.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-6 bg-gray-100 p-8 space-y-6">
          {personalInfo.profileImage && (
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden">
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
            <h2 className="text-lg font-bold text-indigo-900 uppercase mb-2">Education</h2>
            <ul className="space-y-3">
              {education.map((edu) => (
                <li key={edu.id}>
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-800">{edu.school}</p>
                  <p className="text-gray-600 text-sm">{edu.year}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-indigo-900 uppercase mb-2">Awards</h2>
            <ul className="space-y-3">
              {awards.map((award) => (
                <li key={award.id}>
                  <h3 className="font-bold text-gray-900">{award.title}</h3>
                  <p className="text-gray-800">{award.organization}</p>
                  <p className="text-gray-600 text-sm">{award.year}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-indigo-900 uppercase mb-2">Volunteering</h2>
            <ul className="space-y-3">
              {volunteering.map((vol) => (
                <li key={vol.id}>
                  <h3 className="font-bold text-gray-900">{vol.role}</h3>
                  <p className="text-gray-800">{vol.organization}</p>
                  {vol.description && (
                    <p className="text-gray-600 text-sm">{vol.description}</p>
                  )}
                  <p className="text-gray-600 text-sm">{vol.year}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-indigo-900 uppercase mb-2">Interests</h2>
            <p className="text-gray-700 leading-relaxed">{interests}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
