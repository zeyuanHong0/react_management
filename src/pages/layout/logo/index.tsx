const Logo = () => {
  return (
    <div className="w-full h-base-menu-logo-height  flex items-center justify-center gap-2.5">
      <img
        className="w-9 h-9 rounded-full"
        src="../../../../public/Logo.JPG"
        alt="logo"
      />
      <p className="text-base-logo-title-fontSize text-white">哲理源后台管理</p>
    </div>
  );
};

export default Logo;
