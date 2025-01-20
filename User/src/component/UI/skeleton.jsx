import "./skeleton-styles.css"; // Import the CSS file

function Skeleton({ className, ...props }) {
  return (
    <div
      className={`skeleton ${className || ""}`}
      {...props}
    />
  );
}

export { Skeleton };
