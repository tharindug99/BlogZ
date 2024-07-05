"use client";

import useRegister from "@/hooks/users/useRegister";
import Image from "next/image";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email format.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

function Register() {
  const { loading, error, handleSubmit } = useRegister();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Function to handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await handleSubmit(values.email, values.password);
    if (result.success) {
      console.log("Registration successful", result.user);
    } else {
      console.error("Registration failed", result.error);
    }
  };

  // Function for handling Google OAuth sign-in
  function handleGoogleAuth() {
    console.log("Google OAuth clicked");
    // Implement your Google OAuth logic here
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* Right Column (Form) */}
      <div className="max-w-md w-full bg-white p-8 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Form fields */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Password must be at least 8 characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit button */}
            <Button type="submit" className="w-full">
              Submit
            </Button>

            <div className="my-1 text-center">
              <span className="mr-2">Register with</span>
            </div>
            {/* Google auth sign-in */}
            <div className="flex justify-center items-center mt-4">
              <Image
                src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                alt="Google Icon"
                width={20}
                height={20}
                onClick={handleGoogleAuth}
                className="cursor-pointer"
              />
            </div>

            {/* Link to Login page */}
            <div className="text-center mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login here
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Register;
