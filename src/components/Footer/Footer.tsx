const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A]/70  flex justify-between p-2 items-center w-full">
      <div className="container mx-auto text-center">
        <a
          href="https://www.dinukadilshan.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-50"
        >
          &copy; {new Date().getFullYear()} Dinuka Dilshan
        </a>
      </div>
    </footer>
  );
};
export default Footer;
