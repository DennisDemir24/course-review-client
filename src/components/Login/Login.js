import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/authActions'

const Login = ({ login, auth: { isAuthenticated }, history }) => {
    const [user, userState] = useState({
      username: '',
      password: '',
    })

    const [visible, visibleState] = useState(false)

    const { username, password } = user

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, history])

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

    return (
      <>
        <button
          onClick={onToggleVisible}
          className="absolute right-10 top-6 bg-yellow-400 rounded-lg p-2 px-9 hover:bg-gray-600 hover:text-white font-bold text-black"
        >Login</button>
        <div className={
          visible ?
          "w-96 absolute visible right-10 top-28" : "h-0 invisible"
          }>
          <div className="bg-black rounded-lg border-yellow-400 border-2">
            <div className="text-white rounded-lg py-10 px-16">
              <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
                Log in with your LNU credentials
              </h1>

              <form onSubmit={onSubmit}>
                <div>
                  <label htmlFor="text">LNU-Id</label>
                  <input
                    type="text"
                    className={`w-full p-2 text-black rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-gray-300`}
                    id="username"
                    placeholder="Lnu-Id"
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className={`w-full p-2 text-black rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-gray-300`}
                    id="password"
                    placeholder="Your Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                </div>
                <div className="flex justify-center items-center mt-6">
                  <button
                    className={`bg-yellow-400 py-2 px-8 text-lg text-black rounded border-green focus:outline-none focus:border-green-dark`}
                    type="submit"
                  >
                    Login
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
