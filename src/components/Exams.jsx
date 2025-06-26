import "./Exams.css"

const exams = [
  {
    year: 2020,
    title: "HP TGT Medical Commission – 2020",
    paper: "https://drive.google.com/file/d/1UEmQ83yUJMqD-6gS0H7yAxA3GP92oT9Y/view?pli=1",
    answerKey: "https://drive.google.com/file/d/1G0kdBdY5YZzqI2SWBbsg2-hsRqOFjL9L/view",
  },
  {
    year: 2018,
    title: "HP TGT Medical Commission – Oct 2018",
    paper: "https://drive.google.com/file/d/1hqdiR2-TpJvNTQ9AM7oOfIu5dBhOqfeW/view",
  },
  {
    year: 2018,
    title: "HP TGT Medical Commission – July 2018",
    paper: "https://examsuccessmaster.blogspot.com/2020/11/hp-tgt-medical-commission-2018-q-1-10.html",
  },
  {
    year: 2016,
    title: "HP TGT Medical Commission – 2016",
    paper: "https://examsuccessmaster.blogspot.com/2020/11/hp-tgt-commission-medical-2016-ques-1-20.html",
  },
  {
    year: 2014,
    title: "HP TGT Medical Commission – 2014",
    paper: "https://examsuccessmaster.blogspot.com/2020/11/hp-tgt-comm-medical-2014-ques-1-20.html",
  },
  {
    year: 2009,
    title: "HP TGT Medical Commission – 2009",
    paper: "https://examsuccessmaster.blogspot.com/2020/11/hp-tgt-commission-medical-2009-ques-1-20.html",
  },
]

export default function Exams() {
  return (
    <div className="exams-container">
      <div className="exams-header">
        <h1 className="exams-title">HP Medical TGT Commission</h1>
        <p className="exams-subtitle">Previous Year Question Papers & Answer Keys</p>
      </div>

      <div className="exams-grid">
        {exams.map((ex, idx) => (
          <div key={idx} className="exam-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="exam-card-header">
              <div className="year-badge">{ex.year}</div>
              <h3 className="exam-title">{ex.title}</h3>
            </div>

            <div className="exam-actions">
              <a className="exam-btn exam-btn-paper" href={ex.paper} target="_blank" rel="noopener noreferrer">
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
              {ex.answerKey && (
                <a className="exam-btn exam-btn-key" href={ex.answerKey} target="_blank" rel="noopener noreferrer">
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
    </div>
  )
}
