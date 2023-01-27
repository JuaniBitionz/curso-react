import './JobExperience.css';

const jobs = [
  {
    company: 'Freelancer',
    companyLinkedinUrl: 'www.google.com',
    job: 'Front End Developer',
    startMonth: 'January',
    startYear: '2022',
    finishMonth: 'September',
    finishYear: '2022',
    isActual: false,
  },
  {
    company: 'Bitionz',
    companyLinkedinUrl: 'www.google.com',
    job: 'Front End Developer',
    startMonth: 'September',
    startYear: '2022',
    finishMonth: '',
    finishYear: '',
    isActual: true,
  },
]

function JobArrow(props){
  if(!props.isLast){
      return (
        <div className='job-arrow'>
          {'---->'}
        </div>
      );
    }
}

export function JobExperience() {
  return (
    <div className='job-container'>
        <h1 className='title'>Job Experience</h1>
        <div className='jobs-wrapper-container'>
          {jobs.map((job, index) => {
            return(
              <div key={job.company} className='jobs-wrapper'>
              <div className='job'>
                    <h3>{job.job}</h3>
                    <h2 className='bold' style={{fontWeight: '700',textDecoration: '4px #579BB1 underline'}}>{job.company}</h2>
                    <h3>
                      From: {job.startMonth ? job.startMonth+', ' :''}{job.startYear}
                    </h3>
                    <h3>
                      To: {job.isActual ? 'Present' : ((job.finishMonth ? job.finishMonth+', ' : '')+job.finishYear)}
                    </h3>
              </div>
                <JobArrow isLast={index === jobs.length - 1} />
              </div>
            )
            })
          } 
        </div>
    </div>
  );
}
