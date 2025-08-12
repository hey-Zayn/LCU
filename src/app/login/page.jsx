"use client"
import { useState } from 'react'
import { Lock, Mail, Eye, EyeOff } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { toast } from 'sonner'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect') || '/dashboard'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 1. First make login request
      const loginResponse = await axios.post('/api/login', { 
        email: email.trim(), 
        password: password.trim() 
      }, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true // Ensure cookies are included
      })

      if (!loginResponse.data.success) {
        throw new Error(loginResponse.data.message || 'Login failed')
      }

      toast.success("You have been successfully logged in.", {
        description: "Login Successful",
      })

      // 2. Verify authentication status
      const authCheck = await axios.get('/api/auth/check', {
        withCredentials: true // Important for cookies
      })

      if (!authCheck.data?.isAuthenticated) {
        throw new Error('Authentication verification failed')
      }

      // 3. Small delay to ensure cookie is properly set
      await new Promise(resolve => setTimeout(resolve, 100))
      
      // 4. Redirect to admin page
      router.push(redirectTo)
      router.refresh() // Ensure client-side cache is updated

    } catch (error) {
      console.error('Login error:', error)
      toast.error(error.response?.data?.message || error.message || 'An error occurred', {
        description: "Login Failed",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to access your account
          </CardDescription>
        </CardHeader>
        
        <CardContent className="grid gap-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  placeholder="Password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute inset-y-0 right-0 h-9 w-9 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2"
            >
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline">
              {/* Add your Google icon here */}
              Google
            </Button>
            <Button variant="outline">
              {/* Add your GitHub icon here */}
              GitHub
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground text-center">
            Don't have an account?{' '}
            <Button 
              variant="link" 
              className="p-0 h-auto text-primary"
              onClick={() => router.push('/register')}
            >
              Sign up
            </Button>
          </div>
          <Button 
            variant="link" 
            className="p-0 h-auto text-sm text-muted-foreground"
            onClick={() => router.push('/forgot-password')}
          >
            Forgot password?
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default function LoginPage() {
  return <LoginForm />
}