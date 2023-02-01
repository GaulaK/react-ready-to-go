const Switch = ({ switchValue, setSwitch }) => {
  return (
    <div className="switch">
      <button
        onClick={() => setSwitch(true)}
        className={switchValue ? "selected" : "not-selected"}
      >
        On
      </button>
      <button
        onClick={() => setSwitch(false)}
        className={!switchValue ? "selected" : "not-selected"}
      >
        Off
      </button>
    </div>
  );
};

export default Switch;
