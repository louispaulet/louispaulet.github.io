const PageIntro = ({ kicker, title, children }) => (
  <header className="page-intro">
    <div>
      <p className="section-kicker">{kicker}</p>
      <h1 className="page-title mt-3">{title}</h1>
    </div>
    {children && <div className="page-intro-description">{children}</div>}
  </header>
);
export default PageIntro;
