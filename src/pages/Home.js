import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero" style={{textAlign:"center", padding:"120px 20px 90px"}}>
        
        <div className="badge"
          style={{
            display:"inline-block",
            background:"rgba(183,132,37,.12)",
            border:"1px solid rgba(183,132,37,.35)",
            color:"#B78425",
            borderRadius:"40px",
            padding:"8px 16px",
            fontSize:"14px"
          }}
        >
          Transform Your Financial Future
        </div>

        <h1 style={{fontSize:"50px", margin:"18px 0 8px"}}>
          Master Stock Trading <br/>
          <span style={{color:"#B78425"}}>with Confidence</span>
        </h1>

        <p style={{maxWidth:"600px",margin:"auto",opacity:.9}}>
          Expert-led coaching and smart investment strategies to help you 
          navigate the markets and build lasting wealth.
        </p>

        <div style={{marginTop:"25px"}}>
          <button className="btn primary">Get Started</button>
          <button className="btn secondary" onClick={() => window.location.href="/calculator"}>
            Try Calculator
          </button>
        </div>

      </section>
    </>
  );
}
