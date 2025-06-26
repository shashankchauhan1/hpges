import "./Exams.css"

const jbtExams = [
  {
    year: 2024,
    title: "HP JBT Commission – November 2024",
    paper: "https://drive.google.com/file/d/1ELLOaS1ffja_lnPGgewXYTPfzaXyahmW/view",
    answerKey: "https://www.hpbose.org/Admin/Upload/Noti.JBT.13.01.2025.pdf",
    session: "November",
  },
  {
    year: 2024,
    title: "HP JBT Commission – June 2024",
    paper: "https://drive.google.com/file/d/1ic19v14XxzPNgR47kkbabSpYS1RfT-Ft/view",
    session: "June",
  },
  {
    year: 2023,
    title: "HP JBT Commission – 2023",
    paper: "https://himexam.com/wp-content/uploads/2023/10/HPTET-Jbt-paper-15-october-2023-himexam.com_page-0001.pdf",
  },
  {
    year: 2022,
    title: "HP JBT Commission – 2022",
    paper: "https://drive.google.com/file/d/1hj-DCNelZdhqM5h66Khpa17UBRrk9PPz/view",
  },
  {
    year: 2021,
    title: "HP JBT Commission – November 2021",
    paper: "https://drive.google.com/file/d/1aeB1cR4Tqi9W9MV2_qOcR10cJsmvStkK/view",
    session: "November",
  },
  {
    year: 2021,
    title: "HP JBT Commission – July 2021",
    paper: "https://drive.google.com/file/d/1k6gMDlLt87mQBY7GFLGMkW0DfJkYtPtE/view",
    session: "July",
  },
  {
    year: 2020,
    title: "HP JBT Commission – 2020",
    paper: "https://drive.google.com/file/d/1UoBnIh3Zra_ozs1DzxSwlUWobI2-hUnt/view",
  },
  {
    year: 2019,
    title: "HP JBT Commission – 2019",
    paper: "https://drive.google.com/file/d/1lljCJUMST0sahQP2WjIZEmNiG2h-GNNP/view",
  },
  {
    year: 2017,
    title: "HP JBT Commission – 2017",
    paper: "https://drive.google.com/file/d/1QsR01pzKkcFVOk68GoVH11Ls5CA7v576/view",
  },
]

export default function JBTExams() {
  return (
    <div className="exams-container">
      <div className="exams-header">
        <h1 className="exams-title">HP JBT Commission</h1>
        <p className="exams-subtitle">Junior Basic Training - Previous Year Question Papers & Answer Keys</p>
        <div className="exam-info">
          <div className="info-badge">
            <span className="info-icon">👨‍🏫</span>
            <span className="info-text">Primary Teacher Training</span>
          </div>
          <div className="info-badge">
            <span className="info-icon">📊</span>
            <span className="info-text">{jbtExams.length} Papers Available</span>
          </div>
          <div className="info-badge">
            <span className="info-icon">📅</span>
            <span className="info-text">2017 - 2024</span>
          </div>
        </div>
      </div>

      <div className="exams-grid">
        {jbtExams.map((exam, idx) => (
          <div key={idx} className="exam-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="exam-card-header">
              <div className="year-badge jbt">{exam.year}</div>
              {exam.session && <div className="session-badge">{exam.session}</div>}
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
            <h4>About HP JBT (Junior Basic Training)</h4>
            <p>
              HP JBT is conducted for recruitment of primary school teachers in Himachal Pradesh. The exam covers
              subjects like General Knowledge, Teaching Methodology, Child Development, Hindi, English, Mathematics,
              Environmental Studies, and HP General Knowledge. JBT qualified candidates are eligible to teach classes
              I-V in government primary schools.
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
              <p>1-2 times per year</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⏱️</div>
            <div className="stat-info">
              <h4>Duration</h4>
              <p>3 Hours</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">📝</div>
            <div className="stat-info">
              <h4>Total Questions</h4>
              <p>170 Questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
