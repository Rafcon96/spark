function Button({ onClick, text }: { onClick: () => void; text: string }) {
  return (
    <div className="p-[2px] bg-gradient-to-r from-[#F7797D] via-[#C471ED] to-[#12C2E9] rounded-lg shadow-[0_8px_32px_rgba(247,121,125,0.3),0_8px_32px_rgba(196,113,237,0.3),0_8px_32px_rgba(18,194,233,0.3),0_4px_16px_rgba(18,194,233,0.2)] hover:shadow-[0_12px_48px_rgba(247,121,125,0.4),0_12px_48px_rgba(196,113,237,0.4),0_12px_48px_rgba(18,194,233,0.4),0_6px_20px_rgba(18,194,233,0.3)] transition-all duration-300 hover:scale-105 active:scale-95">
      <button
        onClick={onClick}
        className="
        w-full
        h-full
        px-8
        py-4
        bg-black
        text-white
        font-medium
        text-base
        rounded-[6px]
        transition-all
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-purple-500
        cursor-pointer
      "
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
