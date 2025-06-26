import "./Exams.css"

const hptetNonMedicalExams = [
  {
    year: 2024,
    title: "HPTET Non-Medical – November 2024",
    paper: "https://drive.google.com/file/d/1xKiMfsjJxAZnkx-Jrl9zZOjN8qpRLeh-/view",
    session: "November",
  },
  {
    year: 2024,
    title: "HPTET Non-Medical – June 2024",
    paper: "https://drive.google.com/file/d/1ic19v14XxzPNgR47kkbabSpYS1RfT-Ft/view",
    session: "June",
  },
  {
    year: 2023,
    title: "HPTET Non-Medical – November 2023",
    paper: "https://himexam.com/wp-content/uploads/2023/11/HP-TET-NON-MEDICAL-2023-himexam.com_.pdf",
    session: "November",
  },
  {
    year: 2023,
    title: "HPTET Non-Medical – June 2023",
    paper: "https://drive.google.com/file/d/1sH1BR9IKHhV14LMIGt6jxsGheCgQNZjC/view",
    session: "June",
  },
  {
    year: 2022,
    title: "HPTET Non-Medical – December 2022",
    paper: "https://drive.google.com/file/d/1Wjs2C4u1jxbMU6em59xtC4JDMDkCZUdM/view",
    session: "December",
  },
  {
    year: 2022,
    title: "HPTET Non-Medical – August 2022",
    paper: "https://drive.google.com/file/d/1rQyyRQNaAHwE8McIQ9w8qjQQ01Ea2k4T/view",
    session: "August",
  },
  {
    year: 2021,
    title: "HPTET Non-Medical – November 2021",
    paper: "https://drive.google.com/file/d/1d7HGXpbAu2LSLrAyhaS-gfgMue2UC9Nk/view",
    session: "November",
  },
  {
    year: 2020,
    title: "HPTET Non-Medical – December 2020",
    paper: "https://drive.google.com/file/d/1_Q_1kdZYKMohMeMrn9VAH9I5Ojnf0BCw/view",
    session: "December",
  },
]

export default function HPTETNonMedicalExams() {
  return (
    <div className="exams-container">
      <div className="exams-header">
        <h1 className="exams-title">HPTET Non-Medical</h1>
        <p className="exams-subtitle">HP Teacher Eligibility Test - Non-Medical Previous Year Papers</p>
        <div className="exam-info">
          <div className="info-badge">
            <span className="info-icon">🎓</span>
            <span className="info-text">Teacher Eligibility Test</span>
          </div>
          <div className="info-badge">
            <span className="info-icon">📊</span>
            <span className="info-text">{hptetNonMedicalExams.length} Papers Available</span>
          </div>
          <div className="info-badge">
            <span className="info-icon">📅</span>
            <span className="info-text">2020 - 2024</span>
          </div>
          <div className="info-badge">
            <span className="info-icon">📚</span>
            <span className="info-text">Non-Medical Stream</span>
          </div>
        </div>
      </div>

      <div className="exams-grid">
        {hptetNonMedicalExams.map((exam, idx) => (
          <div key={idx} className="exam-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="exam-card-header">
              <div className="year-badge hptet">{exam.year}</div>
              {exam.session && <div className="session-badge hptet-session">{exam.session}</div>}
              <h3 className="exam-title">{exam.title}</h3>
            </div>

            <div className="exam-actions">
              <a className="exam-btn exam-btn-paper" href={exam.paper} target="_blank" rel="noopener noreferrer">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Question Paper
              </a>
              {exam.answerKey && (
                <a className="exam-btn exam-btn-key" href={exam.answerKey} target="_blank" rel="noopener noreferrer">
                  <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v-2L2.257 8.257a6 6 0 018.486-8.486L18 7z"
                    />
                  </svg>
                  Answer Key
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="exam-note">
        <div className="note-content">
          <svg className="note-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="note-text">
            <h4>About HPTET Non-Medical</h4>
            <p>
              HPTET (Himachal Pradesh Teacher Eligibility Test) Non-Medical is conducted for candidates who wish to
              become teachers for classes VI-VIII in government schools. The exam covers subjects like Mathematics,
              Science, Social Science, English, Hindi, and General Knowledge. It's mandatory for teaching positions in
              HP government schools for the non-medical stream.
            </p>
          </div>
        </div>
      </div>

      <div className="exam-stats">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">📈</div>
            <div className="stat-info">
              <h4>Latest Paper</h4>
              <p>November 2024</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🗓️</div>
            <div className="stat-info">
              <h4>Exam Frequency</h4>
              <p>2-3 times per year</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⏱️</div>
            <div className="stat-info">
              <h4>Duration</h4>
              <p>2.5 Hours</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">📝</div>
            <div className="stat-info">
              <h4>Total Questions</h4>
              <p>150 Questions</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <h4>Qualifying Marks</h4>
              <p>60% (90/150)</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <h4>Teaching Level</h4>
              <p>Classes VI-VIII</p>
            </div>
          </div>
        </div>
      </div>

      <div className="exam-subjects">
        <h3 className="subjects-title">Exam Subjects Coverage</h3>
        <div className="subjects-grid">
          <div className="subject-card">
            <div className="subject-icon">🔢</div>
            <h4>Mathematics</h4>
            <p>Algebra, Geometry, Statistics, Number System</p>
          </div>
          <div className="subject-card">
            <div className="subject-icon">🔬</div>
            <h4>Science</h4>
            <p>Physics, Chemistry, Biology, Environmental Science</p>
          </div>
          <div className="subject-card">
            <div className="subject-icon">🌍</div>
            <h4>Social Science</h4>
            <p>History, Geography, Civics, Economics</p>
          </div>
          <div className="subject-card">
            <div className="subject-icon">🇬🇧</div>
            <h4>English</h4>
            <p>Grammar, Comprehension, Literature, Pedagogy</p>
          </div>
          <div className="subject-card">
            <div className="subject-icon">🇮🇳</div>
            <h4>Hindi</h4>
            <p>व्याकरण, गद्य, पद्य, शिक्षण विधि</p>
          </div>
          <div className="subject-card">
            <div className="subject-icon">🧠</div>
            <h4>General Knowledge</h4>
            <p>Current Affairs, HP GK, Indian History, Geography</p>
          </div>
        </div>
      </div>
    </div>
  )
}
