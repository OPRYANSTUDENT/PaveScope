'use client'

import { useState } from 'react'
import { Button } from "../components/Login/ui/button"
import { Input } from "../components/Login/ui/input"
import { Label } from "../components/Login/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Login/ui/card"
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-blue-700">Login</CardTitle>
          <CardDescription className="text-center text-blue-600">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-700">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-blue-600 text-center w-full">
            Don't have an account?{' '}
            <Link to="/get-started" className="font-medium text-blue-700 hover:underline">
              Get Started
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}