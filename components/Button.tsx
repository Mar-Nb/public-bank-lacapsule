type ButtonProps = {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
};

export function Button({ type = "button", children }: ButtonProps) {
  return (
    <button
      type={type}
      className="h-10 rounded-md border text-sm focus:outline-none transition-all px-2 !bg-red-700 text-white hover:!bg-red-600"
    >
      {children}
    </button>
  );
}
