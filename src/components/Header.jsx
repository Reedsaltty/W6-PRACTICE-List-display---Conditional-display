function Header({logo}) {
  return (
    <header className="header" id="header">
        <img src={logo} alt="Logo" />
        <h1>Students results for (CS-Bush)</h1>
    </header>
  );
}

export default Header;