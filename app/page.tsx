"use client";
import { useState } from "react";

const projects = [
  {
    id: 1,
    tag: "Data Engineering",
    accent: "#0ea5e9",
    accentBg: "#e0f2fe",
    title: "ETL Pipeline & Anomaly Detection",
    company: "Jio Platforms Ltd · 400M+ users",
    description:
      "Designed and deployed modular ETL pipelines using Apache Spark, Kafka, and Airflow at scale. Built a Random Forest anomaly detection model achieving 94% accuracy — automated alerting prevented 2 critical production outages.",
    stack: ["Apache Spark", "Kafka", "Airflow", "Python", "Random Forest", "SQL"],
    metrics: [
      { value: "30%", label: "Faster execution" },
      { value: "94%", label: "Model accuracy" },
      { value: "2", label: "Outages prevented" },
    ],
    link: null,
  },
  {
    id: 2,
    tag: "Cloud / Infra",
    accent: "#8b5cf6",
    accentBg: "#ede9fe",
    title: "AWS Disaster Recovery Architecture",
    company: "Personal Project",
    description:
      "Engineered automated cross-region disaster recovery on AWS, eliminating manual backup processes. Enforced 99.9% data availability through versioning, encryption, and IAM-based access controls.",
    stack: ["AWS S3", "EC2", "Route 53", "CloudFormation", "Python", "IAM"],
    metrics: [
      { value: "40%", label: "RTO reduced" },
      { value: "99.9%", label: "Data availability" },
      { value: "0", label: "Manual backups" },
    ],
    link: null,
  },
  {
    id: 3,
    tag: "Full Stack",
    accent: "#f59e0b",
    accentBg: "#fef3c7",
    title: "HoopsInsight — NBA Analytics",
    company: "Personal Project",
    description:
      "Built an interactive basketball analytics platform using Flask and the NBA API. Features dynamic shot maps, spatial comparison tools, and player tendency visualizations.",
    stack: ["Python", "Flask", "JavaScript", "NBA API", "HTML/CSS"],
    metrics: [
      { value: "85%", label: "JS frontend" },
      { value: "REST", label: "API integration" },
      { value: "Live", label: "Visualizations" },
    ],
    link: "https://github.com/Riddhi1257/HoopsInsight",
  },
  {
    id: 4,
    tag: "Data Engineering",
    accent: "#0ea5e9",
    accentBg: "#e0f2fe",
    title: "Real-Time Water Supply Pipeline",
    company: "Smart India Hackathon",
    description:
      "Designed a scalable data ingestion pipeline to collect, validate, and store real-time IoT sensor data. Optimized NoSQL data models for high-velocity writes and efficient retrieval.",
    stack: ["Python", "AWS DynamoDB", "IoT Integration", "NoSQL"],
    metrics: [
      { value: "Real-time", label: "Data ingestion" },
      { value: "IoT", label: "Sensor integration" },
      { value: "NoSQL", label: "Optimized models" },
    ],
    link: null,
  },
  {
    id: 5,
    tag: "ML / Research",
    accent: "#10b981",
    accentBg: "#d1fae5",
    title: "Lunar Crater Detection",
    company: "Springer ICICC-2025 · Best Paper Award",
    description:
      "End-to-end ML pipeline for lunar crater detection using Faster R-CNN with ResNet-50 FPN. Awarded Best Paper at Springer ICICC-2025. Achieved mAP@0.5 of 0.79 with 84% improvement in detection accuracy.",
    stack: ["Faster R-CNN", "ResNet-50 FPN", "TensorFlow", "Python", "SGD"],
    metrics: [
      { value: "84%", label: "Accuracy boost" },
      { value: "0.79", label: "mAP@0.5" },
      { value: "🏆", label: "Best Paper" },
    ],
    link: null,
  },
];

const skills = {
  "Languages": { color: "#0ea5e9", bg: "#e0f2fe", items: ["Python", "SQL", "MySQL"] },
  "Data Engineering": { color: "#8b5cf6", bg: "#ede9fe", items: ["Apache Spark", "Kafka", "Airflow", "ETL/ELT", "Data Modelling"] },
  "Cloud & Infra": { color: "#f59e0b", bg: "#fef3c7", items: ["AWS S3", "EC2", "Lambda", "CloudFormation", "DynamoDB"] },
  "Analytics & BI": { color: "#10b981", bg: "#d1fae5", items: ["Tableau", "Power BI", "Pandas", "NumPy", "Snowflake"] },
  "Tools": { color: "#ef4444", bg: "#fee2e2", items: ["Git", "Linux", "Jupyter", "Salesforce", "Agile/Scrum"] },
};

