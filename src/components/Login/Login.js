import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/authActions'

const Login = ({ login, auth }) => {
    const [user, userState] = useState({
      username: '',
      password: '',
    })

    const [visible, visibleState] = useState(false)

    const { username, password } = user

    const onLogout = (e) => {
      login({username: "logout", password: ""})
      userState({username: '', password:''})
    }
    const onChange = (e) => {
        userState({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (username === '' || password === '') {
          console.log('ERROR')
        } else {
          login({ username, password })
        }
    }

    const onToggleVisible = () => visibleState(!visible)

    const useOutsideAlerter = (ref) => {
      useEffect(() => {
        function handleClickOutSide(event) {
          if (
            ref.current &&
            !ref.current.contains(event.target) &&
            event.target.id !== "header-login-button" &&
            !visible
          ) {
            visibleState(false)
            userState({username: '', password: ''})
          }
        }

        document.addEventListener("mouseup", handleClickOutSide)
        return () => {
          document.removeEventListener("mouseup", handleClickOutSide)
        }
      }, [ref])
    }

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef)
    if (auth.isAuthenticated=== true) {
      return (
          <>
              <span className="absolute right-48 top-9 text-sm">Inloggad som {auth.user}</span>

              <button
                  onClick={onLogout}
                  className="absolute right-10 top-6 bg-yellow-400 focus:outline-none rounded p-2 px-9 hover:bg-yellow-300 text-black"
                  id="header-login-button"
              >Logga ut</button>

          </>
      )
  }
    return (
      <>
        <button
          onClick={onToggleVisible}
          className="absolute right-10 top-6 bg-yellow-400 focus:outline-none rounded p-2 px-9 hover:bg-yellow-300 text-black"
          id="header-login-button"
        >Login</button>
        <div
          className={
          visible ?
          "w-96 absolute visible right-10 top-28 z-10" : "h-0 invisible"
          }
          ref={wrapperRef}
        >
          <div className="bg-jet-black-header rounded-lg border-yellow-400 border-2">
            <div className="text-white rounded-lg py-10 px-16">
              <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
                Logga in med dina LNU uppgifter
              </h1>

              <form onSubmit={onSubmit}>
                <div>
                  <label htmlFor="text">LNU-ID</label>
                  <input
                    type="text"
                    className={`w-full p-2 text-black rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-white`}
                    id="username"
                    placeholder="Lnu-ID"
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label htmlFor="password">Lösenord</label>
                  <input
                    type="password"
                    className={`w-full p-2 text-black rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-white`}
                    id="password"
                    placeholder="Ditt lösenord"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                </div>
                <div id="error" className="text-red-500">{auth.errorMessage}</div>
                <div className="flex justify-center items-center mt-6">
                  <button
                    className={`bg-yellow-400 py-2 px-8 text-lg text-black rounded border-green focus:outline-none focus:border-green-dark`}
                    type="submit"
                  >
                    Logga in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { login })(Login)
