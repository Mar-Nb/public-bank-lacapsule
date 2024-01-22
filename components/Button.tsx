type ButtonProps = {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
};

export function Button({ type = "button", children }: ButtonProps) {
  return (
    <button
      type={type}
      className="h-10 rounded-md text-sm transition-all px-2 focus:outline-none text-white bg-red-700 hover:bg-red-600"
    >
      {children}
    </button>
  );
}
