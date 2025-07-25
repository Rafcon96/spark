const LogoIcon = ({ icon }: { icon: string }) => {
  return (
    <div className="maequee-item flex-none flex-center">
      <img src={`/${icon}.svg`} alt={icon} />
    </div>
  );
};

function LogoSection() {
  return (
    <div className="md:pt-5 md:pb-10 py-5 relative overflow-hidden bg-black">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>
      <div className="marquee "></div>
      <div className="marquee-box md:gap-12 gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <LogoIcon icon={`logo${item}`} key={item} />
        ))}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <LogoIcon icon={`logo${item}`} key={item} />
        ))}
      </div>
    </div>
  );
}

export default LogoSection;
