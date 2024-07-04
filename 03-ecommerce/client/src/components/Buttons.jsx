/* eslint-disable react/prop-types */
function Buttons({ children }) {
  const buttonStyle = {
    padding: " 0 1rem",
    backgroundColor: "#0B5ED7",
    borderRadius: "0.5rem",
  };
  return <button style={buttonStyle}>{children}</button>;
}

export default Buttons;
