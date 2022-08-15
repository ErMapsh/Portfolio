import React from 'react'
import { languages, IotherSkills } from '../data/Skills/SkillData';
import { Bar } from '../components/Bar';

function Resume() {
  return (
    <div className='p-4'>
      {/* education and experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className="my-3 font-bold text-2x1">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Engineering</h5>
            <p className='font-semibold'>University of Mumbai(2018-2022)</p>
            <p className='my-3'>I completed my B.E in Computer
              Engineering from SSPM College of Engineering with 8.20 CGPA</p>
          </div>
        </div>
        <div>
          {/* <h5 className="my-3 font-bold text-2x1">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Engineering</h5>
            <p className='font-semibold'>University of Mumbai(2018-2022)</p>
            <p className='my-3'>I am currently pursuing B.E in Computer
              Engineering from SSPM College of Engineering</p>
          </div> */}
        </div>
      </div>

      {/* lanugauge and tools */}
      <div className="grid grid-cols-2 gap-t">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language and Frameworks</h5>
          <div className="my-2">
            {
              languages.map(language => <Bar data={language} key={language.name} />)
            }
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Database and Other Skills</h5>
          <div className="my-2">
            {
              IotherSkills.map(language => <Bar data={language} key={language.name} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume