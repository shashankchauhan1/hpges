import "./Exams.css"

const hptetJBTExams = [
  {
    year: 2024,
    title: "HPTET JBT – November 2024",
    paper: "https://drive.google.com/file/d/1ELLOaS1ffja_lnPGgewXYTPfzaXyahmW/view",
    session: "November",
  },
  {
    year: 2024,
    title: "HPTET JBT – June 2024",
    paper: "https://drive.google.com/file/d/1ic19v14XxzPNgR47kkbabSpYS1RfT-Ft/view",
    session: "June",
  },
  {
    year: 2023,
    title: "HPTET JBT – October 2023",
    paper: "https://himexam.com/wp-content/uploads/2023/10/HPTET-Jbt-paper-15-october-2023-himexam.com_page-0001.pdf",
    session: "October",
  },
  {
    year: 2022,
    title: "HPTET JBT – July 2022",
    paper: "https://drive.google.com/file/d/1hj-DCNelZdhqM5h66Khpa17UBRrk9PPz/view",
    session: "July",
  },
  {
    year: 2021,
    title: "HPTET JBT – November 2021",
    paper: "https://drive.google.com/file/d/1aeB1cR4Tqi9W9MV2_qOcR10cJsmvStkK/view",
    session: "November",
  },
  {
    year: 2021,
    title: "HPTET JBT – July 2021",
    paper: "https://drive.google.com/file/d/1k6gMDlLt87mQBY7GFLGMkW0DfJkYtPtE/view",
    session: "July",
  },
  {
    year: 2020,
    title: "HPTET JBT – 2020",
    paper: "https://drive.google.com/file/d/1UoBnIh3Zra_ozs1DzxSwlUWobI2-hUnt/view",
  },
  {
    year: 2019,
    title: "HPTET JBT – 2019",
    paper: "https://drive.google.com/file/d/1lljCJUMST0sahQP2WjIZEmNiG2h-GNNP/view",
  },
]

export default function HPTETJBTExams() {
  return (
    <div className="exams-container">
      <div className="exams-header">
        <h1 className="exams-title">HPTET JBT</h1>
        <p className="exams-subtitle">HP Teacher Eligibility Test - Junior Basic Training Papers</p>
        <div className="exam-info">
          <div className="info-badge">
            <span className="info-icon">🧑‍🎓</span>
            <span className="info-text">Primary Teacher Eligibility</span>
          </div>
          <div className="info-badge">
            <span className="info-icon">📊</span>
            <span className="info-text">{hptetJBTExams.length} Papers Available</span>
          </div>
          <div className="info-badge">
            <span className="info-icon">📅</span>
            <span className="info-text">2019 - 2024</span>
          </div>
          <div className="info-badge">
            <span className="info-icon">🎯</span>
            <span className="info-text">Classes I-V</span>
          </div>
        </div>
      </div>

      <div className="exams-grid">
        {hptetJBTExams.map((exam, idx) => (
          <div key={idx} className="exam-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="exam-card-header">
              <div className="year-badge hptet-jbt">{exam.year}</div>
              {exam.session && <div className="session-badge hptet-jbt-session">{exam.session}</div>}
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
            <h4>About HPTET JBT</h4>
            <p>
              HPTET JBT (Himachal Pradesh Teacher Eligibility Test - Junior Basic Training) is conducted for candidates
              who wish to become primary school teachers for classes I-V in HP government schools. This exam is
              mandatory for JBT qualified candidates to be eligible for teaching positions in primary schools. The exam
              covers Child Development & Pedagogy, Language I & II, Mathematics, and Environmental Studies.
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
              <p>Classes I-V</p>
            </div>
          </div>
        </div>
      </div>

      <div className="exam-subjects">
        <h3 className="subjects-title">HPTET JBT Exam Pattern</h3>
        <div className="subjects-grid">
          <div className="subject-card">
            <div className="subject-icon">👶</div>
            <h4>Child Development & Pedagogy</h4>
            <p>30 Questions - Child Psychology, Learning Theories, Teaching Methods</p>
          </div>
          <div className="subject-card">
            <div className="subject-icon">🇮🇳</div>
            <h4>Language I (Hindi)</h4>
            <p>30 Questions - व्याकरण, गद्य, पद्य, भाषा शिक्षण</p>
          </div>
          <div className="subject-card">
            <div className="subject-icon">🇬🇧</div>
            <h4>Language II (English)</h4>
            <p>30 Questions - Grammar, Comprehension, Pedagogy</p>
          </div>
          <div className="subject-card">
            <div className="subject-icon">🔢</div>
            <h4>Mathematics</h4>
            <p>30 Questions - Number System, Geometry, Data Handling, Pedagogy</p>
          </div>
          <div className="subject-card">
            <div className="subject-icon">🌱</div>
            <h4>Environmental Studies</h4>
            <p>30 Questions - Family, Food, Water, Travel, Animals, Plants</p>
          </div>
          <div className="subject-card">
            <div className="subject-icon">🏔️</div>
            <h4>HP General Knowledge</h4>
            <p>Bonus Section - HP History, Geography, Culture, Current Affairs</p>
          </div>
        </div>
      </div>

      <div className="exam-comparison">
        <h3 className="comparison-title">HPTET JBT vs Regular JBT</h3>
        <div className="comparison-grid">
          <div className="comparison-card">
            <h4>🧑‍🎓 HPTET JBT</h4>
            <ul>
              <li>✅ Teacher Eligibility Test</li>
              <li>✅ Mandatory for teaching</li>
              <li>✅ Valid for 7 years</li>
              <li>✅ All India recognition</li>
              <li>✅ 150 Questions</li>
              <li>✅ 60% qualifying marks</li>
            </ul>
          </div>
          <div className="comparison-card">
            <h4>👨‍🏫 Regular JBT</h4>
            <ul>
              <li>📚 Training qualification</li>
              <li>📚 2-year diploma course</li>
              <li>📚 Permanent qualification</li>
              <li>📚 State-specific</li>
              <li>📚 170 Questions</li>
              <li>📚 Commission-based selection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
