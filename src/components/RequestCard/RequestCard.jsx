import "./RequestCard.css";

const RequestCard = ({
  bloodGroup = "O+",
  name = "John Doe",
  hospital = "AIIMS Delhi",
  city = "New Delhi",
  time = "10 min ago",
  units = 2,
  urgency = "critical",
}) => {

  const getBloodBadgeColor = (group) => {
    const colors = {
      "O+": "#d32f2f",
      "O-": "#991b1b",
      "A+": "#2563eb",
      "A-": "#1e3a8a",
      "B+": "#9333ea",
      "B-": "#6b21a8",
      "AB+": "#059669",
      "AB-": "#065f46",
    };

    return colors[group] || "#d32f2f";
  };
  return (
    <div className={`request-card ${urgency}`}>
      <div className="card-top">
        <span className="dot"></span>
        <span className="tag">
          {urgency === "critical"
            ? "CRITICAL"
            : "WITHIN 3 DAYS"}
        </span>
      </div>
      <div className="card-body">
        <div
          className="blood-badge"
          style={{
            backgroundColor: getBloodBadgeColor(bloodGroup),
          }}
        >
          {bloodGroup}
        </div>
        <div className="info">
          <div className="info-top">
            <h3>{name}</h3>
            <p className="units">
              {units} unit{units > 1 && "s"} needed
            </p>
          </div>
          <div className="meta">
            <p>
              <span>📍</span>
              {hospital}, {city}
            </p>
            <p>
              <span>🕒</span>
              {time}
            </p>
          </div>
        </div>
      </div>
      <button className="call-btn">
        📞 Call Now
      </button>
    </div>
  );
};

export default RequestCard;