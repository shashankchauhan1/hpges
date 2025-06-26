import "./Exams.css"

const nonMedicalExams = [
  {
    year: 2020,
    title: "HP TGT Non-Medical Commission – 2020",
    paper: "https://drive.google.com/file/d/1Jt1BCL3r0ehlVuekOKJJ6wDzHyQ-8p4D/view",
    answerKey: "https://drive.google.com/file/d/1FzHaamAjmnyV23dYZxY19M8QoVSPnPqN/view",
  },
  {
    year: 2018,
    title: "HP TGT Non-Medical Commission – 2018",
    paper: "https://drive.google.com/file/d/1YznGtaB6niKzm-JCzVMPZsrs-jG_TNBj/view",
    answerKey:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzrKFiLS575NPeAo9jL5hrbJ1yfW8nThK7cewjgCHX8UxnQF7ZP-wM0sx43GH_7LAWBVkj3jnCDmYoBkK1WRmcmgWVgePxK67Upvc53eGBYgk9qW2rEe6FRETmUsprIHkdkAjBe6GeHfw/s640/Photo_1595308919782.jpg",
  },
  {
    year: 2016,
    title: "HP TGT Non-Medical Commission – 2016",
    paper: "https://drive.google.com/file/d/1daGBXTX6S2mRPGGXwhKwAP1iXELTCrJJ/view",
  },
]

export default function NonMedicalExams() {
  return (
    <div className="exams-container">
      <div className="exams-header">
        <h1 className="exams-title">HP Non-Medical TGT Commission</h1>
        <p className="exams-subtitle">Previous Year Question Papers & Answer Keys</p>
        <div className="exam-info">
          <div className="info-badge">
            <span className="info-icon">📚</span>
            <span className="info-text">Arts, Commerce & Science</span>
          </div>
          <div className="info-badge">
            <span className="info-icon">📊</span>
            <span className="info-text">{nonMedicalExams.length} Papers Available</span>
          </div>
        </div>
      </div>

      <div className="exams-grid">
        {nonMedicalExams.map((exam, idx) => (
          <div key={idx} className="exam-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="exam-card-header">
              <div className="year-badge non-medical">{exam.year}</div>
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
            <h4>About HP TGT Non-Medical</h4>
            <p>
              HP TGT Non-Medical includes subjects like Mathematics, Physics, Chemistry, English, Hindi, Social Science,
              Commerce, and other non-medical subjects for government school teachers in Himachal Pradesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
