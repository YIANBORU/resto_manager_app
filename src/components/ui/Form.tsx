interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {}
interface PropsLabel extends React.LabelHTMLAttributes<HTMLLabelElement> {}
interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Label({ children, ...props }: PropsLabel) {
  return (
    <label
      htmlFor="email"
      className="block text-sm font-medium leading-6 text-gray-900"
      {...props}
    >
      {children}
    </label>
  );
}

export function Input(props: PropsInput) {
  return (
    <input
      id="email"
      name="email"
      type="email"
      autoComplete="email"
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      {...props}
    />
  );
}

export function ButtonPrimary({ children, ...props }: PropsButton) {
  return (
    <button
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      {...props}
    >
      {children}
    </button>
  );
}
