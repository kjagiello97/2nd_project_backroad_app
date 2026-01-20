const Icons = ({ icon, h4Name, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{h4Name}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};

export default Icons;
