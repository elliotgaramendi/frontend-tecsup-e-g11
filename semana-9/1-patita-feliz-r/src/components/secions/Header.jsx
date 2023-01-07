const Header = ({ company }) => {
  const { name, slogan } = company;
  return (
    <header className="py-3">
      <div className="container d-flex flex-column gap-1">
        <h2 className="text-center fs-2 m-0">{name}</h2>
        <h1 className="text-info text-center fs-5 m-0">{slogan}</h1>
      </div>
    </header>
  );
};

export default Header;