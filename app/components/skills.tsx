export default function Skills() {
    const skillRows = [
      ['Content Writing', 'SEO Optimization', 'Copywriting', 'Blog Writing'],
      ['Technical Writing', 'Creative Writing', 'Editing', 'Proofreading'],
      ['Social Media Content', 'Email Marketing', 'Brand Storytelling', 'Research']
    ];
  
    return (
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="space-y-6">
            {skillRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center items-center gap-4">
                {row.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-md text-lg font-semibold"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  