const filters = ["All", "Data Engineering", "Cloud / Infra", "Full Stack", "ML / Research"];
const navItems = ["About", "Projects", "Skills", "Research"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.tag === activeFilter);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #f0f0f0",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 40px", height: 60,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>RM</span>
          </div>
          <span style={{ fontWeight: 600, fontSize: 14, color: "#111" }}>Riddhi Magdiwar</span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} style={{
              background: activeSection === item ? "#111" : "transparent",
              border: "none", borderRadius: 20,
              padding: "6px 16px", fontSize: 13,
              color: activeSection === item ? "white" : "#666",
              cursor: "pointer",
              fontWeight: activeSection === item ? 500 : 400,
            }}>{item}</button>
          ))}
        </div>
      </nav>

      <section id="About" style={{ maxWidth: 900, margin: "0 auto", padding: "80px 40px 80px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#d1fae5", borderRadius: 20, padding: "6px 14px", marginBottom: 28 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981" }}></div>
          <span style={{ fontSize: 12, color: "#065f46", fontWeight: 500 }}>Open to Fall 2026 Internships · Tempe, AZ</span>
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, margin: "0 0 24px", color: "#0a0a0a", letterSpacing: "-1.5px" }}>
          I build data<br />
          <span style={{ background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            systems that scale.
          </span>
        </h1>
        <p style={{ fontSize: 18, color: "#555", lineHeight: 1.7, maxWidth: 560, margin: "0 0 36px" }}>
          Data Engineer and Backend Systems developer at ASU. Previously at Jio Platforms — ETL pipelines, distributed SQL, and ML-driven monitoring for <strong style={{ color: "#111" }}>400M+ users</strong>.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="https://linkedin.com/in/rimag03" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 22px", borderRadius: 12,
            background: "#0a66c2", color: "white",
            fontSize: 13, fontWeight: 600, textDecoration: "none",
          }}>LinkedIn</a>
          <a href="https://github.com/Riddhi1257" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 22px", borderRadius: 12,
            background: "#111", color: "white",
            fontSize: 13, fontWeight: 600, textDecoration: "none",
          }}>GitHub</a>
          <a href="mailto:reachriddhi10@gmail.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 22px", borderRadius: 12,
            background: "white", color: "#111",
            border: "1px solid #e5e5e5",
            fontSize: 13, fontWeight: 600, textDecoration: "none",
          }}>reachriddhi10@gmail.com</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 56 }}>
          {[
            { value: "400M+", label: "Users impacted at Jio", color: "#0ea5e9" },
            { value: "94%", label: "ML model accuracy", color: "#8b5cf6" },
            { value: "Best Paper", label: "Springer ICICC-2025", color: "#10b981" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: "white", borderRadius: 16, padding: "24px", border: "1px solid #f0f0f0" }}>
              <p style={{ fontSize: 28, fontWeight: 700, margin: "0 0 4px", color: stat.color }}>{stat.value}</p>
              <p style={{ fontSize: 13, color: "#888", margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="Projects" style={{ background: "white", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 40px" }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 8px", color: "#0a0a0a", letterSpacing: "-0.5px" }}>Projects</h2>
          <p style={{ fontSize: 15, color: "#888", margin: "0 0 36px" }}>Production work, research, and side projects.</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                background: activeFilter === f ? "#111" : "white",
                border: "1px solid", borderColor: activeFilter === f ? "#111" : "#e5e5e5",
                borderRadius: 20, padding: "7px 16px", fontSize: 12,
                color: activeFilter === f ? "white" : "#666",
                cursor: "pointer", fontWeight: activeFilter === f ? 500 : 400,
              }}>{f}</button>
            ))}
          </div>
          <div style={{ display: "grid", gap: 20 }}>
            {filteredProjects.map((p) => (
              <div key={p.id} style={{ background: "#fafafa", borderRadius: 20, padding: "28px 32px", border: "1px solid #f0f0f0", borderLeft: `4px solid ${p.accent}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 20, background: p.accentBg, color: p.accent, display: "inline-block", marginBottom: 10 }}>
                      {p.tag}
                    </span>
                    <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 4px", color: "#0a0a0a" }}>{p.title}</h3>
                    <p style={{ fontSize: 12, color: "#999", margin: 0 }}>{p.company}</p>
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" style={{
                      fontSize: 12, color: "white", textDecoration: "none",
                      background: "#111", padding: "8px 16px", borderRadius: 8, fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}>GitHub →</a>
                  )}
                </div>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, margin: "0 0 24px" }}>{p.description}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
                  {p.metrics.map((m, i) => (
                    <div key={i} style={{ background: "white", borderRadius: 12, padding: "14px 16px", border: "1px solid #f0f0f0", textAlign: "center" }}>
                      <p style={{ fontSize: 20, fontWeight: 700, margin: "0 0 2px", color: p.accent }}>{m.value}</p>
                      <p style={{ fontSize: 11, color: "#888", margin: 0 }}>{m.label}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.stack.map((s) => (
                    <span key={s} style={{ fontSize: 11, padding: "4px 12px", background: "white", border: "1px solid #e5e5e5", borderRadius: 20, color: "#555" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Skills" style={{ maxWidth: 900, margin: "0 auto", padding: "80px 40px" }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 8px", color: "#0a0a0a", letterSpacing: "-0.5px" }}>Skills</h2>
        <p style={{ fontSize: 15, color: "#888", margin: "0 0 36px" }}>Technologies and tools I work with.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {Object.entries(skills).map(([category, { color, bg, items }]) => (
            <div key={category} style={{ background: "white", border: "1px solid #f0f0f0", borderRadius: 20, padding: "24px", borderTop: `3px solid ${color}` }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: color, margin: "0 0 16px", letterSpacing: "0.08em" }}>{category.toUpperCase()}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {items.map((skill) => (
                  <span key={skill} style={{ fontSize: 12, padding: "5px 12px", background: bg, borderRadius: 20, color: color, fontWeight: 500 }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="Research" style={{ background: "white", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 40px" }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 8px", color: "#0a0a0a", letterSpacing: "-0.5px" }}>Research</h2>
          <p style={{ fontSize: 15, color: "#888", margin: "0 0 36px" }}>Published work and academic contributions.</p>
          <div style={{ background: "linear-gradient(135deg, #fef3c7, #d1fae5)", borderRadius: 24, padding: "36px", border: "1px solid #f0f0f0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24 }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 20, background: "#fef3c7", color: "#92400e", border: "1px solid #fcd34d" }}>Springer Publication</span>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 20, background: "#d1fae5", color: "#065f46", border: "1px solid #6ee7b7" }}>🏆 Best Paper Award</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px", color: "#0a0a0a", lineHeight: 1.4 }}>
                  Lunar Crater Detection and Diameter Estimation with Faster R-CNN using ResNet-50 FPN Backbone
                </h3>
                <p style={{ fontSize: 13, color: "#777", margin: "0 0 16px" }}>ICICC-2025 · September 2025 · CMR Technical Campus, Hyderabad</p>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, margin: "0 0 20px" }}>
                  End-to-end ML pipeline for automated lunar crater detection and diameter estimation. Achieved mAP@0.5 of 0.79 with SGD-based training — an 84% improvement in detection accuracy over baseline.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["Faster R-CNN", "ResNet-50 FPN", "TensorFlow", "Python", "Computer Vision"].map((s) => (
                    <span key={s} style={{ fontSize: 11, padding: "4px 12px", background: "white", border: "1px solid #e5e5e5", borderRadius: 20, color: "#555" }}>{s}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gap: 12, minWidth: 150 }}>
                {[{ value: "84%", label: "Accuracy boost", color: "#10b981" }, { value: "0.79", label: "mAP@0.5", color: "#8b5cf6" }, { value: "#1", label: "Best paper", color: "#f59e0b" }].map((m) => (
                  <div key={m.label} style={{ background: "white", borderRadius: 14, padding: "16px 20px", textAlign: "center", border: "1px solid rgba(0,0,0,0.06)" }}>
                    <p style={{ fontSize: 24, fontWeight: 700, margin: "0 0 2px", color: m.color }}>{m.value}</p>
                    <p style={{ fontSize: 11, color: "#888", margin: 0 }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#0a0a0a", padding: "40px", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "#666", margin: "0 0 4px" }}>Riddhi Magdiwar · MS IT @ ASU · Open to Fall 2026 Internships</p>
        <p style={{ fontSize: 12, color: "#444", margin: 0 }}>reachriddhi10@gmail.com</p>
      </footer>
    </div>
  );
}