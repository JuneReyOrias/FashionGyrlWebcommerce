'use client'

import React, { useState } from 'react'
import { Search, ShoppingCart, X, Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react'

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState({ level: 'Weak', isValid: false })

  const cartCount = 0

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleModal = () => setIsModalOpen(!isModalOpen)
  const toggleAuthForm = () => setIsLogin(!isLogin)
  const toggleShowPassword = () => setShowPassword(!showPassword)

  function validatePassword(pw) {
    const hasLetter = /[A-Za-z]/.test(pw)
    const hasNumber = /[0-9]/.test(pw)
    const hasSymbol = /[^A-Za-z0-9]/.test(pw)
    const isValid = pw.length >= 8 && hasLetter && hasNumber && hasSymbol
    let level = 'Weak'
    if (isValid) level = 'Strong'
    else if (pw.length >= 6 && hasLetter && (hasNumber || hasSymbol)) level = 'Medium'
    return { level, isValid }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isLogin) {
      if (!/^[A-Za-z]+$/.test(firstName)) return alert("First name must contain only letters.")
      if (!/^[A-Za-z]+$/.test(lastName)) return alert("Last name must contain only letters.")
      if (!passwordStrength.isValid) return alert("Password must be strong: min 8 characters with letter, number, and symbol.")
      if (password !== confirmPassword) return alert("Passwords do not match.")
    }
    alert(`${isLogin ? 'Logged in' : 'Account created successfully!'}`)
  }

  const handleNameInput = (setter) => (e) => {
    const value = e.target.value
    if (/^[A-Za-z]*$/.test(value)) {
      setter(value)
    }
  }

  return (
    <>
      <nav className="bg-white border-b dark:bg-gray-900 sticky top-0 z-50 shadow-md">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
          <a href="/" className="flex items-center space-x-2">
            <img src="/images/FashionGyrlLogo.png" alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">Fashion Gyrl</span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {['Home', 'Products', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link === 'Home' ? '' : link}`}
                onClick={() => setActiveLink(link)}
                className={`transition font-medium ${
                  activeLink === link ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button onClick={toggleSearch} className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-blue-600 text-gray-600 dark:text-white">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={toggleModal} className="relative p-2 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-blue-600 text-gray-600 dark:text-white">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gray-400 text-white text-[10px] rounded-full px-1.5">{cartCount}</span>
            </button>
            <button onClick={toggleMenu} className="md:hidden p-2 text-gray-600 dark:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            {['Home', 'Products', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link === 'Home' ? '' : link}`}
                onClick={() => {
                  setActiveLink(link)
                  setIsMenuOpen(false)
                }}
                className={`block py-2 text-sm ${activeLink === link ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600 dark:text-gray-200'}`}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

   {isModalOpen && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-2xl relative border border-gray-200 dark:border-gray-700">
      <button className="absolute top-3 right-3 text-gray-500 dark:text-white hover:text-red-500" onClick={toggleModal}>
        <X />
      </button>

      {/* Logo above the form */}
      <div className="flex justify-center mb-3">
        <img src="/images/FashionGyrlLogo.png" alt="Fashion Gyrl Logo" className="h-16 w-16 rounded-full shadow-lg" />
      </div>

      <h2 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        {isLogin ? 'Login' : 'Create an Account'}
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="flex gap-2">
            <input
              type="text"
              value={firstName}
              onChange={handleNameInput(setFirstName)}
              placeholder="First Name"
              className="w-1/2 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              value={lastName}
              onChange={handleNameInput(setLastName)}
              placeholder="Last Name"
              className="w-1/2 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        )}
        <div className="relative">
          <Mail className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setPasswordStrength(validatePassword(e.target.value))
            }}
            placeholder="Password"
            className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-2.5 text-gray-500"
            onClick={toggleShowPassword}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {!isLogin && (
          <>
            <p
              className={`text-sm font-medium ${
                passwordStrength.level === 'Strong'
                  ? 'text-green-600'
                  : passwordStrength.level === 'Medium'
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}
            >
              Password Strength: {passwordStrength.level}
            </p>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-500"
                onClick={toggleShowPassword}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded-lg shadow-md"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="text-sm mt-4 text-center text-gray-600 dark:text-gray-300">
        {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
        <button onClick={toggleAuthForm} className="text-blue-600 hover:underline font-medium">
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  </div>
)}

    </>
  )
}

export default Navbar
