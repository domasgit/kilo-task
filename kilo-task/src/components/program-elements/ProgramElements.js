import styles from "./ProgramElements.module.css";
import Elements from "./Element";

function ProgramElements() {
  return (
    <div className={styles.program}>
      <h2>What's in my program?</h2>
      <Elements
        imgsrc="https://img-premium.flaticon.com/png/512/3281/premium/3281329.png?token=exp=1628649850~hmac=c0f0be611a4209eb78b5ff3dbf5d2654"
        headline="A personalized yoga program"
        text="Completely safe and focused on your key goals"
      />
      <Elements
        imgsrc="https://img-premium.flaticon.com/png/512/2963/premium/2963575.png?token=exp=1628652027~hmac=c64b0288b57b72266850ba3ae6e7df61"
        headline="Easy & enjoyable yoga workouts for your level"
        text="Program adjusts to your level and pace"
      />
      <Elements
        imgsrc="https://image.flaticon.com/icons/png/512/2843/2843661.png"
        headline="No special preparation needed"
        text="Perfect for begginners! Requires no special preparation or equipment"
      />
      <Elements
        imgsrc="https://image.flaticon.com/icons/png/512/3485/3485674.png"
        headline="Daily motivation & accountability"
        text="Track your progress, develop a healthy routine, reach goals faster"
      />
      <Elements
        imgsrc="https://image.flaticon.com/icons/png/512/1865/1865293.png"
        headline="Browse from various yoga challanges"
        text="30 d morning yoga, midful yoga, back flexibility challange, and more!"
      />
      <Elements
        imgsrc="https://img-premium.flaticon.com/png/512/1032/premium/1032765.png?token=exp=1628652290~hmac=386b9f7bf610f89c3bc80c4d5bdfc905"
        headline="Easy access on any device"
        text="Do your yoga anywhere across all types of devices"
      />
      <Elements
        imgsrc="https://img-premium.flaticon.com/png/512/2436/premium/2436702.png?token=exp=1628652349~hmac=fd4b8813220c98b20858ab5f48856b06"
        headline="A complete guide to get started"
        text="Best tips, guidelines, advice and recommendations for successful practice"
      />
    </div>
  );
}

export default ProgramElements;
