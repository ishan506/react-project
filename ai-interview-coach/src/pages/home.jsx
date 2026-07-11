 import { Link } from "react-router-dom";
 
function Home() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>AI Interview Coach</h1>

        <p>Students don't get realistic interview practice.</p>

        <div className="hero-buttons">
          <Link to="/interview">
            <button>Start Free Interview</button>
            
          </Link>

<Link to ="/label">
<button>ishan</button>
</Link>
          <Link to="/features">
            <button>Features</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;