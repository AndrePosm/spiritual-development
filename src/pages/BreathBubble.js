import React from "react";
import "./BreathBubble.css";

function BreathBubble() {
  return (
    <div className="breath-bubble">
      <h2>Breath Bubble</h2>
      <p>This is the Breath Bubble page.</p>
      <div className="bubble"></div> {/* Новый элемент для "дышащего" круга */}
    </div>
  );
}

export default BreathBubble;