const LogoIcon = ({ icon }: { icon: string }) => {
  return (
    <div className="maequee-item flex-none ">
      <img src={`/${icon}.svg`} alt={icon} />
    </div>
  );
};

function LogoSection() {
  return (
    <div className="md:pb-16 pb-12  bg-black w-full h-fit  overflow-hidden flex flex-col gap-4 md:gap-8">
      <div className=" z-10 w-full col-12 layout-grid">
        <div className="col-12">
          <img src="/comp.svg" className="hidden xl:block w-full" alt="comp" />
          <img
            src="/comp-mobile.svg"
            className="block xl:hidden max-w-sm -mr-5"
            alt="comp"
          />
        </div>
      </div>
      <div className="marquee-box md:gap-8 gap-4 h-w-screen bg-black ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <LogoIcon icon={`logos/logo${item}`} key={item} />
        ))}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <LogoIcon icon={`logos/logo${item}`} key={item} />
        ))}
      </div>
    </div>
  );
}

export default LogoSection;
