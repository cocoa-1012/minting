import flame from "../../images/flame.png";

const ProgressBar = (props) => {
  const { current, total } = props;
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    height: 25,
    width: "100%",
    backgroundImage:
      "linear-gradient(to right, rgba(236, 183, 247, 1), rgb(237, 213, 241), rgb(214, 207, 102), rgb(231, 149, 41), rgb(252, 84, 55))",
    borderRadius: 10,
    margin: "45px 0px",
  };

  const fillerStyles = {
    position: "relative",
    height: "100%",
    width: `calc(${(current / total) * 100}% + 0px)`,
    backgroundColor: "none",
    borderRadius: "inherit",
    textAlign: "right",
    marginBottom: 10,
  };

  const labelStyles = {
    width: 70,
    height: 70,
    color: "white",
    fontWeight: "bold",
    backgroundImage: `url("../../images/flame.png")`,
    backgroundSize: "cover",
    marginTop: -26,
  };

  const totalVal = {
    position: "absolute",
    bottom: 15,
    right: 0,
  };
  const currentVal = {
    position: "absolute",
    bottom: 15,
    right: 20,
  };
  return (
    <div style={containerStyles}>
      <p style={totalVal}>{total}</p>
      <div style={fillerStyles}>
        <img src={flame} alt="%" style={labelStyles} />
        <p style={currentVal}>{current}</p>
      </div>
      <p>
        Claimed {current} of {total} total
      </p>
    </div>
  );
};

export default ProgressBar;
