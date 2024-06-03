const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-[#6291e1] py-24 text-center text-white">
      <p>Copyright &copy; {year}</p>
    </div>
  );
};

export default Footer;
