import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/authActions'

const Login = ({ login, auth: { isAuthenticated }, history }) => {
    const [user, setUser] = useState({ username: '', password: '' })
    const { username, password } = user

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, history])

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (username === '' || password === '') {
          console.log('ERROR')
        } else {
          login({ username, password })
        }
    }


    return (
      <>
        <div className="flex">
          <div className="banner">
            <h1 className="banner-title">Course Review</h1>
          </div>
          <div className="login-form h-screen flex bg-gray-bg1 justify-center">
            <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
              <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
                Log in with your LNU credentials
              </h1>

              <form onSubmit={onSubmit}>
                <div>
                  <label htmlFor="text">LNU-Id</label>
                  <input
                    type="text"
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
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
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id="password"
                    placeholder="Your Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                </div>
                <div className="flex justify-center items-center mt-6">
                  <button
                    className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
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
