import React from "react";
import "./Style.css";

function GateANav1() {
  return (
    <div className="GateANav1" style={{ backgroundColor: "#e7f4f6" }}>
      <div style={{ color: "#4799d2" }}>About</div>
      <div style={{ display: "flex" }}>
        <div
          style={{ fontWeight: "bold", fontSize: "30px ", marginRight: "4px" }}
        >
          GATE
        </div>
        <div style={{ fontWeight: "bold", fontSize: "30px" }}>2022</div>
      </div>
      <div>
        The Graduate Aptitude Test in Engineering (GATE) is an examination that
        primarily tests the comprehensive understanding of various undergraduate
        subjects in engineering and science for admission into the Masters
        Program and Recruitment by some Public Sector Companies. GATE 2022 is
        conducted by the Indian Institute of Technology Kharagpur and six other
        Indian Institutes of Technology at Mumbai, Delhi, Guwahati, Kanpur,
        Chennai, Roorkee & Indian Institute of Science at Bengaluru on behalf of
        the National Coordination Board – GATE, The Department of Higher
        Education, Ministry of Education (MoE), Government of India. Organising
        Institute for GATE 2022 is
        <br />
        <strong>Indian Institute of Technology Kharagpur</strong>
      </div>
      <div style={{ marginTop: "7px" }}>
        <a
          href="https://www.google.com"
          target="_blank"
          style={{ color: "#337ab7" }}
        >
          Examination Day Video for Candidates
        </a>
      </div>
    </div>
  );
}
export default GateANav1;
