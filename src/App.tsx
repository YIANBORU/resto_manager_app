import { MdAdfScanner } from "react-icons/md";
import {ButtonPrimary, Input, Label} from "./components/shared/ui";
import Sidebar from "./components/shared/Sidebar";
import  "./App.css";


export default function Example() {
  return (
    <>
    <Sidebar/>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h3> Lets go for a <MdAdfScanner />? </h3>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Si
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label htmlFor="userapp">Usuario</Label>
              <div className="mt-2">
                <Input
                  placeholder="Usuario o Correo eletrónico"
                  id="userapp"
                  type="text"
                  pattern="/d"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
              <Label htmlFor="userapp">Contraseña</Label>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
              <Input
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
            </div>

            <div>
             <ButtonPrimary 
             type="submit"
             >
              Ingresar
             </ButtonPrimary>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
