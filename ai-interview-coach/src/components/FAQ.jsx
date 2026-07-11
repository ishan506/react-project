import "../FAQ.css";

function FAQ() {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h3>1. What is AI Interview Coach?</h3>
        <p>AI Interview Coach helps students practice mock interviews with AI.</p>
      </div>

      <div className="faq-item">
        <h3>2. Is it free?</h3>
        <p>Yes, basic interview practice is free.</p>
      </div>

      <div className="faq-item">
        <h3>3. Can I choose interview difficulty?</h3>
        <p>Yes. You can select Easy, Medium, or Hard.</p>
      </div>

      <div className="faq-item">
        <h3>4. Will I get feedback?</h3>
        <p>Yes. After the interview, AI provides feedback and suggestions.</p>
      </div>
    </div>
  );
}

export default FAQ;