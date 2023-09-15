import { useState, useEffect } from 'react';
import LoginService from "@services/loginDiscord";



function LoginDiscord() {
	const [authAllow, setAuthAllow] = useState()

	const logIn = async () => {
		const logged = await LoginService.login()
		setAuthAllow(logged)
	  }


  useEffect(() => {

    const t = setTimeout(() => {

		logIn()


    }, 1000)

    return () => {

      clearTimeout(t)

    }

  }, [])


  return (
    // TODO: Establecer un loading acá.
    authAllow == true && <div className="flex flex-col items-center justify-center col-span-1">
          <h1 className="md:text-5xl p-5 text-2xl text-center text-white mb-10">
		  You have successfully logged into RetroBooks using Discord.
          </h1>
          <h2 className="text-white xl:px-96 my-14">
		  Your name is: ...
              You can return to the app.
          </h2>
        </div>

  );
}

export default LoginDiscord;